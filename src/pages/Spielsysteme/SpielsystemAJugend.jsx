import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Target, Clock, CheckCircle } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemAJugend() {
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
        <span className="text-gray-600">A-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          A-Jugend: 6:0-Deckung (offensiv)
        </h1>
        <p className="text-xl text-green-600">
          Erwachsenennahe Taktik und maximale Variabilität
        </p>
      </motion.div>

      {/* Key Info Cards */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="bg-red-50 p-6 rounded-xl text-center">
          <Target className="w-8 h-8 text-red-600 mx-auto mb-3" />
          <h3 className="font-semibold text-red-700">System</h3>
          <p className="text-red-600">6:0-Deckung (offensiv gespielt)</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl text-center">
          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold text-blue-700">Dauer</h3>
          <p className="text-blue-600">2 Jahre verbindlich</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl text-center">
          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-green-700">Fokus</h3>
          <p className="text-green-600">Erwachsenen-Taktik & Variabilität</p>
        </div>
      </motion.div>

      {/* System Diagram */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.3 }}
        className="bg-white p-8 rounded-2xl shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Systemdiagramm</h2>
        <div className="bg-red-100 h-64 rounded-lg flex items-center justify-center">
          <p className="text-red-600 text-lg font-medium">
            6:0-Deckung (offensiv) Formationsdiagramm
          </p>
        </div>
      </motion.div>

      {/* Collapsible Content */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <CollapsibleBox title="Grundprinzipien der offensiven 6:0-Deckung">
          <div className="space-y-4">
            <p className="text-green-600">
              Die offensive 6:0-Deckung ist das komplexeste System und bereitet optimal auf den Erwachsenenbereich vor. 
              Sechs Spieler bilden eine geschlossene Formation, die aktiv und variabel agiert.
            </p>
            
            <h4 className="font-semibold text-green-700">Kernelemente:</h4>
            <ul className="space-y-2 text-green-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Geschlossene 6er-Formation vor der 6m-Linie
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Offensives Heraustreten und Raumkontrolle
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Komplexe Verschiebungen und Täuschungen
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Basis für alle Erwachsenenformationen
              </li>
            </ul>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Rollen und Spezialisierung">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Außenspieler (1 & 6)</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Seitliche Raumkontrolle</li>
                <li>• Schnelle Beinarbeit</li>
                <li>• Übergänge koordinieren</li>
                <li>• Tempowechsel initiieren</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Halbspieler (2 & 5)</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Flexible Positionierung</li>
                <li>• Heraustreten und Sichern</li>
                <li>• Kommunikation nach außen</li>
                <li>• Antizipation von Durchbrüchen</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Innenspieler (3 & 4)</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Zentrale Stabilität</li>
                <li>• Torwart-Coaching</li>
                <li>• Spielübersicht</li>
                <li>• Koordination der Formation</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Offensive Spielweise">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700 mb-2">Aktives Heraustreten</h5>
                <p className="text-green-600 text-sm mb-2">
                  Spieler treten gezielt aus der Formation heraus, um Druck aufzubauen.
                </p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• Timing ist entscheidend</li>
                  <li>• Absicherung muss gewährleistet sein</li>
                  <li>• Kommunikation ist essential</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700 mb-2">Raumkontrolle</h5>
                <p className="text-green-600 text-sm mb-2">
                  Kontrolliertes Verschieben zur Raumverengung.
                </p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• Kollektive Bewegungen</li>
                  <li>• Räume bewusst öffnen/schließen</li>
                  <li>• Gegner in bestimmte Bereiche lenken</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700 mb-2">Täuschungsverhalten</h5>
                <p className="text-green-600 text-sm mb-2">
                  Bewusste Fehlstellungen zur Gegnerirritation.
                </p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• Scheinlücken provozieren</li>
                  <li>• Falshe Signale senden</li>
                  <li>• Überraschungsmomente schaffen</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700 mb-2">Variabilität</h5>
                <p className="text-green-600 text-sm mb-2">
                  Ständiger Wechsel zwischen verschiedenen Spielweisen.
                </p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• Passive und aggressive Phasen</li>
                  <li>• Unterschiedliche Formationen</li>
                  <li>• Situative Anpassungen</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Trainingsformen und Meisterschaft">
          <div className="space-y-4">
            <p className="text-green-600">
              Das Training der offensiven 6:0 erfordert hohe Komplexität und Präzision. 
              Die Spieler müssen auf Erwachsenenniveau agieren können.
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Grundlagenphase (1-12 Wochen)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Perfekte Grundaufstellung</li>
                  <li>• Koordinierte Grundverschiebungen</li>
                  <li>• Erste offensive Elemente</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Vertiefungsphase (13-24 Wochen)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Komplexe Heraustreten-Muster</li>
                  <li>• Situative Anpassungen</li>
                  <li>• Täuschung und Variabilität</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-700">Meisterschaftsphase (Ab Woche 25)</h5>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Eigenständige Systemanpassungen</li>
                  <li>• Gegneranalyse und -adaptation</li>
                  <li>• Übergang zu Erwachsenensystemen</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Erfolgskriterien und Übergang">
          <div className="space-y-4">
            <p className="text-green-600">
              Die A-Jugend-Spieler:innen sind bereit für den Erwachsenenbereich, wenn sie folgende Kriterien erfüllen:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Technische Perfektion</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Perfekte Grundstellungen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Präzise Verschiebungen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Kontrolliertes Heraustreten</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Taktische Reife</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Eigenständige Entscheidungen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Situative Systemanpassungen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-green-600">Führungsverantwortung im Team</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-green-700 mb-3">Übergang zum Erwachsenenbereich</h4>
              <p className="text-green-600">
                Die offensive 6:0-Deckung bildet die perfekte Grundlage für alle Erwachsenensysteme. 
                Spieler:innen können nahtlos zu 6:0, 5:1, 4:2 oder anderen Formationen wechseln, 
                da sie die Grundprinzipien verinnerlicht haben.
              </p>
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
          to="/spielsystem-b-jugend"
          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5 mr-2 transform rotate-180" />
          Vorheriges: B-Jugend
        </Link>
        
        <Link
          to="/entwicklung-spielsysteme"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Zurück zur Übersicht
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
