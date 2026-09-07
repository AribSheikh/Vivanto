export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src="/img/logo-trim.png" alt="Vivanto" />
          <p>
            <span className="lang-it">L&apos;ospitalità italiana firmata Leafy Resort Italy, il nostro flagship a Multan.</span>
            <span className="lang-en">Italian hospitality by Leafy Resort Italy, our flagship in Multan.</span>
          </p>
          <div className="social-row">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Pinterest">PT</a>
          </div>
        </div>
        <div>
          <h4>
            <span className="lang-it">Esplora</span>
            <span className="lang-en">Explore</span>
          </h4>
          <ul>
            <li>
              <a href="/rooms">
                <span className="lang-it">Camere &amp; Suite</span>
                <span className="lang-en">Rooms &amp; Suites</span>
              </a>
            </li>
            <li>
              <a href="/dining">
                <span className="lang-it">Ristorante</span>
                <span className="lang-en">Dining</span>
              </a>
            </li>
            <li>
              <a href="/spa">
                <span className="lang-it">Spa &amp; Benessere</span>
                <span className="lang-en">Spa &amp; Wellness</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>
            <span className="lang-it">Informazioni</span>
            <span className="lang-en">Information</span>
          </h4>
          <ul>
            <li>
              <a href="/contact">
                <span className="lang-it">Contatti</span>
                <span className="lang-en">Contact</span>
              </a>
            </li>
            <li>
              {/* Plain <a>, not next/link — see the comment on the equivalent
                  link in Header.js: GlobalEffects needs a full page load. */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/#locations">
                <span className="lang-it">Le Destinazioni</span>
                <span className="lang-en">Locations</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="lang-it">Termini &amp; Privacy</span>
                <span className="lang-en">Terms &amp; Privacy</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h4>
            <span className="lang-it">Restiamo in Contatto</span>
            <span className="lang-en">Stay in Touch</span>
          </h4>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.55)', marginBottom: '4px' }}>
            <span className="lang-it">Aggiornamenti sull&apos;apertura, una volta al mese.</span>
            <span className="lang-en">Opening updates, once a month.</span>
          </p>
          <form data-inquiry>
            <input type="email" required placeholder="email@esempio.com" />
            <button type="submit">
              <span className="lang-it">Invia</span>
              <span className="lang-en">Send</span>
            </button>
          </form>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Vivanto Hotels &amp; Resorts — Bosan Road, Near Buch Villas, Multan, Pakistan</span>
        <span>
          <span className="lang-it">Un Progetto di Daha Group · In collaborazione con Leafy Resort Italy</span>
          <span className="lang-en">A Project by Daha Group · In Collaboration with Leafy Resort Italy</span>
        </span>
      </div>
    </footer>
  );
}
