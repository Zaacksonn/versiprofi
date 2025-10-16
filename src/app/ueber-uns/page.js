import Link from 'next/link';
import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata = {
  title: "Über uns - VersiProfi Team und Mission",
  description: "Erfahren Sie mehr über das VersiProfi-Team und unsere Mission, Ihnen bei der Auswahl der richtigen Versicherungen zu helfen. Über 10 Jahre Erfahrung in der Versicherungsbranche.",
  openGraph: {
    title: "Über uns - VersiProfi Team und Mission",
    description: "Erfahren Sie mehr über das VersiProfi-Team und unsere Mission, Ihnen bei der Auswahl der richtigen Versicherungen zu helfen.",
    url: 'https://versiprofi.de/ueber-uns',
  },
};

export default function AboutUs() {
  return (
    <Layout showSidebar={false}>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">Über VersiProfi</h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Ihr vertrauenswürdiger Partner für alle Versicherungsfragen. 
              Seit über 10 Jahren helfen wir Menschen dabei, die richtigen Versicherungsentscheidungen zu treffen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Unsere Mission</h2>
                <p className="body-text text-lg mb-6">
                  Bei VersiProfi glauben wir daran, dass jeder Mensch das Recht auf transparente, 
                  unabhängige und verständliche Informationen über Versicherungen hat. Unser Ziel 
                  ist es, die Komplexität der Versicherungswelt zu reduzieren und Ihnen dabei zu 
                  helfen, die für Sie passenden Lösungen zu finden.
                </p>
                <p className="body-text text-lg">
                  Wir sind unabhängig von Versicherungsgesellschaften und arbeiten ausschließlich 
                  im Interesse unserer Leser. Keine versteckten Provisionen, keine verzerrten 
                  Empfehlungen – nur ehrliche, fundierte Beratung.
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="heading-3 mb-4">Unsere Werte</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="body-text"><strong>Unabhängigkeit:</strong> Keine Provisionen, nur objektive Beratung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="body-text"><strong>Transparenz:</strong> Klare, verständliche Informationen ohne Fachchinesisch</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="body-text"><strong>Kompetenz:</strong> Über 10 Jahre Branchenerfahrung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="body-text"><strong>Vertrauen:</strong> Ehrliche Beratung im Interesse unserer Leser</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Unser Expertenteam</h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Lernen Sie die Menschen kennen, die hinter VersiProfi stehen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="heading-3 text-lg mb-2">Dr. Michael Weber</h3>
              <p className="text-accent font-semibold mb-2">Chefredakteur & Versicherungsexperte</p>
              <p className="body-text text-text-light text-sm">
                Über 15 Jahre Erfahrung in der Versicherungsbranche. Spezialist für Kranken- und Lebensversicherungen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="heading-3 text-lg mb-2">Sarah Müller</h3>
              <p className="text-accent font-semibold mb-2">Finanzberaterin & Content-Managerin</p>
              <p className="body-text text-text-light text-sm">
                Expertin für Haftpflicht- und Berufsunfähigkeitsversicherungen. Fokus auf verständliche Erklärungen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="heading-3 text-lg mb-2">Thomas Schmidt</h3>
              <p className="text-accent font-semibold mb-2">Rechtsexperte & Compliance-Beauftragter</p>
              <p className="body-text text-text-light text-sm">
                Jurist mit Schwerpunkt Versicherungsrecht. Stellt sicher, dass alle Informationen rechtlich korrekt sind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">VersiProfi in Zahlen</h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Unsere Erfolge sprechen für sich
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="body-text text-text-light">Jahre Erfahrung</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="body-text text-text-light">Veröffentlichte Artikel</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="body-text text-text-light">Monatliche Leser</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="body-text text-text-light">Zufriedenheitsrate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-4">Haben Sie Fragen?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Unser Team steht Ihnen gerne für eine persönliche Beratung zur Verfügung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary bg-accent hover:bg-green-600">
                Kontakt aufnehmen
              </Link>
              <Link href="/blog" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Ratgeber lesen
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
