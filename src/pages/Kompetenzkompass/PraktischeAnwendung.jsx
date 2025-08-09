import { motion } from "framer-motion";

export default function PraktischeAnwendung() {
  const sections = [
    {
      title: "Modulbasierte Zielkarten",
      content: [
        "Individuelle Modulprofile: Jeder Spieler erhält ein Profil mit aktuellem Stand in allen 6 Modulen",
        "Entwicklungsschwerpunkte: 2–3 Module werden als Schwerpunkte definiert",
        "Konkrete Ziele: Spezifische, messbare Ziele für die nächsten 3–6 Monate",
        "Fortschrittsdokumentation: Regelmäßige Aktualisierung"
      ]
    },
    {
      title: "Beispiel einer Zielkarte",
      content: [
        "Spieler: Max Mustermann (12 Jahre)",
        "Aktueller Stand: M1: 🟠 | M2: 🟡 | M3: 🟠 | M4: 🔴 | M5: 🔴 | M6: 🟠",
        "Entwicklungsschwerpunkte: M4 von 🔴 auf 🟠 (Ziel: konstruktiver Umgang mit Fehlern); M3 von 🟠 auf 🟡 (Ziel: Sprungwurf beidbeinig sicher beherrschen)"
      ]
    },
    {
      title: "Modulbasierte Trainingsplanung",
      content: [
        "Wöchentliche Modulschwerpunkte: Fokus auf 2–3 Module",
        "Trainingseinheiten: Klare Zuordnung der Übungen zu Modulen",
        "Reflexionsfragen pro Modul",
        "Fortschrittsmessung: Regelmäßige Standortbestimmung"
      ]
    },
    {
      title: "Reflexionsfragen",
      content: [
        "M1: Wie gut konnte ich heute neue Dinge lernen?",
        "M2: Wie fit und beweglich fühlte ich mich?",
        "M3: Welche technischen/taktischen Fortschritte habe ich gemacht?",
        "M4: Wie bin ich mit Druck und Fehlern umgegangen?",
        "M5: Wie gut habe ich meine Position/Rolle gespielt?",
        "M6: Wie habe ich zur Teamatmosphäre beigetragen?"
      ]
    },
    {
      title: "Kompetenz-Abzeichen & Zertifikate",
      content: [
        "Modulsterne für erreichte Stufen",
        "Allrounder-Abzeichen für ausgewogene Entwicklung",
        "Spezialist-Zertifikate für herausragende Leistungen",
        "Führungsabzeichen für Stufe 🔵 in M4 & M6",
        "Zertifizierung: Bronze (🟠 in 4 Modulen), Silber (🟡 in 4 Modulen), Gold (🟢 in 4 Modulen), Platin (🔵 in 2 Modulen)"
      ]
    },
    {
      title: "Integration & Förderung",
      content: [
        "Quereinsteiger: Standortbestimmung, individuelle Förderpläne, Mentoring-System, flexible Gruppierung",
        "Hochentwickelte: Führungsrollen, Mentoring-Aufgaben, Kreativitätstraining, Spezialisierungsmöglichkeiten"
      ]
    },
    {
      title: "Trainingshinweise",
      content: [
        "Altersunabhängig, individuell, ganzheitlich, langfristig",
        "Modulübergreifendes Training: integrativ, mit Schwerpunktsetzung, Transferförderung",
        "Entwicklungsorientiert: stärkenorientiert, herausfordernd, unterstützend, wertschätzend",
        "Qualitätssicherung: regelmäßige Standortbestimmung, Dokumentation, Anpassung, Reflexion"
      ]
    }
  ];

  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-purple-800 mb-6">
        🎯 Praktische Anwendung des Kompetenzkompasses
      </motion.h1>
      {sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">{section.title}</h2>
          <ul className="list-disc ml-5 space-y-1">
            {section.content.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}


