export const metadata = {
  title: 'Invest — Vivanto Multan | A Daha Group Project',
  description:
    "Un'opportunità di investimento nel flagship Vivanto a Multan, con reddito da locazione mensile. An investment opportunity in the Vivanto flagship in Multan, with monthly rental income.",
};

export default function InvestPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: '46vh' }}>
        <div className="bg">
          <img src="/img/photos/aerial-compound.jpg" alt="Aerial view of the Vivanto villa compound, Multan" />
        </div>
        <div className="container content">
          <h1 data-reveal="mask">
            <span className="lang-it">Investi in Vivanto</span>
            <span className="lang-en">Invest in Vivanto</span>
          </h1>
          <p className="sub" data-reveal="up" style={{ '--rd': 1 }}>
            <span className="lang-it">
              Un&apos;opportunità di investimento nel flagship di Multan, un progetto di Daha Group.
            </span>
            <span className="lang-en">
              An investment opportunity in the Multan flagship, a Daha Group project.
            </span>
          </p>
        </div>
      </section>

      {/* WHAT WE ARE OFFERING */}
      <section className="pad-xl">
        <div className="container">
          <div className="center" style={{ maxWidth: '640px', marginBottom: '50px' }} data-reveal="up">
            <span className="eyebrow center">
              <span className="lang-it">Cosa Offriamo</span>
              <span className="lang-en">What We Are Offering</span>
            </span>
            <h2 className="display-l" style={{ marginTop: '18px' }}>
              <span className="lang-it">2% di Reddito da Locazione Mensile</span>
              <span className="lang-en">2% Monthly Rental Income</span>
            </h2>
          </div>

          <div className="stats-row cols-3" data-reveal="up">
            <div className="stat">
              <div className="n">RS 1M</div>
              <div className="l">
                <span className="lang-it">Prezzo per Slot</span>
                <span className="lang-en">Slot Price</span>
              </div>
            </div>
            <div className="stat">
              <div className="n">230</div>
              <div className="l">
                <span className="lang-it">Slot Totali</span>
                <span className="lang-en">Total No. of Slots</span>
              </div>
            </div>
            <div className="stat">
              <div className="n">2%</div>
              <div className="l">
                <span className="lang-it">Rendita Mensile</span>
                <span className="lang-en">Monthly Rental Income</span>
              </div>
            </div>
          </div>

          <div className="center" style={{ margin: '56px 0 30px' }} data-reveal="up">
            <span className="eyebrow center">
              <span className="lang-it">Allocazione degli Slot</span>
              <span className="lang-en">Slot Allocation</span>
            </span>
          </div>
          <div className="grid-3" style={{ background: 'var(--line)' }} data-reveal-group>
            {[
              ['Bronze', 'Bronze', '1', 'Slot'],
              ['Silver', 'Silver', '3', 'Slots'],
              ['Golden', 'Golden', '5', 'Slots'],
              ['Platinum', 'Platinum', '8', 'Slots'],
              ['Diamond', 'Diamond', '10', 'Slots'],
              ['Elite', 'Elite', '15', 'Slots'],
            ].map(([it, en, count, unit], i) => (
              <div
                key={en}
                data-reveal="up"
                style={{ '--rd': i, background: 'var(--bg)', padding: '32px', textAlign: 'center' }}
              >
                <div style={{ fontFamily: 'var(--serif)', fontSize: '19px', marginBottom: '10px' }}>
                  {it}
                </div>
                <div className="price-tag">
                  {count} <small>{unit}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT OPTIONS */}
      <section className="pad-xl panel">
        <div className="frame-line"></div>
        <div className="monogram">V</div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="center" style={{ maxWidth: '640px', marginBottom: '56px' }} data-reveal="up">
            <span className="eyebrow center" style={{ color: 'var(--gold-pale)' }}>
              <span className="lang-it">Opzioni</span>
              <span className="lang-en">Investment Option</span>
            </span>
            <h2 className="display-l" style={{ color: 'var(--white)', marginTop: '18px' }}>
              <span className="lang-it">Scegli il Tuo Percorso</span>
              <span className="lang-en">Choose Your Path</span>
            </h2>
          </div>
          <div className="split" style={{ alignItems: 'start' }}>
            <div data-reveal="left">
              <h3 style={{ color: 'var(--white)', fontSize: '26px', marginBottom: '20px' }}>
                <span className="lang-it">Opzione 1</span>
                <span className="lang-en">Option 1</span>
              </h3>
              <ul className="dash-list">
                <li style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.14)' }}>
                  <span className="lang-it">- Investi <b style={{ color: 'var(--gold-pale)' }}>1 Milione</b> in un&apos;unica soluzione</span>
                  <span className="lang-en">- Invest <b style={{ color: 'var(--gold-pale)' }}>1 Million</b> on the spot</span>
                </li>
                <li style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.14)' }}>
                  <span className="lang-it">- Ottieni <b style={{ color: 'var(--gold-pale)' }}>1%</b> di rendita fino alla consegna</span>
                  <span className="lang-en">- Get <b style={{ color: 'var(--gold-pale)' }}>1%</b> rent till possession</span>
                </li>
                <li style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.14)' }}>
                  <span className="lang-it">- Ottieni <b style={{ color: 'var(--gold-pale)' }}>2%</b> di rendita dopo la consegna</span>
                  <span className="lang-en">- Get <b style={{ color: 'var(--gold-pale)' }}>2%</b> rent after possession</span>
                </li>
              </ul>
            </div>
            <div data-reveal="right">
              <h3 style={{ color: 'var(--white)', fontSize: '26px', marginBottom: '20px' }}>
                <span className="lang-it">Opzione 2</span>
                <span className="lang-en">Option 2</span>
              </h3>
              <ul className="dash-list">
                <li style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.14)' }}>
                  <span className="lang-it">- Investi <b style={{ color: 'var(--gold-pale)' }}>200.000</b> inizialmente</span>
                  <span className="lang-en">- Invest <b style={{ color: 'var(--gold-pale)' }}>200,000</b> initially</span>
                </li>
                <li style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.14)' }}>
                  <span className="lang-it">- Investi <b style={{ color: 'var(--gold-pale)' }}>200.000</b> alla DPC</span>
                  <span className="lang-en">- Invest <b style={{ color: 'var(--gold-pale)' }}>200,000</b> on DPC</span>
                </li>
                <li style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.14)' }}>
                  <span className="lang-it">- Investi <b style={{ color: 'var(--gold-pale)' }}>200.000</b> alla Struttura Rossa</span>
                  <span className="lang-en">- Invest <b style={{ color: 'var(--gold-pale)' }}>200,000</b> on Red Structure</span>
                </li>
                <li style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.14)' }}>
                  <span className="lang-it">- Investi <b style={{ color: 'var(--gold-pale)' }}>200.000</b> alla Struttura Grigia</span>
                  <span className="lang-en">- Invest <b style={{ color: 'var(--gold-pale)' }}>200,000</b> on Grey Structure</span>
                </li>
                <li style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.14)' }}>
                  <span className="lang-it">- Investi <b style={{ color: 'var(--gold-pale)' }}>200.000</b> alla Finitura</span>
                  <span className="lang-en">- Invest <b style={{ color: 'var(--gold-pale)' }}>200,000</b> on Finishing</span>
                </li>
                <li style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.14)' }}>
                  <span className="lang-it">- Ottieni <b style={{ color: 'var(--gold-pale)' }}>2%</b> di rendita dopo la consegna</span>
                  <span className="lang-en">- Get <b style={{ color: 'var(--gold-pale)' }}>2%</b> rent after possession</span>
                </li>
              </ul>
            </div>
          </div>
          <p
            className="center"
            style={{ color: 'rgba(255,255,255,.5)', fontSize: '13.5px', marginTop: '40px', fontFamily: 'var(--sans)', letterSpacing: '.03em' }}
            data-reveal="up"
          >
            <span className="lang-it">
              Nota: nell&apos;Opzione 2 ogni fase richiederà 2 mesi, per un tempo totale di completamento di 8 mesi.
            </span>
            <span className="lang-en">
              Note: in Option 2 each step will take 2 months, for a total completion time of 8 months.
            </span>
          </p>
        </div>
      </section>

      {/* HOW WE WILL SECURE YOU */}
      <section className="pad-xl">
        <div className="container split">
          <div data-reveal="left">
            <span className="eyebrow">
              <span className="lang-it">Le Vostre Garanzie</span>
              <span className="lang-en">Your Protections</span>
            </span>
            <h2 className="display-l" style={{ margin: '22px 0 20px' }}>
              <span className="lang-it">
                Come vi <span className="italic-accent">Tuteliamo</span>
              </span>
              <span className="lang-en">
                How We Will <span className="italic-accent">Secure You</span>
              </span>
            </h2>
            <p className="lede">
              <span className="lang-it">
                Ogni investimento è protetto da un quadro formale di documentazione, trasparenza e
                tracciabilità finanziaria.
              </span>
              <span className="lang-en">
                Every investment is protected by a formal framework of documentation, transparency,
                and financial traceability.
              </span>
            </p>
          </div>
          <div data-reveal="right" className="info-list">
            <div>
              <span className="num-index">01</span>
              <div>
                <h4>
                  <span className="lang-it">Accordo Registrato dal Governo</span>
                  <span className="lang-en">Government-Registered Agreement</span>
                </h4>
                <p>
                  <span className="lang-it">
                    Un accordo formale verrà stipulato e registrato presso il Registrar/Sub-Registrar
                    governativo, offrendo tutela legale a entrambe le parti.
                  </span>
                  <span className="lang-en">
                    A formal agreement will be executed and registered before the Government
                    Registrar/Sub-Registrar, providing legal documentation and protection to both
                    parties.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <span className="num-index">02</span>
              <div>
                <h4>
                  <span className="lang-it">Assegno di Garanzia</span>
                  <span className="lang-en">Security Cheque</span>
                </h4>
                <p>
                  <span className="lang-it">
                    Un assegno di garanzia pari all&apos;importo totale versato sarà emesso a tutela
                    dell&apos;investimento/pagamento.
                  </span>
                  <span className="lang-en">
                    A security cheque equivalent to the total amount paid/provided will be issued as
                    security against the investment/payment.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <span className="num-index">03</span>
              <div>
                <h4>
                  <span className="lang-it">File di Proprietà dello Slot</span>
                  <span className="lang-en">Slot Ownership File</span>
                </h4>
                <p>
                  <span className="lang-it">
                    L&apos;investitore riceverà un file/documento ufficiale a conferma dello
                    slot/unità assegnata.
                  </span>
                  <span className="lang-en">
                    The investor/customer will receive an official file/document confirming the
                    allocated slot/room.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <span className="num-index">04</span>
              <div>
                <h4>
                  <span className="lang-it">Verifica sul Sito Web</span>
                  <span className="lang-en">Website Verification</span>
                </h4>
                <p>
                  <span className="lang-it">
                    Lo slot assegnato sarà chiaramente indicato sul sito ufficiale dell&apos;azienda,
                    per verifica e trasparenza.
                  </span>
                  <span className="lang-en">
                    The allocated slot will be clearly mentioned on the official company website for
                    verification and transparency.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <span className="num-index">05</span>
              <div>
                <h4>
                  <span className="lang-it">Trasparenza Totale sugli Slot</span>
                  <span className="lang-en">Complete Slot Transparency</span>
                </h4>
                <p>
                  <span className="lang-it">
                    Il sito mostrerà l&apos;inventario completo dei 230 slot totali, permettendo a
                    tutte le parti di verificare disponibilità e assegnazioni.
                  </span>
                  <span className="lang-en">
                    The website will display the complete inventory of 230 total slots, allowing
                    stakeholders to verify the total number of available and allocated slots.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <span className="num-index">06</span>
              <div>
                <h4>
                  <span className="lang-it">Transazioni sul Conto Aziendale</span>
                  <span className="lang-en">Company Account Transactions</span>
                </h4>
                <p>
                  <span className="lang-it">
                    Tutti i pagamenti e le transazioni finanziarie avverranno esclusivamente
                    attraverso il conto bancario ufficiale dell&apos;azienda, garantendo
                    documentazione, tracciabilità e trasparenza.
                  </span>
                  <span className="lang-en">
                    All payments and financial transactions will be made exclusively through the
                    official company bank account, ensuring proper documentation, traceability, and
                    transparency.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING — DAHA GROUP */}
      <section className="pad-xl">
        <div className="container center" style={{ maxWidth: '560px' }} data-reveal="scale">
          <span className="eyebrow center">
            <span className="lang-it">E Ricorda una Cosa</span>
            <span className="lang-en">And Remember One Thing</span>
          </span>
          <p style={{ margin: '26px 0 30px', color: 'var(--ink-soft)', fontSize: '15.5px' }}>
            <span className="lang-it">Questo progetto è orgogliosamente presentato da</span>
            <span className="lang-en">This project is proudly presented by</span>
          </p>
          <img
            src="/img/daha-group-logo.png"
            alt="Daha Group of Builders & Developers"
            style={{ width: '160px', margin: '0 auto 30px' }}
          />
          <h2 className="display-m" style={{ marginBottom: '40px' }}>
            <span className="lang-it">Promettiamo, Manteniamo</span>
            <span className="lang-en">We Promise We Deliver</span>
          </h2>
          <a href="/contact" className="btn gold">
            <span>
              <span className="lang-it">Richiedi Informazioni</span>
              <span className="lang-en">Request Information</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
