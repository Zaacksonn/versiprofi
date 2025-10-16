import Link from 'next/link';
import Sidebar from './Sidebar';

export default function Layout({ children, showSidebar = true }) {
  return (
    <div className="min-h-screen">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      
      {/* Navigation */}
      <nav className="bg-primary shadow-sm border-b border-primary-dark sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-darker">
                VersiProfi
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-primary-darker hover:text-accent transition-colors">
                Startseite
              </Link>
              <Link href="/blog" className="text-primary-darker hover:text-accent transition-colors">
                Ratgeber
              </Link>
              <Link href="/ueber-uns" className="text-primary-darker hover:text-accent transition-colors">
                Über uns
              </Link>
              <Link href="/kontakt" className="text-primary-darker hover:text-accent transition-colors">
                Kontakt
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-primary-darker" aria-label="Menü öffnen">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main id="main-content">
        {showSidebar ? (
          <div className="container-custom py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {children}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Sidebar />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-custom py-8">
            {children}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VersiProfi</h3>
              <p className="text-gray-300 mb-4">
                Ihr vertrauenswürdiger Ratgeber in der Welt der Versicherungen.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ratgeber</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/blog?category=krankenversicherung" className="hover:text-accent">Krankenversicherung</Link></li>
                <li><Link href="/blog?category=haftpflicht" className="hover:text-accent">Haftpflicht</Link></li>
                <li><Link href="/blog?category=berufsunfaehigkeit" className="hover:text-accent">Berufsunfähigkeit</Link></li>
                <li><Link href="/blog?category=lebensversicherung" className="hover:text-accent">Lebensversicherung</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/ueber-uns" className="hover:text-accent">Über uns</Link></li>
                <li><Link href="/kontakt" className="hover:text-accent">Kontakt</Link></li>
                <li><Link href="/impressum" className="hover:text-accent">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-accent">Datenschutz</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-gray-300">
                E-Mail: info@versiprofi.de<br />
                Telefon: +49 (0) 30 12345678
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 VersiProfi. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
