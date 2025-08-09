import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "persoenlichkeit", label: "Persönlichkeitsentwicklung & Selbstvertrauen" },
  { id: "druck", label: "Umgang mit Druck & Fehlern" },
  { id: "team", label: "Teamfähigkeit & soziale Integration" },
];

const stufen = [
  { color: "bg-red-200", icon: "🔴", title: "Basis" },
  { color: "bg-orange-200", icon: "🟠", title: "Entwickelnd" },
  { color: "bg-yellow-200", icon: "🟡", title: "Anwendend" },
  { color: "bg-green-200", icon: "🟢", title: "Sicher" },
  { color: "bg-blue-200", icon: "🔵", title: "Führend" },
];

const data = {
  persoenlichkeit: [
    {
      ziel: "Grundlegende Persönlichkeitsentwicklung",
      merkmale: ["Freude am Handballspielen", "Erste Teamerfahrungen", "Grundlegende soziale Regeln", "Neugier auf neue Bewegungen"],
      hinweise: ["Pädagogische Betreuung im Mittelpunkt", "Spielerlebnisse vor Ergebnisorientierung", "Positive Lernatmosphäre schaffen", "Erfolgserlebnisse ermöglichen"],
    },
    {
      ziel: "Erweiterte soziale Kompetenzen",
      merkmale: ["Teamgeist entwickeln", "Erste Verantwortungsübernahme", "Umgang mit Erfolg und Misserfolg", "Bereitschaft zu Wiederholungen"],
      hinweise: ["Teambuilding-Maßnahmen", "Kleine Verantwortungsbereiche übertragen", "Reflexion von Spielerlebnissen", "Sofortiges Feedback geben"],
    },
    {
      ziel: "Stabile Persönlichkeitsentwicklung",
      merkmale: ["Selbstvertrauen in Spielsituationen", "Konstruktiver Umgang mit Kritik", "Unterstützung von Mitspielern"],
      hinweise: ["Selbstreflexion fördern", "Feedback-Kultur entwickeln", "Soziale Kompetenzen stärken", "Eigenverantwortung stärken"],
    },
    {
      ziel: "Gefestigte Persönlichkeit",
      merkmale: ["Starke mentale Stabilität", "Führungsqualitäten zeigen", "Vorbildfunktion übernehmen"],
      hinweise: ["Bewusste Lernplanung", "Mentales Training einführen", "Führungsaufgaben übertragen", "Persönlichkeitsentwicklung gezielt fördern"],
    },
    {
      ziel: "Reife Führungspersönlichkeit",
      merkmale: ["Natürliche Führungsrolle", "Inspiration für andere", "Verantwortung für Teamerfolg"],
      hinweise: ["Führungsverantwortung übertragen", "Mentoring jüngerer Spieler", "Persönlichkeit als Vorbild nutzen", "Lernkultur im Team prägen"],
    },
  ],
  druck: [
    {
      ziel: "Grundlegende Stressresistenz entwickeln",
      merkmale: ["Freude auch bei Fehlern", "Unbefangenheit in Spielsituationen", "Natürlicher Umgang mit Herausforderungen"],
      hinweise: ["Fehlerfreundliche Atmosphäre schaffen", "Druck vermeiden", "Spielfreude im Vordergrund", "Positive Verstärkung nutzen"],
    },
    {
      ziel: "Erste Drucksituationen meistern",
      merkmale: ["Ruhe in einfachen Drucksituationen", "Fehler als normal akzeptieren", "Erste Bewältigungsstrategien"],
      hinweise: ["Leichten Druck schrittweise einführen", "Fehleranalyse ohne Bewertung", "Bewältigungsstrategien vermitteln", "Selbstvertrauen stärken"],
    },
    {
      ziel: "Konstruktiver Umgang mit Druck & Fehlern",
      merkmale: ["Stabile Leistung unter moderatem Druck", "Fehler als Lernchance nutzen", "Selbstregulation entwickeln"],
      hinweise: ["Systematisches Drucktraining", "Fehleranalyse & Korrektur", "Selbstregulationstechniken", "Resilienz aufbauen"],
    },
    {
      ziel: "Souveräner Umgang mit hohem Druck",
      merkmale: ["Stabile Leistung unter hohem Druck", "Fehler schnell verarbeiten", "Andere in Drucksituationen unterstützen"],
      hinweise: ["Training unter Wettkampfbedingungen", "Mentale Techniken perfektionieren", "Führungsrolle in Drucksituationen", "Stressmanagement beherrschen"],
    },
    {
      ziel: "Druckresistenz als Stärke nutzen",
      merkmale: ["Druck als Motivator nutzen", "Team in kritischen Momenten führen", "Fehlerkultur im Team prägen"],
      hinweise: ["Druck als Leistungssteigerung nutzen", "Krisenmanagement übernehmen", "Mentale Führungsrolle", "Fehlerkultur entwickeln"],
    },
  ],
  team: [
    {
      ziel: "Grundlegende Teamzugehörigkeit",
      merkmale: ["Erste Teamzugehörigkeit", "Grundregeln der Höflichkeit", "Orientierung an anderen"],
      hinweise: ["Teamgefühl entwickeln", "Grundregeln des Zusammenlebens", "Kommunikation spielerisch fördern", "Inklusion aller Spieler"],
    },
    {
      ziel: "Aktive Teamteilnahme",
      merkmale: ["Hilfsbereitschaft zeigen", "Konstruktive Gespräche", "Interesse an Verbesserung"],
      hinweise: ["Teamwork fördern", "Gesprächsführung üben", "Kommunikationstraining im Spiel", "Kooperative Lernformen"],
    },
    {
      ziel: "Konstruktive Teamarbeit",
      merkmale: ["Konstruktives Feedback geben", "Konflikte konstruktiv lösen", "Unterstützung von Mitspielern"],
      hinweise: ["Feedback-Techniken vermitteln", "Konfliktlösungsstrategien", "Intensive Kommunikationsschulung", "Teamrollen verstehen"],
    },
    {
      ziel: "Teamführung & -entwicklung",
      merkmale: ["Motivation von Mitspielern", "Führung durch Kommunikation", "Vorbildfunktion übernehmen"],
      hinweise: ["Strategische Kommunikation", "Motivationstechniken vermitteln", "Führungskommunikation schulen", "Teamdynamik verstehen"],
    },
    {
      ziel: "Teamkultur prägen",
      merkmale: ["Inspiration durch Worte", "Teambuilding durch Kommunikation", "Verantwortung für Teamerfolg"],
      hinweise: ["Natürliche Kommunikationsführung", "Kommunikationsverantwortung übertragen", "Rhetorik & Präsentation", "Teamkultur entwickeln"],
    },
  ],
};

export default function Modul4MentaleSoziale() {
  const [activeTab, setActiveTab] = useState("persoenlichkeit");

  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-green-800 mb-6">
        Modul 4: Mentale & soziale Entwicklung
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
  );
}
