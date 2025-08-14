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
            <strong>Ein Konzept wirkt nur, wenn es gelebt wird.</strong>
          </p>
          <p className="mb-4">
            In dieser Ebene geht es um das Entscheidende: Wie bringen wir unsere Ideen in den Alltag – nachhaltig, flexibel und motivierend?
          </p>
          <p className="mb-4">
            Denn Theorie allein bewegt nichts. Was zählt, ist die Umsetzung auf dem Feld – und das System dahinter, das sie möglich macht.
          </p>
          <p className="mb-4">
            Wir verstehen Umsetzung nicht als bloßes „Abarbeiten", sondern als Lernprozess für alle Beteiligten: Trainer:innen, Spieler:innen, Eltern – und den Verein selbst.
          </p>
          <p className="mb-4">
            Diese Ebene schafft die Brücke zwischen Konzept und Realität:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
            <li>Wir strukturieren Training nicht nur nach Einheiten – sondern im Jahresverlauf (Makro–Meso–Mikro)</li>
            <li>Wir entwickeln unsere Trainer:innen – systematisch, mit Haltung und Verantwortung</li>
            <li>Wir binden Eltern ein – nicht als Zaungäste, sondern als echte Entwicklungspartner</li>
            <li>Und wir reflektieren, was wirkt – durch Evaluation, Feedback und ein sinnvolles Zielsystem</li>
          </ul>
          <p className="mb-4">
            Die Umsetzung ist kein starres Korsett – sie ist ein lernendes System.
          </p>
          <p className="mb-4">
            Unser Ziel: Praxis, die inspiriert. Planung, die entlastet. Entwicklung, die wirkt.
          </p>
          <p>
            Jetzt wird das Konzept Teil unseres Vereinsalltags – und wir zeigen, wie es gelingt.
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

        {/* Fazit Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white border-2 border-green-200 rounded-xl shadow-lg p-8 mt-16"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Fazit: Umsetzung, die lebt – Entwicklung, die wirkt
          </h2>
          
          <div className="space-y-4 text-green-600 leading-relaxed">
            <p>
              Ebene 4 ist das Herzstück der Realität: Hier zeigen wir, dass unser Konzept nicht nur auf dem Papier stark ist, sondern auf dem Feld, in der Halle, im Vereinsleben. Es geht nicht ums Abarbeiten – es geht ums Verstehen, Gestalten und Erleben.
            </p>
            
            <p>
              Wir geben unseren Trainer:innen die Werkzeuge in die Hand, ihre Verantwortung mit Haltung und Struktur zu leben. Wir holen Eltern ins Boot – nicht als Zaungäste, sondern als Entwicklungspartner. Und wir bauen ein lernendes System, das sich selbst weiterentwickelt – mit Feedback, Reflexion und klaren Zielen.
            </p>
            
            <p>
              Denn Ausbildung ist kein Zustand – sie ist ein Prozess.
            </p>
            
            <p>
              Mit der Trainerakademie, den Elternformaten und einem klar strukturierten Jahresrhythmus schaffen wir den Rahmen, in dem nachhaltige Entwicklung möglich wird. Nicht perfekt, aber wirksam. Nicht starr, aber stabil. Nicht allein, sondern gemeinsam.
            </p>
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 font-semibold mb-4">
                👉 Jetzt beginnt der echte Weg: in der Halle, auf der Bank, im Dialog.
              </p>
              <p className="text-green-600">
                Aus Konzept wird Haltung. Aus Haltung wird Handlung. Aus Handlung wird Entwicklung.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
