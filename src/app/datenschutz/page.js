import Link from 'next/link';
import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata = {
  title: "Datenschutzerklärung - VersiProfi",
  description: "Datenschutzerklärung von VersiProfi. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Datenschutz() {
  return (
    <Layout showSidebar={false}>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-1 mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="body-text mb-6">
                <strong>Stand: Januar 2024</strong>
              </p>
              
              <h2 className="heading-2 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="heading-3 mb-4">Allgemeine Hinweise</h3>
              <p className="body-text mb-6">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              
              <h3 className="heading-3 mb-4">Datenerfassung auf dieser Website</h3>
              <p className="body-text mb-6">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              
              <p className="body-text mb-6">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              
              <p className="body-text mb-6">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
              
              <h2 className="heading-2 mb-4">2. Hosting</h2>
              <p className="body-text mb-6">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              
              <p className="body-text mb-6">
                <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                USA
              </p>
              
              <p className="body-text mb-6">
                Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in Rechenzentren in der EU. Weitere Informationen entnehmen Sie der Datenschutzerklärung von Vercel: 
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
              
              <h2 className="heading-2 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="heading-3 mb-4">Datenschutz</h3>
              <p className="body-text mb-6">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              
              <p className="body-text mb-6">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              
              <p className="body-text mb-6">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
              
              <h3 className="heading-3 mb-4">Hinweis zur verantwortlichen Stelle</h3>
              <p className="body-text mb-6">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              
              <p className="body-text mb-6">
                <strong>VersiProfi GmbH</strong><br />
                Musterstraße 123<br />
                10115 Berlin<br />
                Deutschland
              </p>
              
              <p className="body-text mb-6">
                Telefon: +49 (0) 30 12345678<br />
                E-Mail: info@versiprofi.de
              </p>
              
              <p className="body-text mb-6">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
              
              <h3 className="heading-3 mb-4">Speicherdauer</h3>
              <p className="body-text mb-6">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>
              
              <h2 className="heading-2 mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="heading-3 mb-4">Server-Log-Dateien</h3>
              <p className="body-text mb-6">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              
              <ul className="list-disc pl-6 mb-6">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              
              <p className="body-text mb-6">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              
              <p className="body-text mb-6">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
              </p>
              
              <h3 className="heading-3 mb-4">Kontaktformular</h3>
              <p className="body-text mb-6">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              
              <p className="body-text mb-6">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>
              
              <h3 className="heading-3 mb-4">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="body-text mb-6">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              
              <h2 className="heading-2 mb-4">5. Newsletter</h2>
              <p className="body-text mb-6">
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
              </p>
              
              <p className="body-text mb-6">
                Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter.
              </p>
              
              <p className="body-text mb-6">
                Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den „Abmelden"-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
              
              <h2 className="heading-2 mb-4">6. Plugins und Tools</h2>
              
              <h3 className="heading-3 mb-4">Google Fonts (lokales Hosting)</h3>
              <p className="body-text mb-6">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
              </p>
              
              <p className="body-text mb-6">
                Weitere Informationen zu Google Fonts finden Sie unter 
                <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  https://developers.google.com/fonts/faq
                </a> und in der Datenschutzerklärung von Google: 
                <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  https://policies.google.com/privacy?hl=de
                </a>
              </p>
              
              <h2 className="heading-2 mb-4">7. eRecht24 Safe Sharing</h2>
              <p className="body-text mb-6">
                Diese Datenschutzerklärung wurde mit dem Datenschutzerklärungs-Generator der eRecht24 erstellt.
              </p>
              
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
