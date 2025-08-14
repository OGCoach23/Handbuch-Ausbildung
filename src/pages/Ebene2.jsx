import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const jugendenCards = [
  {
    title: "F-Jugend (4–8 Jahre)",
    systemName: "Grundlagen & Spielerische Entwicklung",
    duration: "4-8 Jahre - Frühe Förderung",
    description: "Wie begleite ich Kinder zwischen 4 und 8 Jahren liebevoll, bewegungsreich und entwicklungsfördernd ins Handballspielen?",
    imageAlt: "F-Jugend Grundlagen",
    link: "/f-jugend"
  },
  {
    title: "E-Jugend (9–10 Jahre)",
    systemName: "Technik & Koordination",
    duration: "9-10 Jahre - Spielerische Entwicklung",
    description: "Worauf muss ich als Trainer:in bei 9- bis 10-jährigen besonders achten?",
    imageAlt: "E-Jugend Technik",
    link: "/e-jugend"
  },
  {
    title: "D-Jugend (11–12 Jahre)",
    systemName: "Taktik & Systeme",
    duration: "11-12 Jahre - Umbruchphase",
    description: "Wie gestalten wir ein motivierendes, entwicklungsfreundliches Training für Kinder, die sich mitten im Umbruch befinden – körperlich, geistig und sozial?",
    imageAlt: "D-Jugend Taktik",
    link: "/d-jugend"
  },
  {
    title: "C-Jugend (13–14 Jahre)",
    systemName: "Leistung & Team",
    duration: "13-14 Jahre - Leistungsorientierung",
    description: "Wie entwickeln wir gemeinsam ein leistungsorientiertes, wertschätzendes Miteinander – auf und neben dem Feld?",
    imageAlt: "C-Jugend Leistung",
    link: "/c-jugend"
  },
  {
    title: "B-Jugend (15–16 Jahre)",
    systemName: "Individuum & Verantwortung",
    duration: "15-16 Jahre - Selbstbehauptung",
    description: "Wie begleite ich Jugendliche individuell und verantwortungsvoll in einer Phase zwischen Selbstbehauptung, Leistungswunsch und Orientierungsbedürfnis?",
    imageAlt: "B-Jugend Individuum",
    link: "/b-jugend"
  },
  {
    title: "A-Jugend (17–18 Jahre)",
    systemName: "Erwachsen & Identität",
    duration: "17-18 Jahre - Übergangsphase",
    description: "Wie begleite ich junge Erwachsene in ihrer letzten Jugendphase – zwischen Leistung, Identität und dem Übergang ins Aktivenleben?",
    imageAlt: "A-Jugend Erwachsen",
    link: "/a-jugend"
  }
];

export default function Ebene2() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Überschrift */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-green-600 mb-6">
            Ebene 2 – Modulbasierte Ausbildungslogik
          </h1>
        </motion.div>

        {/* Einleitungstext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-justify text-lg leading-relaxed mb-10 text-green-600"
        >
          <p className="mb-4">
            <strong>STRUKTUR – Warum diese Ebene wichtig ist</strong><br />
            Jetzt wird's konkret. Wir haben unsere Haltung geschärft, unsere Prinzipien festgelegt und ein flexibles Gerüst aus Alters- und Leistungsstufen aufgebaut. Jetzt machen wir daraus ein lebendiges System – modular, wiedererkennbar und praxisnah.
          </p>
          <p className="mb-4">
            Denn gute Ausbildung braucht Struktur. Und Struktur braucht Inhalte, die zur Entwicklungsphase passen. In dieser Ebene zeigen wir, wie wir die Laimer Werte im Trainingsalltag umsetzen – und was Spieler:innen in welcher Phase lernen sollen.
          </p>
          <p>
            Unsere sechs Module bilden das Herzstück der Ausbildung: <br />
            Modul 1: Entwicklungsmerkmale & Methodik – Wie lernen Kinder und Jugendliche – und wie richten wir unser Training darauf aus? <br />
            Modul 2: Athletik & Motorik – Bewegungskompetenz als Fundament: kindgerecht, vielseitig, handballspezifisch. <br />
            Modul 3: Technik & Taktik – Vom ersten Prellen bis zum komplexen Umschaltspiel – wir strukturieren den Weg. <br />
            Modul 4: Mentale & soziale Entwicklung – Persönlichkeit stärken, Teamverhalten fördern, mit Druck und Fehlern umgehen. <br />
            Modul 5: Spielsysteme & Positionsspiel – Was Spieler:innen wann über Räume, Rollen und Systeme lernen sollen – ohne zu überfordern. <br />
            Modul 6: Teamkultur & Kommunikation – Miteinander wachsen – durch Sprache, Werte und gelebte Verantwortung.
          </p>
        </motion.div>

      {/* Carousel */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <Carousel cards={jugendenCards} />
      </motion.div>

        {/* Fazit Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white border-2 border-green-200 rounded-xl shadow-lg p-8 mt-16"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Fazit Ebene 2: Ausbildung mit System
          </h2>
          
          <div className="space-y-4 text-green-600 leading-relaxed">
            <p>
              Wir haben die Haltung mit Inhalt gefüllt.
            </p>
            
            <p>
              In dieser Ebene ist sichtbar geworden, wie unser Ausbildungssystem funktioniert – modular, zielgerichtet und altersgerecht. Jedes Modul hat gezeigt: Entwicklung lässt sich planen, ohne starr zu werden. Und sie gewinnt an Tiefe, wenn sie auf mehreren Ebenen gleichzeitig wirkt – körperlich, technisch, taktisch, mental und sozial.
            </p>
            
            <p>
              Unsere Module geben Trainer:innen Struktur – und Spieler:innen Orientierung.
            </p>
            
            <p>
              Wir haben gesehen:
            </p>
            
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Entwicklung folgt keiner Einbahnstraße – sie braucht Raum für Umwege und Sprünge.</li>
              <li>Inhalte wirken stärker, wenn sie miteinander gedacht werden – nicht nebeneinander.</li>
              <li>Gute Ausbildung entsteht dort, wo Systematik und Menschenkenntnis zusammenkommen.</li>
            </ul>
            
            <p>
              Jetzt wissen wir, was wir wann trainieren – und wie wir es methodisch vermitteln.
            </p>
            
            <p>
              Der nächste Schritt: Wir machen Entwicklung sichtbar und vergleichbar.
            </p>
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-700 mb-3">
                Ausblick auf Ebene 3: Entwicklung messen – ohne zu bewerten
              </h3>
              
              <p className="mb-4">
                In Ebene 3 schärfen wir unser Verständnis von Kompetenz:
                Was bedeutet Fortschritt konkret – auf Technik-, Spiel- oder Haltungsebene?
              </p>
              
              <p className="mb-4">
                Wir zeigen:
              </p>
              
              <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                <li>wie unser Kompetenzkompass (inkl. 5-Stufen-Modell) Orientierung bietet</li>
                <li>wie sich Positionsprofile und Spielsysteme über die Jahrgänge hinweg entwickeln</li>
                <li>wie wir mit Quer- und Neueinsteigern umgehen – ohne sie zu verlieren</li>
                <li>wie wir Breitensport und Leistungssport parallel und durchlässig gestalten</li>
                <li>und wie unser System über alle Jahrgänge hinweg wiedererkennbar bleibt – durch klare Raster, aber flexible Wege</li>
              </ul>
              
              <p className="mb-4">
                Es geht um Durchgängigkeit mit Leben, nicht um Gleichmacherei.
              </p>
              
              <p className="mb-4">
                Wir schaffen ein gemeinsames Verständnis von Qualität – ohne den Menschen aus dem Blick zu verlieren.
              </p>
              
              <p>
                Jetzt geht es darum, den roten Faden sichtbar zu machen – von der F-Jugend bis zur A-Jugend, vom Einstieg bis zum Übergang in den Erwachsenenbereich.
              </p>
              
              <div className="mt-6">
                <Link 
                  to="/ebene3"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Zur Ebene 3 →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
