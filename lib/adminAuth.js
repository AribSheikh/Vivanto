// Simple shared-password admin gate.
//
// Deliberately minimal: one password (ADMIN_PASSWORD, set as an env var,
// never committed) protects the /admin panel. On successful login, a
// cookie is set to a deterministic token derived from that password plus
// a secret -- so verifying the cookie later needs no server-side session
// store, just recomputing the same hash. This is fine for a single trusted
// admin; if more than one person needs their own login, replace this with
// a real auth provider (e.g. NextAuth) instead.

import crypto from 'crypto';

export const ADMIN_COOKIE = 'vivanto_admin';

function getSecret() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error('ADMIN_PASSWORD is not set. Add it to .env.local (see .env.example).');
  }
  return password;
}

export function computeAdminToken() {
  return crypto.createHash('sha256').update(`vivanto-admin:${getSecret()}`).digest('hex');
}

export function checkAdminPassword(candidate) {
  const password = getSecret();
  // Constant-time-ish comparison to avoid trivial timing leaks.
  const a = Buffer.from(String(candidate || ''));
  const b = Buffer.from(password);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function isValidAdminToken(token) {
  if (!token) return false;
  try {
    const expected = computeAdminToken();
    const a = Buffer.from(String(token));
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
