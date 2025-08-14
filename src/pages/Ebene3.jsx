import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const themen = [
  {
    titel: "Kompetenzkompass",
    beschreibung:
      "Systematik für individuelle Entwicklung. Unser 5-Stufen-Modell macht Fortschritte sichtbar – ohne zu bewerten.",
    highlight: true,
  },
  {
    titel: "Entwicklung Positionsprofile",
    beschreibung:
      "Positionen sind mehr als Orte auf dem Spielfeld – sie sind Lernräume mit klaren Anforderungen.",
  },
  {
    titel: "Entwicklung der Spielsysteme",
    beschreibung:
      "Spielsysteme sind keine Schablonen – sie sind Lernfelder mit Struktur, die altersgerecht wachsen.",
  },
  {
    titel: "Quer- und Neueinsteiger, Drop-out-Prophylaxe",
    beschreibung:
      "Wir nehmen Entwicklung ernst – und das bedeutet auch: Zugehörigkeit ermöglichen.",
  },
  {
    titel: "Breitensport vs. Leistungssport",
    beschreibung:
      "Nicht jede:r will Nationalspieler:in werden. Und das ist gut so. Entwicklung hat viele Wege.",
  },
];

export default function Ebene3() {
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
            Ebene 3 – Kompetenzkompass, Durchgängigkeit & Positionen
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
            <strong>KOMPETENZ – Warum diese Ebene wichtig ist</strong><br />
            Entwicklung braucht Klarheit – und Vergleichbarkeit ohne Bewertung. Wir wollen wissen, ob unsere Ausbildung wirkt – durch sichtbaren Fortschritt statt Titel und Tabellen.
          </p>
          <p className="mb-4">
            Es geht nicht darum, Kinder zu bewerten – sondern ihnen und uns eine gemeinsame Sprache für Entwicklung zu geben. Leitfrage: Wie sieht gute Entwicklung aus – und wie erkennen wir sie in unterschiedlichen Altersstufen, Rollen und Spielertypen?
          </p>
          <p>
            In dieser Ebene zeigen wir, wie wir Entwicklung systematisch erfassen und vergleichbar machen – ohne zu bewerten. Wir schaffen Orientierung durch klare Kompetenzstufen, altersgerechte Positionsprofile und durchgängige Entwicklungspfade.
          </p>
        </motion.div>

        {/* Karten-Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {themen.map(({ titel, beschreibung, highlight }, index) => (
            <motion.div
              key={titel}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Link
                to={
                  titel === "Kompetenzkompass" ? "/kompetenzkompass" :
                  titel === "Entwicklung Positionsprofile" ? "/torwart-profil" :
                  titel === "Entwicklung der Spielsysteme" ? "/entwicklung-spielsysteme" :
                  titel === "Quer- und Neueinsteiger, Drop-out-Prophylaxe" ? "/quereinsteiger" :
                  titel === "Breitensport vs. Leistungssport" ? "/breitensport-vs-leistungssport" :
                  "#"
                }
              >
                <div className={`bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400 ${
                  highlight ? "border-yellow-300 hover:border-yellow-400" : ""
                }`}>
                  <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                    {titel}
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    {beschreibung}
                  </p>
                  <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                    Zum Detailbereich →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Fazit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Fazit: Orientierung schaffen – Entwicklung sichtbar machen
          </h2>
          
          <p className="text-xl text-justify text-green-600 mb-8 leading-relaxed">
            In dieser Ebene haben wir unser Ausbildungssystem tiefer verankert. Wir haben nicht nur Inhalte vermittelt, sondern auch gezeigt, wie man Entwicklung erkennt, beschreibt und begleitet – über alle Jahrgänge hinweg.
          </p>

          <div className="bg-green-50 p-8 rounded-2xl shadow-lg mb-8">
            <p className="text-green-700 leading-relaxed">
              <strong>Diese Ebene ist das Bindeglied zwischen Konzept und Alltag:</strong><br />
              → Wie Positionsprofile dabei helfen, Rollen zu verstehen und gezielt zu fördern<br />
              → Wie Spielsysteme pro Altersstufe Lernräume statt Vorgaben schaffen<br />
              → Wie unser 5-Stufen-Kompass Verläufe sichtbar und vergleichbar macht – ohne zu bewerten<br />
              → Und wie Durchgängigkeit entsteht, wenn Inhalte, Haltung und Strukturen ineinandergreifen
            </p>
          </div>

          <p className="text-xl text-justify text-green-600 leading-relaxed">
            Sie bringt Ordnung ins System – und macht Entwicklung planbar, kommunizierbar und reflektierbar. Jetzt geht es in die Umsetzung. In Ebene 4 zeigen wir, wie wir unser Konzept in den Trainingsalltag bringen – mit Struktur, Plan und Raum für Entwicklung.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
