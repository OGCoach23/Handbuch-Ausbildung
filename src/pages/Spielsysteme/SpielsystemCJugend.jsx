import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Trophy, Clock, CheckCircle } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemCJugend() {
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
        <span className="text-gray-600">C-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          C-Jugend: 3:2:1-Deckung
        </h1>
        <p className="text-xl text-green-600">
          Spielverständnis und taktische Entscheidungsfindung
        </p>
      </motion.div>

      {/* Key Info Cards */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="bg-yellow-50 p-6 rounded-xl text-center">
          <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
          <h3 className="font-semibold text-yellow-700">System</h3>
          <p className="text-yellow-600">3:2:1-Deckung (drei hinten, zwei Halbe, eine Spitze)</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl text-center">
          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold text-blue-700">Dauer</h3>
          <p className="text-blue-600">2 Jahre verbindlich</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl text-center">
          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-green-700">Fokus</h3>
          <p className="text-green-600">Spielverständnis & Entscheidungen</p>
        </div>
      </motion.div>

      {/* System Diagram */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.3 }}
        className="bg-white p-8 rounded-2xl shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Systemdiagramm</h2>
        <div className="bg-yellow-100 h-64 rounded-lg flex items-center justify-center">
          <p className="text-yellow-600 text-lg font-medium">
            3:2:1-Deckung Formationsdiagramm
          </p>
        </div>
      </motion.div>

      {/* Collapsible Content */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <CollapsibleBox title="Grundprinzipien der 3:2:1-Deckung">
          <div className="space-y-4">
            <p className="text-green-600">
              Die 3:2:1-Deckung ist das erste System mit klarer Raumaufteilung. Drei Spieler sichern hinten ab, 
              zwei Halbe agieren flexibel, und eine Spitze stört aktiv die Spieleröffnung.
            </p>
            
            <h4 className="font-semibold text-green-700">Kernelemente:</h4>
            <ul className="space-y-2 text-green-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Drei Grundspieler sichern die 6m-Linie
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Zwei Halbe arbeiten zwischen 6m und 9m-Linie
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Eine Spitze agiert aktiv vor der 9m-Linie
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Entscheidungen zwischen Angriff und Absicherung
              </li>
            </ul>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Rollen und Aufgaben">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Die Dreier (Grundspieler)</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Sicherung der 6m-Linie</li>
                <li>• Verhinderung von Durchbrüchen</li>
                <li>• Kommunikation nach vorn</li>
                <li>• Stabile Grundformation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Die Halben</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Flexibles Agieren zwischen den Linien</li>
                <li>• Unterstützung der Spitze</li>
                <li>• Absicherung bei Bedarf</li>
                <li>• Entscheidung: Angriff oder Sicherung</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Die Spitze</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Aktive Störung der Spieleröffnung</li>
                <li>• Lenken der Angriffe</li>
                <li>• Kommunikation des Spielgeschehens</li>
                <li>• Timing für Rückzug</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Trainingsformen und Entwicklung">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Phase 1: Raumverständnis (1-8 Wochen)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Aufstellung und Raumaufteilung lernen</li>
                  <li>• Grundpositionen ohne Gegnerdruck</li>
                  <li>• Einfache Verschiebebewegungen</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Phase 2: Entscheidungen (9-16 Wochen)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Wann greife ich an, wann sichere ich?</li>
                  <li>• Kommunikation zwischen den Linien</li>
                  <li>• Erste situative Anpassungen</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Phase 3: Spielanwendung (Ab Woche 17)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Vollständiges Systemspiel</li>
                  <li>• Anpassung an verschiedene Angriffe</li>
                  <li>• Überzahl- und Unterzahlsituationen</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Erfolgskriterien">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Individuelle Kompetenzen</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Erkennt seine Rolle im System</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Trifft situative Entscheidungen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Kommuniziert mit Mitspielern</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Team-Kompetenzen</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Stabile Grundformation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Flexible Anpassung an Spielsituationen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Effektive Kommunikation</span>
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
          to="/spielsystem-d-jugend"
          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5 mr-2 transform rotate-180" />
          Vorheriges: D-Jugend
        </Link>
        
        <Link
          to="/spielsystem-b-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Nächstes: B-Jugend (5:1)
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
