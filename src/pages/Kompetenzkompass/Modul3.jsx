import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "technik", label: "Grundtechniken & Ballhandling" },
  { id: "taktik", label: "Individualtaktik & Spielverständnis" },
  { id: "abwehr", label: "Abwehrverhalten & Zweikampfführung" },
];

const stufen = [
  { color: "bg-red-200", icon: "🔴", title: "Basis" },
  { color: "bg-orange-200", icon: "🟠", title: "Entwickelnd" },
  { color: "bg-yellow-200", icon: "🟡", title: "Anwendend" },
  { color: "bg-green-200", icon: "🟢", title: "Sicher" },
  { color: "bg-blue-200", icon: "🔵", title: "Führend" },
];

const data = {
  technik: [
    {
      ziel: "Grundlegende Ballbeherrschung entwickeln",
      merkmale: ["Bälle aus verschiedenen Richtungen fangen", "Einfaches Prellen mit dominanter Hand", "Grundlegende Ballannahme", "Schlagwurf aus dem Stand"],
      hinweise: ["Vielseitige motorische Grundausbildung", "Spielerisches Ballhandling", "Koordinative Grundlagen schaffen", "Technikerwerb ohne Zeitdruck"],
    },
    {
      ziel: "Erweiterte Ballfertigkeiten erwerben",
      merkmale: ["Beidseitiges Prellen", "Ballannahme in der Bewegung", "Einhändiges Fangen", "Schlagwurf aus dem Lauf"],
      hinweise: ["Koordinationstraining intensivieren", "Ballhandling unter leichtem Druck", "Bewegungsschulung erweitern", "Technikvariationen einführen"],
    },
    {
      ziel: "Sicheres Ballhandling unter Spielbedingungen",
      merkmale: ["Prellen unter Druckbedingungen", "AIM-Position nach Ballannahme", "Ballverarbeitung in Vorwärtsbewegung", "Sprungwurf beidbeinig"],
      hinweise: ["Training unter Gegnerdruck", "Schnelle Ballverarbeitung üben", "Situative Ballhandling-Aufgaben", "Komplexe Übungsformen"],
    },
    {
      ziel: "Optimierte Ballbeherrschung in komplexen Situationen",
      merkmale: ["Perfekte Auge-Hand-Koordination", "Ballhandling bei hoher Spieldynamik", "Sichere Ballverarbeitung unter Stress"],
      hinweise: ["Flexible Technikanpassung", "Komplexe koordinative Aufgaben", "Training unter Zeitdruck", "Ballhandling bei körperlicher Belastung"],
    },
    {
      ziel: "Außergewöhnliche Ballfertigkeiten & Kreativität",
      merkmale: ["Spektakuläre Ballbeherrschung", "Kreative Lösungen in Extremsituationen", "Vorbild für Mitspieler"],
      hinweise: ["Kreative Ballhandling-Challenges", "Entwicklung eigener Techniken", "Mentoring jüngerer Spieler", "Kreativitätstraining"],
    },
  ],
  taktik: [
    {
      ziel: "Grundlegendes Spielverständnis entwickeln",
      merkmale: ["Erkennen von Tor und Mitspielern", "Einfache Spielsituationen verstehen", "Grundlegende Orientierung im Raum", "Einfache Körpertäuschungen"],
      hinweise: ["Viel freies Spielen", "Einfache Spielregeln vermitteln", "Raumorientierung fördern", "Spielerisches 1-gegen-1"],
    },
    {
      ziel: "Erweiterte Spielsituationen verstehen",
      merkmale: ["Unterscheidung zwischen Angriff & Abwehr", "Erkennen von Über- & Unterzahl", "Grundlegende taktische Regeln", "Lauftäuschungen in beide Richtungen"],
      hinweise: ["Einführung taktischer Grundregeln", "Spielphasen bewusst machen", "Einfache Entscheidungsaufgaben", "Systematisches 1-gegen-1-Training"],
    },
    {
      ziel: "Situationsgerechte Entscheidungen treffen",
      merkmale: ["Schnelle Situationsbewertung", "Angemessene Handlungsalternativen wählen", "Eigene Kompetenzen richtig einschätzen"],
      hinweise: ["Entscheidungstraining unter Zeitdruck", "Verschiedene Spielsituationen üben", "Selbstreflexion fördern", "Training gegen verschiedene Verteidigertypen"],
    },
    {
      ziel: "Komplexe Spielsituationen meistern",
      merkmale: ["Antizipation von Spielentwicklungen", "Flexible Anpassung an Spielverlauf", "Kommunikation mit Mitspielern"],
      hinweise: ["Komplexe Spielformen", "Antizipationstraining", "Kommunikationstraining", "1-gegen-1 unter hohem Druck"],
    },
    {
      ziel: "Spielführung & strategisches Denken",
      merkmale: ["Spielgestaltung & -steuerung", "Strategische Entscheidungen", "Führung des Teams in kritischen Momenten"],
      hinweise: ["Spielführungsaufgaben übertragen", "Strategieentwicklung", "Überragende 1-gegen-1-Fähigkeiten", "Mentoring-Rolle"],
    },
  ],
  abwehr: [
    {
      ziel: "Grundlegende Abwehrprinzipien verstehen",
      merkmale: ["Zwischen Tor & Angreifer stehen", "Einfache Grundposition", "Positive Einstellung zur Abwehr"],
      hinweise: ["Offensive Verteidigung von Anfang an", "Spielerische Abwehrformen", "Freude an der Abwehr wecken", "Einfache Teamabwehrformen"],
    },
    {
      ziel: "Grundlegende Abwehrtechniken erlernen",
      merkmale: ["Korrekte Grundstellung", "Einfache Zweikampfführung", "Aktives Verteidigen in großen Räumen"],
      hinweise: ["Aushelfen bei Durchbrüchen", "Systematisches Abwehrtraining", "Grundstellungen üben", "1-gegen-1-Abwehr schulen"],
    },
    {
      ziel: "Situationsgerechtes Abwehrverhalten",
      merkmale: ["Anpassung an verschiedene Angreifertypen", "Regelgerechter Körperkontakt", "Antizipation von Angreiferaktionen"],
      hinweise: ["Flexible Übergaben", "Training gegen verschiedene Angreifertypen", "Zweikampftechnik verfeinern", "Antizipationstraining"],
    },
    {
      ziel: "Dominante Abwehrleistung unter Druck",
      merkmale: ["Sichere Zweikampfführung", "Flexible Anpassung an Spielsituationen", "Kommunikation in der Abwehr"],
      hinweise: ["Proaktive Abwehrarbeit", "Abwehrtraining unter hohem Druck", "Komplexe Abwehrsituationen", "Perfektionierung der Abwehrkooperation"],
    },
    {
      ziel: "Abwehrführung & strategische Rolle",
      merkmale: ["Führung der Abwehrreihe", "Strategische Abwehrarbeit", "Vorbild für defensive Einstellung"],
      hinweise: ["Abwehrführungsaufgaben", "Strategische Abwehrschulung", "Mentoring defensiver Tugenden", "Innovative Abwehrlösungen"],
    },
  ],
};

export default function Modul3TechnikTaktik() {
  const [activeTab, setActiveTab] = useState("technik");

  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        Modul 3: Technik & Taktik
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
