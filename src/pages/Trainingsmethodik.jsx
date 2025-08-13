import { motion } from "framer-motion";

export default function Trainingsmethodik() {
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
          <h1 className="text-3xl font-bold text-primary">Trainingsmethodik & Aufbau</h1>

          <p>
            <span className="text-primary font-semibold">Gutes Training entsteht nicht zufällig.</span>
            Es braucht eine klare Struktur, durchdachte Methoden und ein systematisches Vorgehen.
            Unser Trainingsaufbau folgt bewährten sportwissenschaftlichen Prinzipien und ist speziell
            auf die Bedürfnisse des Handballsports und die verschiedenen Altersstufen angepasst.
          </p>

          <p>
            Dabei stehen nicht nur die technischen und taktischen Inhalte im Fokus, sondern auch
            die Art und Weise, wie wir diese vermitteln. Denn nur wenn Spieler:innen verstehen,
            warum sie etwas tun, und wenn sie sich dabei wohlfühlen, kann echtes Lernen stattfinden.
          </p>

          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2 text-primary">Unsere methodischen Grundsätze:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Vom Einfachen zum Komplexen</li>
              <li>Spielerische Vermittlung vor analytischem Training</li>
              <li>Positive Fehlerkultur und konstruktives Feedback</li>
              <li>Altersgerechte Anforderungen und Belastungen</li>
              <li>Individualisierung innerhalb der Gruppenarbeit</li>
            </ul>
          </div>

          <p>
            Unser Ziel ist es, Trainer:innen praktische Werkzeuge an die Hand zu geben, mit denen
            sie abwechslungsreiche, effektive und motivierende Trainingseinheiten gestalten können.
            Dabei berücksichtigen wir sowohl die fachlichen Aspekte als auch die gruppendynamischen
            und pädagogischen Herausforderungen.
          </p>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Unser Ansatz:</strong> Trainingsmethodik ist mehr als nur Übungsauswahl. 
            Es geht um die richtige Balance zwischen Fordern und Fördern, zwischen Struktur und Kreativität,
            zwischen Einzelentwicklung und Teamarbeit.
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
          <h2 className="text-2xl font-bold text-primary">Trainingsaufbau & Struktur</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Aufwärmung (15-20 Min)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Allgemeine Aktivierung</li>
                <li>Ballgewöhnung</li>
                <li>Koordinative Aufgaben</li>
                <li>Erste technische Elemente</li>
              </ul>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Hauptteil (30-40 Min)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Technikerlernung/-verbesserung</li>
                <li>Taktische Grundlagen</li>
                <li>Spielformen</li>
                <li>Konditionelle Aspekte</li>
              </ul>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Spielphase (15-20 Min)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Anwendung des Gelernten</li>
                <li>Wettkampfcharakter</li>
                <li>Freie Spielentwicklung</li>
                <li>Spaß und Motivation</li>
              </ul>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Ausklang (5-10 Min)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Entspannung</li>
                <li>Reflexion</li>
                <li>Organisatorisches</li>
                <li>Positive Verstärkung</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2 text-primary">Wichtige Prinzipien:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Variabilität:</strong> Abwechslungsreiche Übungen und Spielformen</li>
              <li><strong>Progression:</strong> Kontinuierliche Steigerung der Anforderungen</li>
              <li><strong>Individualisierung:</strong> Anpassung an unterschiedliche Leistungsniveaus</li>
              <li><strong>Transfer:</strong> Übungen mit direktem Spielbezug</li>
              <li><strong>Motivation:</strong> Positive Atmosphäre und Erfolgserlebnisse</li>
            </ul>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}