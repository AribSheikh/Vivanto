import { cookies } from 'next/headers';
import { ADMIN_COOKIE, isValidAdminToken } from '@/lib/adminAuth';
import { getAllSlotsAdmin } from '@/lib/slotsStore';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

export const metadata = { title: 'Admin — Vivanto Slots' };

// This page reads a runtime cookie and a runtime data file -- it must
// never be cached or statically prerendered.
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  const authed = isValidAdminToken(token);

  if (!authed) {
    return (
      <div className="admin-shell">
        <AdminLogin />
      </div>
    );
  }

  const slots = getAllSlotsAdmin();
  return (
    <div className="admin-shell">
      <AdminDashboard initialSlots={slots} />
    </div>
  );
}
