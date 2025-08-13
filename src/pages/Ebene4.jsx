import { motion } from "framer-motion";

export default function Ebene4() {
  return (
    <div className="space-y-10 p-6">
      <section className="max-w-5xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary"
        >
          Ebene 4 – Umsetzung & Weiterentwicklung
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-green-50 p-4 rounded-xl shadow-lg"
        >
          Ein Konzept wirkt nur, wenn es gelebt wird. In dieser Ebene geht es um das Entscheidende: Wie bringen wir unsere Ideen in den Alltag – nachhaltig, flexibel und motivierend? Denn Theorie allein bewegt nichts. Was zählt, ist die Umsetzung auf dem Feld – und das System dahinter, das sie möglich macht.
          <br /><br />
          Wir verstehen Umsetzung nicht als bloßes „Abarbeiten", sondern als Lernprozess für alle Beteiligten: Trainer:innen, Spieler:innen, Eltern – und den Verein selbst.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p>Diese Ebene schafft die Brücke zwischen Konzept und Realität:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Wir strukturieren Training nicht nur nach Einheiten – sondern im Jahresverlauf (Makro–Meso–Mikro)</li>
            <li>Wir entwickeln unsere Trainer:innen – systematisch, mit Haltung und Verantwortung</li>
            <li>Wir binden Eltern ein – nicht als Zaungäste, sondern als echte Entwicklungspartner</li>
            <li>Und wir reflektieren, was wirkt – durch Evaluation, Feedback und ein sinnvolles Zielsystem</li>
          </ul>
          <p>Die Umsetzung ist kein starres Korsett – sie ist ein lernendes System. Unser Ziel: Praxis, die inspiriert. Planung, die entlastet. Entwicklung, die wirkt. Jetzt wird das Konzept Teil unseres Vereinsalltags – und wir zeigen, wie es gelingt.</p>
        </motion.div>
      </section>

      {/* Karten */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/60 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold text-primary mb-2">Trainingsaufbau & Jahresplanung</h3>
          <p>Gute Entwicklung entsteht nicht zufällig – sie folgt einem Plan mit Haltung.</p>
        </div>
        <div className="bg-white/60 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold text-primary mb-2">Laimkademie SV München Laim</h3>
          <p>Trainerentwicklung beginnt mit Haltung – und braucht Raum zur Entfaltung.</p>
        </div>
        <div className="bg-white/60 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold text-primary mb-2">Evaluation, Feedback, Zielsystem</h3>
          <p>Wir lernen aus Erfahrung – und entwickeln uns systematisch weiter.</p>
        </div>
      </section>

      {/* Fazit */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-primary">Fazit: Umsetzung, die lebt – Entwicklung, die wirkt</h2>
        <p>Ebene 4 ist das Herzstück der Realität: Hier zeigen wir, dass unser Konzept nicht nur auf dem Papier stark ist, sondern auf dem Feld, in der Halle, im Vereinsleben. Es geht nicht ums Abarbeiten – es geht ums Verstehen, Gestalten und Erleben.</p>
        <p>Wir geben unseren Trainer:innen die Werkzeuge in die Hand, ihre Verantwortung mit Haltung und Struktur zu leben. Wir holen Eltern ins Boot – nicht als Zaungäste, sondern als Entwicklungspartner. Und wir bauen ein lernendes System, das sich selbst weiterentwickelt – mit Feedback, Reflexion und klaren Zielen.</p>
        <p>Denn Ausbildung ist kein Zustand – sie ist ein Prozess.</p>
        <p>Mit der Trainerakademie, den Elternformaten und einem klar strukturierten Jahresrhythmus schaffen wir den Rahmen, in dem nachhaltige Entwicklung möglich wird. Nicht perfekt, aber wirksam. Nicht starr, aber stabil. Nicht allein, sondern gemeinsam.</p>
        <p className="font-semibold italic">👉 Jetzt beginnt der echte Weg: in der Halle, auf der Bank, im Dialog. Aus Konzept wird Haltung. Aus Haltung wird Handlung. Aus Handlung wird Entwicklung.</p>
        </div>
      </div>
    </div>
  );
}
