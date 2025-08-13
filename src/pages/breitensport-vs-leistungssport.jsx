import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Target, ExternalLink, X } from "lucide-react";

const altersstufenData = [
  {
    altersstufe: "D-Jugend (11–12)",
    breitensport: "2x Training/Woche\nalle dürfen alles\nFokus: Spiel erleben & Rollenvielfalt",
    leistungssport: "evtl. 3. Einheit als Perspektive\nfrühe Sonderförderung (z. B. Technikgruppen)\nFokus: erste Verantwortung"
  },
  {
    altersstufe: "C-Jugend (13–14)",
    breitensport: "Training bleibt flexibel\nPositionen rotieren\nFokus: Teambindung & Spielverständnis",
    leistungssport: "3–4x Training/Woche\nindividuelle Förderpläne\nerste Sichtungen & Leistungsbeurteilungen"
  },
  {
    altersstufe: "B-Jugend (15–16)",
    breitensport: "Beteiligung als Ziel\nFreundschaften, Turniere, Vereinsbindung\nRolle als \"aktiver Mitmacher\"",
    leistungssport: "Ziel: Kader, Stützpunkt, höhere Liga\nintensives Technik-/Athletiktraining\nklare Spielrollen & Verbindlichkeit"
  },
  {
    altersstufe: "A-Jugend (17–18)",
    breitensport: "freiwilliger Übergang in Senioren\nAusbildung/Beruf im Fokus\nVerein als Ausgleich",
    leistungssport: "Integration in Erwachsenenbereich\nKarriereorien tierung (3. Liga etc.)\nTrainingsumfang + Zielsystem hoch"
  }
];

const trainerData = [
  {
    frage: "Wie plane ich Training?",
    breitensport: "Erlebnisbasiert, offen, mit Variation",
    leistungssport: "Zielgerichtet, strukturiert, mit Wiederholung"
  },
  {
    frage: "Wie bewerte ich Fortschritt?",
    breitensport: "Beteiligung, Mut, soziale Entwicklung",
    leistungssport: "Technik, Taktik, Entscheidungsqualität"
  },
  {
    frage: "Wie führe ich Gespräche?",
    breitensport: "Persönlich, empathisch, motivierend",
    leistungssport: "Klar, ehrlich, mit Zielen & nächsten Schritten"
  },
  {
    frage: "Worauf achte ich besonders?",
    breitensport: "Bindung, Gruppengefühl, Sicherheit",
    leistungssport: "Eigenmotivation, Belastbarkeit, Lernwille"
  }
];

const elternData = [
  {
    frage: "Wie begleite ich mein Kind?",
    breitensport: "Interesse zeigen, Sicherheit geben",
    leistungssport: "Struktur schaffen, Erfolge feiern, Rückhalt geben"
  },
  {
    frage: "Worauf sollte ich achten?",
    breitensport: "Spaß erhalten, Gruppenzugehörigkeit",
    leistungssport: "Überforderung erkennen, gemeinsam reflektieren"
  },
  {
    frage: "Was ist meine Rolle im Verein?",
    breitensport: "Unterstützer:in, Helfer:in, Partner:in",
    leistungssport: "Kommunikationspartner:in, Rückhalt, Ermöglicher:in"
  },
  {
    frage: "Was ist wichtig zu verstehen?",
    breitensport: "Handball ist ein Raum für Entwicklung",
    leistungssport: "Leistung braucht Haltung, nicht nur Talent"
  }
];

export default function BreitensportVsLeistungssport() {
  const [showTrainerPanel, setShowTrainerPanel] = useState(false);
  const [showElternPanel, setShowElternPanel] = useState(false);
  const [showTrainerModal, setShowTrainerModal] = useState(false);
  const [showElternModal, setShowElternModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
            <h1 className="text-4xl font-bold text-green-600 text-center mb-4">
              Breitensport vs. Leistungssport
            </h1>
            
            {/* Trainer Panel - Positioniert auf Höhe der Überschrift */}
            <motion.div
              className={`fixed top-8 left-0 w-96 h-20 bg-green-600 text-white p-4 z-40 rounded-r-lg shadow-2xl transition-transform duration-300 ${
                showTrainerPanel ? 'translate-x-0' : '-translate-x-80'
              }`}
              onMouseEnter={() => setShowTrainerPanel(true)}
              onMouseLeave={() => setShowTrainerPanel(false)}
            >
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 bg-green-500 p-4 rounded-lg cursor-pointer hover:bg-green-400 transition-colors">
                <div className="writing-mode-vertical-rl text-orientation-mixed font-bold text-sm text-center">
                  <Users size={24} className="mx-auto mb-2" />
                  Für<br />Trainer:innen
                </div>
              </div>
              
              <div className="flex items-center justify-between h-full">
                <h3 className="text-lg font-bold">Trainer:innen</h3>
                <button 
                  onClick={() => setShowTrainerModal(true)}
                  className="bg-green-500 hover:bg-green-400 px-3 py-1 rounded text-sm transition-colors"
                >
                  Öffnen
                </button>
              </div>
            </motion.div>

            {/* Eltern Panel - Positioniert auf Höhe der Überschrift */}
            <motion.div
              className={`fixed top-8 right-0 w-96 h-20 bg-green-600 text-white p-4 z-40 rounded-l-lg shadow-2xl transition-transform duration-300 ${
                showElternPanel ? 'translate-x-0' : 'translate-x-80'
              }`}
              onMouseEnter={() => setShowElternPanel(true)}
              onMouseLeave={() => setShowElternPanel(false)}
            >
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 bg-green-500 p-4 rounded-lg cursor-pointer hover:bg-green-400 transition-colors">
                <div className="writing-mode-vertical-rl text-orientation-mixed font-bold text-sm text-center">
                  <Target size={24} className="mx-auto mb-2" />
                  Für<br />Eltern
                </div>
              </div>
              
              <div className="flex items-center justify-between h-full">
                <h3 className="text-lg font-bold">Eltern</h3>
                <button 
                  onClick={() => setShowElternModal(true)}
                  className="bg-green-500 hover:bg-green-400 px-3 py-1 rounded text-sm transition-colors"
                >
                  Öffnen
                </button>
              </div>
            </motion.div>
        </motion.div>

        {/* Zielsetzung */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Zielsetzung des Moduls</h2>
          <p className="text-justify leading-relaxed mb-4">
            Nicht jede:r will Nationalspieler:in werden. Und das ist gut so.<br />
            Nicht jede:r bleibt im Breitensport, nur weil es „entspannter" ist. Auch das ist gut so.<br />
            Dieses Modul schafft Klarheit – ohne zu bewerten. Es zeigt, was beide Wege ausmacht, welche Haltung sie brauchen und wie wir Spieler:innen altersgerecht begleiten können. Wir orientieren uns an den Prinzipien:
          </p>
          <ul className="list-none space-y-2 mb-4">
            <li>→ Entwicklung vor Selektion</li>
            <li>→ Begeisterung als Antrieb</li>
            <li>→ Vielfalt als Stärke</li>
          </ul>
          <p className="text-justify leading-relaxed mb-2">Dieses Modul hilft dir dabei:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Verständnis: Was ist eigentlich „Breitensport"? Was ist „Leistungssport"?</li>
            <li>Haltung: Beide Wege sind gleich wertvoll – aber verschieden zu begleiten.</li>
            <li>Orientierung: Wie erkenne ich als Spieler:in/Trainer:in/Elternteil, wo ich gerade stehe?</li>
            <li>Entscheidungshilfe: Was braucht es, um den Leistungssportweg zu gehen – und will ich das überhaupt?</li>
            <li>Altersgerechtigkeit: Wir bauen diese Themen ab der D-Jugend behutsam auf – nie zu früh, aber immer rechtzeitig.</li>
          </ul>
        </div>

        {/* Breitensport vs Leistungssport */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Breitensport bedeutet:</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Handball als Erlebnisraum – mit Freude, Freundschaft und Bewegung</li>
              <li>Förderung ohne Druck, Beteiligung statt Selektion</li>
              <li>Flexible Trainingsstrukturen, abwechslungsreiche Rollen, weniger Verpflichtung</li>
              <li>Ein sicherer Ort, um sich selbst auszuprobieren</li>
            </ul>
            <h3 className="font-bold text-green-600 mb-2">Haltung:</h3>
            <ul className="list-none space-y-1 mb-4">
              <li>→ Jeder darf mitmachen.</li>
              <li>→ Ziel ist das „Dranbleiben" – nicht das „Herausstechen".</li>
              <li>→ Training ist kein Casting – sondern Beziehung, Vertrauen, Bewegung.</li>
            </ul>
            <p className="italic text-sm">
              „Die tägliche Talentarbeit ist auch Persönlichkeitsarbeit – und die findet in allen Teams statt, nicht nur im Kader."
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Leistungssport bedeutet:</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Handball als Entwicklungsraum – mit klaren Zielen, Herausforderungen und Struktur</li>
              <li>Mehr Trainingsumfang, systematische Förderung, höhere Eigenverantwortung</li>
              <li>Spielzeit, Rollen, Förderung basieren auf Leistung und Haltung</li>
              <li>Ziel: besser werden – nicht perfekt sein, aber dranbleiben</li>
            </ul>
            <h3 className="font-bold text-green-600 mb-2">Haltung:</h3>
            <ul className="list-none space-y-1 mb-4">
              <li>→ Niemand muss – aber wer will, bekommt eine klare Perspektive.</li>
              <li>→ Leistungssport beginnt nicht bei der Auswahl – sondern bei der inneren Entscheidung.</li>
              <li>→ Wir begleiten den Weg – nicht das Ergebnis.</li>
            </ul>
            <p className="italic text-sm">
              „Meisterschaft entsteht, wenn Herausforderung und Unterstützung im Gleichgewicht sind."
            </p>
          </div>
        </div>

        {/* Altersstufentabelle */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Wie sieht das altersstufenspezifisch aus? (D–A-Jugend)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 bg-[#e6f2ec] text-left">Altersstufe</th>
                  <th className="border border-gray-300 p-3 bg-[#e6f2ec] text-left">Breitensport</th>
                  <th className="border border-gray-300 p-3 bg-[#e6f2ec] text-left">Leistungssport</th>
                </tr>
              </thead>
              <tbody>
                {altersstufenData.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-3 font-semibold">{row.altersstufe}</td>
                    <td className="border border-gray-300 p-3">
                      {row.breitensport.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {row.leistungssport.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
                  </div>
          </div>

        {/* Anschlussmöglichkeiten */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Anschlussmöglichkeiten an höhere Förderstrukturen – BHV & DHB
          </h2>
          <p className="text-justify leading-relaxed mb-4">
            Unser Konzept bereitet Spieler:innen nicht nur auf den Erwachsenenbereich im Verein vor, sondern zeigt auch klare Anschlussmöglichkeiten an die BHV-Talentförderung und die DHB-Leistungssportsichtung auf. Die Organisation des BHV-Leistungssports umfasst:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Zentrale Sichtungen: Dazu gehören die zentralen Stützpunktsichtungen und die Bayerische Meisterschaft der Bezirke.</li>
            <li>Stützpunkttrainings: Die ausgewählten Talente nehmen an regelmäßigen Stützpunkttrainings teil</li>
          </ul>
          <p className="text-justify leading-relaxed mb-4">
            Das übergeordnete Ziel ist die Nominierung für DHB-Sichtungslehrgänge, deren Inhalte sich am DHB-Sichtungsmanual orientieren.
          </p>
          <p className="text-justify leading-relaxed mb-4">
            Der SV Laim trägt durch eine kontinuierliche, geplante und zielgerichtete Ausbildung dazu bei, dass unsere Nachwuchsspieler:innen die notwendigen Kompetenzen entwickeln, um sich bei solchen Sichtungen zu präsentieren. Dabei liegt der Fokus auf der individuellen Spielkompetenz, die durch gemeinsame Grundübungen, Grundspiele und Zielspiele qualitativ bewertet wird.
          </p>
          <p className="text-justify leading-relaxed mb-2">
            Zur Vertiefung der Inhalte des DHB-Sichtungsmanuals und zur visuellen Unterstützung bei der Umsetzung von Übungen empfehlen wir die BHV-Youtube-Playlist:
          </p>
          <a 
            href="https://www.youtube.com/playlist?list=PLkilEymkOsMJcaXUUmAPN1xKylEC5HHvN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline"
          >
            <ExternalLink size={16} />
            Zur BHV-Youtube-Playlist
          </a>
        </div>

        {/* Abschlusspunkt */}
        <div className="bg-[#e6f2ec] shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Abschlusspunkt</h2>
          <p className="text-justify leading-relaxed">
            Leistungssport ist kein „Upgrade" – und Breitensport kein „Plan B".<br />
            Es sind zwei Wege in ein erfülltes Handballeben.<br />
            Was zählt: Der Weg passt zum Menschen. Und der Verein begleitet ihn.
          </p>
        </div>
      </div>

      {/* Modal für Trainer:innen */}
      <AnimatePresence>
        {showTrainerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowTrainerModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-green-600 text-white p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Trainer:innen</h2>
                <button
                  onClick={() => setShowTrainerModal(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <table className="w-full text-base">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left bg-green-500 text-white">Frage</th>
                      <th className="border border-gray-300 p-3 text-left bg-green-500 text-white">Breitensport</th>
                      <th className="border border-gray-300 p-3 text-left bg-green-500 text-white">Leistungssport</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainerData.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-3 font-semibold">{row.frage}</td>
                        <td className="border border-gray-300 p-3">{row.breitensport}</td>
                        <td className="border border-gray-300 p-3">{row.leistungssport}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal für Eltern */}
      <AnimatePresence>
        {showElternModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowElternModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-green-600 text-white p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Eltern</h2>
                <button
                  onClick={() => setShowElternModal(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <table className="w-full text-base">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left bg-green-500 text-white">Frage</th>
                      <th className="border border-gray-300 p-3 text-left bg-green-500 text-white">Breitensport</th>
                      <th className="border border-gray-300 p-3 text-left bg-green-500 text-white">Leistungssport</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elternData.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-3 font-semibold">{row.frage}</td>
                        <td className="border border-gray-300 p-3">{row.breitensport}</td>
                        <td className="border border-gray-300 p-3">{row.leistungssport}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
