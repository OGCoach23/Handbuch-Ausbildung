import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, TrendingUp, Clock, CheckCircle } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemBJugend() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-6 py-12 space-y-8"
    >
      {/* Navigation */}
      <motion.div
        variants={fadeInVariants}
        className="flex items-center text-green-600 mb-8"
      >
        <Link to="/spielsysteme-uebersicht" className="hover:text-green-700 transition-colors">
          Spielsysteme
        </Link>
        <ChevronRight className="w-5 h-5 mx-2" />
        <span className="text-gray-600">B-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          B-Jugend: 5:1-Deckung
        </h1>
        <p className="text-xl text-green-600">
          Taktische Flexibilität und Spielintelligenz
        </p>
      </motion.div>

      {/* Key Info Cards */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="bg-purple-50 p-6 rounded-xl text-center">
          <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <h3 className="font-semibold text-purple-700">System</h3>
          <p className="text-purple-600">5:1-Deckung (fünf in der Linie + eine aktive Spitze)</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl text-center">
          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold text-blue-700">Dauer</h3>
          <p className="text-blue-600">2 Jahre verbindlich</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl text-center">
          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-green-700">Fokus</h3>
          <p className="text-green-600">Flexibilität & Spielintelligenz</p>
        </div>
      </motion.div>

      {/* System Diagram */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.3 }}
        className="bg-white p-8 rounded-2xl shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Systemdiagramm</h2>
        <div className="bg-purple-100 h-64 rounded-lg flex items-center justify-center">
          <p className="text-purple-600 text-lg font-medium">
            5:1-Deckung Formationsdiagramm
          </p>
        </div>
      </motion.div>

      {/* Collapsible Content */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <CollapsibleBox title="Grundprinzipien der 5:1-Deckung">
          <div className="space-y-4">
            <p className="text-green-600">
              Die 5:1-Deckung verbindet Stabilität mit Aktivität. Fünf Spieler bilden eine kompakte Linie, 
              während eine Spitze flexibel agiert und taktische Akzente setzt.
            </p>
            
            <h4 className="font-semibold text-green-700">Kernelemente:</h4>
            <ul className="space-y-2 text-green-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Fünf Spieler bilden eine geschlossene Linie
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Eine Spitze agiert variabel und situativ
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Gegner werden gelenkt und provoziert
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Teamtaktik steht im Vordergrund
              </li>
            </ul>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Rollen und Aufgaben">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Die Linienspieler (5er)</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Kompakte Grundformation</li>
                <li>• Kommunikation untereinander</li>
                <li>• Verschieben als Einheit</li>
                <li>• Absicherung bei Spitzen-Aktionen</li>
                <li>• Antizipation von Angriffswegen</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Die Spitze (1er)</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Flexible Positionierung</li>
                <li>• Lenken der Angriffe</li>
                <li>• Timing für Vorstöße</li>
                <li>• Kommunikation der Spielsituation</li>
                <li>• Entscheidung: Druck oder Rückzug</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Taktische Varianten">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700 mb-2">Passive 5:1</h5>
                <p className="text-green-600 text-sm">
                  Spitze bleibt zurückhaltend, Linie steht kompakt. 
                  Ziel: Stabilität und Absicherung.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700 mb-2">Aggressive 5:1</h5>
                <p className="text-green-600 text-sm">
                  Spitze agiert aktiv, stört früh. 
                  Ziel: Druck und Ballgewinne.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700 mb-2">Variable 5:1</h5>
                <p className="text-green-600 text-sm">
                  Spitze wechselt zwischen aktiv und passiv. 
                  Ziel: Verwirrung des Gegners.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700 mb-2">Seitliche 5:1</h5>
                <p className="text-green-600 text-sm">
                  Spitze konzentriert sich auf eine Seite. 
                  Ziel: Gezielte Störung.
                </p>
              </div>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Trainingsformen und Entwicklung">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Phase 1: Grundformation (1-10 Wochen)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Linie bilden und halten</li>
                  <li>• Spitze positionieren</li>
                  <li>• Grundverschiebungen</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Phase 2: Taktische Varianten (11-20 Wochen)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Verschiedene Spitzen-Rollen</li>
                  <li>• Situative Anpassungen</li>
                  <li>• Kommunikationsstrukturen</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Phase 3: Spielintelligenz (Ab Woche 21)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Gegneranalyse und Anpassung</li>
                  <li>• Eigenständige Entscheidungen</li>
                  <li>• Komplexe Spielsituationen</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Erfolgskriterien">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Technische Ziele</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Kompakte Linienformation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Variable Spitzen-Positionierung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Koordinierte Verschiebungen</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Taktische Ziele</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Situative Systemanpassungen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Gegner lesen und lenken</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Teamtaktisches Verständnis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleBox>
      </motion.div>

      {/* Navigation */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.8 }}
        className="flex justify-between mt-12"
      >
        <Link
          to="/spielsystem-c-jugend"
          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5 mr-2 transform rotate-180" />
          Vorheriges: C-Jugend
        </Link>
        
        <Link
          to="/spielsystem-a-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Nächstes: A-Jugend (6:0)
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
