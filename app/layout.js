import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalEffects from './components/GlobalEffects';

export const metadata = {
  title: 'Vivanto — Italian Hospitality, Arriving in Pakistan | A Daha Group Project',
  description:
    'Vivanto Hotels & Resorts — un flagship a cinque stelle a Multan, firmato in collaborazione con Leafy Resort Italy, con Islamabad e Nathia Gali a seguire. A five-star flagship in Multan, in collaboration with Leafy Resort Italy, with Islamabad and Nathia Gali to follow. A Project by Daha Group.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/img/logo-mark-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/img/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" data-lang="it">
      <body>
        <GlobalEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
