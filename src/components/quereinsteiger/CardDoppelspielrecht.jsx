import React, { useState } from "react";

export default function CardDoppelspielrecht() {
  const [open, setOpen] = useState(false);

  const details = [
    {
      heading: "Ziel",
      content: `Spieler:innen mit Doppelspielrecht sollen sich beim SV Laim vollwertig aufgenommen, gefördert und respektiert fühlen – unabhängig davon, ob sie langfristig bleiben oder nicht. Ziel ist ein transparentes, verbindliches und wertschätzendes Miteinander, das auf Ausbildung statt Abwerbung setzt.`
    },
    {
      heading: "Perspektive",
      content: `Aus Sicht eines Spielers mit Doppelspielrecht:
„Ich bin nicht ganz hier – aber ich spiele mit.
Sehen die mich wirklich? Muss ich mich mehr beweisen? Will man mich hier behalten?"

Und aus Sicht des Trainerteams:
„Wie gehe ich damit um, wenn ich weiß: Der ist vielleicht nur ein Jahr da?
Wie viel Perspektive darf ich zeigen – ohne zu werben?"`
    },
    {
      heading: "Haltung & Grundprinzipien",
      content: `● Doppelspielrecht ist kein Provisorium – es ist ein Ausbildungsauftrag.
● Diese Spieler:innen sind Teil des Teams – mit allen Rechten und Pflichten.
● Wir reden nicht über Wechsel – wir reden über Entwicklung.
● Wenn ein Spieler fragt, zeigen wir Perspektiven – aber wir drängen nie.`
    },
    {
      heading: "Trainer-Werkzeuge",
      content: `Bereich\tUmsetzung
Gleichbehandlung im Training\tKeine Sonderrollen, keine Zurückhaltung bei Feedback oder Aufgaben
Klare Kommunikation im Team\t„Er/Sie gehört für dieses Jahr zu uns – und bekommt hier Entwicklung"
Keine Wechselansprache\tKein Überzeugen oder Anstupsen – Perspektivgespräche nur auf Wunsch des Spielers
Verbindliche Gesprächsformate\tz. B. Entwicklungsgespräch nach 6–8 Wochen: „Was brauchst du? Wie geht's dir hier?"
Rollenvergabe wie bei Stammspielern\tVerantwortung im Spiel, Aufgabe im Training, Feedbackkultur leben`
    },
    {
      heading: "Spieler:innen-Check",
      content: `Fragen im Laufe der Saison (z. B. 2–3x pro Jahr):
● Was erlebst du bei uns, das dich weiterbringt?
● Was brauchst du, um dich hier voll einbringen zu können?
● Gibt es Themen, die du gern mit dem Trainer besprechen würdest?
● Welche Rolle hast du hier – und wie fühlst du dich damit?
→ Ziel: Zugehörigkeit und Entwicklungssinn fördern`
    },
    {
      heading: "Elternrolle & Kommunikation",
      content: `Maßnahme\tWirkung
Willkommensgespräch\tHaltung erklären: keine Wechselstrategie, sondern Entwicklungsangebot
Regelkommunikation wie bei allen\tEltern sind eingebunden wie bei Stammspielern – z. B. Team-Infos, Spieltage, Elterngespräche
Verfügbarkeit für Fragen\tWenn Eltern über Perspektiven sprechen wollen → transparent & realistisch
Keine Akquise-Haltung\t„Wir zeigen, was wir tun – nicht, wo man bleiben soll."`
    },
    {
      heading: "Typen & Empfehlungen",
      content: `Typ\tBesonderheit\tEmpfehlung
Talentierte Leistungsspieler\tSuchen Wettkampferfahrung auf höherem Niveau\tFordern + fordern, keine Extrawürste – echte Entwicklungskultur
Stille Beobachter:innen\tUnsicher, ob sie „dazugehören"\tAktive Integration im Team, frühes 1:1-Gespräch
Ambitionierte Wechsler:innen\tTesten bewusst eine Perspektive\tKlar bleiben: Ausbildung vor Abwerbung – aber auf Wunsch Perspektiven zeigen`
    },
    {
      heading: "Beispielsituationen mit Vorgehen",
      content: `Beispiel 1: 14-jähriger mit Doppelspielrecht, sehr talentiert, still, zieht sich zurück
Vorgehen:
● 1:1-Gespräch nach 2 Wochen: „Wie geht's dir hier? Was brauchst du?"
● Rolle definieren: z. B. Spielstarter mit klarem Aufgabenpaket
● Teamintegration über Verantwortung: z. B. Warm-up leiten, neue Spieler einführen
● Kein Thematisieren von Wechseln

Beispiel 2: 15-jährige mit Doppelspielrecht fragt offen nach Wechselmöglichkeit
Vorgehen:
● Perspektivgespräch führen: „Was erwartest du von einem Wechsel?"
● Entwicklungsoptionen bei SV Laim transparent darstellen – ohne Druck
● Eltern einbinden: Haltung verdeutlichen, Fragen offen beantworten
● Vereinbarung: Entscheidung liegt beim Spieler – wir begleiten

Beispiel 3: Eltern eines Spielers fragen Trainer beim Spiel: „Wie kriegen wir ihn ganz zu euch?"
Vorgehen:
● Klar kommunizieren: „Das ist nicht unser Ansatz – wir bieten Entwicklung, nicht Rekrutierung"
● Angebot: Entwicklungsgespräch mit Spieler & Eltern → wenn gewünscht
● Haltung betonen: „Entscheidung muss vom Spieler kommen – nicht von uns"`
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Titel & Kurzbeschreibung */}
      <div className="p-5 cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="text-lg font-bold text-gray-900">
          Sonderfall Doppelspielrecht – Ausbildung statt Abwerbung
        </h3>
        <p className="mt-3 text-gray-700">
          Spieler:innen mit Doppelspielrecht sollen sich beim SV Laim vollwertig
          aufgenommen, gefördert und respektiert fühlen – unabhängig davon, ob
          sie langfristig bleiben oder nicht. Ziel ist ein transparentes,
          verbindliches und wertschätzendes Miteinander, das auf Ausbildung statt
          Abwerbung setzt.
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
