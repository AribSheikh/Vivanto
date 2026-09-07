export const metadata = {
  title: 'Ristorante Cipresso — Vivanto Multan | A Daha Group Project',
  description:
    'Il concept gastronomico italiano firmato Leafy Resort Italy per il flagship Vivanto a Multan. The Italian dining concept by Leafy Resort Italy for the Vivanto flagship in Multan.',
};

export default function DiningPage() {
  return (
    <>
      <section className="page-hero">
        <div className="bg">
          <img src="/img/photos/dining-plate.jpg" alt="Signature plated dish at Ristorante Cipresso" />
        </div>
        <div className="container content">
          <h1 data-reveal="mask">
            <span className="lang-it">Ristorante Cipresso</span>
            <span className="lang-en">Ristorante Cipresso</span>
          </h1>
          <p className="sub" data-reveal="up" style={{ '--rd': 1 }}>
            <span className="lang-it">
              Cucina italiana di stagione, un concept firmato per ogni destinazione Vivanto.
            </span>
            <span className="lang-en">
              Seasonal Italian cooking, a signature concept for every Vivanto destination.
            </span>
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="pad-xl">
        <div className="container split">
          <div data-reveal="left">
            <div className="frame-img ratio-4-5">
              <img src="/img/photos/antipasto.jpg" alt="Antipasto board with wine" />
              <span className="tag">
                <span className="lang-it">Selezione di Salumi e Formaggi</span>
                <span className="lang-en">Cured Meats &amp; Cheese Selection</span>
              </span>
            </div>
          </div>
          <div data-reveal="right">
            <span className="eyebrow">
              <span className="lang-it">Filosofia</span>
              <span className="lang-en">Philosophy</span>
            </span>
            <h2 className="display-l" style={{ margin: '22px 0 26px' }}>
              <span className="lang-it">
                Dall&apos;orto alla <span className="italic-accent">tavola</span>, senza fretta
              </span>
              <span className="lang-en">
                From garden to <span className="italic-accent">table</span>, unhurried
              </span>
            </h2>
            <p className="lede" style={{ marginBottom: '22px' }}>
              <span className="lang-it">
                Il concept gastronomico di Ristorante Cipresso segue la filosofia Leafy Resort
                Italy: cucina di stagione, ingredienti locali reinterpretati con tecnica italiana.
                Al flagship di Multan, la pasta sarà tirata a mano ogni mattina in un laboratorio
                a vista.
              </span>
              <span className="lang-en">
                Ristorante Cipresso&apos;s culinary concept follows the Leafy Resort Italy
                philosophy: seasonal cooking, local ingredients reinterpreted with Italian
                technique. At the Multan flagship, pasta will be hand-rolled each morning in an
                open-view kitchen.
              </span>
            </p>
            <ul className="amenity-list" style={{ marginBottom: '22px' }}>
              <li>
                <span className="lang-it">Cucina Squisita</span>
                <span className="lang-en">Exquisite Cuisine</span>
              </li>
              <li>
                <span className="lang-it">Ambiente Premium</span>
                <span className="lang-en">Premium Ambience</span>
              </li>
              <li>
                <span className="lang-it">Chef Esperti</span>
                <span className="lang-en">Expert Chefs</span>
              </li>
              <li>
                <span className="lang-it">Servizio Impeccabile</span>
                <span className="lang-en">Impeccable Service</span>
              </li>
            </ul>
            <p className="lede">
              <span className="lang-it">
                Ogni location custodirà una cantina di ottomila etichette, tra grandi vini
                italiani e le migliori selezioni locali.
              </span>
              <span className="lang-en">
                Every location will hold a cellar of eight thousand labels, spanning great Italian
                wines and the finest local selections.
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="track">
          <span className="lang-it">Design Italiano</span>
          <span className="lang-en">Italian Design</span>
          <span className="lang-it">Cucina di Stagione</span>
          <span className="lang-en">Seasonal Kitchen</span>
          <span>
            8.000 <span className="lang-it">Etichette</span>
            <span className="lang-en">Labels</span>
          </span>
          <span className="lang-it">Orto della Tenuta</span>
          <span className="lang-en">Kitchen Garden</span>
          <span className="lang-it">Design Italiano</span>
          <span className="lang-en">Italian Design</span>
          <span className="lang-it">Cucina di Stagione</span>
          <span className="lang-en">Seasonal Kitchen</span>
          <span>
            8.000 <span className="lang-it">Etichette</span>
            <span className="lang-en">Labels</span>
          </span>
          <span className="lang-it">Orto della Tenuta</span>
          <span className="lang-en">Kitchen Garden</span>
        </div>
      </div>

      {/* VENUES */}
      <section className="pad-xl">
        <div className="container" style={{ marginBottom: '56px' }} data-reveal="up">
          <span className="eyebrow">
            <span className="lang-it">I Luoghi</span>
            <span className="lang-en">The Venues</span>
          </span>
          <h2 className="display-l" style={{ marginTop: '18px' }}>
            <span className="lang-it">Tre tavole, tre atmosfere</span>
            <span className="lang-en">Three Tables, Three Moods</span>
          </h2>
        </div>
        <div className="grid-3" data-reveal-group>
          <div className="tile" data-reveal="up" style={{ '--rd': 0 }}>
            <img src="/img/photos/pasta.jpg" alt="Signature pasta dish" />
            <div className="tile-body">
              <span className="num-index">01</span>
              <h3>
                <span className="lang-it">Sala del Camino</span>
                <span className="lang-en">The Hearth Room</span>
              </h3>
              <p>
                <span className="lang-it">
                  La sala principale, pensata con lo stesso rigore materico in ogni destinazione.
                  45 coperti.
                </span>
                <span className="lang-en">
                  The main dining room, designed with the same material rigor at every
                  destination. 45 covers.
                </span>
              </p>
            </div>
          </div>
          <div className="tile" data-reveal="up" style={{ '--rd': 1 }}>
            <img src="/img/photos/loc-swat-lake.jpg" alt="Panoramic terrace view" />
            <div className="tile-body">
              <span className="num-index">02</span>
              <h3>
                <span className="lang-it">Terrazza Panoramica</span>
                <span className="lang-en">Panoramic Terrace</span>
              </h3>
              <p>
                <span className="lang-it">
                  Cena all&apos;aperto, con la vista che cambia da destinazione a destinazione.
                </span>
                <span className="lang-en">
                  Open-air dining, with a view that changes from destination to destination.
                </span>
              </p>
            </div>
          </div>
          <div className="tile" data-reveal="up" style={{ '--rd': 2 }}>
            <img src="/img/illustrations/winebarrels.svg" alt="Cantina" />
            <div className="tile-body">
              <span className="num-index">03</span>
              <h3>
                <span className="lang-it">Tavolo dello Chef in Cantina</span>
                <span className="lang-en">Chef&apos;s Table in the Cellar</span>
              </h3>
              <p>
                <span className="lang-it">
                  Otto coperti tra le botti, un percorso degustazione firmato in ogni destinazione.
                </span>
                <span className="lang-en">
                  Eight covers among the barrels, a tasting experience offered at every
                  destination.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-l">
        <div className="container quote-block" data-reveal="scale">
          <q className="lang-it">
            La cucina italiana raccontata con verità, portata in ogni destinazione Vivanto.
          </q>
          <q className="lang-en" style={{ display: 'none' }}>
            Italian cuisine told honestly, brought to every Vivanto destination.
          </q>
          <cite>Vivanto × Leafy Resort Italy</cite>
        </div>
      </section>
    </>
  );
}
