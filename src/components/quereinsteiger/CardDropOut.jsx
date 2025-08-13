import React, { useState } from "react";

export default function CardDropOut() {
  const [open, setOpen] = useState(false);

  const details = [
    {
      heading: "Ziel",
      content: `Spieler:innen, die sich zurückziehen, distanzieren oder keine Perspektive sehen, sollen rechtzeitig erkannt, ernst genommen und begleitet werden. Ziel ist, Ausstiegstendenzen früh zu erkennen – und mit Haltung, Gesprächen und flexiblen Lösungen eine stabile Bindung zu erhalten.`
    },
    {
      heading: "Perspektive",
      content: `Aus Sicht eines Spielers am Rand:
„Ich komm nicht mehr so gern. Die anderen sind besser.
Ich weiß nicht, ob ich noch dazu passe. Ich bin oft müde, unsicher – und keiner fragt wirklich nach."`
    },
    {
      heading: "Haltung & Grundprinzipien",
      content: `● Drop-out ist kein Moment – es ist ein Prozess.
● Wer hinsieht, kann halten. Wer ignoriert, verliert.
● Bindung entsteht durch Beziehung – nicht durch Spielzeit.
● Nicht jeder muss bleiben – aber jede:r soll bleiben dürfen.`
    },
    {
      heading: "Trainer-Werkzeuge",
      content: `Maßnahme\tZiel / Wirkung
Warnsignale beobachten\tRückzug, Ausreden, Inaktivität → auf Checkliste verankern
1:1-Gespräch führen\t„Wie geht's dir wirklich?" – nicht belehren, sondern zuhören
Mini-Aufgaben zur Re-Integration\tz. B. Aufwärm-Coach, Passzähler, Teamansprache
Perspektivfragen stellen\t„Was würdest du gerne mal machen?" / „Was brauchst du?"
Flexible Trainingserlaubnis\t1x Training pro Woche kann auch Entwicklung sein – wenn begleitet`
    },
    {
      heading: "Spieler:innen-Check",
      content: `Mögliche Reflexionsfragen (wöchentlich oder punktuell):
● Was war dein Lieblingsmoment im Training?
● Wann hattest du das Gefühl, du gehörst dazu?
● Was möchtest du gerade lieber anders machen?
● Brauchst du gerade eher eine Pause oder eine Aufgabe?
→ Ziel: Innere Klarheit ermöglichen – ohne Druck`
    },
    {
      heading: "Elternrolle & Kommunikation",
      content: `Maßnahme\tZiel / Wirkung
Früher Dialog\t„Wir haben das Gefühl, da verändert sich was – wie sieht's zuhause aus?"
Verständnis zeigen für Rückzug\tKeine Vorwürfe, sondern Angebote
Brücke sein, kein Druckmittel\tEltern als Verstärker von Entwicklung, nicht von Erwartungen
Lobkultur bewusst ansprechen\t„Auch nach Niederlagen positive Rückmeldung geben"`
    },
    {
      heading: "Typen & Empfehlungen",
      content: `Typ\tVerhalten\tEmpfehlung
Leiser Rückzieher\tKommt seltener, beteiligt sich kaum\t1:1-Gespräch, Mini-Rolle geben, Vertrauen aufbauen
Lauter Abwehrer\tProvokation, Witze, Rückzug im Spiel\tNicht bestrafen – ernst nehmen, Grenzen und Zugehörigkeit klären
Verdeckter Aussteiger\tIst physisch da, aber mental raus\tEinzelrückmeldung, Thema Ziel & Sinn ansprechen`
    },
    {
      heading: "Beispielsituationen mit Vorgehen",
      content: `Beispiel 1: 11-jährige kommt immer später, spricht nicht, wirkt abwesend
Vorgehen:
● Check-in: Trainer spricht sie allein an – nicht im Trubel
● Gespräch: „Ich merke, du bist oft ruhig – ist gerade was los?"
● Angebot: „Wenn du willst, trainierst du erstmal nur 1x/Woche – wir schauen, wie's läuft"
● Nach 2 Wochen: Gespräch mit Eltern, gemeinsamer Plan

Beispiel 2: 16-jähriger nach schwachem Spiel rutscht in Vermeidungsverhalten
Vorgehen:
● Beobachtung: „Fehlte 3x – sagt immer kurzfristig ab"
● Gesprächsangebot: „Komm nur auf ein Wasser vorbei – wir quatschen nur"
● Ermutigung: „Jede:r hat Tiefs – willst du zurückkommen, wenn du wieder ready bist?"
● Option: Offenes Zeitfenster, Rolle als Unterstützer im Training

Beispiel 3: 13-jährige will „pausieren", sagt nichts Genaues
Vorgehen:
● Reflexionstool: Emoji-Karte wählen, Gesprächsleitfaden dazu
● Trainer fragt: „Pausieren – was heißt das für dich?"
● Elternkontakt: „Wir wollen begleiten, nicht drängen – wie erleben Sie das?"
● Vereinbarung: 3 Wochen Pause mit offenem Rückkehrtermin und Willkommensstruktur`
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Titel & Kurzbeschreibung */}
      <div className="p-5 cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="text-lg font-bold text-gray-900">
          Drop-out verhindern – Hinsehen, handeln, halten
        </h3>
        <p className="mt-3 text-gray-700">
          Ausstieg beginnt oft leise: durch Rückzug, Vermeidung, fehlende
          Bindung. Wir schaffen Strukturen, um das früh zu erkennen – und Räume,
          um Spieler:innen wieder einzufangen: mit Gesprächen, Flexibilität und
          Perspektiven.
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
