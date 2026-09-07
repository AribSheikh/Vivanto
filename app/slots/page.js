import { getPublicSlotStatuses } from '@/lib/slotsStore';
import SlotSearch from './SlotSearch';

export const metadata = {
  title: 'Slot Status — Vivanto Multan | A Daha Group Project',
  description:
    "Verifica lo stato dei 230 slot di investimento Vivanto. Check the status of Vivanto's 230 investment slots.",
};

const STATUS_LABEL = {
  company: { it: 'Azienda', en: 'Company' },
  allocated: { it: 'Assegnato', en: 'Allocated' },
  available: { it: 'Disponibile', en: 'Available' },
};

export const dynamic = 'force-dynamic';

export default function SlotsPage() {
  const slots = getPublicSlotStatuses();

  return (
    <>
      <section className="page-hero" style={{ minHeight: '46vh' }}>
        <div className="bg">
          <img src="/img/photos/aerial-compound.jpg" alt="Aerial view of the Vivanto villa compound, Multan" />
        </div>
        <div className="container content">
          <h1 data-reveal="mask">
            <span className="lang-it">Stato degli Slot</span>
            <span className="lang-en">Slot Status</span>
          </h1>
          <p className="sub" data-reveal="up" style={{ '--rd': 1 }}>
            <span className="lang-it">
              230 slot totali, con trasparenza completa sulla loro allocazione.
            </span>
            <span className="lang-en">
              230 total slots, with complete transparency on their allocation.
            </span>
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="pad-xl">
        <div className="container center" style={{ maxWidth: '640px' }} data-reveal="up">
          <span className="eyebrow center">
            <span className="lang-it">Verifica il Tuo Slot</span>
            <span className="lang-en">Check Your Slot</span>
          </span>
          <h2 className="display-m" style={{ margin: '18px 0 20px' }}>
            <span className="lang-it">Cerca per CNIC o Numero di Slot</span>
            <span className="lang-en">Search by CNIC or Slot Number</span>
          </h2>
          <p className="lede" style={{ margin: '0 auto 34px' }}>
            <span className="lang-it">
              Per proteggere la privacy di tutti gli investitori, non pubblichiamo un elenco
              ricercabile di nomi. Inserisci il tuo CNIC completo per trovare il tuo slot, oppure
              un numero di slot per verificarne lo stato generale.
            </span>
            <span className="lang-en">
              To protect every investor&apos;s privacy, we don&apos;t publish a searchable
              directory of names. Enter your full CNIC to find your own slot, or a slot number to
              check its general status.
            </span>
          </p>
        </div>
        <div className="container" style={{ maxWidth: '560px' }}>
          <SlotSearch />
        </div>
      </section>

      {/* FULL GRID */}
      <section className="pad-xl" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center" style={{ maxWidth: '640px', marginBottom: '40px' }} data-reveal="up">
            <span className="eyebrow center">
              <span className="lang-it">Trasparenza Totale</span>
              <span className="lang-en">Complete Transparency</span>
            </span>
            <h2 className="display-m" style={{ marginTop: '18px' }}>
              <span className="lang-it">Tutti i 230 Slot</span>
              <span className="lang-en">All 230 Slots</span>
            </h2>
          </div>

          <div className="slot-legend">
            <span>
              <i className="dot dot-company"></i>
              <span className="lang-it">Azienda</span>
              <span className="lang-en">Company</span>
            </span>
            <span>
              <i className="dot dot-allocated"></i>
              <span className="lang-it">Assegnato</span>
              <span className="lang-en">Allocated</span>
            </span>
            <span>
              <i className="dot dot-available"></i>
              <span className="lang-it">Disponibile</span>
              <span className="lang-en">Available</span>
            </span>
          </div>

          <div className="slot-grid-full">
            {slots.map((s) => (
              <div key={s.slotNumber} className={`slot-tile slot-${s.status}`} title={STATUS_LABEL[s.status]?.en}>
                {s.slotNumber}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
