import { motion } from "framer-motion";

export default function EJugendModul3() {
  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        Modul 3: Technik & Taktik
      </motion.h1>
      <div className="prose max-w-none">
        <h2>Leitfrage</h2>
        <p>„Wie lernen Kinder handballtypische Techniken – mit Spielbezug, Motivation und eigener Entscheidungsfreude?“</p>

        <h2>Zielsetzung dieses Moduls</h2>
        <ul>
          <li>Systematischer Aufbau technischer Grundfertigkeiten</li>
          <li>Erste Verknüpfung von Technik und Spielsituation</li>
          <li>Förderung von Variabilität, Spiellust und Entscheidungsverhalten</li>
          <li>Techniklernen spielerisch, nicht mechanisch</li>
        </ul>

        <h2>Must-have & Nice-to-have Inhalte</h2>
        <table>
          <thead><tr><th>Technik</th><th>Must-have</th><th>Nice-to-have</th></tr></thead>
          <tbody>
            <tr><td>Passen</td><td>Brustpass, Prellpass, Pass in Bewegung</td><td>Sprungpass, No-look, schwache Hand</td></tr>
            <tr><td>Fangen</td><td>Beidseitig, frontal & seitlich, in Bewegung</td><td>Einhändig, nach Abprall, mit Drehung</td></tr>
            <tr><td>Werfen</td><td>Standwurf, Wurf aus dem Laufen, Zielwürfe</td><td>Sprungwurf vorbereitet, unter Kontakt</td></tr>
            <tr><td>Prellen</td><td>Beidseitig, unter Zeitdruck, mit Raumwechsel</td><td>Rhythmuswechsel, Kreativ-Prellen</td></tr>
            <tr><td>Täuschung</td><td>Körpertäuschung, Richtungswechsel einfach</td><td>Wurftäuschung, Passfinte</td></tr>
            <tr><td>Abwehrtechnik</td><td>Stellung zum Gegner, Arme oben</td><td>Abfangen, Passweg lesen, 1:1-Kontakt</td></tr>
          </tbody>
        </table>

        <h2>Methodische Prinzipien</h2>
        <ul>
          <li>Technik mit Spielbezug</li>
          <li>Wiederholung = Variation</li>
          <li>Beidseitigkeit früh fördern</li>
          <li>Verstehen vor Nachmachen</li>
          <li>Feedback konkret halten</li>
        </ul>

        <h2>Trainingsformate & Praxisbeispiele</h2>
        <p>Technikspiele, Passformen mit Bewegung, Technik-Parcours, Entscheidungstraining, Kleingruppenspiele mit Zieltechnik.</p>

        <h2>Kombinationsformen Technik + Taktik</h2>
        <p>Technik in Spielsituationen integrieren, kognitive Aktivierung durch Farbsignale, Gegnerdruck steigern, Challenges einbauen.</p>

        <h2>Was Trainer:innen besonders beachten müssen</h2>
        <ul>
          <li>Technik funktional denken</li>
          <li>Vielfalt vor Vorgabe</li>
          <li>Spielformen bevorzugen</li>
          <li>Feedback sofort, spezifisch & positiv</li>
        </ul>

        <h2>Typische Trainerfehler</h2>
        <ul>
          <li>Reihenübungen ohne Ziel - Spielbezug schaffen</li>
          <li>Einseitiger Wurfarmfokus - beidseitig trainieren</li>
          <li>Technik nur vormachen - lieber beschreiben und entdecken lassen</li>
          <li>Korrekturen zu früh - erst beobachten</li>
        </ul>

        <h2>Ergebnis für den Trainer</h2>
        <p>Du entwickelst handballtechnische Grundlagen – mit Spaß, Spielbezug und individuellem Zugang. Du hilfst Kindern zu verstehen, was sie tun – und wie sie es im Spiel anwenden können.</p>
      </div>
    </div>
  );
}
