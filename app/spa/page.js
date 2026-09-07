export const metadata = {
  title: 'Spa & Benessere — Vivanto Multan | A Daha Group Project',
  description:
    'Rituali di benessere italiani firmati Leafy Resort Italy per il flagship Vivanto a Multan. Italian wellness rituals by Leafy Resort Italy for the Vivanto flagship in Multan.',
};

export default function SpaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="bg">
          <img src="/img/photos/spa-treatment.PNG" alt="Guest relaxing during a spa treatment" />
        </div>
        <div className="container content">
          <h1 data-reveal="mask">
            <span className="lang-it">Spa &amp; Benessere</span>
            <span className="lang-en">Spa &amp; Wellness</span>
          </h1>
          <p className="sub" data-reveal="up" style={{ '--rd': 1 }}>
            <span className="lang-it">
              Rituali di benessere italiani, firmati per il flagship Vivanto a Multan.
            </span>
            <span className="lang-en">
              Italian wellness rituals, signed for the Vivanto flagship in Multan.
            </span>
          </p>
        </div>
      </section>

      <section className="pad-xl">
        <div className="container split rev">
          <div data-reveal="right">
            <span className="eyebrow">
              <span className="lang-it">Il Rito</span>
              <span className="lang-en">The Ritual</span>
            </span>
            <h2 className="display-l" style={{ margin: '22px 0 26px' }}>
              <span className="lang-it">
                Olio, erbe e <span className="italic-accent">pietra</span> — nient&apos;altro
              </span>
              <span className="lang-en">
                Oil, herbs and <span className="italic-accent">stone</span> — nothing more
              </span>
            </h2>
            <p className="lede">
              <span className="lang-it">
                La Spa Vivanto segue la filosofia del benessere firmata Leafy Resort Italy: spazi
                scavati nella pietra locale, illuminati da candele, pensati per il silenzio. I
                trattamenti nascono dall&apos;olio extravergine d&apos;oliva italiano e dalle
                erbe officinali locali, secondo rituali tramandati dalla tradizione toscana.
              </span>
              <span className="lang-en">
                The Vivanto Spa follows the wellness philosophy of Leafy Resort Italy: spaces
                carved from local stone, lit by candlelight, designed for silence. Treatments are
                built from Italian extra-virgin olive oil and local herbs, following rituals
                handed down by Tuscan tradition.
              </span>
            </p>
          </div>
          <div data-reveal="left">
            <div className="frame-img ratio-4-5">
              <img src="/img/photos/spa-guest.jpg" alt="Guest relaxing at the spa" />
              <span className="tag">
                <span className="lang-it">L&apos;Arte del Benessere</span>
                <span className="lang-en">The Art of Wellness</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES PANEL */}
      <section className="panel pad-xl">
        <div className="frame-line"></div>
        <div className="monogram">V</div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="center" style={{ maxWidth: '600px', marginBottom: '60px' }} data-reveal="up">
            <span className="eyebrow center" style={{ color: 'var(--gold-pale)' }}>
              <span className="lang-it">Le Strutture</span>
              <span className="lang-en">The Facilities</span>
            </span>
            <h2 className="display-l" style={{ color: 'var(--white)', marginTop: '18px' }}>
              <span className="lang-it">Nove Spazi per il Silenzio</span>
              <span className="lang-en">Nine Spaces for Silence</span>
            </h2>
          </div>
          <div
            className="grid-3"
            style={{ background: 'rgba(255,255,255,.08)' }}
            data-reveal-group
          >
            <div data-reveal="up" style={{ '--rd': 0, background: 'rgba(20,17,13,.55)', padding: '38px' }}>
              <span className="num-index" style={{ color: 'var(--gold-pale)' }}>01</span>
              <h3 style={{ color: 'var(--white)', fontSize: '24px', margin: '14px 0 10px' }}>
                <span className="lang-it">Piscina a Sfioro</span>
                <span className="lang-en">Infinity Pool</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '14.5px' }}>
                <span className="lang-it">25 metri, riscaldata, affacciata su ogni destinazione</span>
                <span className="lang-en">25 metres, heated, looking over each destination</span>
              </p>
            </div>
            <div data-reveal="up" style={{ '--rd': 1, background: 'rgba(20,17,13,.55)', padding: '38px' }}>
              <span className="num-index" style={{ color: 'var(--gold-pale)' }}>02</span>
              <h3 style={{ color: 'var(--white)', fontSize: '24px', margin: '14px 0 10px' }}>
                <span className="lang-it">Bagno Turco alle Erbe</span>
                <span className="lang-en">Herbal Steam Bath</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '14.5px' }}>
                <span className="lang-it">Con vapore infuso di rosmarino e alloro</span>
                <span className="lang-en">Steam infused with rosemary and bay laurel</span>
              </p>
            </div>
            <div data-reveal="up" style={{ '--rd': 2, background: 'rgba(20,17,13,.55)', padding: '38px' }}>
              <span className="num-index" style={{ color: 'var(--gold-pale)' }}>03</span>
              <h3 style={{ color: 'var(--white)', fontSize: '24px', margin: '14px 0 10px' }}>
                <span className="lang-it">Sauna in Legno di Castagno</span>
                <span className="lang-en">Chestnut-Wood Sauna</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '14.5px' }}>
                <span className="lang-it">Un rituale di calore secco, presente in ogni destinazione</span>
                <span className="lang-en">A dry-heat ritual, present at every destination</span>
              </p>
            </div>
            <div data-reveal="up" style={{ '--rd': 3, background: 'rgba(20,17,13,.55)', padding: '38px' }}>
              <span className="num-index" style={{ color: 'var(--gold-pale)' }}>04</span>
              <h3 style={{ color: 'var(--white)', fontSize: '24px', margin: '14px 0 10px' }}>
                <span className="lang-it">Sale Massaggio Private</span>
                <span className="lang-en">Private Treatment Rooms</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '14.5px' }}>
                <span className="lang-it">Sei stanze scavate nella pietra locale</span>
                <span className="lang-en">Six rooms carved into local stone</span>
              </p>
            </div>
            <div data-reveal="up" style={{ '--rd': 4, background: 'rgba(20,17,13,.55)', padding: '38px' }}>
              <span className="num-index" style={{ color: 'var(--gold-pale)' }}>05</span>
              <h3 style={{ color: 'var(--white)', fontSize: '24px', margin: '14px 0 10px' }}>
                <span className="lang-it">Studio di Yoga</span>
                <span className="lang-en">Yoga Studio</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '14.5px' }}>
                <span className="lang-it">Lezioni all&apos;alba, tra i giardini o le colline</span>
                <span className="lang-en">Sunrise classes, amid gardens or hills</span>
              </p>
            </div>
            <div data-reveal="up" style={{ '--rd': 5, background: 'rgba(20,17,13,.55)', padding: '38px' }}>
              <span className="num-index" style={{ color: 'var(--gold-pale)' }}>06</span>
              <h3 style={{ color: 'var(--white)', fontSize: '24px', margin: '14px 0 10px' }}>
                <span className="lang-it">Sala del Tè e delle Tisane</span>
                <span className="lang-en">Tea &amp; Tisane Room</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '14.5px' }}>
                <span className="lang-it">Infusi locali, miele di ogni territorio</span>
                <span className="lang-en">Local infusions, honey from each territory</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="pad-xl">
        <div className="container">
          <div className="center" style={{ maxWidth: '600px', marginBottom: '60px' }} data-reveal="up">
            <span className="eyebrow center">
              <span className="lang-it">I Trattamenti</span>
              <span className="lang-en">Treatments</span>
            </span>
            <h2 className="display-l" style={{ marginTop: '18px' }}>
              <span className="lang-it">Un Rituale per Ogni Stagione</span>
              <span className="lang-en">A Ritual for Every Season</span>
            </h2>
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto' }} data-reveal-group>
            <div
              data-reveal="up"
              style={{
                '--rd': 0,
                padding: '26px 0',
                borderBottom: '1px solid var(--line)',
              }}
            >
              <h3 style={{ fontSize: '21px', marginBottom: '6px' }}>
                <span className="lang-it">Massaggio all&apos;Olio Nuovo</span>
                <span className="lang-en">New Olive Oil Massage</span>
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--ink-faint)', margin: 0 }}>
                <span className="lang-it">80 min · con olio extravergine italiano</span>
                <span className="lang-en">80 min · with Italian extra-virgin olive oil</span>
              </p>
            </div>
            <div
              data-reveal="up"
              style={{
                '--rd': 1,
                padding: '26px 0',
                borderBottom: '1px solid var(--line)',
              }}
            >
              <h3 style={{ fontSize: '21px', marginBottom: '6px' }}>
                <span className="lang-it">Rituale della Vendemmia</span>
                <span className="lang-en">Harvest Ritual</span>
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--ink-faint)', margin: 0 }}>
                <span className="lang-it">110 min · scrub all&apos;uva, avvolgimento, massaggio</span>
                <span className="lang-en">110 min · grape scrub, wrap, massage</span>
              </p>
            </div>
            <div
              data-reveal="up"
              style={{
                '--rd': 2,
                padding: '26px 0',
                borderBottom: '1px solid var(--line)',
              }}
            >
              <h3 style={{ fontSize: '21px', marginBottom: '6px' }}>
                <span className="lang-it">Trattamento Viso alle Erbe Italiane</span>
                <span className="lang-en">Italian Herb Facial</span>
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--ink-faint)', margin: 0 }}>
                <span className="lang-it">60 min</span>
                <span className="lang-en">60 min</span>
              </p>
            </div>
            <div
              data-reveal="up"
              style={{ '--rd': 3, padding: '26px 0' }}
            >
              <h3 style={{ fontSize: '21px', marginBottom: '6px' }}>
                <span className="lang-it">Giornata Vivanto</span>
                <span className="lang-en">The Vivanto Day</span>
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--ink-faint)', margin: 0 }}>
                <span className="lang-it">4 ore · percorso completo, pranzo leggero incluso</span>
                <span className="lang-en">4 hours · full journey, light lunch included</span>
              </p>
            </div>
          </div>
          <div className="center" style={{ marginTop: '50px' }} data-reveal="up">
            <a href="/contact" className="btn gold">
              <span>
                <span className="lang-it">Richiedi Informazioni</span>
                <span className="lang-en">Request Information</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
