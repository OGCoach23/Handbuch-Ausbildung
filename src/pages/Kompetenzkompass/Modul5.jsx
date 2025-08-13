import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "position", label: "Positionsverständnis & Raumverhalten" },
  { id: "kooperation", label: "Grundformen der Kooperation" },
  { id: "system", label: "Systemverständnis & taktische Flexibilität" },
];

const stufen = [
  { color: "bg-red-200", icon: "🔴", title: "Basis" },
  { color: "bg-orange-200", icon: "🟠", title: "Entwickelnd" },
  { color: "bg-yellow-200", icon: "🟡", title: "Anwendend" },
  { color: "bg-green-200", icon: "🟢", title: "Sicher" },
  { color: "bg-blue-200", icon: "🔵", title: "Führend" },
];

const data = {
  position: [
    { ziel: "Grundlegende Raumorientierung", merkmale: ["Alle Positionen kennenlernen", "Keine feste Spezialisierung", "Vielseitige Spielerfahrungen", "Erkennen von freien Räumen"], hinweise: ["Rotationsprinzip anwenden", "Alle Positionen ausprobieren", "Vielseitigkeit fördern", "Raumorientierung fördern"] },
    { ziel: "Beginnende Positionsspezialisierung", merkmale: ["Erste Positionspräferenzen", "Grundlegende positionsspezifische Aufgaben", "Kooperation zwischen benachbarten Positionen"], hinweise: ["Nutzung des Tiefenraums", "Sanfte Spezialisierung beginnen", "Positionsspezifische Grundlagen", "Nachbarpositionen mittrainieren"] },
    { ziel: "Sichere positionsspezifische Arbeit", merkmale: ["Klare Positionsrolle verstehen", "Effektive Kooperation mit Nachbarpositionen", "Positionsspezifische Taktiken anwenden"], hinweise: ["Situationsgerechte Raumnutzung", "Intensive Positionsarbeit", "Kooperationstraining", "Taktische Schulung"] },
    { ziel: "Flexible Positionsarbeit & Universalität", merkmale: ["Mehrere Positionen sicher beherrschen", "Flexible Anpassung an Spielsituationen", "Unterstützung verschiedener Positionsgruppen"], hinweise: ["Strategische Positionierung", "Universalitätstraining", "Flexible Positionswechsel", "Systemübergreifende Ausbildung"] },
    { ziel: "Positionsführung & strategische Rolle", merkmale: ["Führung der Positionsgruppe", "Strategische Positionierung", "Anleitung jüngerer Spieler"], hinweise: ["Führungsverantwortung übertragen", "Strategische Schulung", "Mentoring-Aufgaben", "Innovative Positionslösungen"] },
  ],
  kooperation: [
    { ziel: "Erste Kooperationserfahrungen sammeln", merkmale: ["Einfache Pässe zu Mitspielern", "Grundlegendes Freilaufen", "Anbieten zum Ballbesitzer"], hinweise: ["Einfache Positionswechsel", "Spielerisches Zusammenspiel", "Einfache Kooperationsformen", "2er-Gruppen-Spiel"] },
    { ziel: "Grundlegende Kooperationsformen erlernen", merkmale: ["Doppelpass (Give and Go)", "Einfache Positionswechsel", "Freilaufen in die Breite"], hinweise: ["Parallelstoß & Kreuzen", "Systematisches Kooperationstraining", "2er-Gruppen-Spiel", "3er-Gruppen-Training"] },
    { ziel: "Erweiterte Kooperationen in Kleingruppen", merkmale: ["Parallelstoß & Kreuzen", "Sperren setzen & nutzen", "Kooperation Rückraum-Außen-Kreis"], hinweise: ["Spontane Kooperationen", "3er-Gruppen-Training", "Verschiedene Kooperationsformen", "Komplexe Kooperationen"] },
    { ziel: "Flexible Kooperationen unter Spielbedingungen", merkmale: ["Spontane Kooperationen", "Anpassung an Abwehrverhalten", "Kommunikation während Kooperationen"], hinweise: ["Systemübergreifende Kooperationen", "Training gegen verschiedene Abwehrsysteme", "Kommunikationstraining", "Flexible Systemanpassung"] },
    { ziel: "Kreative Kooperationen & Spielgestaltung", merkmale: ["Innovative Kooperationsformen", "Initiierung von Teamaktionen", "Führung in Kooperationssituationen"], hinweise: ["Entwicklung neuer Spielzüge", "Kreative Kooperationsaufgaben", "Spielgestaltungsverantwortung", "Kooperationsführung"] },
  ],
  system: [
    { ziel: "Grundlegendes Systemverständnis", merkmale: ["Unterscheidung zwischen Angriff & Abwehr", "Einfache Spielregeln verstehen", "Grundlegende Aufstellungen kennen"], hinweise: ["Einfache Systeme spielerisch einführen", "Grundregeln vermitteln", "Systemwechsel vermeiden", "Verständnis vor Perfektion"] },
    { ziel: "Erste Systemkenntnisse", merkmale: ["Grundlegende Systemregeln verstehen", "Einfache taktische Absprachen", "Positionsgebundene Aufgaben"], hinweise: ["Ballorientiertes Verschieben", "Systematische Systemeinführung", "Einfache taktische Regeln", "Positionsspezifische Aufgaben"] },
    { ziel: "Sicheres Systemspiel", merkmale: ["Systemregeln sicher anwenden", "Taktische Variationen verstehen", "Anpassung an Gegnersysteme"], hinweise: ["Flexible Systemanwendung", "Verschiedene Systeme trainieren", "Taktische Variationen einführen", "Gegneranalyse beginnen"] },
    { ziel: "Flexible Systembeherrschung", merkmale: ["Mehrere Systeme sicher beherrschen", "Situative Systemanpassungen", "Taktische Führungsrolle"], hinweise: ["Systemübergreifendes Verständnis", "Komplexe Systemarbeit", "Situative Anpassungen", "Systemanalyse & -entwicklung"] },
    { ziel: "Systemführung & taktische Innovation", merkmale: ["Systemführung übernehmen", "Taktische Innovationen entwickeln", "Strategische Spielplanung"], hinweise: ["Systemphilosophie prägen", "Taktische Verantwortung übertragen", "Systementwicklung mitgestalten", "Strategische Planungsaufgaben"] },
  ],
};

export default function Modul5Spielsysteme() {
  const [activeTab, setActiveTab] = useState("position");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-xl">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-green-800 mb-6">
        Modul 5: Spielsysteme & Positionsspiel
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
              {item.merkmale.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
            <div className="bg-white/50 p-2 rounded-lg">
              <p className="font-semibold mb-1">Trainingshinweise:</p>
              <ul className="list-disc ml-5">
                {item.hinweise.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}
