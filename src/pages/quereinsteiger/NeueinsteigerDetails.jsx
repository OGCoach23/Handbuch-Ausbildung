import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NeueinsteigerDetails() {
  const details = [
    {
      heading: "Ziel",
      content: `Neue Spieler:innen jeder Altersstufe sollen sich schnell aufgenommen, sicher und motiviert fühlen. Ziel ist ein gelungener Einstieg mit klarer Struktur, individueller Begleitung und sozialer Integration ins Team – ohne Überforderung, aber mit Entwicklungsperspektive.`
    },
    {
      heading: "Perspektive",
      content: `Aus Sicht eines neuen Spielers oder einer Spielerin:
„Ich bin neu hier – kenne niemanden, bin unsicher, vielleicht schlechter als die anderen.
Sehe ich hier meinen Platz? Werde ich ernst genommen? Kriege ich überhaupt den Ball?"`
    },
    {
      heading: "Haltung & Grundprinzipien",
      content: `● Niemand kommt zu spät – wir holen alle dort ab, wo sie stehen.
● Integration ist ein Ausbildungsschritt – keine Nebenaufgabe.
● Ankommen geht vor Anschlusstreffer – neue Spieler:innen brauchen erst Orientierung, dann Input.
● Zugehörigkeit ist die Basis für Entwicklung – und nicht umgekehrt.`
    },
    {
      heading: "Trainer-Werkzeuge",
      content: `Bereich\tUmsetzung
Willkommensstruktur\tBegrüßung im Team, kurzer Vorstellungs-Kreis, „Buddy" zur Seite stellen
Onboarding-Pfad (4 Wochen)\tWoche 1: Regelgrundlagen & Spiele, Woche 2: Technik spielerisch, Woche 3: erste Rolle im Spiel, Woche 4: Mini-Zielgespräch
Trainingsanpassung\tTechnikstationen mit leichterem Material (z. B. Softball), klare Wiederholungen
Verantwortung geben\tz. B. Bälle sortieren, Punkte zählen, Mithelfen beim Aufbau – früh Zugehörigkeit spüren
Integration im Team fördern\tRitual: Team begrüßt neue:n Spieler:in laut und sichtbar („Willkommen bei uns, [Name]!")`
    },
    {
      heading: "Spieler:innen-Check",
      content: `Fragen für die ersten 4 Wochen (mündlich oder schriftlich):
● Was gefällt dir bisher am meisten?
● Was macht dir noch Schwierigkeiten?
● Was würdest du gerne besser können?
● Wie fühlst du dich im Team?
→ Ziel: Selbsteinschätzung ermöglichen und Beziehung aufbauen`
    },
    {
      heading: "Elternrolle & Kommunikation",
      content: `Maßnahme\tWirkung
Begrüßungsgespräch\tTrainer:in erklärt Haltung, Ablauf, Ansprechpartner
Willkommensblatt\tTrainingszeiten, Struktur der ersten Wochen, Ziel des Einstiegs
Offenes Zuschauen (1. Woche)\tVertrauen schaffen – ohne Druck
Nachfrage nach 3 Wochen\t„Wie geht's Ihrem Kind – hat sich was verändert?"`
    },
    {
      heading: "Typen & Empfehlungen",
      content: `Typ\tBesonderheit\tEmpfehlung
„Viel Energie, wenig Technik"\tWild, motiviert, motorisch unsauber\tViel Spielanteil, klare Regeln, keine Bewertung
„Zurückhaltend, unsicher"\tKaum Wortmeldungen, passiv\t1:1-Zuwendung, kurze Erfolge sichtbar machen
„Technisch gut, aber neu im Team"\tVorerfahrung aus anderem Kontext\tSoziales Einbinden, Führungsrolle noch nicht sofort geben`
    },
    {
      heading: "Beispielsituationen mit Vorgehen",
      content: `Beispiel 1: 9-jähriger Neueinsteiger, nie im Vereinssport gewesen
Situation: Sehr schüchtern, kaum Ballkontakt, spricht kaum
Vorgehen:
● Begrüßung durch das Team mit Applaus
● Zuordnung zu „Buddy" im Training
● Stationentraining mit einfacher Aufgabe („Zähle deine Fänge")
● Nach Woche 1: Trainergespräch mit Eltern – positiver Zwischenstand
● Woche 2: Erste Rolle im Abschlussspiel: „Du startest mit dem Ball!"

Beispiel 2: 13-Jährige Neueinsteigerin, sehr sportlich, will sofort „mitspielen"
Situation: Erwartet schnelle Spielbeteiligung, wird ungeduldig
Vorgehen:
● Technikstation mit Steigerungsstufen
● Direkte Integration in Abschlussspiel mit klarer Aufgabe („Du hältst heute die Mitte frei")
● Rückmeldung direkt nach Training: „Was hat dir gefallen, was war neu?"
● Ziel für Woche 2: erster Pass unter Gegnerdruck`
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
            Neueinsteiger:innen – Willkommen statt Überforderung
          </h1>
          <p className="text-xl text-green-600">
            Egal ob mit 8 oder 16 – jede:r ist willkommen
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
