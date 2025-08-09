import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "koordination", label: "Koordinative Fähigkeiten" },
  { id: "kondition", label: "Konditionelle Fähigkeiten" },
  { id: "beweglichkeit", label: "Beweglichkeit & Körperbeherrschung" },
];

const stufen = [
  { color: "bg-red-200", icon: "🔴", title: "Basis" },
  { color: "bg-orange-200", icon: "🟠", title: "Entwickelnd" },
  { color: "bg-yellow-200", icon: "🟡", title: "Anwendend" },
  { color: "bg-green-200", icon: "🟢", title: "Sicher" },
  { color: "bg-blue-200", icon: "🔵", title: "Führend" },
];

const data = {
  koordination: [
    {
      ziel: "Vielseitige motorische Grundausbildung",
      merkmale: ["Grundlegende Bewegungsformen", "Einfache koordinative Aufgaben", "Bewegungsfreude entwickeln"],
      hinweise: ["Vielseitige Bewegungsschulung", "Spielerische Koordinationsformen", "Spartenübergreifende Ausbildung", "Bewegungsrepertoire erweitern"],
    },
    {
      ziel: "Erweiterte koordinative Fähigkeiten",
      merkmale: ["Komplexere Bewegungsaufgaben", "Erste handballspezifische Koordination", "Verbesserte Körperbeherrschung"],
      hinweise: ["Systematische Koordinationsschulung", "Handballspezifische Elemente einführen", "Koordinative Grundlagen festigen", "Bewegungsqualität verbessern"],
    },
    {
      ziel: "Handballspezifische Koordination",
      merkmale: ["Sichere Bewegungsausführung unter Spielbedingungen", "Koordination unter Zeitdruck", "Anpassung an verschiedene Situationen"],
      hinweise: ["Koordination unter Druckbedingungen", "Situative Koordinationsaufgaben", "Komplexe Bewegungsformen", "Spielnahe Koordinationsschulung"],
    },
    {
      ziel: "Perfekte koordinative Beherrschung",
      merkmale: ["Automatisierte Bewegungsabläufe", "Koordination auch bei hoher Belastung", "Flexible Bewegungsanpassung"],
      hinweise: ["Automatisierung von Bewegungen", "Training unter Belastung", "Bewegungsvariabilität schulen", "Koordinative Stabilität entwickeln"],
    },
    {
      ziel: "Außergewöhnliche koordinative Fähigkeiten",
      merkmale: ["Spektakuläre Bewegungsbeherrschung", "Kreative Bewegungslösungen", "Vorbild für koordinative Exzellenz"],
      hinweise: ["Entwicklung außergewöhnlicher Koordination", "Kreative Bewegungsaufgaben", "Koordinative Perfektion anstreben", "Bewegungskunst entwickeln"],
    },
  ],
  kondition: [
    {
      ziel: "Grundlegende körperliche Fitness",
      merkmale: ["Altersgerechte Belastbarkeit", "Grundlegende Ausdauer", "Freude an körperlicher Aktivität"],
      hinweise: ["Spielerische Fitnessformen", "Vielseitige körperliche Aktivitäten", "Belastung altersgerecht dosieren", "Fitness als Spiel vermitteln"],
    },
    {
      ziel: "Erweiterte konditionelle Grundlagen",
      merkmale: ["Verbesserte Ausdauerleistung", "Erste Kraftentwicklung", "Grundlegende Schnelligkeit"],
      hinweise: ["Systematisches Konditionstraining beginnen", "Vielseitige Belastungsformen", "Grundlagen für spätere Spezialisierung", "Belastungsverträglichkeit steigern"],
    },
    {
      ziel: "Handballspezifische Kondition",
      merkmale: ["Spielspezifische Ausdauer", "Handballspezifische Kraft", "Schnelligkeit in Spielsituationen"],
      hinweise: ["Spezifisches Athletiktraining", "Handballspezifische Belastungen", "Kondition in Spielformen", "Wettkampfspezifische Fitness"],
    },
    {
      ziel: "Optimale athletische Leistungsfähigkeit",
      merkmale: ["Hohe spielspezifische Fitness", "Stabile Leistung über gesamte Spielzeit", "Schnelle Regeneration"],
      hinweise: ["Hochintensives Athletiktraining", "Leistungsdiagnostik einsetzen", "Regenerationsmanagement", "Individuelle Trainingssteuerung"],
    },
    {
      ziel: "Außergewöhnliche athletische Fähigkeiten",
      merkmale: ["Überragende körperliche Leistungsfähigkeit", "Athletische Dominanz", "Individualisiertes Hochleistungstraining"],
      hinweise: ["Athletische Perfektion anstreben", "Führungsrolle in der Fitness", "Vorbild für körperliche Fitness", "Athletische Exzellenz vorleben"],
    },
  ],
  beweglichkeit: [
    {
      ziel: "Grundlegende Beweglichkeit entwickeln",
      merkmale: ["Natürliche Beweglichkeit erhalten", "Einfache Dehnübungen", "Körpergefühl entwickeln"],
      hinweise: ["Spielerische Beweglichkeitsformen", "Beweglichkeit in Spielformen", "Körperwahrnehmung schulen", "Bewegungsfreude fördern"],
    },
    {
      ziel: "Erweiterte Beweglichkeit & Körperkontrolle",
      merkmale: ["Systematische Beweglichkeitsschulung", "Verbesserte Körperwahrnehmung", "Erste präventive Maßnahmen"],
      hinweise: ["Regelmäßiges Beweglichkeitstraining", "Körperwahrnehmung intensivieren", "Präventionsgedanken einführen", "Beweglichkeit als Basis vermitteln"],
    },
    {
      ziel: "Funktionelle Beweglichkeit für Handball",
      merkmale: ["Handballspezifische Beweglichkeit", "Beweglichkeit unter Belastung", "Verletzungsprävention verstehen"],
      hinweise: ["Funktionelles Beweglichkeitstraining", "Beweglichkeit in Spielsituationen", "Präventionsprogramme einführen", "Eigenverantwortung entwickeln"],
    },
    {
      ziel: "Optimale Beweglichkeit & Prävention",
      merkmale: ["Perfekte funktionelle Beweglichkeit", "Eigenständige Präventionsarbeit", "Beweglichkeit als Leistungsfaktor"],
      hinweise: ["Individualisierte Beweglichkeitsprogramme", "Selbstständige Präventionsarbeit", "Beweglichkeit optimieren", "Körpermanagement beherrschen"],
    },
    {
      ziel: "Beweglichkeitsexpertise & Vorbildfunktion",
      merkmale: ["Außergewöhnliche Beweglichkeit", "Präventionsexpertise", "Beweglichkeitskultur prägen"],
      hinweise: ["Beweglichkeitsexpertise entwickeln", "Präventionsverantwortung übernehmen", "Andere in Körperpflege anleiten", "Vorbild für Körperpflege"],
    },
  ],
};

export default function Modul2AthletikMotorik() {
  const [activeTab, setActiveTab] = useState("koordination");

  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        Modul 2: Athletik & Motorik
      </motion.h1>

      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeTab === tab.id
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data[activeTab].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`${stufen[idx].color} p-4 rounded-xl shadow-md`}
          >
            <h3 className="text-xl font-bold mb-2">
              {stufen[idx].icon} {stufen[idx].title}
            </h3>
            <p className="font-semibold mb-2">Ziel: {item.ziel}</p>
            <ul className="list-disc ml-5 mb-2">
              {item.merkmale.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
            <div className="bg-white/50 p-2 rounded-lg">
              <p className="font-semibold mb-1">Trainingshinweise:</p>
              <ul className="list-disc ml-5">
                {item.hinweise.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
