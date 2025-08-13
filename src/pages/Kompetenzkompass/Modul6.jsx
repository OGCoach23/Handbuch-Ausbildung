import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "kommunikation", label: "Kommunikation & Verständigung" },
  { id: "fuehrung", label: "Führung & Verantwortung" },
  { id: "teamkultur", label: "Teamkultur & Werte" },
];

const stufen = [
  { color: "bg-red-200", icon: "🔴", title: "Basis" },
  { color: "bg-orange-200", icon: "🟠", title: "Entwickelnd" },
  { color: "bg-yellow-200", icon: "🟡", title: "Anwendend" },
  { color: "bg-green-200", icon: "🟢", title: "Sicher" },
  { color: "bg-blue-200", icon: "🔵", title: "Führend" },
];

const data = {
  kommunikation: [
    { ziel: "Grundlegende Kommunikation", merkmale: ["Einfache Verständigung mit Mitspielern", "Grundregeln der Höflichkeit", "Erste Teamzugehörigkeit"], hinweise: ["Kommunikation spielerisch fördern", "Grundregeln des Zusammenlebens", "Teamgefühl entwickeln"] },
    { ziel: "Erweiterte Kommunikationsfähigkeiten", merkmale: ["Aktive Kommunikation im Spiel", "Konstruktive Gespräche", "Hilfsbereitschaft zeigen"], hinweise: ["Kommunikationstraining im Spiel", "Gesprächsführung üben", "Teamwork fördern"] },
    { ziel: "Effektive Spielkommunikation", merkmale: ["Klare Ansagen im Spiel", "Konstruktives Feedback geben", "Konflikte konstruktiv lösen"], hinweise: ["Intensive Kommunikationsschulung", "Feedback-Techniken vermitteln", "Konfliktlösungsstrategien"] },
    { ziel: "Perfekte Teamkommunikation", merkmale: ["Führung durch Kommunikation", "Motivation von Mitspielern", "Strategische Kommunikation"], hinweise: ["Führungskommunikation schulen", "Motivationstechniken vermitteln", "Strategische Gesprächsführung"] },
    { ziel: "Kommunikationsführung", merkmale: ["Natürliche Kommunikationsführung", "Inspiration durch Worte", "Teambuilding durch Kommunikation"], hinweise: ["Kommunikationsverantwortung übertragen", "Rhetorik und Präsentation", "Teamführung durch Kommunikation"] },
  ],
  fuehrung: [
    { ziel: "Erste Verantwortungserfahrungen", merkmale: ["Verantwortung für eigenes Verhalten", "Kleine Aufgaben übernehmen", "Regeln befolgen"], hinweise: ["Positive Vorbilder präsentieren", "Regelverständnis entwickeln", "Eigenverantwortung fördern"] },
    { ziel: "Erweiterte Verantwortungsübernahme", merkmale: ["Verantwortung für Materialien", "Hilfe für jüngere Spieler", "Zuverlässigkeit entwickeln"], hinweise: ["Konkrete Aufgaben übertragen", "Mentoring-Ansätze einführen", "Führungsmomente schaffen"] },
    { ziel: "Aktive Führungsrolle in Teilbereichen", merkmale: ["Führung in Trainingssequenzen", "Verantwortung für Teamkollegen", "Vorbildfunktion bewusst wahrnehmen"], hinweise: ["Führungsaufgaben in Training übertragen", "Vorbildverhalten reflektieren", "Eigeninitiative fördern"] },
    { ziel: "Umfassende Führungsverantwortung", merkmale: ["Führung in kritischen Situationen", "Verantwortung für Teamerfolg", "Strategische Entscheidungen mittragen"], hinweise: ["Führung in Drucksituationen", "Strategische Mitverantwortung", "Entwicklungsverantwortung für andere"] },
    { ziel: "Natürliche Führungspersönlichkeit", merkmale: ["Authentische Führungsrolle", "Inspiration und Motivation anderer", "Strategische Teamführung"], hinweise: ["Vollständige Führungsverantwortung", "Führungskultur entwickeln", "Führungspersönlichkeit reifen"] },
  ],
  teamkultur: [
    { ziel: "Grundlegende Teamwerte verstehen", merkmale: ["Fairplay und Respekt", "Grundlegende Teamregeln", "Freude am gemeinsamen Spiel"], hinweise: ["Werte spielerisch vermitteln", "Positive Teamerlebnisse schaffen", "Vielfalt als Bereicherung"] },
    { ziel: "Teamwerte aktiv leben", merkmale: ["Unterstützung schwächerer Spieler", "Ehrlichkeit und Offenheit", "Gemeinsame Ziele verstehen"], hinweise: ["Werte durch Vorbilder vermitteln", "Teambuilding-Aktivitäten", "Gemeinsame Zielsetzung"] },
    { ziel: "Teamkultur mitgestalten", merkmale: ["Aktive Mitgestaltung der Teamkultur", "Werte auch unter Druck leben", "Andere zur Werteorientierung motivieren"], hinweise: ["Kulturgestaltung mitverantworten", "Werte unter Druck trainieren", "Teamidentität stärken"] },
    { ziel: "Teamkultur prägen und weitergeben", merkmale: ["Kulturelle Führungsrolle", "Wertevermittlung an Neue", "Teamkultur in Krisen bewahren"], hinweise: ["Positive Teamdynamik fördern", "Kulturelle Verantwortung übertragen", "Integration neuer Spieler"] },
    { ziel: "Teamkultur als Markenzeichen", merkmale: ["Teamkultur nach außen repräsentieren", "Kulturelle Innovation vorantreiben", "Werte über das Team hinaus leben"], hinweise: ["Repräsentationsaufgaben übertragen", "Kulturinnovation fördern", "Gesellschaftliche Verantwortung"] },
  ],
};

export default function Modul6() {
  const [activeTab, setActiveTab] = useState("kommunikation");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-xl">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-green-800 mb-6">
        M6: Teamkultur & Kommunikation
      </motion.h1>

      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 rounded-full font-semibold transition ${activeTab === tab.id ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data[activeTab].map((item, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className={`${stufen[idx].color} p-4 rounded-xl shadow-md`}>
            <h3 className="text-xl font-bold mb-2">{stufen[idx].icon} {stufen[idx].title}</h3>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i <= idx ? "bg-green-700" : "bg-gray-300"}`}></div>
              ))}
            </div>
            <p className="font-semibold mb-2">Ziel: {item.ziel}</p>
            <ul className="list-disc ml-5 mb-2">
              {item.merkmale?.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
            <div className="bg-white/50 p-2 rounded-lg">
              <p className="font-semibold mb-1">Trainingshinweise:</p>
              <ul className="list-disc ml-5">
                {item.hinweise?.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}
