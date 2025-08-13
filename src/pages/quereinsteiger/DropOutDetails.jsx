import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DropOutDetails() {
  const details = [
    {
      heading: "Ziel",
      content: `Drop-outs sollen früh erkannt und verhindert werden. Ziel ist es, Spieler:innen zu halten, bevor sie den Verein verlassen. Wir schaffen Strukturen, um Rückzugstendenzen früh zu erkennen und Räume zu schaffen, in denen sich Spieler:innen wieder eingefangen fühlen.`
    },
    {
      heading: "Perspektive",
      content: `Aus Sicht eines Spielers oder einer Spielerin, der/die sich zurückzieht:
„Ich fühle mich nicht mehr gesehen, nicht mehr gebraucht, nicht mehr dazugehörig.
Vielleicht bin ich nicht gut genug? Vielleicht passt es nicht mehr zu mir?"`
    },
    {
      heading: "Haltung & Grundprinzipien",
      content: `● Drop-out beginnt leise – wir müssen genau hinschauen.
● Jede:r Rückzug hat einen Grund – wir müssen ihn verstehen.
● Prävention ist besser als Heilung – wir müssen früh handeln.
● Zugehörigkeit ist ein Prozess – wir müssen sie aktiv gestalten.`
    },
    {
      heading: "Trainer-Werkzeuge",
      content: `Bereich\tUmsetzung
Früherkennung\tRegelmäßige Einzelgespräche, Beobachtung von Verhaltensänderungen
Bindungsarbeit\tIndividuelle Aufmerksamkeit, persönliche Beziehungen aufbauen
Flexibilität\tAnpassung der Anforderungen, individuelle Entwicklungswege
Kommunikation\tOffene Gespräche, ehrliches Feedback, gemeinsame Lösungen`
    },
    {
      heading: "Spieler:innen-Check",
      content: `Warnsignale erkennen (alle 2 Wochen prüfen):
● Kommt der/die Spieler:in noch regelmäßig zum Training?
● Beteiligt er/sie sich noch aktiv am Training?
● Zeigt er/sie noch Interesse an der Entwicklung?
● Fühlt er/sie sich noch als Teil des Teams?
→ Ziel: Probleme früh erkennen und angehen`
    },
    {
      heading: "Elternrolle & Kommunikation",
      content: `Maßnahme\tWirkung
Regelmäßige Gespräche\tVertrauen aufbauen, Probleme früh erkennen
Transparente Kommunikation\tKlare Erwartungen, ehrliches Feedback
Gemeinsame Lösungen\tEltern als Partner, nicht als Gegner
Entwicklungsplan\tKonkrete Schritte, messbare Ziele`
    },
    {
      heading: "Typen & Empfehlungen",
      content: `Typ\tBesonderheit\tEmpfehlung
„Leistungsdruck"\tÜberfordert, unsicher\tAnforderungen reduzieren, Erfolge feiern
„Soziale Probleme"\tKonflikte im Team, Ausgrenzung\tTeamarbeit fördern, Konflikte lösen
„Interessenverlust"\tLangeweile, fehlende Motivation\tNeue Herausforderungen, Abwechslung
„Persönliche Krisen"\tPrivater Stress, andere Prioritäten\tVerständnis zeigen, Flexibilität bieten`
    },
    {
      heading: "Beispielsituationen mit Vorgehen",
      content: `Beispiel 1: 15-jähriger Spieler zieht sich zurück
Situation: Kommt noch zum Training, aber beteiligt sich kaum noch
Vorgehen:
● Einzelgespräch: Was beschäftigt dich? Was brauchst du?
● Individuelle Aufgaben: Spezielle Rolle im Training
● Erfolge sichtbar machen: Kleine Fortschritte wertschätzen
● Nach 2 Wochen: Bilanz ziehen, nächste Schritte planen

Beispiel 2: 12-jährige Spielerin fühlt sich überfordert
Situation: Weint oft im Training, traut sich nichts mehr zu
Vorgehen:
● Gespräch mit Eltern: Wie ist die Situation zu Hause?
● Anforderungen reduzieren: Einfache Aufgaben, viel Lob
● Buddy-System: Unterstützung durch erfahrene Spieler:in
● Regelmäßige Erfolgserlebnisse schaffen`
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
            Drop-out verhindern – Hinsehen, handeln, halten
          </h1>
          <p className="text-xl text-green-600">
            Ausstieg beginnt oft leise: durch Rückzug, Vermeidung, fehlende Bindung
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
