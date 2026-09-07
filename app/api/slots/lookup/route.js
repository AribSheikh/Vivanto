import { findByCnic, findStatusBySlotNumber, normalizeCnic } from '@/lib/slotsStore';

// Public lookup, deliberately narrow:
//  - a full 13-digit CNIC returns that one slot's full record (name
//    included) -- only the rightful owner should know their own CNIC.
//  - a slot number (1-230) returns status only, never a name, so nobody
//    can harvest every investor's identity by iterating slot numbers.
// Free-text name search is intentionally not offered here at all.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const query = String(body?.query || '').trim();
  if (!query) {
    return Response.json({ error: 'Enter a CNIC or slot number.' }, { status: 400 });
  }

  const digits = normalizeCnic(query);
  if (digits.length === 13) {
    const result = findByCnic(digits);
    if (!result) {
      return Response.json({ error: 'No slot is registered to that CNIC.' }, { status: 404 });
    }
    return Response.json({ mode: 'cnic', result });
  }

  if (/^\d{1,3}$/.test(query)) {
    const n = Number(query);
    if (n < 1 || n > 230) {
      return Response.json({ error: 'Slot number must be between 1 and 230.' }, { status: 400 });
    }
    const result = findStatusBySlotNumber(n);
    if (!result) {
      return Response.json({ error: 'Slot not found.' }, { status: 404 });
    }
    return Response.json({ mode: 'slot', result });
  }

  return Response.json(
    { error: 'Enter a full 13-digit CNIC, or a slot number from 1 to 230.' },
    { status: 400 }
  );
}
