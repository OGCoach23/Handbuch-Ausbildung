import { motion } from "framer-motion";

export default function Leitbild() {
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
          <h1 className="text-3xl font-bold text-primary">Leitbild & Zielsetzung</h1>

          <p>
            <span className="text-primary font-semibold">Wir entwickeln Menschen durch Handball weiter.</span>
            Unser Ausbildungskonzept verfolgt eine klare Vision: Handball ist mehr als ein Spiel – er ist eine Schule fürs Leben.
          </p>

          <p>
            Deshalb entwickeln wir Spieler:innen nicht nur technisch und taktisch weiter, sondern fördern bewusst 
            ihre Persönlichkeit. Wir vermitteln Werte wie Fairness, Teamgeist, Durchhaltevermögen und Verantwortung – 
            Eigenschaften, die in jeder Lebenssituation hilfreich sind.
          </p>

          <p>
            Unser Handball-Training ist immer auch Persönlichkeitstraining. Wir schaffen bewusst Situationen, 
            in denen Spieler:innen lernen können: aus Fehlern, aus Erfolgen, aus dem Miteinander. 
            Sie lernen, Herausforderungen anzunehmen, Rückschläge zu überwinden und ihre Stärken zu entdecken.
          </p>

          <p className="font-semibold">Wir glauben: Gute Ausbildung beginnt mit guter Haltung.</p>
        </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-200">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-green-50 p-4 rounded-xl shadow">
              <h2 className="font-bold mb-2 text-primary">Wir vermitteln eine Haltung:</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Neugier und Mut zum Ausprobieren</li>
                <li>Freude an Bewegung und am gemeinsamen Spiel</li>
                <li>Verantwortung für sich und das Team</li>
                <li>Respekt gegenüber Mitspielern, Gegnern und Schiedsrichtern</li>
                <li>Bereitschaft, aus Fehlern zu lernen und sich weiterzuentwickeln</li>
              </ul>
            </div>

            <p>
              Dabei setzen wir auf eine Kultur des Lernens, nicht des Bewertens. Fehler sind willkommen – 
              sie sind Gelegenheiten zum Wachsen. Erfolg messen wir nicht nur an Ergebnissen, 
              sondern an der persönlichen Entwicklung jeder einzelnen Spielerin und jedes einzelnen Spielers.
            </p>

            <p>
              Wir fördern deshalb eine aufgabenorientierte Lernkultur: Nicht das Ergebnis steht im Vordergrund, sondern der
              Fortschritt. Erfolg bedeutet: Ich kann heute etwas besser als gestern – weil ich dranbleibe, mich fordere, mich
              weiterentwickle.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2 text-primary">Unsere Ziele:</h2>
            <p className="text-sm text-gray-700 italic mb-2">Am Ende der Jugendzeit soll jede:r Spieler:in …</p>
            <ul className="list-disc list-inside space-y-1">
              <li>… Handball auf seinem/ihrem Niveau beherrschen und Freude daran haben</li>
              <li>… wissen, was es bedeutet, im Team zu arbeiten und Verantwortung zu übernehmen</li>
              <li>… gelernt haben, mit Erfolg und Misserfolg umzugehen</li>
              <li>… selbstbewusst auftreten und seine/ihre Stärken kennen</li>
              <li>… bereit sein, sich neuen Herausforderungen zu stellen</li>
              <li>… Respekt vor anderen Menschen haben und fair mit ihnen umgehen</li>
              <li>… stolz darauf sein, Teil des SV Laim zu sein</li>
            </ul>
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Trainer:innen-Blick:</strong> Wir verstehen uns als Entwicklungsbegleiter:innen. Wir sind da, um Potentiale zu entdecken, Wege aufzuzeigen und Selbstvertrauen zu stärken. Unser Ziel ist es, dass jede:r Spieler:in am Ende sagen kann: „Durch Handball bin ich stärker geworden."
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Elternblick:</strong> Wir wollen mehr als Punkte oder Tabellen – wir wollen, dass Ihr Kind stark wird: im Kopf, im Herz, im Spiel. Handball ist für uns eine Bühne, auf der Kinder wachsen – nicht nur als Spieler:innen, sondern als Menschen.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Für Spieler:innen – kurz erklärt:</strong> Hier geht's nicht nur ums Gewinnen. Es geht darum, dass du deinen Weg findest. Du lernst, was du kannst, wie du denkst – und dass du mehr schaffen kannst, als du glaubst. Dass du ein Team hast, dass du Ansprechpartner kennen lernst, die dir helfen können. Dass du den Verein als deine Heimat wahrnimmst. Dafür geben wir dir Raum, Rückenwind – und echte Aufgaben.
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}