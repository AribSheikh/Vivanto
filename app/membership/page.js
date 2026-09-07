export const metadata = {
  title: 'Membership — Vivanto Multan | A Daha Group Project',
  description:
    'Cinque pacchetti membership Vivanto, con vantaggi dedicati su camere, ristorante, spa e altro. Five Vivanto membership packages, with dedicated benefits across rooms, dining, spa and more.',
};

export default function MembershipPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: '46vh' }}>
        <div className="bg">
          <img src="/img/photos/front-elevation.jpg" alt="Vivanto's front elevation in Multan" />
        </div>
        <div className="container content">
          <h1 data-reveal="mask">
            <span className="lang-it">I Nostri Pacchetti</span>
            <span className="lang-en">Membership Packages</span>
          </h1>
          <p className="sub" data-reveal="up" style={{ '--rd': 1 }}>
            <span className="lang-it">
              Cinque livelli di appartenenza, ciascuno con vantaggi dedicati per ogni destinazione Vivanto.
            </span>
            <span className="lang-en">
              Five tiers of membership, each with dedicated benefits at every Vivanto destination.
            </span>
          </p>
        </div>
      </section>

      <section className="pad-l">
        <div className="container center" style={{ maxWidth: '640px' }} data-reveal="up">
          <span className="eyebrow center">
            <span className="lang-it">Membership</span>
            <span className="lang-en">Membership</span>
          </span>
          <h2 className="display-m" style={{ margin: '18px 0 20px' }}>
            <span className="lang-it">Appartenenza pensata per durare</span>
            <span className="lang-en">Membership Built to Last</span>
          </h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            <span className="lang-it">
              Ogni pacchetto Vivanto offre sconti dedicati e accesso privilegiato alle strutture,
              con una validità di cinque anni presso ogni destinazione del gruppo.
            </span>
            <span className="lang-en">
              Every Vivanto package offers dedicated discounts and privileged access to our
              facilities, valid for five years across every destination in the group.
            </span>
          </p>
        </div>
      </section>

      {/* PACKAGE GRID */}
      <section className="pad-xl" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="price-grid" data-reveal-group>
            {/* BRONZE */}
            <div className="price-card" data-reveal="up" style={{ '--rd': 0 }}>
              <span className="tier-name">
                <span className="lang-it">Pacchetto Bronze</span>
                <span className="lang-en">Bronze Package</span>
              </span>
              <span className="price-tag">
                RS 50,000
              </span>
              <ul>
                <li>
                  <span className="lang-it"><b>10%</b> di sconto — Camera Luxury</span>
                  <span className="lang-en"><b>10%</b> off — Luxury Room</span>
                </li>
                <li>
                  <span className="lang-it"><b>10%</b> di sconto — Ristorante</span>
                  <span className="lang-en"><b>10%</b> off — Restaurant</span>
                </li>
              </ul>
              <span className="validity">
                <span className="lang-it">Validità: 5 Anni</span>
                <span className="lang-en">Validity: 5 Years</span>
              </span>
            </div>

            {/* SILVER */}
            <div className="price-card" data-reveal="up" style={{ '--rd': 1 }}>
              <span className="tier-name">
                <span className="lang-it">Pacchetto Silver</span>
                <span className="lang-en">Silver Package</span>
              </span>
              <span className="price-tag">RS 100,000</span>
              <ul>
                <li>
                  <span className="lang-it"><b>15%</b> di sconto — Camera Luxury</span>
                  <span className="lang-en"><b>15%</b> off — Luxury Room</span>
                </li>
                <li>
                  <span className="lang-it">Accesso Palestra — <b>1 persona</b></span>
                  <span className="lang-en">Gym Access — <b>1 Individual</b></span>
                </li>
                <li>
                  <span className="lang-it"><b>15%</b> di sconto — Ristorante</span>
                  <span className="lang-en"><b>15%</b> off — Restaurant</span>
                </li>
              </ul>
              <span className="validity">
                <span className="lang-it">Validità: 5 Anni</span>
                <span className="lang-en">Validity: 5 Years</span>
              </span>
            </div>

            {/* GOLD */}
            <div className="price-card is-featured" data-reveal="up" style={{ '--rd': 2 }}>
              <span className="tier-name">
                <span className="lang-it">Pacchetto Gold</span>
                <span className="lang-en">Gold Package</span>
              </span>
              <span className="price-tag">RS 200,000</span>
              <ul>
                <li>
                  <span className="lang-it"><b>20%</b> di sconto — Camera Luxury</span>
                  <span className="lang-en"><b>20%</b> off — Luxury Room</span>
                </li>
                <li>
                  <span className="lang-it">Accesso Palestra — <b>2 persone</b></span>
                  <span className="lang-en">Gym Access — <b>2 Individuals</b></span>
                </li>
                <li>
                  <span className="lang-it">Accesso Piscina — <b>2 persone</b></span>
                  <span className="lang-en">Pool Access — <b>2 Individuals</b></span>
                </li>
                <li>
                  <span className="lang-it"><b>20%</b> di sconto — Ristorante</span>
                  <span className="lang-en"><b>20%</b> off — Restaurant</span>
                </li>
                <li>
                  <span className="lang-it"><b>20%</b> di sconto — Spa &amp; Benessere</span>
                  <span className="lang-en"><b>20%</b> off — Spa &amp; Wellness</span>
                </li>
              </ul>
              <span className="validity">
                <span className="lang-it">Validità: 5 Anni</span>
                <span className="lang-en">Validity: 5 Years</span>
              </span>
            </div>

            {/* PLATINUM */}
            <div className="price-card" data-reveal="up" style={{ '--rd': 3 }}>
              <span className="tier-name">
                <span className="lang-it">Pacchetto Platinum</span>
                <span className="lang-en">Platinum Package</span>
              </span>
              <span className="price-tag">RS 350,000</span>
              <ul>
                <li>
                  <span className="lang-it"><b>25%</b> di sconto — Camera Luxury</span>
                  <span className="lang-en"><b>25%</b> off — Luxury Room</span>
                </li>
                <li>
                  <span className="lang-it">Accesso Palestra — <b>3 persone</b></span>
                  <span className="lang-en">Gym Access — <b>3 Individuals</b></span>
                </li>
                <li>
                  <span className="lang-it">Accesso Piscina — <b>3 persone</b></span>
                  <span className="lang-en">Pool Access — <b>3 Individuals</b></span>
                </li>
                <li>
                  <span className="lang-it"><b>25%</b> di sconto — Ristorante</span>
                  <span className="lang-en"><b>25%</b> off — Restaurant</span>
                </li>
                <li>
                  <span className="lang-it"><b>30%</b> di sconto — Spa &amp; Benessere</span>
                  <span className="lang-en"><b>30%</b> off — Spa &amp; Wellness</span>
                </li>
                <li>
                  <span className="lang-it"><b>1</b> Proiezione al Cinema</span>
                  <span className="lang-en"><b>1</b> Movie Screening</span>
                </li>
                <li>
                  <span className="lang-it"><b>15%</b> di sconto — Sala Banchetti</span>
                  <span className="lang-en"><b>15%</b> off — Banquet Hall</span>
                </li>
                <li>
                  <span className="lang-it"><b>2</b> Conferenze Gratuite</span>
                  <span className="lang-en"><b>2</b> Free Conferences</span>
                </li>
              </ul>
              <span className="validity">
                <span className="lang-it">Validità: 5 Anni</span>
                <span className="lang-en">Validity: 5 Years</span>
              </span>
            </div>

            {/* ELITE */}
            <div className="price-card is-featured" data-reveal="up" style={{ '--rd': 4 }}>
              <span className="tier-name">
                <span className="lang-it">Pacchetto Elite</span>
                <span className="lang-en">Elite Package</span>
              </span>
              <span className="price-tag">RS 500,000</span>
              <ul>
                <li>
                  <span className="lang-it"><b>30%</b> di sconto — Camera Luxury</span>
                  <span className="lang-en"><b>30%</b> off — Luxury Room</span>
                </li>
                <li>
                  <span className="lang-it">Accesso Palestra — <b>4 persone</b></span>
                  <span className="lang-en">Gym Access — <b>4 Individuals</b></span>
                </li>
                <li>
                  <span className="lang-it">Accesso Piscina — <b>4 persone</b></span>
                  <span className="lang-en">Pool Access — <b>4 Individuals</b></span>
                </li>
                <li>
                  <span className="lang-it"><b>30%</b> di sconto — Ristorante</span>
                  <span className="lang-en"><b>30%</b> off — Restaurant</span>
                </li>
                <li>
                  <span className="lang-it"><b>50%</b> di sconto — Spa &amp; Benessere</span>
                  <span className="lang-en"><b>50%</b> off — Spa &amp; Wellness</span>
                </li>
                <li>
                  <span className="lang-it"><b>3</b> Proiezioni al Cinema</span>
                  <span className="lang-en"><b>3</b> Movie Screenings</span>
                </li>
                <li>
                  <span className="lang-it"><b>30%</b> di sconto — Sala Banchetti</span>
                  <span className="lang-en"><b>30%</b> off — Banquet Hall</span>
                </li>
                <li>
                  <span className="lang-it"><b>4</b> Conferenze Gratuite</span>
                  <span className="lang-en"><b>4</b> Free Conferences</span>
                </li>
              </ul>
              <span className="validity">
                <span className="lang-it">Validità: 5 Anni</span>
                <span className="lang-en">Validity: 5 Years</span>
              </span>
            </div>
          </div>

          <div className="center" style={{ marginTop: '54px' }} data-reveal="up">
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
