import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DoppelspielrechtDetails() {
  const details = [
    {
      heading: "Ziel",
      content: `Spieler:innen mit Doppelspielrecht sollen sich beim SV Laim vollwertig aufgenommen, gefördert und respektiert fühlen – unabhängig davon, ob sie langfristig bleiben oder nicht. Ziel ist ein transparentes, verbindliches und wertschätzendes Miteinander, das auf Ausbildung statt Abwerbung setzt.`
    },
    {
      heading: "Perspektive",
      content: `Aus Sicht eines Spielers oder einer Spielerin mit Doppelspielrecht:
„Ich spiele in zwei Vereinen – das ist erlaubt, aber nicht immer einfach.
Fühle ich mich hier genauso wertgeschätzt? Werde ich genauso gefördert?
Kann ich hier genauso wachsen wie dort?"`
    },
    {
      heading: "Haltung & Grundprinzipien",
      content: `● Doppelspielrecht ist ein Recht – nicht ein Privileg.
● Jede:r Spieler:in verdient volle Wertschätzung – unabhängig von der Vereinszugehörigkeit.
● Ausbildung steht im Vordergrund – nicht die Bindung an den Verein.
● Transparenz schafft Vertrauen – alle Beteiligten wissen Bescheid.`
    },
    {
      heading: "Trainer-Werkzeuge",
      content: `Bereich\tUmsetzung
Gleichbehandlung\tGleiche Trainingsmöglichkeiten, gleiche Spielanteile
Individuelle Förderung\tEntwicklungsplan, spezielle Aufgaben, persönliche Aufmerksamkeit
Kommunikation\tRegelmäßige Gespräche, ehrliches Feedback, gemeinsame Ziele
Integration\tVollwertiges Teammitglied, gleiche Verantwortung, gleiche Rechte`
    },
    {
      heading: "Spieler:innen-Check",
      content: `Fragen für regelmäßige Gespräche:
● Fühlst du dich hier genauso wertgeschätzt wie im anderen Verein?
● Bekommst du hier die Förderung, die du brauchst?
● Fühlst du dich als vollwertiges Teammitglied?
● Was können wir verbessern, damit du dich hier wohlfühlst?
→ Ziel: Gleichbehandlung sicherstellen und Verbesserungen identifizieren`
    },
    {
      heading: "Elternrolle & Kommunikation",
      content: `Maßnahme\tWirkung
Transparente Kommunikation\tAlle Beteiligten wissen Bescheid
Gemeinsame Entwicklungsplanung\tZiele und Wege sind klar definiert
Regelmäßige Rückmeldung\tFortschritte werden dokumentiert und besprochen
Offene Gespräche\tProbleme werden früh erkannt und gelöst`
    },
    {
      heading: "Typen & Empfehlungen",
      content: `Typ\tBesonderheit\tEmpfehlung
„Hauptverein + Ergänzung"\tSV Laim als Hauptverein, anderer als Ergänzung\tVollwertige Integration, Führungsrolle
„Gleichberechtigt"\tBeide Vereine gleich wichtig\tFlexibilität, individuelle Förderung
„Übergangsphase"\tSV Laim als Zwischenstation\tKlare Perspektive, ehrliche Kommunikation
„Spezialisierung"\tUnterschiedliche Schwerpunkte in beiden Vereinen\tKomplementäre Förderung, Synergien nutzen`
    },
    {
      heading: "Beispielsituationen mit Vorgehen",
      content: `Beispiel 1: 16-jähriger Spieler mit Doppelspielrecht
Situation: Spielt hauptsächlich in anderem Verein, kommt 1x pro Woche zu SV Laim
Vorgehen:
● Klare Kommunikation: Was erwartest du, was können wir bieten?
● Individueller Entwicklungsplan: Spezielle Schwerpunkte für SV Laim
● Regelmäßige Rückmeldung: Wie läuft die Entwicklung?
● Nach 3 Monaten: Bilanz ziehen, Ziele anpassen

Beispiel 2: 14-jährige Spielerin wechselt zwischen Vereinen
Situation: Spielt in beiden Vereinen aktiv, fühlt sich nirgendwo richtig zugehörig
Vorgehen:
● Gespräch mit beiden Trainern: Gemeinsame Entwicklungsplanung
● Klare Rollenverteilung: Was macht jeder Verein besonders gut?
● Regelmäßige Abstimmung: Gemeinsame Ziele und Fortschritte
● Integration in beide Teams: Vollwertige Mitgliedschaft in beiden Vereinen`
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
            Sonderfall Doppelspielrecht – Ausbildung statt Abwerbung
          </h1>
          <p className="text-xl text-green-600">
            Vollwertige Aufnahme, Förderung und Respekt – unabhängig von der langfristigen Bindung
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
