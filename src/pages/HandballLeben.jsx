import { motion } from "framer-motion";

export default function HandballLeben() {
  return (
    <div className="space-y-10">
      {/* Section 1 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-dark space-y-4"
          >
          <h1 className="text-3xl font-bold text-primary">Handball: Schule fürs Leben</h1>

          <p>
            <span className="text-primary font-semibold">Handball ist mehr als Sport – er ist eine Schule fürs Leben.</span>
            In keiner anderen Sportart lernen junge Menschen so vielfältige Kompetenzen wie im Handball.
            Die komplexen Spielsituationen, die ständigen Entscheidungen unter Zeitdruck und die intensive
            Teamarbeit machen Handball zu einem idealen Lernfeld für wichtige Lebensfähigkeiten.
          </p>

          <p>
            Unser Ausbildungskonzept nutzt diese einmaligen Lernchancen bewusst. Wir sehen jede
            Trainingseinheit, jedes Spiel als Gelegenheit, nicht nur handballerische Fertigkeiten
            zu entwickeln, sondern auch Persönlichkeit zu formen und soziale Kompetenzen zu stärken.
          </p>

          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2 text-primary">Was Handball vermittelt:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Entscheidungsfähigkeit unter Zeitdruck</li>
              <li>Teamarbeit und Kommunikation</li>
              <li>Umgang mit Erfolg und Niederlage</li>
              <li>Verantwortung für sich und andere</li>
              <li>Durchhaltevermögen und Disziplin</li>
              <li>Respekt und Fairness</li>
            </ul>
          </div>

          <p>
            Diese Fähigkeiten sind nicht nur im Sport wertvoll. Sie helfen in der Schule, im Beruf,
            in Beziehungen – ein Leben lang. Deshalb investieren wir bewusst Zeit in die Entwicklung
            dieser "Soft Skills" und machen sie zu einem festen Bestandteil unserer Ausbildung.
          </p>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Unser Verständnis:</strong> Gute Handballer sind nicht automatisch starke Persönlichkeiten.
            Aber starke Persönlichkeiten werden mit großer Wahrscheinlichkeit auch gute Handballer –
            und erfolgreiche Menschen.
          </div>
        </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
          <h2 className="text-2xl font-bold text-primary">Konkrete Lebenslektionen</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Entscheidungskompetenz</h3>
              <p className="text-sm mb-2">
                <strong>Im Handball:</strong> Innerhalb von Sekunden entscheiden: Passen, werfen, täuschen?
              </p>
              <p className="text-sm">
                <strong>Im Leben:</strong> Schnelle, aber durchdachte Entscheidungen treffen können.
                Abwägen zwischen Risiko und Chance.
              </p>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Teamfähigkeit</h3>
              <p className="text-sm mb-2">
                <strong>Im Handball:</strong> Nur gemeinsam sind wir stark. Eigene Ziele dem Teamerfolg unterordnen.
              </p>
              <p className="text-sm">
                <strong>Im Leben:</strong> In Gruppen arbeiten, Kompromisse finden, gemeinsame Ziele verfolgen.
              </p>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Stressresistenz</h3>
              <p className="text-sm mb-2">
                <strong>Im Handball:</strong> Bei 29:29 den entscheidenden 7-Meter verwandeln.
              </p>
              <p className="text-sm">
                <strong>Im Leben:</strong> In Prüfungen, Bewerbungen oder schwierigen Situationen
                einen kühlen Kopf bewahren.
              </p>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Durchhaltevermögen</h3>
              <p className="text-sm mb-2">
                <strong>Im Handball:</strong> Auch bei 5-Tore-Rückstand weiterkämpfen und an die Wende glauben.
              </p>
              <p className="text-sm">
                <strong>Im Leben:</strong> Bei Rückschlägen nicht aufgeben, langfristige Ziele verfolgen.
              </p>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Kommunikation</h3>
              <p className="text-sm mb-2">
                <strong>Im Handball:</strong> Ständig kommunizieren: warnen, motivieren, dirigieren.
              </p>
              <p className="text-sm">
                <strong>Im Leben:</strong> Klar und verständlich kommunizieren, zuhören können,
                Feedback geben und annehmen.
              </p>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Verantwortung</h3>
              <p className="text-sm mb-2">
                <strong>Im Handball:</strong> Für eigene Fehler gradestehen, Verantwortung für das Team übernehmen.
              </p>
              <p className="text-sm">
                <strong>Im Leben:</strong> Zu eigenen Entscheidungen stehen, Verantwortung für andere übernehmen.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2 text-primary">Warum Handball besonders geeignet ist:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Komplexität:</strong> Viele Variablen müssen gleichzeitig berücksichtigt werden</li>
              <li><strong>Schnelligkeit:</strong> Wenig Zeit für Entscheidungen – wie im echten Leben</li>
              <li><strong>Körperkontakt:</strong> Lernen, mit Widerstand und Konflikten umzugehen</li>
              <li><strong>Emotionalität:</strong> Hohe emotionale Beteiligung schafft intensive Lernerfahrungen</li>
              <li><strong>Vielseitigkeit:</strong> Verschiedene Rollen und Aufgaben im Team</li>
            </ul>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}