import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Target, Clock, CheckCircle } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemDJugend() {
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
        <span className="text-gray-600">D-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          D-Jugend: 1:5-Deckung
        </h1>
        <p className="text-xl text-green-600">
          Aktiver Ballbezug und erste Gruppenabsprachen
        </p>
      </motion.div>

      {/* Key Info Cards */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="bg-green-50 p-6 rounded-xl text-center">
          <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-green-700">System</h3>
          <p className="text-green-600">1:5-Deckung (1 hinten, 5 ballbezogen)</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl text-center">
          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold text-blue-700">Dauer</h3>
          <p className="text-blue-600">2 Jahre verbindlich</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-xl text-center">
          <CheckCircle className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
          <h3 className="font-semibold text-yellow-700">Fokus</h3>
          <p className="text-yellow-600">Ballbezug & Gruppentaktik</p>
        </div>
      </motion.div>

      {/* System Diagram */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.3 }}
        className="bg-white p-8 rounded-2xl shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Systemdiagramm</h2>
        <div className="bg-green-100 h-64 rounded-lg flex items-center justify-center">
          <p className="text-green-600 text-lg font-medium">
            1:5-Deckung Formationsdiagramm
          </p>
        </div>
      </motion.div>

      {/* Collapsible Content */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <CollapsibleBox title="Grundprinzipien der 1:5-Deckung">
          <div className="space-y-4">
            <p className="text-green-600">
              Die 1:5-Deckung ist das erste ballbezogene Abwehrsystem. Ein Spieler sichert zentral hinten ab, 
              während fünf Spieler aktiv ballbezogen agieren und Druck aufbauen.
            </p>
            
            <h4 className="font-semibold text-green-700">Kernelemente:</h4>
            <ul className="space-y-2 text-green-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Ein Spieler sichert zentralen Raum hinter der Linie
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Fünf Spieler arbeiten ballbezogen und offensiv
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Aktive Störung von Pässen und Laufwegen
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Erste Absprachen zwischen Nachbarn
              </li>
            </ul>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Rollen und Aufgaben">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Der Absichernde (1er)</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Zentrale Position zwischen 6m und 9m-Linie</li>
                <li>• Übersicht über alle Angreifer</li>
                <li>• Kommunikation mit den Fünfern</li>
                <li>• Absicherung bei Durchbrüchen</li>
                <li>• Torwart-Coaching</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Die Ballbezogenen (5er)</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Aktiver Zugriff auf Ballbesitzer</li>
                <li>• Störung der Passwege</li>
                <li>• Verschieben in Richtung Ball</li>
                <li>• Kommunikation mit Nachbarn</li>
                <li>• Antizipation von Angriffssituationen</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Trainingsformen und Progression">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Woche 1-6: Formation erlernen</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Aufstellung ohne Ball</li>
                  <li>• Ballzirkulation mit statischer Abwehr</li>
                  <li>• Erste Verschiebebewegungen</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Woche 7-12: Aktivität entwickeln</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Zugriff auf Ballbesitzer</li>
                  <li>• Störung von Pässen</li>
                  <li>• Kommunikation einführen</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Ab Woche 13: Spielanwendung</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Vollständiges Systemspiel</li>
                  <li>• Situative Anpassungen</li>
                  <li>• Standards integrieren</li>
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
                    <span className="text-green-600">Korrekte Grundaufstellung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Ballbezogenes Verschieben</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Aktiver Zugriff ohne Foul</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Taktische Ziele</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Ballbesitzer unter Druck setzen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Erste Gruppenabsprachen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Absicherung funktioniert</span>
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
          to="/spielsystem-e-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5 mr-2 transform rotate-180" />
          Vorheriges: E-Jugend
        </Link>
        
        <Link
          to="/spielsystem-c-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Nächstes: C-Jugend (3:2:1)
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
