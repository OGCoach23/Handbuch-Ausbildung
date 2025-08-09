import { motion } from "framer-motion";

export default function EJugendModul2() {
  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        Modul 2: Athletik & Motorik
      </motion.h1>
      <div className="prose max-w-none">
        <h2>Leitfrage</h2>
        <p>„Wie trainiere ich altersgerecht Koordination, Ausdauer und Kraft – mit Spaß, Struktur und ohne Überforderung?“</p>

        <h2>Zielsetzung dieses Moduls</h2>
        <ul>
          <li>Entwicklung der grundlegenden konditionellen und koordinativen Fähigkeiten</li>
          <li>Aufbau einer vielseitigen athletischen Basis – als Fundament für spätere Leistungsfähigkeit</li>
          <li>Förderung von Körperwahrnehmung, Bewegungsfreude und motorischer Lernfähigkeit</li>
          <li>Kein Drill, keine Spezialisierung – sondern altersgerechte, spielerische Belastung</li>
        </ul>

        <h2>Schwerpunkte & Inhalte</h2>
        <table>
          <thead><tr><th>Bereich</th><th>Trainingsinhalte & Methoden</th></tr></thead>
          <tbody>
            <tr><td>Koordination</td><td>Sprungfolgen, Jonglieren, Rhythmusspiele, Balancieren, Fang-/Wurfvarianten</td></tr>
            <tr><td>Schnelligkeit</td><td>Sprintduelle, Prellsprints, Reaktionsspiele, Staffelwettbewerbe</td></tr>
            <tr><td>Beweglichkeit</td><td>Tierbewegungen, Rollübungen, dynamische Mobilisation im Spiel</td></tr>
            <tr><td>Kraft</td><td>Stützübungen, Partnerziehen, Medizinballrollen, Klettern</td></tr>
            <tr><td>Gleichgewicht & Orientierung</td><td>Balancierstationen, Drehsprünge, Parcours mit Signalwechsel</td></tr>
            <tr><td>Ausdauer</td><td>Intervallspiele, Bewegungsspiele</td></tr>
          </tbody>
        </table>

        <h2>Methodische Prinzipien</h2>
        <ul>
          <li>Vielseitigkeit: Jede Einheit trainiert 2–3 Fähigkeiten</li>
          <li>Spiel vor Drill</li>
          <li>Wiederholung mit Variation</li>
          <li>Differenzierung ermöglichen</li>
          <li>Wettkampf ohne Verlierer</li>
        </ul>

        <h2>Trainingsformate & Praxisbeispiele</h2>
        <p>Stationstraining, Parcoursformen, Mini-Staffeln, Kreativaufgaben, Wettkampfformen.</p>

        <h2>Material & Gestaltung</h2>
        <p>Bälle in verschiedenen Größen, Seile, Reifen, Matten, Farben-/Signalkarten, Alltagsmaterialien.</p>

        <h2>Was Trainer:innen besonders beachten müssen</h2>
        <ul>
          <li>Keine Dauerläufe oder Maximalwiederholungen</li>
          <li>Technik integrieren, aber nicht überfrachten</li>
          <li>Beobachten statt bewerten</li>
          <li>Fortschritt sichtbar machen</li>
        </ul>

        <h2>Typische Trainerfehler</h2>
        <ul>
          <li>Monotone Übungen → Abwechslung schaffen</li>
          <li>Wettbewerbe mit Verlierern → kooperative Ziele</li>
          <li>Gleiche Übung für alle → Varianten anbieten</li>
        </ul>

        <h2>Ergebnis für den Trainer</h2>
        <p>Du nutzt das „goldene Lernalter“ für Koordination, Bewegungsfreude und Körperwahrnehmung – ohne Druck. Du baust die Basis für spätere Leistung, aber schaffst heute Motivation.</p>
      </div>
    </div>
  );
}
