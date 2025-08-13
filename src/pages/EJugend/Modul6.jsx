import { motion } from "framer-motion";

export default function EJugendModul6() {
  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        Modul 6: Teamkultur & Kommunikation
      </motion.h1>
      <div className="prose max-w-none">
        <h2>Leitfrage</h2>
        <p>„Wie entsteht ein Teamgefühl, das trägt, begeistert und entwickelt – bei Kindern, Eltern und Trainer:innen?“</p>

        <h2>Zielsetzung dieses Moduls</h2>
        <ul>
          <li>Aufbau einer teamorientierten, wertebasierten Trainingskultur</li>
          <li>Entwicklung kindgerechter Kommunikationsformen und Feedbackrituale</li>
          <li>Stärkung der emotionalen Bindung an Team, Trainer:in und Verein</li>
          <li>Einbindung der Eltern als unterstützende Partner</li>
        </ul>

        <h2>Bausteine einer starken Teamkultur</h2>
        <p>Wertebasis, Rituale, sichtbare Identität, geteilte Verantwortung, positive Fehlerkultur, Respektförderung.</p>

        <h2>Kommunikationsmethoden & Tools</h2>
        <p>Runde der Erkenntnis, Lobkarten, Feedbackpausen, Gesprächskarten, Gefühlsbarometer, Teamkonferenz.</p>

        <h2>Elternarbeit</h2>
        <p>Elternregelkarte, Team-Newsletter, kurze Elterngespräche, Bewegungsbeteiligung, Umgang mit Niederlagen.</p>

        <h2>Trainerhinweise</h2>
        <ul>
          <li>Teamkultur aktiv gestalten und pflegen</li>
          <li>Kommunikation ins Training integrieren</li>
          <li>Klares, konkretes Lob statt Pauschalurteile</li>
          <li>Eltern einbeziehen und führen</li>
        </ul>

        <h2>Typische Trainerfehler</h2>
        <ul>
          <li>Fehlende Rituale - feste Strukturen schaffen</li>
          <li>Konflikte aussitzen - frühzeitig moderieren</li>
          <li>Eltern nur informieren - aktiv einbeziehen</li>
          <li>Pauschales Lob - konkret und individuell loben</li>
        </ul>

        <h2>Ergebnis für den Trainer</h2>
        <p>Du formst ein Team mit Zusammenhalt, Offenheit und gegenseitigem Respekt. Kinder, Eltern und Trainer:innen ziehen an einem Strang – für langfristige Motivation und Freude am Handball.</p>
      </div>
    </div>
  );
}
