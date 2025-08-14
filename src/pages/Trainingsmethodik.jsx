import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Trainingsmethodik() {
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
            Trainingsmethodik & Aufbau
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
            <strong>Gutes Training entsteht nicht zufällig.</strong><br />
            Es braucht eine klare Struktur, durchdachte Methoden und ein systematisches Vorgehen.
            Unser Trainingsaufbau folgt bewährten sportwissenschaftlichen Prinzipien und ist speziell
            auf die Bedürfnisse des Handballsports und die verschiedenen Altersstufen angepasst.
          </p>
          <p className="mb-4">
            Dabei stehen nicht nur die technischen und taktischen Inhalte im Fokus, sondern auch
            die Art und Weise, wie wir diese vermitteln. Denn nur wenn Spieler:innen verstehen,
            warum sie etwas tun, und wenn sie sich dabei wohlfühlen, kann echtes Lernen stattfinden.
          </p>
          <p>
            Unser Ziel ist es, Trainer:innen praktische Werkzeuge an die Hand zu geben, mit denen
            sie abwechslungsreiche, effektive und motivierende Trainingseinheiten gestalten können.
            Dabei berücksichtigen wir sowohl die fachlichen Aspekte als auch die gruppendynamischen
            und pädagogischen Herausforderungen.
          </p>
        </motion.div>

        {/* Methodische Grundsätze */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg mb-10"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">Unsere methodischen Grundsätze:</h3>
          <ul className="list-disc list-inside space-y-2 text-green-600">
            <li>Vom Einfachen zum Komplexen</li>
            <li>Spielerische Vermittlung vor analytischem Training</li>
            <li>Positive Fehlerkultur und konstruktives Feedback</li>
            <li>Altersgerechte Anforderungen und Belastungen</li>
            <li>Individualisierung innerhalb der Gruppenarbeit</li>
          </ul>
        </motion.div>

        {/* Unser Ansatz */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg mb-10"
        >
          <p className="text-green-600 text-lg italic">
            <strong>Unser Ansatz:</strong> Trainingsmethodik ist mehr als nur Übungsauswahl. 
            Es geht um die richtige Balance zwischen Fordern und Fördern, zwischen Struktur und Kreativität,
            zwischen Einzelentwicklung und Teamarbeit.
          </p>
        </motion.div>

        {/* Trainingsaufbau & Struktur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Trainingsaufbau & Struktur</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <h3 className="font-bold mb-3 text-green-700 text-lg">Aufwärmung (15-20 Min)</h3>
              <ul className="list-disc list-inside space-y-2 text-green-600">
                <li>Allgemeine Aktivierung</li>
                <li>Ballgewöhnung</li>
                <li>Koordinative Aufgaben</li>
                <li>Erste technische Elemente</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <h3 className="font-bold mb-3 text-green-700 text-lg">Hauptteil (30-40 Min)</h3>
              <ul className="list-disc list-inside space-y-2 text-green-600">
                <li>Technikerlernung/-verbesserung</li>
                <li>Taktische Grundlagen</li>
                <li>Spielformen</li>
                <li>Konditionelle Aspekte</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <h3 className="font-bold mb-3 text-green-700 text-lg">Spielphase (15-20 Min)</h3>
              <ul className="list-disc list-inside space-y-2 text-green-600">
                <li>Anwendung des Gelernten</li>
                <li>Wettkampfcharakter</li>
                <li>Freie Spielentwicklung</li>
                <li>Spaß und Motivation</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <h3 className="font-bold mb-3 text-green-700 text-lg">Ausklang (5-10 Min)</h3>
              <ul className="list-disc list-inside space-y-2 text-green-600">
                <li>Entspannung</li>
                <li>Reflexion</li>
                <li>Organisatorisches</li>
                <li>Positive Verstärkung</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Wichtige Prinzipien */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">Wichtige Prinzipien:</h3>
          <ul className="list-disc list-inside space-y-2 text-green-600">
            <li><strong>Variabilität:</strong> Abwechslungsreiche Übungen und Spielformen</li>
            <li><strong>Progression:</strong> Kontinuierliche Steigerung der Anforderungen</li>
            <li><strong>Individualisierung:</strong> Anpassung an unterschiedliche Leistungsniveaus</li>
            <li><strong>Transfer:</strong> Übungen mit direktem Spielbezug</li>
            <li><strong>Motivation:</strong> Positive Atmosphäre und Erfolgserlebnisse</li>
          </ul>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16">
        <Link 
          to="/schule-leben"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          ← HandballLeben
        </Link>
        <Link 
          to="/altersstufen"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Altersstufen →
        </Link>
      </div>
    </div>
  );
}