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
      </div>

      {/* Fazit Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white border-2 border-green-200 rounded-xl shadow-lg p-8 mt-16"
      >
        <h2 className="text-2xl font-bold text-green-600 mb-6">
          Fazit Ebene 3: Orientierung schaffen – Entwicklung sichtbar machen
        </h2>
        
        <div className="space-y-4 text-green-600 leading-relaxed">
          <p>
            In dieser Ebene haben wir unser Ausbildungssystem tiefer verankert.
          </p>
          
          <p>
            Wir haben nicht nur Inhalte vermittelt, sondern auch gezeigt, wie man Entwicklung erkennt, beschreibt und begleitet – über alle Jahrgänge hinweg.
          </p>
          
          <p>
            Mit dem Kompetenzkompass, den Positionsprofilen und der Systemlogik haben wir ein Instrumentarium geschaffen, das Trainer:innen Orientierung gibt – ohne Einengung. Denn: Wer Entwicklung steuern will, muss sie verstehen und beobachten können.
          </p>
          
          <p>
            Wir haben gesehen:
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Wie Positionsprofile dabei helfen, Rollen zu verstehen und gezielt zu fördern</li>
            <li>Wie Spielsysteme pro Altersstufe Lernräume statt Vorgaben schaffen</li>
            <li>Wie unser 5-Stufen-Kompass Verläufe sichtbar und vergleichbar macht – ohne zu bewerten</li>
            <li>Und wie Durchgängigkeit entsteht, wenn Inhalte, Haltung und Strukturen ineinandergreifen</li>
          </ul>
          
          <p>
            Diese Ebene ist das Bindeglied zwischen Konzept und Alltag.
          </p>
          
          <p>
            Sie bringt Ordnung ins System – und macht Entwicklung planbar, kommunizierbar und reflektierbar.
          </p>
          
          <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-lg font-bold text-green-700 mb-3">
              Ausblick auf Ebene 4: Vom Konzept zur Praxis – und wieder zurück
            </h3>
            
            <p className="mb-4">
              Jetzt geht es in die Umsetzung. Und zwar so, dass sie lebt.
            </p>
            
            <p className="mb-4">
              In Ebene 4 zeigen wir, wie wir unser Konzept in den Trainingsalltag bringen – mit Struktur, Plan und Raum für Entwicklung:
            </p>
            
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li><strong>Trainingsaufbau & Jahresplanung:</strong> Von der Makro- bis zur Mikroperspektive – wie wir Trainingsreihen und Schwerpunkte über das Jahr hinweg denken</li>
              <li><strong>Trainerentwicklung:</strong> Wie wir unsere Trainer:innen begleiten, stärken und weiterbilden – z. B. mit dem Coach-Programm oder der Mini-Akademie</li>
              <li><strong>Eltern als Entwicklungspartner:</strong> Wie wir sie einbinden, informieren und mitnehmen – nicht nur bei Spielen, sondern im ganzen Prozess</li>
              <li><strong>Evaluation & Feedback:</strong> Wie wir Fortschritt messen, Qualität sichern und aus Rückmeldungen lernen</li>
            </ul>
            
            <p className="mb-4">
              Denn ein gutes Konzept ist nichts wert, wenn es nicht wirkt.
            </p>
            
            <p className="mb-4">
              Jetzt schauen wir hin: Wie wird aus Idee Wirkung?
            </p>
            
            <p>
              Und: Wie entwickeln wir uns als System kontinuierlich weiter?
            </p>
            
            <div className="mt-6">
              <Link 
                to="/ebene4"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Zur Ebene 4 →
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
