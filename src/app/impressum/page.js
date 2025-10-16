import Link from 'next/link';
import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata = {
  title: "Impressum - VersiProfi",
  description: "Impressum und rechtliche Angaben zu VersiProfi. Angaben gemäß § 5 TMG und § 55 RStV.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Impressum() {
  return (
    <Layout showSidebar={false}>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-1 mb-8">Impressum</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="heading-2 mb-4">Angaben gemäß § 5 TMG</h2>
              
              <p className="body-text mb-6">
                <strong>VersiProfi GmbH</strong><br />
                Musterstraße 123<br />
                10115 Berlin<br />
                Deutschland
              </p>
              
              <h3 className="heading-3 mb-4">Vertreten durch:</h3>
              <p className="body-text mb-6">
                Geschäftsführer: Dr. Michael Weber
              </p>
              
              <h3 className="heading-3 mb-4">Kontakt:</h3>
              <p className="body-text mb-6">
                Telefon: +49 (0) 30 12345678<br />
                E-Mail: info@versiprofi.de
              </p>
              
              <h3 className="heading-3 mb-4">Registereintrag:</h3>
              <p className="body-text mb-6">
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Charlottenburg<br />
                Registernummer: HRB 123456 B
              </p>
              
              <h3 className="heading-3 mb-4">Umsatzsteuer-ID:</h3>
              <p className="body-text mb-6">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789
              </p>
              
              <h3 className="heading-3 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
              <p className="body-text mb-6">
                Dr. Michael Weber<br />
                Musterstraße 123<br />
                10115 Berlin
              </p>
              
              <h2 className="heading-2 mb-4">Haftungsausschluss</h2>
              
              <h3 className="heading-3 mb-4">Haftung für Inhalte</h3>
              <p className="body-text mb-6">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              
              <p className="body-text mb-6">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              
              <h3 className="heading-3 mb-4">Haftung für Links</h3>
              <p className="body-text mb-6">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              
              <p className="body-text mb-6">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
              
              <h3 className="heading-3 mb-4">Urheberrecht</h3>
              <p className="body-text mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              
              <p className="body-text mb-6">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
              
              <h2 className="heading-2 mb-4">Streitschlichtung</h2>
              <p className="body-text mb-6">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              
              <p className="body-text mb-6">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              
              <p className="body-text mb-6">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              
              <h2 className="heading-2 mb-4">Bildnachweis</h2>
              <p className="body-text mb-6">
                Die auf dieser Website verwendeten Bilder stammen aus folgenden Quellen:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Unsplash.com (freie Nutzung)</li>
                <li>Pexels.com (freie Nutzung)</li>
                <li>Eigene Fotografien</li>
              </ul>
              
              <p className="body-text text-sm text-text-light">
                <em>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">e-recht24.de</a></em>
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
