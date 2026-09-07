'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

function StatusBadge({ status }) {
  const label = { company: 'Company', allocated: 'Allocated', available: 'Available' }[status] || status;
  return <span className={`admin-badge ${status}`}>{label}</span>;
}

function AllotForm({ slot, onSave, busy }) {
  const [name, setName] = useState(slot.name || '');
  const [cnic, setCnic] = useState(slot.cnic || '');

  return (
    <form
      className="admin-row-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(slot.slotNumber, name, cnic);
      }}
    >
      <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="42201-1234567-3" value={cnic} onChange={(e) => setCnic(e.target.value)} required />
      <button type="submit" className="admin-btn" disabled={busy}>
        {slot.status === 'allocated' ? 'Update' : 'Allot'}
      </button>
    </form>
  );
}

export default function AdminDashboard({ initialSlots }) {
  const router = useRouter();
  const [slots, setSlots] = useState(initialSlots);
  const [query, setQuery] = useState('');
  const [busySlot, setBusySlot] = useState(null);
  const [error, setError] = useState(null);

  const stats = useMemo(() => {
    const s = { company: 0, allocated: 0, available: 0 };
    slots.forEach((slot) => {
      s[slot.status] = (s[slot.status] || 0) + 1;
    });
    return s;
  }, [slots]);

  const filtered = useMemo(() => {
    if (!query.trim()) return slots;
    const q = query.trim().toLowerCase();
    const qDigits = q.replace(/\D/g, '');
    return slots.filter((s) => {
      if (String(s.slotNumber) === q) return true;
      if (s.name && s.name.toLowerCase().includes(q)) return true;
      if (qDigits && s.cnic && s.cnic.replace(/\D/g, '').includes(qDigits)) return true;
      return false;
    });
  }, [slots, query]);

  async function mutate(slotNumber, action, extra) {
    setBusySlot(slotNumber);
    setError(null);
    try {
      const res = await fetch('/api/admin/slots', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slotNumber, action, ...extra }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        return;
      }
      setSlots((prev) => prev.map((s) => (s.slotNumber === slotNumber ? data.slot : s)));
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setBusySlot(null);
    }
  }

  async function onLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
    router.refresh();
  }

  return (
    <div className="admin-wrap">
      <div className="admin-topbar">
        <h1>Slot Allocation</h1>
        <button className="admin-btn" onClick={onLogout}>
          Log Out
        </button>
      </div>

      <div className="admin-stats">
        <div className="admin-stat">
          <div className="n">{stats.company || 0}</div>
          <div className="l">Company</div>
        </div>
        <div className="admin-stat">
          <div className="n">{stats.allocated || 0}</div>
          <div className="l">Allocated</div>
        </div>
        <div className="admin-stat">
          <div className="n">{stats.available || 0}</div>
          <div className="l">Available</div>
        </div>
        <div className="admin-stat">
          <div className="n">{slots.length}</div>
          <div className="l">Total</div>
        </div>
      </div>

      <div className="field" style={{ maxWidth: '360px' }}>
        <label>Search by slot #, name, or CNIC</label>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. 87, Ali Khan, 42201..." />
      </div>

      {error && <p style={{ color: '#a5453a', fontSize: '14px', marginBottom: '16px' }}>{error}</p>}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Slot</th>
              <th>Status</th>
              <th>Name</th>
              <th>CNIC</th>
              <th style={{ minWidth: '280px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((slot) => (
              <tr key={slot.slotNumber}>
                <td>{slot.slotNumber}</td>
                <td>
                  <StatusBadge status={slot.status} />
                </td>
                <td>{slot.name || '—'}</td>
                <td>{slot.cnic || '—'}</td>
                <td>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <AllotForm
                      slot={slot}
                      busy={busySlot === slot.slotNumber}
                      onSave={(slotNumber, name, cnic) => mutate(slotNumber, 'allot', { name, cnic })}
                    />
                    {slot.status !== 'available' && (
                      <button
                        className="admin-btn"
                        disabled={busySlot === slot.slotNumber}
                        onClick={() => mutate(slot.slotNumber, 'release')}
                      >
                        Release
                      </button>
                    )}
                    {slot.status !== 'company' && (
                      <button
                        className="admin-btn danger"
                        disabled={busySlot === slot.slotNumber}
                        onClick={() => mutate(slot.slotNumber, 'company')}
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '12.5px', color: 'var(--ink-faint)', marginTop: '14px' }}>
        Showing {filtered.length} of {slots.length} slots.
      </p>
    </div>
  );
}
