import { useState } from "react";
import { motion } from "framer-motion";
import { FaFlagCheckered, FaArrowUp, FaTools, FaPuzzlePiece, FaCrown } from "react-icons/fa";

const stufenIcons = [FaFlagCheckered, FaArrowUp, FaTools, FaPuzzlePiece, FaCrown];
const stufenFarben = ["bg-red-200", "bg-orange-200", "bg-yellow-200", "bg-green-200", "bg-blue-200"];
const stufenNamen = ["Basis", "Entwickelnd", "Anwendend", "Sicher", "Führend"];

// Datenstruktur: Tabs -> Stufen -> Inhalte
const data = [
  {
    title: "Lernverhalten & Trainingsbereitschaft",
    stufen: [
      {
        ziel: "Grundlegende Lernbereitschaft entwickeln",
        merkmale: ["Neugier auf neue Bewegungen", "Spielerisches Ausprobieren", "Kurze Aufmerksamkeitsspanne"],
        hinweise: ["Spielerische Lernformen bevorzugen", "Häufige Übungswechsel", "Positive Lernatmosphäre schaffen"]
      },
      {
        ziel: "Strukturiertes Lernen akzeptieren",
        merkmale: ["Bereitschaft zu Wiederholungen", "Erste Konzentrationsphasen", "Interesse an Verbesserung"],
        hinweise: ["Einfache Lernstrukturen einführen", "Kurze, klare Erklärungen", "Sofortiges Feedback geben"]
      },
      {
        ziel: "Selbstständiges Lernen entwickeln",
        merkmale: ["Eigeninitiative beim Üben", "Fehler als Lernchance verstehen", "Längere Konzentrationsphasen"],
        hinweise: ["Selbstreflexion fördern", "Eigenverantwortung stärken", "Individuelle Lernwege respektieren"]
      },
      {
        ziel: "Optimierte Lernprozesse steuern",
        merkmale: ["Bewusste Lernplanung", "Effiziente Übungsgestaltung", "Transfer zwischen Situationen"],
        hinweise: ["Komplexe Lernaufgaben stellen", "Transferleistungen fördern", "Metakognitive Fähigkeiten entwickeln"]
      },
      {
        ziel: "Lernprozesse anderer unterstützen",
        merkmale: ["Mentoring jüngerer Spieler", "Innovative Lernansätze entwickeln", "Lernkultur im Team prägen"],
        hinweise: ["Lehrfunktionen übertragen", "Kreative Lernmethoden entwickeln", "Wissenstransfer fördern"]
      }
    ]
  },
  {
    title: "Entwicklungsverständnis & Selbsteinschätzung",
    stufen: [
      {
        ziel: "Grundlegendes Entwicklungsbewusstsein",
        merkmale: ["Freude an neuen Fähigkeiten", "Unbewusste Kompetenzentwicklung", "Orientierung an anderen"],
        hinweise: ["Entwicklungsfortschritte feiern", "Vergleiche vermeiden", "Individuelle Stärken betonen"]
      },
      {
        ziel: "Bewusstsein für eigene Entwicklung",
        merkmale: ["Erste Selbstbeobachtung", "Interesse an Verbesserung", "Verständnis für Übungszwecke"],
        hinweise: ["Selbstbeobachtung anleiten", "Entwicklungsziele gemeinsam setzen", "Fortschritte dokumentieren"]
      },
      {
        ziel: "Realistische Selbsteinschätzung",
        merkmale: ["Stärken und Schwächen erkennen", "Angemessene Zielsetzung", "Konstruktiver Umgang mit Rückschlägen"],
        hinweise: ["Selbstreflexion systematisieren", "Realistische Ziele formulieren", "Feedback-Kultur etablieren"]
      },
      {
        ziel: "Strategische Entwicklungsplanung",
        merkmale: ["Langfristige Entwicklungsziele", "Bewusste Kompetenzentwicklung", "Eigenverantwortliche Trainingsgestaltung"],
        hinweise: ["Individuelle Entwicklungspläne", "Selbstständige Trainingsplanung", "Langfristige Perspektiven entwickeln"]
      },
      {
        ziel: "Entwicklungsbegleitung anderer",
        merkmale: ["Mentoring-Kompetenzen", "Entwicklungsprozesse verstehen", "Andere in ihrer Entwicklung unterstützen"],
        hinweise: ["Mentoring-Aufgaben übertragen", "Entwicklungspsychologie vermitteln", "Führungsverantwortung entwickeln"]
      }
    ]
  },
  {
    title: "Trainingsmethodik & Lernformen",
    stufen: [
      {
        ziel: "Spielerisches Lernen bevorzugen",
        merkmale: ["Lernen durch Spielen", "Imitationslernen", "Kurze Übungssequenzen"],
        hinweise: ["Spielformen als Hauptmethode", "Demonstration und Nachahmung", "Spaß als Lernmotivation"]
      },
      {
        ziel: "Strukturierte Lernformen akzeptieren",
        merkmale: ["Bereitschaft zu Techniktraining", "Verständnis für Übungsaufbau", "Erste analytische Betrachtungen"],
        hinweise: ["Systematischen Übungsaufbau einführen", "Einfache Korrekturen geben", "Übungszwecke erklären"]
      },
      {
        ziel: "Vielfältige Lernmethoden nutzen",
        merkmale: ["Verschiedene Lernwege verstehen", "Bewusste Methodenwahl", "Transfer zwischen Übungsformen"],
        hinweise: ["Methodenvielfalt anbieten", "Lerntypen berücksichtigen", "Transferaufgaben stellen"]
      },
      {
        ziel: "Optimale Lernmethoden wählen",
        merkmale: ["Situationsgerechte Methodenwahl", "Effiziente Lernstrategien", "Bewusste Trainingssteuerung"],
        hinweise: ["Komplexe Trainingsmethoden", "Individuelle Lernstrategien", "Methodenkompetenz entwickeln"]
      },
      {
        ziel: "Trainingsmethodik mitgestalten",
        merkmale: ["Innovative Trainingsansätze", "Methodische Führungsrolle", "Trainingskonzepte entwickeln"],
        hinweise: ["Trainingsplanung mitverantworten", "Neue Methoden entwickeln", "Trainingsphilosophie prägen"]
      }
    ]
  }
];

export default function Modul1() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-green-800 mb-6">M1: Entwicklungsmerkmale & Methodik</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {data.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-full font-semibold shadow-md transition ${
              activeTab === i ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Karten */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data[activeTab].stufen.map((stufe, idx) => {
          const Icon = stufenIcons[idx];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-5 rounded-2xl shadow-lg ${stufenFarben[idx]}`}
            >
              <div className="flex items-center mb-3">
                <Icon className="text-2xl mr-2" />
                <h3 className="text-xl font-bold">{stufenNamen[idx]} – {stufe.ziel}</h3>
              </div>
              {/* Gamification-Leiste */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${i <= idx ? "bg-green-700" : "bg-gray-300"}`}
                  ></div>
                ))}
              </div>
              <h4 className="font-semibold">Typische Merkmale:</h4>
              <ul className="list-disc ml-5 mb-2">
                {stufe.merkmale.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
              <h4 className="font-semibold">Trainingshinweise:</h4>
              <ul className="list-disc ml-5">
                {stufe.hinweise.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
