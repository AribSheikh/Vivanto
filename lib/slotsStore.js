// Slot "database".
//
// Two backends, chosen automatically:
//  - Neon Postgres, when DATABASE_URL (or POSTGRES_URL) is set -- this is
//    what actually persists on Vercel. Vercel's serverless functions run
//    on a read-only filesystem, so the JSON-file fallback below CANNOT
//    work there: it will fail to even create its data file on first
//    request, let alone persist an admin's allotment. This is not
//    theoretical -- it's exactly what broke in production before this
//    file was rewritten.
//  - A JSON file on disk, when no connection string is set -- kept only
//    so local development works out of the box with zero setup. This
//    path is never reachable on Vercel once DATABASE_URL is configured.

import fs from 'fs';
import path from 'path';
import { neon } from '@neondatabase/serverless';

const CONNECTION_STRING = process.env.DATABASE_URL || process.env.POSTGRES_URL;
const sql = CONNECTION_STRING ? neon(CONNECTION_STRING) : null;

let seededPromise = null;
function ensureSeededDb() {
  if (!seededPromise) {
    seededPromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS slots (
          slot_number INTEGER PRIMARY KEY,
          status TEXT NOT NULL DEFAULT 'company',
          name TEXT,
          cnic TEXT,
          allotted_at TIMESTAMPTZ
        )
      `;
      // One-time seed: 230 slots, all "company". Safe to run on every
      // cold start -- ON CONFLICT DO NOTHING makes it a no-op after the
      // first successful run.
      await sql`
        INSERT INTO slots (slot_number, status)
        SELECT generate_series(1, 230), 'company'
        ON CONFLICT (slot_number) DO NOTHING
      `;
    })();
  }
  return seededPromise;
}

function rowToSlot(row) {
  return {
    slotNumber: row.slot_number,
    status: row.status,
    name: row.name,
    cnic: row.cnic,
    allottedAt: row.allotted_at,
  };
}

// ---------------------------------------------------------------------
// JSON-file fallback (local dev only -- see module comment above)
// ---------------------------------------------------------------------
const DATA_DIR = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DATA_DIR, 'slots.json');
const SEED_PATH = path.join(DATA_DIR, 'slots.seed.json');

function fileEnsureDb() {
  if (!fs.existsSync(DB_PATH)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.copyFileSync(SEED_PATH, DB_PATH);
  }
}

function fileReadSlots() {
  fileEnsureDb();
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

function fileWriteSlots(slots) {
  fileEnsureDb();
  fs.writeFileSync(DB_PATH, JSON.stringify(slots, null, 2), 'utf-8');
}

// ---------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------

// Normalizes a CNIC to digits-only for comparison, e.g.
// "42201-1234567-3" and "4220112345673" both become "4220112345673".
export function normalizeCnic(value) {
  return String(value || '').replace(/\D/g, '');
}

export function formatCnic(digits) {
  const d = normalizeCnic(digits);
  if (d.length !== 13) return digits;
  return `${d.slice(0, 5)}-${d.slice(5, 12)}-${d.slice(12)}`;
}

// ---------------------------------------------------------------------
// Public API -- every function below picks its backend automatically.
// All are async now (Postgres is inherently async); callers must await.
// ---------------------------------------------------------------------

export async function readSlots() {
  if (sql) {
    await ensureSeededDb();
    const rows = await sql`SELECT * FROM slots ORDER BY slot_number`;
    return rows.map(rowToSlot);
  }
  return fileReadSlots();
}

// Public status list: slot number + status only, never name/CNIC.
export async function getPublicSlotStatuses() {
  if (sql) {
    await ensureSeededDb();
    const rows = await sql`SELECT slot_number, status FROM slots ORDER BY slot_number`;
    return rows.map((r) => ({ slotNumber: r.slot_number, status: r.status }));
  }
  return fileReadSlots().map((s) => ({ slotNumber: s.slotNumber, status: s.status }));
}

// Public lookup by exact CNIC match -- the only way a slot's occupant
// name is revealed publicly, since only the rightful owner should know
// their own full CNIC. Returns null if no match.
export async function findByCnic(cnic) {
  const target = normalizeCnic(cnic);
  if (target.length !== 13) return null;
  const formatted = formatCnic(target);

  if (sql) {
    await ensureSeededDb();
    const rows = await sql`SELECT slot_number, status, name, cnic FROM slots WHERE cnic = ${formatted} LIMIT 1`;
    if (!rows.length) return null;
    const r = rows[0];
    return { slotNumber: r.slot_number, status: r.status, name: r.name, cnic: r.cnic };
  }

  const slot = fileReadSlots().find((s) => s.cnic && normalizeCnic(s.cnic) === target);
  if (!slot) return null;
  return { slotNumber: slot.slotNumber, status: slot.status, name: slot.name, cnic: formatCnic(slot.cnic) };
}

// Public status-only lookup by slot number -- deliberately never returns
// the occupant's name, so sequentially guessing slot numbers 1..230 can't
// be used to harvest every investor's identity.
export async function findStatusBySlotNumber(slotNumber) {
  const n = Number(slotNumber);

  if (sql) {
    await ensureSeededDb();
    const rows = await sql`SELECT slot_number, status FROM slots WHERE slot_number = ${n} LIMIT 1`;
    if (!rows.length) return null;
    return { slotNumber: rows[0].slot_number, status: rows[0].status };
  }

  const slot = fileReadSlots().find((s) => s.slotNumber === n);
  if (!slot) return null;
  return { slotNumber: slot.slotNumber, status: slot.status };
}

// Admin-only: full record list, and search across slot number/name/CNIC.
export async function getAllSlotsAdmin() {
  return readSlots();
}

export async function searchSlotsAdmin(query) {
  const all = await readSlots();
  if (!query) return all;
  const q = String(query).trim().toLowerCase();
  const qDigits = normalizeCnic(query);
  return all.filter((s) => {
    if (String(s.slotNumber) === q) return true;
    if (s.name && s.name.toLowerCase().includes(q)) return true;
    if (qDigits && s.cnic && normalizeCnic(s.cnic).includes(qDigits)) return true;
    return false;
  });
}

// Admin-only: allot a slot to a person, or edit an existing allotment.
export async function allotSlot(slotNumber, { name, cnic }) {
  const n = Number(slotNumber);
  const digits = normalizeCnic(cnic);
  if (digits.length !== 13) {
    throw new Error('CNIC must be 13 digits.');
  }
  const formatted = formatCnic(digits);
  const trimmedName = String(name || '').trim();

  if (sql) {
    await ensureSeededDb();
    const rows = await sql`
      UPDATE slots SET status = 'allocated', name = ${trimmedName}, cnic = ${formatted}, allotted_at = now()
      WHERE slot_number = ${n}
      RETURNING *
    `;
    if (!rows.length) throw new Error('Slot not found.');
    return rowToSlot(rows[0]);
  }

  const slots = fileReadSlots();
  const idx = slots.findIndex((s) => s.slotNumber === n);
  if (idx === -1) throw new Error('Slot not found.');
  slots[idx] = { ...slots[idx], status: 'allocated', name: trimmedName, cnic: formatted, allottedAt: new Date().toISOString() };
  fileWriteSlots(slots);
  return slots[idx];
}

// Admin-only: release a slot back to "available" (clears occupant).
export async function releaseSlot(slotNumber) {
  const n = Number(slotNumber);

  if (sql) {
    await ensureSeededDb();
    const rows = await sql`
      UPDATE slots SET status = 'available', name = NULL, cnic = NULL, allotted_at = NULL
      WHERE slot_number = ${n}
      RETURNING *
    `;
    if (!rows.length) throw new Error('Slot not found.');
    return rowToSlot(rows[0]);
  }

  const slots = fileReadSlots();
  const idx = slots.findIndex((s) => s.slotNumber === n);
  if (idx === -1) throw new Error('Slot not found.');
  slots[idx] = { ...slots[idx], status: 'available', name: null, cnic: null, allottedAt: null };
  fileWriteSlots(slots);
  return slots[idx];
}

// Admin-only: mark a slot back to "company" (the pre-launch default).
export async function markCompanySlot(slotNumber) {
  const n = Number(slotNumber);

  if (sql) {
    await ensureSeededDb();
    const rows = await sql`
      UPDATE slots SET status = 'company', name = NULL, cnic = NULL, allotted_at = NULL
      WHERE slot_number = ${n}
      RETURNING *
    `;
    if (!rows.length) throw new Error('Slot not found.');
    return rowToSlot(rows[0]);
  }

  const slots = fileReadSlots();
  const idx = slots.findIndex((s) => s.slotNumber === n);
  if (idx === -1) throw new Error('Slot not found.');
  slots[idx] = { ...slots[idx], status: 'company', name: null, cnic: null, allottedAt: null };
  fileWriteSlots(slots);
  return slots[idx];
}
