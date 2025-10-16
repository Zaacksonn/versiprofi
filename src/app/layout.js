import { Lato, Montserrat } from 'next/font/google';
import "./globals.css";

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: {
    default: "VersiProfi - Ihr vertrauenswürdiger Ratgeber für Versicherungen",
    template: "%s | VersiProfi"
  },
  description: "Entdecken Sie fundierte Informationen, praktische Tipps und unabhängige Beratung zu allen wichtigen Versicherungsthemen in Deutschland. Krankenversicherung, Haftpflicht, Berufsunfähigkeit und mehr.",
  keywords: "Versicherung, Krankenversicherung, Haftpflicht, Berufsunfähigkeit, Lebensversicherung, Versicherungsvergleich, Deutschland",
  authors: [{ name: "VersiProfi Team" }],
  creator: "VersiProfi",
  publisher: "VersiProfi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://versiprofi.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "VersiProfi - Ihr vertrauenswürdiger Ratgeber für Versicherungen",
    description: "Entdecken Sie fundierte Informationen, praktische Tipps und unabhängige Beratung zu allen wichtigen Versicherungsthemen in Deutschland.",
    url: 'https://versiprofi.de',
    siteName: 'VersiProfi',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VersiProfi - Ihr vertrauenswürdiger Ratgeber für Versicherungen",
    description: "Entdecken Sie fundierte Informationen, praktische Tipps und unabhängige Beratung zu allen wichtigen Versicherungsthemen in Deutschland.",
    creator: '@versiprofi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${lato.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
