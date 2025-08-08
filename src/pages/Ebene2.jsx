import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const jugenden = [
  {
    titel: "F-Jugend (4–8 Jahre)",
    frage:
      "Wie begleite ich Kinder zwischen 4 und 8 Jahren liebevoll, bewegungsreich und entwicklungsfördernd ins Handballspielen?",
  },
  {
    titel: "E-Jugend (9–10 Jahre)",
    frage:
      "Worauf muss ich als Trainer:in bei 9- bis 10-jährigen besonders achten?",
  },
  {
    titel: "D-Jugend (11–12 Jahre)",
    frage:
      "Wie gestalten wir ein motivierendes, entwicklungsfreundliches Training für Kinder, die sich mitten im Umbruch befinden – körperlich, geistig und sozial?",
  },
  {
    titel: "C-Jugend (13–14 Jahre)",
    frage:
      "Wie entwickeln wir gemeinsam ein leistungsorientiertes, wertschätzendes Miteinander – auf und neben dem Feld?",
  },
  {
    titel: "B-Jugend (15–16 Jahre)",
    frage:
      "Wie begleite ich Jugendliche individuell und verantwortungsvoll in einer Phase zwischen Selbstbehauptung, Leistungswunsch und Orientierungsbedürfnis?",
  },
  {
    titel: "A-Jugend (17–18 Jahre)",
    frage:
      "Wie begleite ich junge Erwachsene in ihrer letzten Jugendphase – zwischen Leistung, Identität und dem Übergang ins Aktivenleben?",
  },
];

export default function Ebene2() {
  return (
    <div className="space-y-10">
      {/* Einführungstext */}
      <section className="bg-green-100/30 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-dark space-y-4"
        >
          <h1 className="text-3xl font-bold text-primary">
            Ebene 2 – Modulbasierte Ausbildungslogik
          </h1>
          <p>
            <span className="text-primary font-semibold">Jetzt wird's konkret.</span> Wir haben unsere Haltung geschärft, unsere
            Prinzipien festgelegt und ein flexibles Gerüst aus Alters- und
            Leistungsstufen aufgebaut.
          </p>
          <p>
            Jetzt machen wir daraus ein lebendiges System – <span className="font-semibold bg-yellow-100 px-1 rounded">modular, wiedererkennbar und praxisnah</span>.
          </p>
          <p>
            Gute Ausbildung braucht Struktur. Und Struktur braucht Inhalte, die
            zur Entwicklungsphase passen. In dieser Ebene zeigen wir, wie wir
            die Laimer Werte im Trainingsalltag umsetzen – und was
            Spieler:innen in welcher Phase lernen sollen.
          </p>
          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h3 className="font-bold mb-2 text-primary">
              Unsere sechs Module bilden das Herzstück der Ausbildung:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>M1:</strong> Entwicklungsmerkmale & Methodik – Wie lernen
                Kinder und Jugendliche – und wie richten wir unser Training
                darauf aus?
              </li>
              <li>
                <strong>M2:</strong> Athletik & Motorik – Bewegungskompetenz als
                Fundament: kindgerecht, vielseitig, handballspezifisch.
              </li>
              <li>
                <strong>M3:</strong> Technik & Taktik – Vom ersten Prellen bis
                zum komplexen Umschaltspiel – wir strukturieren den Weg.
              </li>
              <li>
                <strong>M4:</strong> Mentale & soziale Entwicklung – Persönlichkeit
                stärken, Teamverhalten fördern, mit Druck und Fehlern umgehen.
              </li>
              <li>
                <strong>M5:</strong> Spielsysteme & Positionsspiel – Was
                Spieler:innen wann über Räume, Rollen und Systeme lernen sollen –
                ohne zu überfordern.
              </li>
              <li>
                <strong>M6:</strong> Teamkultur & Kommunikation – Miteinander
                wachsen – durch Sprache, Werte und gelebte Verantwortung.
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-700 italic">
            Jedes Modul ist altersgerecht aufbereitet – mit klaren
            Entwicklungszielen, Trainingsimpulsen und Methodentipps.
          </p>
          <p>
            Du bekommst kein starres Raster, sondern ein System mit Spielraum:
            für deinen Stil, dein Team, deinen Alltag.
          </p>
        </motion.div>
      </section>

      {/* Karten */}
      <section className="bg-white/40 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {jugenden.map(({ titel, frage }, index) => (
            <motion.div
              key={titel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/60 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{titel}</h3>
              <p className="italic text-sm text-gray-800 leading-relaxed">{frage}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Fazit */}
      <section className="bg-green-100/30 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <h2 className="text-2xl font-bold text-primary">Fazit</h2>
          <p>
            <span className="text-primary font-semibold">Wir haben die Haltung mit Inhalt gefüllt.</span> In dieser Ebene ist
            sichtbar geworden, wie unser Ausbildungssystem funktioniert –
            modular, zielgerichtet und altersgerecht.
          </p>
          <p className="font-semibold">
            Unsere Module geben Trainer:innen Struktur – und Spieler:innen
            Orientierung.
          </p>
          <div className="bg-white/60 p-4 rounded-xl shadow">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Entwicklung folgt keiner Einbahnstraße – sie braucht Raum für
                Umwege und Sprünge.
              </li>
              <li>
                Inhalte wirken stärker, wenn sie miteinander gedacht werden – nicht
                nebeneinander.
              </li>
              <li>
                Gute Ausbildung entsteht dort, wo Systematik und Menschenkenntnis
                zusammenkommen.
              </li>
            </ul>
          </div>
          <p>
            Jetzt wissen wir, was wir wann trainieren – und wie wir es methodisch
            vermitteln.
          </p>
          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Ausblick auf Ebene 3:</strong> Entwicklung messen – ohne zu bewerten
          </div>
          <p>
            In Ebene 3 schärfen wir unser Verständnis von Kompetenz und zeigen,
            wie unser System über alle Jahrgänge hinweg wiedererkennbar bleibt.
          </p>
          <p className="text-sm">
            <Link to="/ebene3" className="text-primary underline hover:text-secondary transition-colors">
              ➜ Hier geht's weiter zu Ebene 3
            </Link>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
