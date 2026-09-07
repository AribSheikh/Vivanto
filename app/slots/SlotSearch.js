'use client';

import { useState } from 'react';

const STATUS_LABEL = {
  company: { it: 'Azienda', en: 'Company' },
  allocated: { it: 'Assegnato', en: 'Allocated' },
  available: { it: 'Disponibile', en: 'Available' },
};

export default function SlotSearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('/api/slots/lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
      } else {
        setResult(data);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div data-reveal="up">
      <form onSubmit={onSubmit} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <div className="field" style={{ flex: 1, minWidth: '220px', marginBottom: 0 }}>
          <label>
            <span className="lang-it">CNIC o Numero Slot</span>
            <span className="lang-en">CNIC or Slot Number</span>
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="42201-1234567-3 / 87"
            required
          />
        </div>
        <button type="submit" className="btn gold" style={{ alignSelf: 'flex-end', height: '46px' }} disabled={loading}>
          <span>
            <span className="lang-it">{loading ? 'Ricerca…' : 'Cerca'}</span>
            <span className="lang-en">{loading ? 'Searching…' : 'Search'}</span>
          </span>
        </button>
      </form>

      {error && (
        <p style={{ color: '#a5453a', marginTop: '18px', fontSize: '14.5px' }}>{error}</p>
      )}

      {result?.mode === 'cnic' && (
        <div className="info-card" style={{ marginTop: '24px' }}>
          <h4>
            <span className="lang-it">Slot Trovato</span>
            <span className="lang-en">Slot Found</span>
          </h4>
          <p style={{ margin: 0 }}>
            <span className="lang-it">Slot N. </span>
            <span className="lang-en">Slot No. </span>
            <b>{result.result.slotNumber}</b>
            {' — '}
            {result.result.name}
            {' — '}
            {STATUS_LABEL[result.result.status]?.en}
            <br />
            <span style={{ color: 'var(--ink-faint)', fontSize: '13px' }}>{result.result.cnic}</span>
          </p>
        </div>
      )}

      {result?.mode === 'slot' && (
        <div className="info-card" style={{ marginTop: '24px' }}>
          <h4>
            <span className="lang-it">Stato dello Slot</span>
            <span className="lang-en">Slot Status</span>
          </h4>
          <p style={{ margin: 0 }}>
            <span className="lang-it">Slot N. </span>
            <span className="lang-en">Slot No. </span>
            <b>{result.result.slotNumber}</b>
            {' — '}
            <span className="lang-it">{STATUS_LABEL[result.result.status]?.it}</span>
            <span className="lang-en">{STATUS_LABEL[result.result.status]?.en}</span>
          </p>
        </div>
      )}
    </div>
  );
}
