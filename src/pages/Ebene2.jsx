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

        {/* Fazit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Fazit: Struktur schafft Orientierung
          </h2>
          
          <p className="text-xl text-justify text-green-600 mb-8 leading-relaxed">
            Wir haben die Haltung mit Inhalt gefüllt. In dieser Ebene ist sichtbar geworden, wie unser Ausbildungssystem funktioniert – modular, zielgerichtet und entwicklungsfördernd. Jedes Modul hat gezeigt: Entwicklung lässt sich planen, ohne starr zu werden.
          </p>

          <div className="bg-green-50 p-8 rounded-2xl shadow-lg mb-8">
            <p className="text-green-700 leading-relaxed">
              <strong>Unsere Module geben Trainer:innen Struktur – und Spieler:innen Orientierung:</strong><br />
              → Entwicklung folgt keiner Einbahnstraße – sie braucht Raum für Umwege und Sprünge<br />
              → Inhalte wirken stärker, wenn sie zur Entwicklungsphase passen – nicht zu früh, nicht zu spät<br />
              → Gute Ausbildung entsteht dort, wo Systematik und Menschenkenntnis zusammenkommen
            </p>
          </div>

          <p className="text-xl text-justify text-green-600 leading-relaxed">
            Jetzt wissen wir, was wir wann trainieren – und wie wir es altersgerecht vermitteln. Der nächste Schritt: Wir machen Entwicklung sichtbar und vergleichbar. In Ebene 3 schärfen wir unser Verständnis von Kompetenz: Was bedeutet Fortschritt konkret – auf Technik-, Spiel- oder Haltungsebene?
          </p>
        </motion.div>
      </div>
    </div>
  );
}
