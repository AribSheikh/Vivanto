export const metadata = {
  title: 'Camere & Suite — Vivanto Multan | A Daha Group Project',
  description:
    'Il concept di camere e suite firmato Leafy Resort Italy per il flagship Vivanto a Multan. The room and suite concept by Leafy Resort Italy for the Vivanto flagship in Multan.',
};

export default function RoomsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="bg">
          <img src="/img/photos/window-view.png" alt="Vivanto suite window" />
        </div>
        <div className="container content">
          <h1 data-reveal="mask">
            <span className="lang-it">Camere &amp; Suite</span>
            <span className="lang-en">Rooms &amp; Suites</span>
          </h1>
          <p className="sub" data-reveal="up" style={{ '--rd': 1 }}>
            <span className="lang-it">
              Un concept di ospitalità firmato Leafy Resort Italy, per il flagship Vivanto a
              Multan.
            </span>
            <span className="lang-en">
              A hospitality concept by Leafy Resort Italy, for the Vivanto flagship in Multan.
            </span>
          </p>
        </div>
      </section>

      <section className="pad-l" style={{ paddingBottom: 0 }}>
        <div className="container two-col-text" data-reveal="up">
          <div>
            <span className="eyebrow">
              <span className="lang-it">Il Soggiorno</span>
              <span className="lang-en">Staying Here</span>
            </span>
          </div>
          <div>
            <p className="lede" style={{ maxWidth: '720px' }}>
              <span className="lang-it">
                Ogni camera Vivanto seguirà lo stesso linguaggio di design italiano: materiali
                autentici, artigianato meticoloso, la luce naturale come protagonista. Nessuna
                categoria sarà identica all&apos;altra; tutte condivideranno lino pregiato, bagni
                in marmo e uno stile silenzioso e senza tempo, adattato al carattere di ciascuna
                destinazione.
              </span>
              <span className="lang-en">
                Every Vivanto room will follow the same Italian design language: authentic
                materials, meticulous craftsmanship, natural light as the protagonist. No two
                categories will be alike; all will share fine linen, marble bathrooms and a quiet,
                timeless style, adapted to the character of each destination.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="pad-l">
        <div className="container" data-reveal="scale">
          <div className="frame-img ratio-1-1">
            <img src="/img/photos/aerial-compound.jpg" alt="Aerial view of the Vivanto villa compound, Multan" />
            <span className="tag">
              <span className="lang-it">2 Ettari a Multan</span>
              <span className="lang-en">2 Acres in Multan</span>
            </span>
          </div>
        </div>
      </section>

      {/* ROOM 1 */}
      <section className="container">
        <div className="room-card" data-reveal="up">
          <div className="frame-img ratio-4-5">
            <img src="/img/photos/window-view.png" alt="Camera Cipresso, suite interior" />
            <span className="tag">
              <span className="lang-it">Interno della Camera</span>
              <span className="lang-en">Room Interior</span>
            </span>
          </div>
          <div>
            <span className="num-index">01 / 04</span>
            <h2 className="display-m" style={{ margin: '14px 0 8px' }}>
              Camera Cipresso
            </h2>
            <p
              style={{
                fontFamily: 'var(--serif-b)',
                fontStyle: 'italic',
                color: 'var(--gold-deep)',
                marginBottom: '18px',
              }}
            >
              <span className="lang-it">Classic Room · 32 m²</span>
              <span className="lang-en">Classic Room · 32 m²</span>
            </p>
            <p className="lede" style={{ marginBottom: '24px' }}>
              <span className="lang-it">
                La categoria d&apos;ingresso della collezione Vivanto. Letto king, scrittoio in
                legno massello, un angolo lettura affacciato sulla luce naturale di ogni
                destinazione.
              </span>
              <span className="lang-en">
                The entry category across the Vivanto collection. King bed, solid-wood writing
                desk, a reading corner shaped by each destination&apos;s natural light.
              </span>
            </p>
            <ul className="amenity-list" style={{ marginBottom: '28px' }}>
              <li>
                <span className="lang-it">Bagno in marmo</span>
                <span className="lang-en">Marble bathroom</span>
              </li>
              <li>
                <span className="lang-it">Aria condizionata</span>
                <span className="lang-en">Air conditioning</span>
              </li>
              <li>
                <span className="lang-it">Minibar artigianale</span>
                <span className="lang-en">Artisan minibar</span>
              </li>
              <li>
                <span className="lang-it">Wi-Fi in fibra</span>
                <span className="lang-en">Fibre Wi-Fi</span>
              </li>
            </ul>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <a href="/contact" className="btn">
                <span>
                  <span className="lang-it">Richiedi</span>
                  <span className="lang-en">Enquire</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ROOM 2 */}
        <div className="room-card" data-reveal="up">
          <div className="frame-img ratio-4-5">
            <img src="/img/photos/loft-interior.jpg" alt="Suite Giardino, lofted interior" />
            <span className="tag">
              <span className="lang-it">Design a Soppalco</span>
              <span className="lang-en">Lofted Design</span>
            </span>
          </div>
          <div>
            <span className="num-index">02 / 04</span>
            <h2 className="display-m" style={{ margin: '14px 0 8px' }}>
              Suite Giardino
            </h2>
            <p
              style={{
                fontFamily: 'var(--serif-b)',
                fontStyle: 'italic',
                color: 'var(--gold-deep)',
                marginBottom: '18px',
              }}
            >
              <span className="lang-it">Junior Suite · 48 m²</span>
              <span className="lang-en">Junior Suite · 48 m²</span>
            </p>
            <p className="lede" style={{ marginBottom: '24px' }}>
              <span className="lang-it">
                Soffitti alti, area soggiorno separata, una vasca scavata a mano ispirata alla
                tradizione toscana del bagno in pietra.
              </span>
              <span className="lang-en">
                High ceilings, a separate sitting area, a hand-carved soaking tub inspired by the
                Tuscan tradition of stone bathing.
              </span>
            </p>
            <ul className="amenity-list" style={{ marginBottom: '28px' }}>
              <li>
                <span className="lang-it">Camino funzionante</span>
                <span className="lang-en">Working fireplace</span>
              </li>
              <li>
                <span className="lang-it">Vasca in pietra</span>
                <span className="lang-en">Stone soaking tub</span>
              </li>
              <li>
                <span className="lang-it">Salotto separato</span>
                <span className="lang-en">Separate sitting room</span>
              </li>
              <li>
                <span className="lang-it">Servizio in camera 24h</span>
                <span className="lang-en">24h room service</span>
              </li>
            </ul>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <a href="/contact" className="btn">
                <span>
                  <span className="lang-it">Richiedi</span>
                  <span className="lang-en">Enquire</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ROOM 3 */}
        <div className="room-card" data-reveal="up">
          <div className="frame-img ratio-4-5">
            <img src="/img/photos/small-private-pool.jpg" alt="Suite Belvedere, private terrace pool" />
            <span className="tag">
              <span className="lang-it">Vista Panoramica</span>
              <span className="lang-en">Panoramic View</span>
            </span>
          </div>
          <div>
            <span className="num-index">03 / 04</span>
            <h2 className="display-m" style={{ margin: '14px 0 8px' }}>
              Suite Belvedere
            </h2>
            <p
              style={{
                fontFamily: 'var(--serif-b)',
                fontStyle: 'italic',
                color: 'var(--gold-deep)',
                marginBottom: '18px',
              }}
            >
              <span className="lang-it">Suite · 62 m²</span>
              <span className="lang-en">Suite · 62 m²</span>
            </p>
            <p className="lede" style={{ marginBottom: '24px' }}>
              <span className="lang-it">
                Terrazza privata pensata per il tramonto di ogni destinazione: che sia sui
                giardini di Multan o le colline di Islamabad, un idromassaggio all&apos;aperto
                accompagna la vista.
              </span>
              <span className="lang-en">
                A private terrace designed for each destination&apos;s sunset: whether over the
                gardens of Multan or the hills of Islamabad, an outdoor whirlpool completes the
                view.
              </span>
            </p>
            <ul className="amenity-list" style={{ marginBottom: '28px' }}>
              <li>
                <span className="lang-it">Terrazza privata</span>
                <span className="lang-en">Private terrace</span>
              </li>
              <li>
                <span className="lang-it">Vasca idromassaggio</span>
                <span className="lang-en">Outdoor whirlpool</span>
              </li>
              <li>
                <span className="lang-it">Macchina da caffè</span>
                <span className="lang-en">Espresso machine</span>
              </li>
              <li>
                <span className="lang-it">Accesso spa prioritario</span>
                <span className="lang-en">Priority spa access</span>
              </li>
            </ul>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <a href="/contact" className="btn">
                <span>
                  <span className="lang-it">Richiedi</span>
                  <span className="lang-en">Enquire</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ROOM 4 */}
        <div className="room-card" style={{ borderBottom: '1px solid var(--line)' }} data-reveal="up">
          <div className="frame-img ratio-4-5">
            <img src="/img/photos/villa-pool-dusk.jpg" alt="Villa Vivanto private pool at dusk" />
            <span className="tag">
              <span className="lang-it">Piscina Privata</span>
              <span className="lang-en">Private Pool</span>
            </span>
          </div>
          <div>
            <span className="num-index">04 / 04</span>
            <h2 className="display-m" style={{ margin: '14px 0 8px' }}>
              Villa Vivanto
            </h2>
            <p
              style={{
                fontFamily: 'var(--serif-b)',
                fontStyle: 'italic',
                color: 'var(--gold-deep)',
                marginBottom: '18px',
              }}
            >
              <span className="lang-it">Villa Privata · 210 m²</span>
              <span className="lang-en">Private Villa · 210 m²</span>
            </p>
            <p className="lede" style={{ marginBottom: '24px' }}>
              <span className="lang-it">
                La categoria più esclusiva della collezione: una villa lofted indipendente con
                piscina privata, due camere e maggiordomo dedicato — disponibile in ogni
                destinazione Vivanto.
              </span>
              <span className="lang-en">
                The collection&apos;s most exclusive category: a freestanding lofted villa with a
                private pool, two bedrooms and a dedicated butler — available at every Vivanto
                destination.
              </span>
            </p>
            <ul className="amenity-list" style={{ marginBottom: '28px' }}>
              <li>
                <span className="lang-it">Piscina privata</span>
                <span className="lang-en">Private pool</span>
              </li>
              <li>
                <span className="lang-it">Design a soppalco</span>
                <span className="lang-en">Lofted design</span>
              </li>
              <li>
                <span className="lang-it">Maggiordomo dedicato</span>
                <span className="lang-en">Dedicated butler</span>
              </li>
              <li>
                <span className="lang-it">Cucina all&apos;italiana</span>
                <span className="lang-en">Italian-style kitchen</span>
              </li>
            </ul>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <a href="/contact" className="btn">
                <span>
                  <span className="lang-it">Richiedi</span>
                  <span className="lang-en">Enquire</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="panel pad-xl" style={{ marginTop: '100px' }}>
        <div className="frame-line"></div>
        <div className="monogram">V</div>
        <div className="container center" style={{ position: 'relative', zIndex: 2, maxWidth: '640px' }}>
          <span className="eyebrow center" style={{ color: 'var(--gold-pale)' }}>
            <span className="lang-it">Disponibilità</span>
            <span className="lang-en">Availability</span>
          </span>
          <h2 className="display-l" style={{ color: 'var(--white)', margin: '22px 0 30px' }}>
            <span className="lang-it">Trovate la vostra camera</span>
            <span className="lang-en">Find Your Room</span>
          </h2>
          <a href="/contact" className="btn gold">
            <span>
              <span className="lang-it">Registra il tuo Interesse</span>
              <span className="lang-en">Register Your Interest</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
