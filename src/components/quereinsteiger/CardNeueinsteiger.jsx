import React, { useState } from "react";

export default function CardNeueinsteiger() {
  const [open, setOpen] = useState(false);

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
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Titel & Kurzbeschreibung */}
      <div className="p-5 cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="text-lg font-bold text-gray-900">
          Neueinsteiger:innen – Willkommen statt Überforderung
        </h3>
        <p className="mt-3 text-gray-700">
          Egal ob mit 8 oder 16 – jede:r ist willkommen. Wir holen sie dort ab,
          wo sie stehen. Kein Start ist zu spät – entscheidend ist die
          Begleitung. Wir geben Struktur, Aufgaben, Vertrauen – und das klare
          Signal: Du gehörst dazu.
        </p>
        <span className="text-sm text-green-600 mt-2 block">
          {open ? "Weniger anzeigen ▲" : "Mehr anzeigen ▼"}
        </span>
      </div>

      {/* Ausklappbereich */}
      {open && (
        <div className="p-5 border-t border-gray-200 animate-fadeIn">
          {details.map((section, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="text-md font-semibold text-gray-800">
                {section.heading}
              </h4>
              <p className="mt-1 text-gray-700 whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
