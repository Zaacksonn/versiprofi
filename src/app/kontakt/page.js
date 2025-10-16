import Link from 'next/link';
import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata = {
  title: "Kontakt - VersiProfi Beratung und Support",
  description: "Kontaktieren Sie das VersiProfi-Team für persönliche Versicherungsberatung. Kostenlose Beratung zu allen Versicherungsthemen. Jetzt Termin vereinbaren!",
  openGraph: {
    title: "Kontakt - VersiProfi Beratung und Support",
    description: "Kontaktieren Sie das VersiProfi-Team für persönliche Versicherungsberatung. Kostenlose Beratung zu allen Versicherungsthemen.",
    url: 'https://versiprofi.de/kontakt',
  },
};

export default function Contact() {
  return (
    <Layout showSidebar={false}>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">Kontaktieren Sie uns</h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Haben Sie Fragen zu Versicherungen? Unser Expertenteam steht Ihnen gerne 
              für eine kostenlose und unabhängige Beratung zur Verfügung.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="heading-2 mb-6">Nachricht senden</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-text-dark mb-2">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Ihr Vorname"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text-dark mb-2">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Ihr Nachname"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="+49 (0) 123 456789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                      Betreff *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Bitte wählen Sie ein Thema</option>
                      <option value="krankenversicherung">Krankenversicherung</option>
                      <option value="haftpflicht">Haftpflichtversicherung</option>
                      <option value="berufsunfaehigkeit">Berufsunfähigkeitsversicherung</option>
                      <option value="lebensversicherung">Lebensversicherung</option>
                      <option value="kfz">Kfz-Versicherung</option>
                      <option value="hausrat">Hausratversicherung</option>
                      <option value="allgemein">Allgemeine Beratung</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="privacy" className="text-sm text-text-light">
                      Ich habe die <Link href="/datenschutz" className="text-accent hover:underline">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary bg-accent hover:bg-green-600"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="heading-2 mb-6">Kontaktinformationen</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">E-Mail</h3>
                      <p className="body-text text-text-light">info@versiprofi.de</p>
                      <p className="body-text text-text-light">beratung@versiprofi.de</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                      <p className="body-text text-text-light">+49 (0) 30 12345678</p>
                      <p className="text-sm text-text-light">Mo-Fr: 9:00-18:00 Uhr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                      <p className="body-text text-text-light">
                        VersiProfi GmbH<br />
                        Musterstraße 123<br />
                        10115 Berlin
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-8 p-6 bg-secondary rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Bürozeiten</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-light">Montag - Freitag:</span>
                      <span className="font-medium">9:00 - 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-light">Samstag:</span>
                      <span className="font-medium">10:00 - 14:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-light">Sonntag:</span>
                      <span className="font-medium">Geschlossen</span>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="mt-8 p-6 bg-primary text-white rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Häufige Fragen</h3>
                  <p className="text-blue-100 mb-4">
                    Viele Antworten finden Sie bereits in unseren Ratgeber-Artikeln.
                  </p>
                  <Link href="/blog" className="text-accent hover:underline font-semibold">
                    Zu den Ratgebern →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
