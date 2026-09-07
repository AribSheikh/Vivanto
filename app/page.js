export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '640px',
          overflow: 'hidden',
          background: 'var(--ink)',
        }}
      >
        <div
          className="parallax-img"
          data-speed="0.35"
          style={{ position: 'absolute', inset: '-10% 0 0 0', height: '120%' }}
        >
          <img
            className="hero-bg-img"
            src="/img/photos/hotel-exterior.PNG"
            alt="Vivanto, an Italian-designed facade at dusk"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 38%',
              filter: 'brightness(.62) saturate(.95)',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(0deg, rgba(16,14,11,.92) 0%, rgba(16,14,11,.5) 50%, rgba(16,14,11,.55) 100%)',
          }}
        ></div>
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: '8vh',
            color: 'var(--white)',
          }}
        >
          <div data-reveal="up" style={{ '--rd': 0 }}>
            <span className="eyebrow" style={{ color: 'var(--gold-pale)' }}>
              <span className="lang-it">Ospitalità Italiana in Pakistan</span>
              <span className="lang-en">Italian Hospitality in Pakistan</span>
            </span>
          </div>
          <h1
            data-reveal="mask"
            style={{
              '--rd': 1,
              fontSize: 'clamp(58px,11vw,168px)',
              color: 'var(--white)',
              lineHeight: '.92',
              margin: '18px 0 26px',
              fontWeight: 400,
              textShadow: '0 4px 30px rgba(0,0,0,.35)',
            }}
          >
            Vivanto
          </h1>
          <p
            data-reveal="up"
            style={{
              '--rd': 2,
              fontFamily: 'var(--serif-b)',
              fontStyle: 'italic',
              fontSize: 'clamp(17px,2vw,23px)',
              color: 'rgba(255,255,255,.86)',
              maxWidth: '640px',
              marginBottom: '38px',
              textShadow: '0 2px 16px rgba(0,0,0,.4)',
            }}
          >
            <span className="lang-it">
              Vivanto porta l&apos;arte del design e dell&apos;ospitalità italiana — in
              collaborazione con Leafy Resort Italy — a Multan, con Islamabad e Nathia Gali a
              seguire.
            </span>
            <span className="lang-en">
              Vivanto brings the art of Italian design and hospitality — in collaboration with
              Leafy Resort Italy — to Multan, with Islamabad and Nathia Gali to follow.
            </span>
          </p>
          <div data-reveal="up" style={{ '--rd': 3, display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            <a href="/rooms" className="btn light">
              <span>
                <span className="lang-it">Scopri le Suite</span>
                <span className="lang-en">Discover the Suites</span>
              </span>
            </a>
            <a href="#locations" className="btn gold">
              <span>
                <span className="lang-it">Le Nostre Destinazioni</span>
                <span className="lang-en">Our Locations</span>
              </span>
            </a>
          </div>
          <div
            data-reveal="up"
            style={{ '--rd': 4, marginTop: '26px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}
          >
            <span
              style={{
                fontFamily: 'var(--sans)', fontSize: '11.5px', letterSpacing: '.16em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,.45)',
              }}
            >
              <span className="lang-it">Proprietà &amp; Membership</span>
              <span className="lang-en">Ownership &amp; Membership</span>
            </span>
            <span className="hero-quicklinks">
              <a href="/membership">
                <span className="lang-it">Membership</span>
                <span className="lang-en">Membership</span>
              </a>
              <span className="sep">·</span>
              <a href="/invest">
                <span className="lang-it">Investi</span>
                <span className="lang-en">Invest</span>
              </a>
            </span>
          </div>
          <div className="hero-facts" data-reveal="up" style={{ '--rd': 5, marginTop: '44px' }}>
            <div className="f">
              <div className="n">3</div>
              <div className="l">
                <span className="lang-it">Destinazioni</span>
                <span className="lang-en">Destinations</span>
              </div>
            </div>
            <div className="f">
              <div className="n">2</div>
              <div className="l">
                <span className="lang-it">Ettari a Multan</span>
                <span className="lang-en">Acres in Multan</span>
              </div>
            </div>
            <div className="f">
              <div className="n">3★</div>
              <div className="l">
                <span className="lang-it">Design Italiano</span>
                <span className="lang-en">Italian Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-cue"
          style={{
            position: 'absolute',
            right: 'var(--pad)',
            bottom: '8vh',
            zIndex: 3,
            writingMode: 'vertical-rl',
            color: 'rgba(255,255,255,.55)',
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <span
            className="line"
            style={{
              width: '1px',
              height: '60px',
              background: 'rgba(255,255,255,.4)',
              display: 'inline-block',
            }}
          ></span>
          <span className="lang-it">Scorri</span>
          <span className="lang-en">Scroll</span>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee">
        <div className="track">
          <span className="lang-it">In Collaborazione con Leafy Resort Italy</span>
          <span className="lang-en">In Collaboration with Leafy Resort Italy</span>
          <span className="lang-it">Tre Destinazioni</span>
          <span className="lang-en">Three Destinations</span>
          <span>Design Italiano</span>
          <span className="lang-it">Tre Stelle</span>
          <span className="lang-en">Three Stars</span>
          <span>Pakistan</span>
          <span className="lang-it">In Collaborazione con Leafy Resort Italy</span>
          <span className="lang-en">In Collaboration with Leafy Resort Italy</span>
          <span className="lang-it">Tre Destinazioni</span>
          <span className="lang-en">Three Destinations</span>
          <span>Design Italiano</span>
          <span className="lang-it">Tre Stelle</span>
          <span className="lang-en">Three Stars</span>
          <span>Pakistan</span>
        </div>
      </div>

      {/* ============ INTRO / VISION ============ */}
      <section className="pad-xl">
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 0 54px' }} data-reveal="up">
            <span className="eyebrow">
              <span className="lang-it">La Visione</span>
              <span className="lang-en">The Vision</span>
            </span>
            <h2 className="display-l" style={{ margin: '22px 0 26px' }}>
              <span className="lang-it">
                Un&apos;eredità italiana, <span className="italic-accent">reimmaginata</span>
              </span>
              <span className="lang-en">
                An Italian legacy, <span className="italic-accent">reimagined</span>
              </span>
            </h2>
            <p className="lede" style={{ maxWidth: '680px' }}>
              <span className="lang-it">
                Vivanto nasce dalla collaborazione con Leafy Resort Italy per portare
                l&apos;eccellenza del design e dell&apos;ospitalità italiana in Pakistan. Il
                flagship sorge su 2 ettari a Multan, con Islamabad e Nathia Gali a seguire —
                pensati secondo gli stessi principi: materiali autentici, artigianato meticoloso
                e un servizio silenzioso e attento.
              </span>
              <span className="lang-en">
                Vivanto is born from a collaboration with Leafy Resort Italy, bringing the
                excellence of Italian design and hospitality to Pakistan. The flagship rises on 2
                acres in Multan, with Islamabad and Nathia Gali to follow — each shaped by the
                same principles: authentic materials, meticulous craftsmanship and quiet,
                attentive service.
              </span>
            </p>
            <a href="#locations" className="btn" style={{ marginTop: '34px' }}>
              <span>
                <span className="lang-it">Scopri le Destinazioni</span>
                <span className="lang-en">Explore the Destinations</span>
              </span>
            </a>
          </div>
        </div>
        <div data-reveal="scale">
          <img
            src="/img/photos/italian-legacy.jpg"
            alt="Vivanto's flagship facade in Multan"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </section>

      {/* ============ STATS ============ */}
      <div className="stats-row" data-reveal-group>
        <div className="stat" data-reveal="up" style={{ '--rd': 0 }}>
          <div className="n">
            <span data-count="3">0</span>
          </div>
          <div className="l">
            <span className="lang-it">Destinazioni</span>
            <span className="lang-en">Destinations</span>
          </div>
        </div>
        <div className="stat" data-reveal="up" style={{ '--rd': 1 }}>
          <div className="n">
            <span data-count="2026">0</span>
          </div>
          <div className="l lang-it">Fondata nel</div>
          <div className="l lang-en" style={{ display: 'none' }}>
            Established
          </div>
        </div>
        <div className="stat" data-reveal="up" style={{ '--rd': 2 }}>
          <div className="n">
            <span data-count="2">0</span>
          </div>
          <div className="l">
            <span className="lang-it">Ettari a Multan</span>
            <span className="lang-en">Acres in Multan</span>
          </div>
        </div>
        <div className="stat" data-reveal="up" style={{ '--rd': 3 }}>
          <div className="n">
            <span data-count="3">0</span> ★
          </div>
          <div className="l">
            <span className="lang-it">Stelle</span>
            <span className="lang-en">Stars</span>
          </div>
        </div>
      </div>

      {/* ============ TEASER TILES ============ */}
      <section className="pad-xl" style={{ paddingBottom: 0 }}>
        <div
          className="container"
          style={{
            marginBottom: '56px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div data-reveal="up">
            <span className="eyebrow">
              <span className="lang-it">L&apos;Esperienza</span>
              <span className="lang-en">The Experience</span>
            </span>
            <h2 className="display-l" style={{ marginTop: '18px' }}>
              <span className="lang-it">
                Tre modi di <span className="italic-accent">abitare</span> Vivanto
              </span>
              <span className="lang-en">
                Three ways to <span className="italic-accent">inhabit</span> Vivanto
              </span>
            </h2>
          </div>
        </div>
        <div className="grid-3" data-reveal-group>
          <a href="/rooms" className="tile" data-reveal="up" style={{ '--rd': 0 }}>
            <img src="/img/photos/window-view.png" alt="Suite with a view" />
            <div className="tile-body">
              <span className="num-index">01</span>
              <span className="eyebrow">
                <span className="lang-it">Soggiorno</span>
                <span className="lang-en">Stay</span>
              </span>
              <h3>
                <span className="lang-it">Camere &amp; Suite</span>
                <span className="lang-en">Rooms &amp; Suites</span>
              </h3>
              <p>
                <span className="lang-it">Interni firmati italiani, pensati per ogni destinazione.</span>
                <span className="lang-en">Italian-designed interiors, envisioned for every destination.</span>
              </p>
              <span className="more">
                <span className="lang-it">Esplora</span>
                <span className="lang-en">Explore</span>
              </span>
            </div>
          </a>
          <a href="/dining" className="tile" data-reveal="up" style={{ '--rd': 1 }}>
            <img src="/img/photos/antipasto.jpg" alt="Antipasto board" />
            <div className="tile-body">
              <span className="num-index">02</span>
              <span className="eyebrow">
                <span className="lang-it">Cucina</span>
                <span className="lang-en">Cuisine</span>
              </span>
              <h3>
                <span className="lang-it">Ristorante Cipresso</span>
                <span className="lang-en">Ristorante Cipresso</span>
              </h3>
              <p>
                <span className="lang-it">Cucina italiana autentica, in ogni destinazione Vivanto.</span>
                <span className="lang-en">Authentic Italian cuisine, in every Vivanto destination.</span>
              </p>
              <span className="more">
                <span className="lang-it">Esplora</span>
                <span className="lang-en">Explore</span>
              </span>
            </div>
          </a>
          <a href="/spa" className="tile" data-reveal="up" style={{ '--rd': 2 }}>
            <img src="/img/photos/pool-hero.jpg" alt="Infinity pool" />
            <div className="tile-body">
              <span className="num-index">03</span>
              <span className="eyebrow">
                <span className="lang-it">Benessere</span>
                <span className="lang-en">Wellness</span>
              </span>
              <h3>
                <span className="lang-it">Spa &amp; Piscina</span>
                <span className="lang-en">Spa &amp; Pool</span>
              </h3>
              <p>
                <span className="lang-it">Rituali di benessere italiani, reinterpretati per ogni luogo.</span>
                <span className="lang-en">Italian wellness rituals, reinterpreted for every place.</span>
              </p>
              <span className="more">
                <span className="lang-it">Esplora</span>
                <span className="lang-en">Explore</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ============ LOCATIONS ============ */}
      <section className="pad-xl" id="locations">
        <div className="container" style={{ marginBottom: '56px' }} data-reveal="up">
          <span className="eyebrow">
            <span className="lang-it">Le Destinazioni</span>
            <span className="lang-en">The Destinations</span>
          </span>
          <h2 className="display-l" style={{ marginTop: '18px' }}>
            <span className="lang-it">
              Tre Città, <span className="italic-accent">un&apos;unica visione</span>
            </span>
            <span className="lang-en">
              Three Cities, <span className="italic-accent">one vision</span>
            </span>
          </h2>
          <p className="lede" style={{ marginTop: '22px' }}>
            <span className="lang-it">
              Il flagship Vivanto sorge a Multan; Islamabad e Nathia Gali seguiranno — dal
              patrimonio di santuari e artigianato di Multan alla capitale verde di Islamabad,
              fino alla quiete himalayana di Nathia Gali.
            </span>
            <span className="lang-en">
              The Vivanto flagship rises in Multan; Islamabad and Nathia Gali follow — from the
              shrines and craft heritage of Multan to Islamabad&apos;s green capital, and the
              Himalayan calm of Nathia Gali.
            </span>
          </p>
        </div>
        <div className="loc-stage-wrap">
          <div className="loc-stage">
            <div className="loc-slide is-active" data-i="0">
              <img src="/img/photos/loc-multan.jpg" alt="Shrine of Shah Rukn-e-Alam, Multan" />
              <div className="loc-slide-overlay"></div>
              <div className="loc-slide-text">
                <span className="pill">
                  <span className="lang-it">Il Flagship</span>
                  <span className="lang-en">The Flagship</span>
                </span>
                <span className="num-index" style={{ display: 'block', marginTop: '10px' }}>
                  01 / 03
                </span>
                <h3>Multan</h3>
                <p>
                  <span className="lang-it">La Città dei Santi — 2 ettari su Bosan Road, ricchi di eredità e ospitalità.</span>
                  <span className="lang-en">The City of Saints — 2 acres on Bosan Road, rich heritage and warm welcomes.</span>
                </p>
              </div>
            </div>
            <div className="loc-slide" data-i="1">
              <img src="/img/photos/loc-islamabad.jpg" alt="Faisal Mosque, Islamabad" />
              <div className="loc-slide-overlay"></div>
              <div className="loc-slide-text">
                <span className="pill">
                  <span className="lang-it">In Programmazione</span>
                  <span className="lang-en">Coming Soon</span>
                </span>
                <span className="num-index" style={{ display: 'block', marginTop: '10px' }}>
                  02 / 03
                </span>
                <h3>Islamabad</h3>
                <p>
                  <span className="lang-it">La capitale della bellezza, tra le colline della Margalla.</span>
                  <span className="lang-en">The capital of beauty, at the foot of the Margalla Hills.</span>
                </p>
              </div>
            </div>
            <div className="loc-slide" data-i="2">
              <img src="/img/photos/loc-nathiagali.jpg" alt="Pine forest, Nathia Gali" />
              <div className="loc-slide-overlay"></div>
              <div className="loc-slide-text">
                <span className="pill">
                  <span className="lang-it">In Programmazione</span>
                  <span className="lang-en">Coming Soon</span>
                </span>
                <span className="num-index" style={{ display: 'block', marginTop: '10px' }}>
                  03 / 03
                </span>
                <h3>Nathia Gali</h3>
                <p>
                  <span className="lang-it">Una fuga in quota, tra pinete e nebbie di montagna.</span>
                  <span className="lang-en">An escape to the heights, among pine forests and mountain mist.</span>
                </p>
              </div>
            </div>

            <div className="loc-dots">
              <span className="loc-dot is-active" data-i="0" title="Multan"></span>
              <span className="loc-dot" data-i="1" title="Islamabad"></span>
              <span className="loc-dot" data-i="2" title="Nathia Gali"></span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LEAFY RESORT ITALY COLLABORATION ============ */}
      <section className="pad-xl">
        <div className="container split rev">
          <div data-reveal="right">
            <div className="frame-img ratio-4-5">
              <img src="/img/photos/leafy-italy.jpg" alt="Leafy Resort Italy, Lake Como" />
              <span className="tag">Leafy Resort Italy</span>
            </div>
          </div>
          <div data-reveal="left">
            <span className="eyebrow">
              <span className="lang-it">In Collaborazione Con</span>
              <span className="lang-en">In Collaboration With</span>
            </span>
            <h2 className="display-l" style={{ margin: '22px 0 26px' }}>
              <span className="lang-it">
                Eleganza italiana, <span className="italic-accent">ospitalità Vivanto</span>
              </span>
              <span className="lang-en">
                Italian elegance, <span className="italic-accent">Vivanto hospitality</span>
              </span>
            </h2>
            <p className="lede" style={{ marginBottom: '28px' }}>
              <span className="lang-it">
                Leafy Resort Italy porta la propria esperienza di design e ospitalità italiana al
                flagship Vivanto di Multan, unendo eleganza mediterranea, destinazioni scenografiche
                e un servizio di eccezione a valori condivisi e ricordi senza tempo.
              </span>
              <span className="lang-en">
                Leafy Resort Italy brings its Italian design and hospitality expertise to the
                Vivanto flagship in Multan, uniting Mediterranean elegance, scenic destinations
                and exceptional service with shared values and timeless memories.
              </span>
            </p>
            <ul className="amenity-list">
              <li>
                <span className="lang-it">Eleganza Italiana</span>
                <span className="lang-en">Italian Elegance</span>
              </li>
              <li>
                <span className="lang-it">Destinazioni Scenografiche</span>
                <span className="lang-en">Scenic Destinations</span>
              </li>
              <li>
                <span className="lang-it">Esperienza Eccezionale</span>
                <span className="lang-en">Exceptional Experience</span>
              </li>
              <li>
                <span className="lang-it">Valori Condivisi</span>
                <span className="lang-en">Shared Values</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ AMENITIES ============ */}
      <section className="pad-xl">
        <div className="container center" style={{ maxWidth: '600px', marginBottom: '60px' }} data-reveal="up">
          <span className="eyebrow center">
            <span className="lang-it">Vi Offriamo</span>
            <span className="lang-en">We Are Giving</span>
          </span>
          <h2 className="display-l" style={{ marginTop: '18px' }}>
            <span className="lang-it">Ogni comfort, pensato per voi</span>
            <span className="lang-en">Every Comfort, Thoughtfully Curated</span>
          </h2>
        </div>
        <div className="container">
          <ul className="amenity-list" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <li><span className="lang-it">Palestra</span><span className="lang-en">Gym</span></li>
            <li><span className="lang-it">Teatro</span><span className="lang-en">Theatre</span></li>
            <li><span className="lang-it">Piscina</span><span className="lang-en">Pool</span></li>
            <li><span className="lang-it">Sala Banchetti</span><span className="lang-en">Banquet Hall</span></li>
            <li><span className="lang-it">Ristorante</span><span className="lang-en">Restaurant</span></li>
            <li><span className="lang-it">Sala Conferenze</span><span className="lang-en">Conference Room</span></li>
            <li><span className="lang-it">Spa &amp; Benessere</span><span className="lang-en">Spa &amp; Wellness</span></li>
            <li><span className="lang-it">Wi-Fi ad Alta Velocità</span><span className="lang-en">High-Speed Wi-Fi</span></li>
            <li><span className="lang-it">Parcheggio con Valet</span><span className="lang-en">Valet Parking</span></li>
            <li><span className="lang-it">Servizio in Camera 24/7</span><span className="lang-en">24/7 Room Service</span></li>
            <li><span className="lang-it">Servizio Lavanderia</span><span className="lang-en">Laundry Service</span></li>
            <li><span className="lang-it">Sicurezza 24/7</span><span className="lang-en">24/7 Security</span></li>
          </ul>
          <p className="center" style={{ marginTop: '40px', fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
            <span className="lang-it">E molto altro</span>
            <span className="lang-en">And Many More</span>
          </p>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="pad-l" style={{ background: 'var(--cream-2)' }}>
        <div className="container quote-block" data-reveal="scale">
          <q className="lang-it">
            Portiamo l&apos;anima del design italiano in luoghi che meritano di essere scoperti.
          </q>
          <q className="lang-en" style={{ display: 'none' }}>
            We are bringing the soul of Italian design to places that deserve to be discovered.
          </q>
          <cite>Vivanto × Leafy Resort Italy</cite>
        </div>
      </section>

      {/* ============ CTA PANEL ============ */}
      <section className="panel pad-xl">
        <div className="frame-line"></div>
        <div className="monogram">V</div>
        <div className="container center" style={{ position: 'relative', zIndex: 2, maxWidth: '680px' }}>
          <span className="eyebrow center" style={{ color: 'var(--gold-pale)' }}>
            <span className="lang-it">Vi Aspettiamo</span>
            <span className="lang-en">We Await You</span>
          </span>
          <h2 className="display-l" style={{ color: 'var(--white)', margin: '22px 0 30px' }}>
            <span className="lang-it">
              L&apos;Italia, ora in{' '}
              <span className="italic-accent" style={{ color: 'var(--gold-pale)' }}>
                Pakistan
              </span>
            </span>
            <span className="lang-en">
              Italy, now in{' '}
              <span className="italic-accent" style={{ color: 'var(--gold-pale)' }}>
                Pakistan
              </span>
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.72)', fontSize: '16.5px', marginBottom: '36px' }}>
            <span className="lang-it">
              Il nostro flagship a Multan apre a breve. Registratevi per essere tra i primi a
              scoprire Vivanto.
            </span>
            <span className="lang-en">
              Our Multan flagship opens soon. Register to be among the first to discover Vivanto.
            </span>
          </p>
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
