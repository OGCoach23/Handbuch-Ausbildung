import { motion } from "framer-motion";

export default function HandballLeben() {
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
            Handball: Schule fürs Leben
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
            <strong>Handball ist mehr als Sport – er ist eine Schule fürs Leben.</strong><br />
            In keiner anderen Sportart lernen junge Menschen so vielfältige Kompetenzen wie im Handball.
            Die komplexen Spielsituationen, die ständigen Entscheidungen unter Zeitdruck und die intensive
            Teamarbeit machen Handball zu einem idealen Lernfeld für wichtige Lebensfähigkeiten.
          </p>
          <p className="mb-4">
            Unser Ausbildungskonzept nutzt diese einmaligen Lernchancen bewusst. Wir sehen jede
            Trainingseinheit, jedes Spiel als Gelegenheit, nicht nur handballerische Fertigkeiten
            zu entwickeln, sondern auch Persönlichkeit zu formen und soziale Kompetenzen zu stärken.
          </p>
          <p>
            Diese Fähigkeiten sind nicht nur im Sport wertvoll. Sie helfen in der Schule, im Beruf,
            in Beziehungen – ein Leben lang. Deshalb investieren wir bewusst Zeit in die Entwicklung
            dieser "Soft Skills" und machen sie zu einem festen Bestandteil unserer Ausbildung.
          </p>
        </motion.div>

        {/* Karten-Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Entscheidungskompetenz Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Entscheidungskompetenz
              </h3>
              <p className="text-green-600 leading-relaxed mb-3">
                <strong>Im Handball:</strong> Innerhalb von Sekunden entscheiden: Passen, werfen, täuschen?
              </p>
              <p className="text-green-600 leading-relaxed">
                <strong>Im Leben:</strong> Schnelle, aber durchdachte Entscheidungen treffen können.
                Abwägen zwischen Risiko und Chance.
              </p>
            </div>
          </motion.div>

          {/* Teamfähigkeit Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Teamfähigkeit
              </h3>
              <p className="text-green-600 leading-relaxed mb-3">
                <strong>Im Handball:</strong> Nur gemeinsam sind wir stark. Eigene Ziele dem Teamerfolg unterordnen.
              </p>
              <p className="text-green-600 leading-relaxed">
                <strong>Im Leben:</strong> In Gruppen arbeiten, Kompromisse finden, gemeinsame Ziele verfolgen.
              </p>
            </div>
          </motion.div>

          {/* Stressresistenz Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Stressresistenz
              </h3>
              <p className="text-green-600 leading-relaxed mb-3">
                <strong>Im Handball:</strong> Bei 29:29 den entscheidenden 7-Meter verwandeln.
              </p>
              <p className="text-green-600 leading-relaxed">
                <strong>Im Leben:</strong> In Prüfungen, Bewerbungen oder schwierigen Situationen
                einen kühlen Kopf bewahren.
              </p>
            </div>
          </motion.div>

          {/* Durchhaltevermögen Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Durchhaltevermögen
              </h3>
              <p className="text-green-600 leading-relaxed mb-3">
                <strong>Im Handball:</strong> Auch bei 5-Tore-Rückstand weiterkämpfen und an die Wende glauben.
              </p>
              <p className="text-green-600 leading-relaxed">
                <strong>Im Leben:</strong> Bei Rückschlägen nicht aufgeben, langfristige Ziele verfolgen.
              </p>
            </div>
          </motion.div>

          {/* Kommunikation Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Kommunikation
              </h3>
              <p className="text-green-600 leading-relaxed mb-3">
                <strong>Im Handball:</strong> Ständig kommunizieren: warnen, motivieren, dirigieren.
              </p>
              <p className="text-green-600 leading-relaxed">
                <strong>Im Leben:</strong> Klar und verständlich kommunizieren, zuhören können,
                Feedback geben und annehmen.
              </p>
            </div>
          </motion.div>

          {/* Verantwortung Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Verantwortung
              </h3>
              <p className="text-green-600 leading-relaxed mb-3">
                <strong>Im Handball:</strong> Für eigene Fehler gradestehen, Verantwortung für das Team übernehmen.
              </p>
              <p className="text-green-600 leading-relaxed">
                <strong>Im Leben:</strong> Zu eigenen Entscheidungen stehen, Verantwortung für andere übernehmen.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Warum Handball besonders geeignet ist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg mb-10"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">Warum Handball besonders geeignet ist:</h3>
          <ul className="list-disc list-inside space-y-2 text-green-600">
            <li><strong>Komplexität:</strong> Viele Variablen müssen gleichzeitig berücksichtigt werden</li>
            <li><strong>Schnelligkeit:</strong> Wenig Zeit für Entscheidungen – wie im echten Leben</li>
            <li><strong>Körperkontakt:</strong> Lernen, mit Widerstand und Konflikten umzugehen</li>
            <li><strong>Emotionalität:</strong> Hohe emotionale Beteiligung schafft intensive Lernerfahrungen</li>
            <li><strong>Vielseitigkeit:</strong> Verschiedene Rollen und Aufgaben im Team</li>
          </ul>
        </motion.div>

        {/* Fazit-Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg text-justify text-lg leading-relaxed"
        >
          <p className="text-green-600">
            <strong>Unser Verständnis:</strong> Gute Handballer sind nicht automatisch starke Persönlichkeiten.
            Aber starke Persönlichkeiten werden mit großer Wahrscheinlichkeit auch gute Handballer –
            und erfolgreiche Menschen. Deshalb investieren wir bewusst Zeit in die Entwicklung
            dieser "Soft Skills" und machen sie zu einem festen Bestandteil unserer Ausbildung.
          </p>
        </motion.div>
      </div>
    </div>
  );
}