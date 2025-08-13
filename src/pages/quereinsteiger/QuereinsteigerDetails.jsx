import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function QuereinsteigerDetails() {
  const details = [
    {
      heading: "Ziel",
      content: `Quereinsteiger:innen sollen sich schnell orientieren, ihre Stärken einbringen und eine klare Perspektive bekommen. Ziel ist eine nahtlose Integration mit Wertschätzung der Vorerfahrung, klarer Rollenzuteilung und Entwicklungsperspektive – ohne Vergleichsdruck, aber mit Anerkennung.`
    },
    {
      heading: "Perspektive",
      content: `Aus Sicht eines Quereinsteigers oder einer Quereinsteigerin:
„Ich komme aus einem anderen Sport/Verein – habe andere Erfahrungen, andere Stärken.
Wo ist mein Platz hier? Werden meine Fähigkeiten gesehen? Kann ich mich einbringen?"`
    },
    {
      heading: "Haltung & Grundprinzipien",
      content: `● Vorerfahrung ist ein Plus – nicht ein Defizit.
● Integration braucht Zeit – aber auch klare Struktur.
● Stärken sichtbar machen – Schwächen nicht betonen.
● Rollenfindung ist ein Prozess – nicht ein Zustand.`
    },
    {
      heading: "Trainer-Werkzeuge",
      content: `Bereich\tUmsetzung
Stärkenanalyse\tGespräch über Vorerfahrung, Stärken identifizieren, Potenziale erkennen
Rollenzuteilung\tBasierend auf Stärken, nicht auf Defiziten
Integration im Team\tVorstellung der neuen Stärken, Wertschätzung der Unterschiede
Entwicklungspfad\tIndividueller Plan für die ersten 6-8 Wochen`
    },
    {
      heading: "Spieler:innen-Check",
      content: `Fragen für die ersten 6 Wochen:
● Welche Stärken bringst du aus deiner Vorerfahrung mit?
● Wo siehst du deinen Platz im Team?
● Was macht dir noch Schwierigkeiten?
● Wie fühlst du dich in deiner neuen Rolle?
→ Ziel: Selbstbewusstsein stärken und Integration fördern`
    },
    {
      heading: "Elternrolle & Kommunikation",
      content: `Maßnahme\tWirkung
Integrationsgespräch\tTrainer:in erklärt den Integrationsprozess
Stärkenportfolio\tDokumentation der Vorerfahrung und Stärken
Regelmäßige Rückmeldung\tAlle 2 Wochen: Wie läuft die Integration?
Zielgespräch nach 6 Wochen\tBilanz ziehen und nächste Schritte planen`
    },
    {
      heading: "Typen & Empfehlungen",
      content: `Typ\tBesonderheit\tEmpfehlung
„Sportlich, aber andere Sportart"\tGute Athletik, andere Technik\tTechnik aufbauen, Athletik nutzen
„Vereinserfahren, aber neuer Kontext"\tSoziale Kompetenz, andere Strukturen\tSchnelle Rollenzuteilung, Führungsaufgaben
„Pause nach längerer Zeit"\tVorerfahrung, aber eingerostet\tGeduld, schrittweise Steigerung`
    },
    {
      heading: "Beispielsituationen mit Vorgehen",
      content: `Beispiel 1: 14-jähriger Fußballer wechselt zu Handball
Situation: Sehr gute Athletik, aber keine Handballtechnik
Vorgehen:
● Stärkenanalyse: Schnelligkeit, Ausdauer, Spielverständnis
● Technikstationen mit Fußball-Ähnlichkeiten
● Integration in Laufspiele, wo Athletik zählt
● Nach 4 Wochen: Erste Handball-spezifische Aufgaben

Beispiel 2: 16-jährige Basketballerin kommt aus anderem Verein
Situation: Gute Wurftechnik, aber andere Spielweise
Vorgehen:
● Wurftechnik als Vorteil nutzen
● Spielverständnis auf Handball übertragen
● Schnelle Integration in Angriffssituationen
● Führungsrolle bei Wurfübungen`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Navigation zurück */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/quereinsteiger"
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Übersicht
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Quereinsteiger:innen – Klarheit & Perspektive statt Frust
          </h1>
          <p className="text-xl text-green-600">
            Wer aus einer anderen Sportart, einem anderen Verein oder nach Pause kommt, bringt Ressourcen mit
          </p>
        </motion.div>

        {/* Inhalt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {details.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              className="bg-white border border-green-200 rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                {section.heading}
              </h2>
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
