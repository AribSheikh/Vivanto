'use client';

import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', it: 'Home', en: 'Home' },
  { href: '/rooms', it: 'Camere & Suite', en: 'Rooms & Suites' },
  { href: '/dining', it: 'Ristorante', en: 'Dining' },
  { href: '/spa', it: 'Spa & Benessere', en: 'Spa & Wellness' },
  { href: '/membership', it: 'Membership', en: 'Membership' },
  { href: '/invest', it: 'Investi', en: 'Invest' },
  { href: '/slots', it: 'Stato Slot', en: 'Slot Status' },
  { href: '/contact', it: 'Contatti', en: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container">
          <span className="u-loc">Multan · Islamabad · Nathia Gali</span>
          <div className="u-links">
            <a href="#">
              <span className="lang-it">Accedi</span>
              <span className="lang-en">Login</span>
            </a>
            <a href="/contact">
              <span className="lang-it">La Mia Prenotazione</span>
              <span className="lang-en">My Reservation</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Plain <a>, not next/link: GlobalEffects re-runs its one-time
            DOM setup (reveal observers, language toggle) on every full page
            load, matching the ported static site's behavior. A client-side
            Link transition here would skip that re-run on the new page. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="brand">
          <img src="/img/logo-trim.png" alt="Vivanto" className="logo-full" />
          <img src="/img/logo-mark.png" alt="Vivanto" className="logo-mark" />
        </a>
        <nav className="main-nav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={pathname === link.href ? 'active' : undefined}>
                  <span className="lang-it">{link.it}</span>
                  <span className="lang-en">{link.en}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="lang-switch">
            <button data-lang="it">IT</button>
            <span className="sep">/</span>
            <button data-lang="en">EN</button>
          </div>
        </nav>
        <div className="nav-right">
          <a
            href={pathname === '/contact' ? '#booking' : '/contact'}
            className="btn light"
            style={{ padding: '12px 24px' }}
          >
            <span>
              <span className="lang-it">Prenota</span>
              <span className="lang-en">Book</span>
            </span>
          </a>
          <button className="nav-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
