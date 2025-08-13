import { motion } from "framer-motion";

export default function Kompetenzkompass() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        🧭 Kompetenzkompass
      </motion.h1>

      <div className="space-y-6 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Ziel des Kompetenzkompasses</h2>
          <ul className="list-disc ml-5">
            <li>Strukturierter, nachvollziehbarer Ausbildungsweg unabhängig vom Lebensalter</li>
            <li>Differenzierte, sichtbare Entwicklung in fünf Kompetenzstufen</li>
            <li>Förderdiagnostik & Motivationstool für Orientierung, Feedback, Zielsetzung</li>
            <li>Klare Kriterien für Trainer:innen zur Beurteilung & Trainingssteuerung</li>
            <li>Integration von Quereinsteiger:innen & Hochentwickelten möglich</li>
            <li>Übergreifende Entwicklungslogik für alle Altersstufen</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Grundprinzipien</h2>
          <ul className="list-disc ml-5">
            <li>Altersunabhängig – bewertet Fähigkeiten, nicht Alter</li>
            <li>Modular – spezifische Stufen für alle 6 Module</li>
            <li>Sichtbar – Symbolsystem (Farben, Etiketten, Armbänder, digital)</li>
            <li>Fördernd, nicht bewertend – Fokus auf Entwicklung</li>
            <li>Umsetzbar im normalen Trainingsbetrieb</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Anwendung in der Praxis</h2>
          <ul className="list-disc ml-5">
            <li>Zielkarten mit allen Modulen und Stufen</li>
            <li>Trainingstagebuch oder Feedbackrunden</li>
            <li>Zwischengespräche mindestens 2× pro Saison</li>
            <li>Kompetenz-Abzeichen oder Zertifikate bei neuen Stufen</li>
            <li>Integration in Spielerauswahl & Förderung</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Vorteile</h2>
          <ul className="list-disc ml-5">
            <li>Spieler:innen verstehen ihr Training besser</li>
            <li>Trainer:innen fördern gezielter</li>
            <li>Eltern erkennen transparent den Ausbildungsfokus</li>
            <li>Hohe Bindung durch sichtbare Entwicklung</li>
            <li>Klare Trennung zwischen Breite & Spitze ohne Ausschluss</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Die 5 Kompetenzstufen</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 p-2">Stufe</th>
                <th className="border-b-2 p-2">Symbol</th>
                <th className="border-b-2 p-2">Beschreibung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">1. Basis</td>
                <td className="p-2">⚪️ Weiß</td>
                <td className="p-2">Ich kenne die Grundlagen – ich kann mitmachen.</td>
              </tr>
              <tr>
                <td className="p-2">2. Stabil</td>
                <td className="p-2">🟡 Gelb</td>
                <td className="p-2">Ich kann das Geübte sicher und in Spielformen anwenden.</td>
              </tr>
              <tr>
                <td className="p-2">3. Flexibel</td>
                <td className="p-2">🟢 Grün</td>
                <td className="p-2">Ich erkenne Situationen und finde eigene Lösungen.</td>
              </tr>
              <tr>
                <td className="p-2">4. Spielbestimmend</td>
                <td className="p-2">🔵 Blau</td>
                <td className="p-2">Ich kann Spiele aktiv mitgestalten – auch unter Druck.</td>
              </tr>
              <tr>
                <td className="p-2">5. Führend</td>
                <td className="p-2">🔴 Rot</td>
                <td className="p-2">Ich beeinflusse Mitspieler:innen & Spielverlauf strategisch und kommunikativ.</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">Ein Spieler kann z. B. in M3 auf Stufe 4 sein, aber in M4 auf Stufe 2 - individuelles Förderprofil!</p>
        </section>
      </div>
    </div>
    </div>
  );
}


