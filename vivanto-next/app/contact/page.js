export const metadata = {
  title: 'Contatti & Registrazione — Vivanto Multan | A Daha Group Project',
  description:
    'Scrivete a Vivanto per essere tra i primi ad accedere al flagship di Multan. Write to Vivanto to be among the first to access the Multan flagship.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: '46vh' }}>
        <div className="bg">
          <img src="/img/photos/front-elevation.jpg" alt="Vivanto's front elevation in Multan" />
        </div>
        <div className="container content">
          <h1 data-reveal="mask">
            <span className="lang-it">Restiamo in Contatto</span>
            <span className="lang-en">Let&apos;s Talk</span>
          </h1>
          <p className="sub" data-reveal="up" style={{ '--rd': 1 }}>
            <span className="lang-it">
              Per registrare il vostro interesse, richieste speciali o per saperne di più.
            </span>
            <span className="lang-en">
              To register your interest, special requests, or to learn more.
            </span>
          </p>
        </div>
      </section>

      {/* INTEREST FORM + INFO */}
      <section className="pad-xl" id="booking">
        <div className="container split">
          <div data-reveal="left">
            <span className="eyebrow">
              <span className="lang-it">Registra il tuo Interesse</span>
              <span className="lang-en">Register Your Interest</span>
            </span>
            <h2 className="display-m" style={{ margin: '20px 0 30px' }}>
              <span className="lang-it">Raccontateci cosa cercate</span>
              <span className="lang-en">Tell Us What You&apos;re Looking For</span>
            </h2>
            <form data-inquiry>
              <div className="field-row">
                <div className="field">
                  <label>
                    <span className="lang-it">Nome</span>
                    <span className="lang-en">First Name</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="field">
                  <label>
                    <span className="lang-it">Cognome</span>
                    <span className="lang-en">Last Name</span>
                  </label>
                  <input type="text" required />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Email</label>
                  <input type="email" required />
                </div>
                <div className="field">
                  <label>
                    <span className="lang-it">Telefono</span>
                    <span className="lang-en">Phone</span>
                  </label>
                  <input type="tel" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>
                    <span className="lang-it">Destinazione Preferita</span>
                    <span className="lang-en">Preferred Destination</span>
                  </label>
                  <select defaultValue="Multan">
                    <option>Multan</option>
                    <option>Islamabad</option>
                    <option>Nathia Gali</option>
                    <option>Non so ancora / Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label>
                    <span className="lang-it">Categoria</span>
                    <span className="lang-en">Room Category</span>
                  </label>
                  <select defaultValue="Camera Cipresso">
                    <option>Camera Cipresso</option>
                    <option>Suite Giardino</option>
                    <option>Suite Belvedere</option>
                    <option>Villa Vivanto</option>
                    <option>Non so ancora / Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>
                    <span className="lang-it">Periodo Indicativo</span>
                    <span className="lang-en">Approximate Timeframe</span>
                  </label>
                  <input type="text" placeholder="es. Primavera 2027 / e.g. Spring 2027" />
                </div>
                <div className="field">
                  <label>
                    <span className="lang-it">Ospiti</span>
                    <span className="lang-en">Guests</span>
                  </label>
                  <select defaultValue="2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>
                  <span className="lang-it">Messaggio</span>
                  <span className="lang-en">Message</span>
                </label>
                <textarea rows={4} placeholder=""></textarea>
              </div>
              <button type="submit" className="btn gold" style={{ marginTop: '8px' }}>
                <span>
                  <span className="lang-it">Registra Interesse</span>
                  <span className="lang-en">Register Interest</span>
                </span>
              </button>
              <p
                className="form-note"
                style={{
                  marginTop: '20px',
                  fontFamily: 'var(--sans)',
                  fontSize: '13px',
                  letterSpacing: '.05em',
                  color: 'var(--gold-deep)',
                  opacity: 0,
                  transition: 'opacity .4s',
                }}
              >
                <span className="lang-it">Grazie. Il nostro team vi risponderà entro 24 ore.</span>
                <span className="lang-en">Thank you. Our team will respond within 24 hours.</span>
              </p>
            </form>
          </div>

          <div data-reveal="right" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div className="info-card">
              <h4>
                <span className="lang-it">Uffici Vivanto</span>
                <span className="lang-en">Vivanto Offices</span>
              </h4>
              <p>
                Vivanto Hotels &amp; Resorts
                <br />
                Bosan Road, Near Buch Villas
                <br />
                Multan, Pakistan
              </p>
            </div>
            <div className="info-card">
              <h4>
                <span className="lang-it">Contatti Diretti</span>
                <span className="lang-en">Direct Contact</span>
              </h4>
              <p>
                +92 42 111 000 111
                <br />
                contact@vivantoresort.com
              </p>
            </div>
            <div className="info-card">
              <h4>
                <span className="lang-it">Aggiornamenti</span>
                <span className="lang-en">Updates</span>
              </h4>
              <p>
                <span className="lang-it">
                  Iscrivetevi per ricevere notizie sull&apos;apertura delle nostre destinazioni.
                </span>
                <span className="lang-en">Subscribe for updates on our destination openings.</span>
              </p>
            </div>
            <div className="info-card">
              <h4>
                <span className="lang-it">Le Nostre Destinazioni</span>
                <span className="lang-en">Our Destinations</span>
              </h4>
              <p>
                <span className="lang-it">
                  Multan · Islamabad · Nathia Gali — maggiori dettagli in{' '}
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a href="/#locations" style={{ textDecoration: 'underline' }}>
                    homepage
                  </a>
                  .
                </span>
                <span className="lang-en">
                  Multan · Islamabad · Nathia Gali — see the{' '}
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a href="/#locations" style={{ textDecoration: 'underline' }}>
                    homepage
                  </a>{' '}
                  for details.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS PANEL */}
      <section className="pad-l" style={{ background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
          <img
            src="/img/photos/loc-nathiagali.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(.3)' }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(16,14,11,.95) 20%, rgba(16,14,11,.5) 100%)',
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }} data-reveal="up">
          <span className="eyebrow" style={{ color: 'var(--gold-pale)' }}>
            <span className="lang-it">Posizione</span>
            <span className="lang-en">Location</span>
          </span>
          <h2 className="display-m" style={{ color: 'var(--white)', margin: '18px 0 20px', maxWidth: '520px' }}>
            <span className="lang-it">Il flagship a Multan, un&apos;unica firma italiana</span>
            <span className="lang-en">The Multan flagship, one Italian signature</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.65)', maxWidth: '480px' }}>
            <span className="lang-it">
              Bosan Road, Near Buch Villas, Multan — 2 ettari di lusso, natura e comfort.
              Islamabad e Nathia Gali seguiranno con la stessa cura nei dettagli.
            </span>
            <span className="lang-en">
              Bosan Road, Near Buch Villas, Multan — 2 acres of luxury, nature and comfort.
              Islamabad and Nathia Gali will follow with the same care for detail.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
