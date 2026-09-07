// Slot "database" -- a JSON file on disk.
//
// This is a deliberate stand-in, not a real database: it works for local
// development (a single long-running `next dev`/`next start` process can
// read and write the same file), but it will NOT persist reliably on
// Vercel or any serverless host, where each function invocation can run on
// a fresh, read-only-except-/tmp filesystem with no shared state between
// invocations. Replace this module with a real database client (e.g.
// Vercel Postgres, Supabase) before relying on this for a real launch --
// every function here is intentionally small and isolated so swapping the
// implementation later means changing this one file, not its callers.

import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DATA_DIR, 'slots.json');
const SEED_PATH = path.join(DATA_DIR, 'slots.seed.json');

function ensureDb() {
  if (!fs.existsSync(DB_PATH)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.copyFileSync(SEED_PATH, DB_PATH);
  }
}

export function readSlots() {
  ensureDb();
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(raw);
}

function writeSlots(slots) {
  ensureDb();
  fs.writeFileSync(DB_PATH, JSON.stringify(slots, null, 2), 'utf-8');
}

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

// Public status list: slot number + status only, never name/CNIC.
export function getPublicSlotStatuses() {
  return readSlots().map((s) => ({ slotNumber: s.slotNumber, status: s.status }));
}

// Public lookup by exact CNIC match -- the only way a slot's occupant name
// is revealed publicly, since only the rightful owner should know their
// own full CNIC. Returns null if no match.
export function findByCnic(cnic) {
  const target = normalizeCnic(cnic);
  if (target.length !== 13) return null;
  const slot = readSlots().find((s) => s.cnic && normalizeCnic(s.cnic) === target);
  if (!slot) return null;
  return { slotNumber: slot.slotNumber, status: slot.status, name: slot.name, cnic: formatCnic(slot.cnic) };
}

// Public status-only lookup by slot number -- deliberately never returns
// the occupant's name, so sequentially guessing slot numbers 1..230 can't
// be used to harvest every investor's identity.
export function findStatusBySlotNumber(slotNumber) {
  const n = Number(slotNumber);
  const slot = readSlots().find((s) => s.slotNumber === n);
  if (!slot) return null;
  return { slotNumber: slot.slotNumber, status: slot.status };
}

// Admin-only: full record list, and search across slot number/name/CNIC.
export function getAllSlotsAdmin() {
  return readSlots();
}

export function searchSlotsAdmin(query) {
  const all = readSlots();
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
export function allotSlot(slotNumber, { name, cnic }) {
  const n = Number(slotNumber);
  const digits = normalizeCnic(cnic);
  if (digits.length !== 13) {
    throw new Error('CNIC must be 13 digits.');
  }
  const slots = readSlots();
  const idx = slots.findIndex((s) => s.slotNumber === n);
  if (idx === -1) throw new Error('Slot not found.');
  slots[idx] = {
    ...slots[idx],
    status: 'allocated',
    name: String(name || '').trim(),
    cnic: formatCnic(digits),
    allottedAt: new Date().toISOString(),
  };
  writeSlots(slots);
  return slots[idx];
}

// Admin-only: release a slot back to "available" (clears occupant).
export function releaseSlot(slotNumber) {
  const n = Number(slotNumber);
  const slots = readSlots();
  const idx = slots.findIndex((s) => s.slotNumber === n);
  if (idx === -1) throw new Error('Slot not found.');
  slots[idx] = { ...slots[idx], status: 'available', name: null, cnic: null, allottedAt: null };
  writeSlots(slots);
  return slots[idx];
}

// Admin-only: mark a slot back to "company" (the pre-launch default).
export function markCompanySlot(slotNumber) {
  const n = Number(slotNumber);
  const slots = readSlots();
  const idx = slots.findIndex((s) => s.slotNumber === n);
  if (idx === -1) throw new Error('Slot not found.');
  slots[idx] = { ...slots[idx], status: 'company', name: null, cnic: null, allottedAt: null };
  writeSlots(slots);
  return slots[idx];
}
