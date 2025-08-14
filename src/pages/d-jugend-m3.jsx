import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul3DJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">D-Jugend - Modul 3: Technik & Taktik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen beherrschen die technischen Grundformen unter wachsendem Druck und in Kombination.</li>
          <li>Sie verstehen: Technik ist kein Selbstzweck, sondern ein Werkzeug für taktische Lösungen.</li>
          <li>Taktische Grundprinzipien wie Freilaufen, Raumöffnung und Entscheidungsverhalten werden aufgebaut.</li>
          <li>Trainer:innen fördern Spielintelligenz, Variation und Kreativität – statt Drill oder Standardabläufe.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Technikstufen im Training (Kompetenzmodell)">
        <ul className="list-disc list-inside space-y-2">
          <li>1: Erkennen – Technik wird bewusst wahrgenommen, benannt und ohne Druck ausgeführt</li>
          <li>2: Anwenden – Technik wird bewusst unter einfachen Bedingungen eingesetzt</li>
          <li>3: Variieren – Technik wird an Raum, Gegner oder Spielsituation angepasst</li>
          <li>4: Kombinieren – Technik wird mit anderen Techniken oder Bewegungen verknüpft</li>
          <li>5: Gestalten – Technik wird kreativ, bewusst und situationsabhängig eingesetzt</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Must-have & Nice-to-have Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Passen: Must-have – Prellpass, Pass in Bewegung, Schlagwurfpässe / Nice-to-have – Sprungpass, No-Look, Gegenlaufpass</li>
          <li>Fangen: Must-have – beidhändig in Bewegung, nach Richtungswechsel / Nice-to-have – einhändig, mit Gegnerdruck</li>
          <li>Werfen: Must-have – Standwurf, Sprungwurf, Zielwurf / Nice-to-have – Wurf unter Bedrängnis, kreative Varianten</li>
          <li>Prellen: Must-have – Raumgewinn + Gegnerdruck / Nice-to-have – Täuschung, Wechselhand, Rhythmuswechsel</li>
          <li>Täuschung: Must-have – Körpertäuschung, Passtäuschung / Nice-to-have – Abdrehtäuschung, Doppelhaken</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Taktische Prinzipien & Schwerpunkte">
        <ul className="list-disc list-inside space-y-2">
          <li>Spiel ohne Ball – Freilaufen frontal, seitlich, Lösen zum/vom Ball</li>
          <li>Spiel mit Ball – situatives Prellen, Körperschutz, Entscheidung nach Gegnerreaktion</li>
          <li>Kleingruppe – 2:2 oder 3:3 mit Einläufer, Parallelstoß, Richtungswechsel</li>
          <li>Abwehr – 1:1 mit Kontaktkontrolle, Antizipation, gemeinsames Halten von Räumen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Umsetzung">
        <ul className="list-disc list-inside space-y-2">
          <li>Technikübungen mit Gegnerdruck, Ziel, Zeit oder Entscheidung verbinden</li>
          <li>Beidseitigkeit fördern – links wie rechts trainieren</li>
          <li>Differenzierung je nach Level</li>
          <li>Fehler als Lernchance nutzen</li>
          <li>Technik immer mit Spielhandlung verknüpfen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du förderst nicht nur Bewegung – du entwickelst Handlung.</li>
            <li>Du machst Technik verständlich, anwendbar und wirkungsvoll.</li>
            <li>Du schaffst ein Umfeld, in dem Fehler Teil des Spiels sind – und Fortschritt Spaß macht.</li>
            <li>Ziel: Spieler:innen, die Technik als Werkzeug begreifen – und mutig, bewusst und erfolgreich im Spiel einsetzen.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
