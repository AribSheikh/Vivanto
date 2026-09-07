'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Login failed.');
        setLoading(false);
        return;
      }
      // Full reload so the server component re-reads the now-set cookie.
      window.location.href = '/admin';
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="admin-card">
      <h1>Vivanto Admin</h1>
      <p>Enter the admin password to manage slot allocations.</p>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            required
          />
        </div>
        {error && <p style={{ color: '#a5453a', fontSize: '14px', marginBottom: '18px' }}>{error}</p>}
        <button type="submit" className="btn gold" disabled={loading}>
          <span>{loading ? 'Signing in…' : 'Sign In'}</span>
        </button>
      </form>
    </div>
  );
}
