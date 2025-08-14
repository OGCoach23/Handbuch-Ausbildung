import { motion } from "framer-motion";

export default function Ebene4() {
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
            Ebene 4 – Umsetzung & Weiterentwicklung
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
            <strong>UMSETZUNG – Warum diese Ebene wichtig ist</strong><br />
            Ein Konzept wirkt nur, wenn es gelebt wird. In dieser Ebene geht es um das Entscheidende: Wie bringen wir unsere Ideen in den Alltag – nachhaltig, flexibel und motivierend? Denn Theorie allein bewegt nichts.
          </p>
          <p className="mb-4">
            Was zählt, ist die Umsetzung auf dem Feld – und das System dahinter, das sie möglich macht. Wir verstehen Umsetzung nicht als bloßes „Abarbeiten", sondern als Lernprozess für alle Beteiligten: Trainer:innen, Spieler:innen, Eltern – und den Verein selbst.
          </p>
          <p>
            Diese Ebene schafft die Brücke zwischen Konzept und Realität: Wir strukturieren Training nicht nur nach Einheiten – sondern im Jahresverlauf (Makro–Meso–Mikro). Wir entwickeln unsere Trainer:innen – systematisch, mit Haltung und Verantwortung. Wir binden Eltern ein – nicht als Zaungäste, sondern als echte Entwicklungspartner. Und wir reflektieren, was wirkt – durch Evaluation, Feedback und ein sinnvolles Zielsystem.
          </p>
        </motion.div>

        {/* Karten-Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Trainingsaufbau & Jahresplanung
              </h3>
              <p className="text-green-600 leading-relaxed">
                Gute Entwicklung entsteht nicht zufällig – sie folgt einem Plan mit Haltung.
              </p>
              <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                Zum Detailbereich →
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Laimkademie SV München Laim
              </h3>
              <p className="text-green-600 leading-relaxed">
                Trainerentwicklung beginnt mit Haltung – und braucht Raum zur Entfaltung.
              </p>
              <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                Zum Detailbereich →
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Evaluation, Feedback, Zielsystem
              </h3>
              <p className="text-green-600 leading-relaxed">
                Wir lernen aus Erfahrung – und entwickeln uns systematisch weiter.
              </p>
              <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                Zum Detailbereich →
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fazit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Fazit: Umsetzung, die lebt – Entwicklung, die wirkt
          </h2>
          
          <p className="text-xl text-justify text-green-600 mb-8 leading-relaxed">
            Ebene 4 ist das Herzstück der Realität: Hier zeigen wir, dass unser Konzept nicht nur auf dem Papier stark ist, sondern auf dem Feld, in der Halle, im Vereinsleben. Es geht nicht ums Abarbeiten – es geht ums Verstehen, Gestalten und Erleben.
          </p>

          <div className="bg-green-50 p-8 rounded-2xl shadow-lg mb-8">
            <p className="text-green-700 leading-relaxed">
              <strong>Mit der Trainerakademie, den Elternformaten und einem klar strukturierten Jahresrhythmus schaffen wir den Rahmen:</strong><br />
              → Wir geben unseren Trainer:innen die Werkzeuge in die Hand, ihre Verantwortung mit Haltung und Struktur zu leben<br />
              → Wir holen Eltern ins Boot – nicht als Zaungäste, sondern als Entwicklungspartner<br />
              → Wir bauen ein lernendes System, das sich selbst weiterentwickelt – mit Feedback, Reflexion und klaren Zielen
            </p>
          </div>

          <p className="text-xl text-justify text-green-600 leading-relaxed">
            Denn Ausbildung ist kein Zustand – sie ist ein Prozess. Nicht perfekt, aber wirksam. Nicht starr, aber stabil. Nicht allein, sondern gemeinsam. Jetzt beginnt der echte Weg: in der Halle, auf der Bank, im Dialog. Aus Konzept wird Haltung. Aus Haltung wird Handlung. Aus Handlung wird Entwicklung.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
