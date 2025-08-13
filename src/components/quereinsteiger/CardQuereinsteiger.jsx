import React, { useState } from "react";

export default function CardQuereinsteiger() {
  const [open, setOpen] = useState(false);

  const details = [
    {
      heading: "Ziel",
      content: `Spieler:innen, die aus anderen Vereinen, Sportarten oder nach einer Pause zu uns kommen, sollen Orientierung, Anerkennung und Entwicklungschancen bekommen. Ziel ist es, sie individuell wahrzunehmen, ihr Vorwissen zu nutzen und sie stabil ins Team zu integrieren – ohne Leistungsdruck oder Vergleichsstress.`
    },
    {
      heading: "Perspektive",
      content: `Aus Sicht eines Quereinsteigers:
„Ich hab schon mal gespielt – aber anders.
Werde ich ernst genommen? Bin ich besser oder schlechter als die anderen?
Wo ist mein Platz hier? Muss ich mich erst beweisen?"`
    },
    {
      heading: "Haltung & Grundprinzipien",
      content: `● Quereinsteiger:innen sind kein Risiko – sondern eine Chance.
● Ressourcen zuerst sehen – dann Entwicklungsfelder.
● Vergleiche vermeiden – Fortschritt individuell begleiten.
● Wer neu kommt, bringt Geschichte mit – wir interessieren uns dafür.`
    },
    {
      heading: "Trainer-Werkzeuge",
      content: `Bereich\tUmsetzung
Statusklärung\t1:1-Gespräch zum Einstieg: „Was bringst du mit? Was brauchst du?"
Stärken sichtbar machen\tz. B. „Körpergefühl vom Turnen", „Antritt vom Fußball"
Rollenvergabe mit Entwicklungslogik\tPosition wählen, die Sicherheit + Lernpotenzial bietet
Frühe Teilhabe\tz. B. Abschlussspiel starten, Mini-Coaching-Aufgabe, Partnerarbeit
Vergleichsdruck vermeiden\tKein Ranking, sondern Zielorientierung („Du willst...")`
    },
    {
      heading: "Spieler:innen-Check",
      content: `Fragen für den Start (optional schriftlich / digital):
● Was bringst du aus deinem alten Sport/Verein mit?
● Was möchtest du beim Handball lernen?
● Was war dein bester Moment im neuen Team?
● Was brauchst du, um dich sicher zu fühlen?
→ Ziel: Selbstwert stärken und Vertrauen aufbauen`
    },
    {
      heading: "Elternrolle & Kommunikation",
      content: `Maßnahme\tWirkung
Startgespräch mit Haltungserklärung\t„Wir sehen Quereinsteiger:innen als Bereicherung."
Nachfragen nach 2–3 Wochen\t„Wie erlebt Ihr Kind den Start?" – Raum für offene Rückmeldung
Einbindung bei Bedarf\tz. B. Transport, kleine Helferrollen → Teamnähe fördern
Beruhigung bei Unsicherheit\t„Nicht alles muss sofort klappen – wir geben Zeit und Struktur."`
    },
    {
      heading: "Typen & Empfehlungen",
      content: `Typ\tBesonderheit\tEmpfehlung
Sportartwechsler:in\tz. B. Fußball, Volleyball, Judo\tBewegungskompetenz nutzen – Technik neu vermitteln
Vereinswechsler:in\tAnderes System, andere Erwartung\tHaltung erklären, Rollen klären, Unterschiede besprechen
Rückkehrer:in\tPause wegen Schule, Verletzung, Burnout\tBelastung langsam steigern, Positiver Re-Start
Wechsler:in mit Vorerfahrung\tSpielt gut, aber ist neu im Team\tSoziales Einbinden betonen – Führungsrolle später prüfen`
    },
    {
      heading: "Beispielsituationen mit Vorgehen",
      content: `Beispiel 1: 14-jähriger Fußballer wechselt in die C-Jugend
Situation: Top-Fitness, aber keine Balltechnik – erwartet schnelle Spielzeit
Vorgehen:
● Einstieg über Spielformen mit Bewegungsschwerpunkt
● Technikstation mit Extrazeit & Lobkultur („Du verbesserst dich sichtbar!")
● Position: Außen mit Fokus auf 1:1 & Raumlesen
● Nach 2 Wochen: Entwicklungsgespräch + Zielvereinbarung („Was willst du bis Herbst können?")

Beispiel 2: 16-jährige Rückkehrerin nach 2 Jahren Pause
Situation: Ehemaliges Talent, jetzt vorsichtig, zweifelnd
Vorgehen:
● Willkommensgespräch: „Warum bist du zurückgekommen?"
● Individualblock mit Technik + Teamverbindung (z. B. Warm-up mitführen)
● Rückmeldung in der Gruppe: „Schön, dass du da bist – du bringst was mit"
● Mini-Aufgabe: Mentorin für neue Spielerin

Beispiel 3: 13-jähriger Vereinswechsler mit schlechten Erfahrungen
Situation: Misstrauisch, erwartet wieder „aussortiert" zu werden
Vorgehen:
● Haltungsgespräch mit Trainer: „Hier geht's nicht um Selektion – sondern Entwicklung"
● Klare Rolle + Feedbackstruktur vereinbaren
● Eltern kurz einbinden: „Wie war's im alten Verein – was soll bei uns besser laufen?"
● Öffentliche Anerkennung von Fortschritt: „Das war richtig stark gelöst – gut beobachtet!"`
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Titel & Kurzbeschreibung */}
      <div className="p-5 cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="text-lg font-bold text-gray-900">
          Quereinsteiger:innen – Klarheit & Perspektive statt Frust
        </h3>
        <p className="mt-3 text-gray-700">
          Wer aus einer anderen Sportart, einem anderen Verein oder nach Pause
          kommt, bringt Ressourcen mit – aber auch Unsicherheit. Wir machen
          Stärken sichtbar, geben Orientierung, schaffen Rollen – ohne
          Vergleichsdruck.
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
