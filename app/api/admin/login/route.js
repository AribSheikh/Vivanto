import { cookies } from 'next/headers';
import { ADMIN_COOKIE, checkAdminPassword, computeAdminToken } from '@/lib/adminAuth';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  let ok;
  try {
    ok = checkAdminPassword(body?.password);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }

  if (!ok) {
    return Response.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, computeAdminToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return Response.json({ ok: true });
}
