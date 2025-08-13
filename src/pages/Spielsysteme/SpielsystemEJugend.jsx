import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Users, Target, Clock, CheckCircle } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemEJugend() {
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
        <span className="text-gray-600">E-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          E-Jugend: Manndeckung
        </h1>
        <p className="text-xl text-green-600">
          Eigenverantwortung und Raumorientierung als Grundlage
        </p>
      </motion.div>

      {/* Key Info Cards */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="bg-blue-50 p-6 rounded-xl text-center">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold text-blue-700">System</h3>
          <p className="text-blue-600">Manndeckung über das ganze Feld</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl text-center">
          <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-green-700">Dauer</h3>
          <p className="text-green-600">2 Jahre verbindlich</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-xl text-center">
          <Target className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
          <h3 className="font-semibold text-yellow-700">Fokus</h3>
          <p className="text-yellow-600">Eigenverantwortung & Aufmerksamkeit</p>
        </div>
      </motion.div>

      {/* System Diagram Placeholder */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.3 }}
        className="bg-white p-8 rounded-2xl shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Systemdiagramm</h2>
        <div className="bg-green-100 h-64 rounded-lg flex items-center justify-center">
          <p className="text-green-600 text-lg font-medium">
            Manndeckung Felddiagramm
          </p>
        </div>
      </motion.div>

      {/* Collapsible Content Sections */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <CollapsibleBox title="Grundprinzipien der Manndeckung">
          <div className="space-y-4">
            <p className="text-green-600">
              Die Manndeckung ist das erste strukturierte Abwehrsystem, das unsere E-Jugend-Spieler:innen erlernen. 
              Es schafft klare Verantwortlichkeiten und fördert die individuelle Aufmerksamkeit.
            </p>
            
            <h4 className="font-semibold text-green-700">Kernelemente:</h4>
            <ul className="space-y-2 text-green-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Jeder Abwehrspieler ist für einen Angreifer verantwortlich
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Ständiger Blickkontakt zwischen Spieler und seinem Gegenspieler
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Ballbezogene Positionierung mit Orientierung zum Tor
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Aktive Störung von Pässen und Würfen
              </li>
            </ul>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Lernziele und Entwicklungsschwerpunkte">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Technische Ziele</h4>
                <ul className="space-y-2 text-green-600">
                  <li>• Grundstellung in der Abwehr</li>
                  <li>• Laufschule und Beweglichkeit</li>
                  <li>• Ballgewöhnung bei Abwehraktionen</li>
                  <li>• Sprungwurf-Abwehr</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Taktische Ziele</h4>
                <ul className="space-y-2 text-green-600">
                  <li>• Eigenverantwortung für einen Gegenspieler</li>
                  <li>• Raumorientierung entwickeln</li>
                  <li>• Ball-Spieler-Tor-Beziehung verstehen</li>
                  <li>• Erste Kommunikation in der Abwehr</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Trainingsmethodik und Übungsformen">
          <div className="space-y-4">
            <h4 className="font-semibold text-green-700">Aufbauende Übungsprogression:</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Phase 1: Grundlagen (Wochen 1-4)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Schatten laufen ohne Ball</li>
                  <li>• 1:1 Situationen in kleinen Räumen</li>
                  <li>• Positionierung bei ruhendem Ball</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Phase 2: Anwendung (Wochen 5-8)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• 2:2 und 3:3 Situationen</li>
                  <li>• Manndeckung bei Ballzirkulation</li>
                  <li>• Erste Störaktionen bei Pässen</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Phase 3: Spielform (Ab Woche 9)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Vollständige Manndeckung im Spiel</li>
                  <li>• Schnelle Zuordnung nach Ballverlust</li>
                  <li>• Manndeckung bei Standards</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Häufige Probleme und Lösungsansätze">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h5 className="font-medium text-red-700">Problem: Spieler verlieren ihren Gegenspieler</h5>
                <p className="text-red-600 mt-1">
                  <strong>Lösung:</strong> Kleine Räume, eindeutige Zuordnung, visuelle Hilfsmittel (Leibchen gleicher Farbe)
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h5 className="font-medium text-red-700">Problem: Zu aggressive oder zu passive Abwehr</h5>
                <p className="text-red-600 mt-1">
                  <strong>Lösung:</strong> Klare Regeln für erlaubte Aktionen, Betonung der Position statt Körperkontakt
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h5 className="font-medium text-red-700">Problem: Orientierungslosigkeit bei Ballwechsel</h5>
                <p className="text-red-600 mt-1">
                  <strong>Lösung:</strong> Stopp-Übungen, langsamere Ballzirkulation, bewusste Pausen zum Neuorientieren
                </p>
              </div>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Erfolgskriterien und Bewertung">
          <div className="space-y-4">
            <p className="text-green-600">
              Die E-Jugend-Spieler:innen haben das System erfolgreich erlernt, wenn sie folgende Kriterien erfüllen:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Individuelle Kriterien</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Findet und hält Kontakt zum zugeteilten Gegenspieler</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Positioniert sich ballbezogen zwischen Gegner und Tor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Stört aktiv Pässe und Wurfvorbereitung</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Team-Kriterien</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Alle Gegenspieler sind zugeordnet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Schnelle Neuzuordnung nach Ballverlust</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Kommunikation bei Problemen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleBox>
      </motion.div>

      {/* Navigation to next system */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <Link
          to="/spielsystem-d-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Nächstes System: D-Jugend (1:5-Deckung)
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
