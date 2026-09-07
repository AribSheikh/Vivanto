import { cookies } from 'next/headers';
import { ADMIN_COOKIE, isValidAdminToken } from '@/lib/adminAuth';
import { allotSlot, getAllSlotsAdmin, markCompanySlot, releaseSlot, searchSlotsAdmin } from '@/lib/slotsStore';

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return isValidAdminToken(token);
}

export async function GET(request) {
  if (!(await requireAdmin())) {
    return Response.json({ error: 'Unauthorized.' }, { status: 401 });
  }
  const q = request.nextUrl.searchParams.get('q');
  const slots = q ? searchSlotsAdmin(q) : getAllSlotsAdmin();
  return Response.json({ slots });
}

export async function PATCH(request) {
  if (!(await requireAdmin())) {
    return Response.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { slotNumber, action, name, cnic } = body || {};
  if (!slotNumber) {
    return Response.json({ error: 'slotNumber is required.' }, { status: 400 });
  }

  try {
    let slot;
    if (action === 'allot') {
      if (!name || !cnic) {
        return Response.json({ error: 'Name and CNIC are required to allot a slot.' }, { status: 400 });
      }
      slot = allotSlot(slotNumber, { name, cnic });
    } else if (action === 'release') {
      slot = releaseSlot(slotNumber);
    } else if (action === 'company') {
      slot = markCompanySlot(slotNumber);
    } else {
      return Response.json({ error: 'Unknown action.' }, { status: 400 });
    }
    return Response.json({ slot });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 400 });
  }
}
