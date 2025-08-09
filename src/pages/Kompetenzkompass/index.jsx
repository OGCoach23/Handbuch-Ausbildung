import { motion } from "framer-motion";

export default function Kompetenzkompass() {
  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-purple-800 mb-6"
      >
        🧭 Kompetenzkompass
      </motion.h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-3">Ziel des Kompetenzkompasses</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Strukturierter, nachvollziehbarer Ausbildungsweg unabhängig vom Lebensalter</li>
          <li>Differenzierte, sichtbare Entwicklung in fünf Kompetenzstufen</li>
          <li>Förderdiagnostik & Motivationstool</li>
          <li>Klare Kriterien für Trainer:innen zur Beurteilung & Trainingssteuerung</li>
          <li>Integration von Quereinsteiger:innen & Hochentwickelten möglich</li>
          <li>Übergreifende Entwicklungslogik für alle Module</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-3">Grundprinzipien</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Altersunabhängig – bewertet, was Spieler:innen können, nicht ihr Alter</li>
          <li>Modular – spezifische Stufen für jedes Modul (M1–M6)</li>
          <li>Sichtbar – Symbolsystem (Farben, Etiketten, Armbänder, digital)</li>
          <li>Fördernd, nicht bewertend</li>
          <li>Umsetzbar im normalen Trainingsbetrieb</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-3">Anwendung in der Praxis</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Zielkarten mit allen Modulen & Stufen</li>
          <li>Trainingstagebuch & Feedbackrunden</li>
          <li>Zwischengespräche mind. 2× pro Saison</li>
          <li>Kompetenz-Abzeichen/Zertifikate bei neuen Stufen</li>
          <li>Integration in Spielerauswahl & Förderung</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-3">Vorteile</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Besseres Verständnis des Trainings</li>
          <li>Differenziertes Förderwerkzeug für Trainer:innen</li>
          <li>Transparenz für Eltern</li>
          <li>Hohe Bindung durch sichtbare Entwicklung</li>
          <li>Unterschied zwischen Breite & Spitze sichtbar ohne Ausgrenzung</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-3">Die 5 Kompetenzstufen</h2>
        <table className="w-full border border-gray-300">
          <thead className="bg-purple-100">
            <tr>
              <th className="p-2 text-left">Stufe</th>
              <th className="p-2 text-left">Symbol</th>
              <th className="p-2 text-left">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Basis</td>
              <td className="p-2">⚪️ Weiß</td>
              <td className="p-2">Ich kenne die Grundlagen – ich kann mitmachen.</td>
            </tr>
            <tr>
              <td className="p-2">Stabil</td>
              <td className="p-2">🟡 Gelb</td>
              <td className="p-2">Ich kann das Geübte sicher in Spielformen anwenden.</td>
            </tr>
            <tr>
              <td className="p-2">Flexibel</td>
              <td className="p-2">🟢 Grün</td>
              <td className="p-2">Ich erkenne Situationen und finde eigene Lösungen.</td>
            </tr>
            <tr>
              <td className="p-2">Spielbestimmend</td>
              <td className="p-2">🔵 Blau</td>
              <td className="p-2">Ich kann Spiele aktiv mitgestalten – auch unter Druck.</td>
            </tr>
            <tr>
              <td className="p-2">Führend</td>
              <td className="p-2">🔴 Rot</td>
              <td className="p-2">Ich beeinflusse Mitspieler:innen & Spielverlauf strategisch und kommunikativ.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
