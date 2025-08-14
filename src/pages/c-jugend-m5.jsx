import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul5CJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">C-Jugend - Modul 5: Technik & Taktik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen entwickeln ein erstes systematisches Spielverständnis – mit Blick auf Raum, Zeit, Mitspieler:innen und Aufgaben.</li>
          <li>Grundlegende Prinzipien von Raumaufteilung, Zusammenspiel und Umschalten werden gelernt.</li>
          <li>Die 3:2:1-Deckung wird als Standard-Abwehrsystem eingeführt – mit Fokus auf Ballgewinn und Kommunikation.</li>
          <li>Positionsrollen werden verstanden, ausprobiert und reflektiert – nicht festgeschrieben.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Grundprinzipien der Spielsysteme">
        <ul className="list-disc list-inside space-y-2">
          <li>Abwehr: 3:2:1-System mit aktivem Verteidigen und Balljagd.</li>
          <li>Angriff: Tiefe, Breite, Passqualität, Laufwege vor Ball, Rückraumbasics.</li>
          <li>Umschalten: schneller Rückzug / schnelles Aufrücken.</li>
          <li>Spiellogik: Erkennen, was das Spiel braucht – und entsprechend handeln.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Positionsverständnis & Rotation">
        <ul className="list-disc list-inside space-y-2">
          <li>Torwart: aktiv im Spiel, Kommandos in Abwehr, klare Gegenstoß-Abläufe.</li>
          <li>Außen: Breite halten, Einlaufen, Zielwurf aus spitzem Winkel.</li>
          <li>Rückraum: Stoßen, Passen unter Druck, einfache Auslösehandlungen.</li>
          <li>Kreis: Lücken anlaufen, Sperren stellen, Passwege antizipieren.</li>
          <li>Rotation: Jede:r spielt mind. 2–3 Positionen pro Saison.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Positionsprofile & positionsspezifisches Training">
        <ul className="list-disc list-inside space-y-2">
          <li>Stärken erkennen und in unterschiedlichen Rollen testen.</li>
          <li>Positionsprofile geben Orientierung zu Aufgaben & Entscheidungen.</li>
          <li>Trainer:innen coachen mit Rollenfragen: "Was braucht dein Team von dir auf dieser Position?"</li>
          <li>Positionswechsel fördern Entscheidungsfreude und taktisches Verständnis.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Spielprinzipien & Auslösehandlungen">
        <ul className="list-disc list-inside space-y-2">
          <li>Breite & Tiefe schaffen: z. B. Zonenregel für Würfe.</li>
          <li>1. Welle / Gegenstoß: 3-gegen-2 mit Entscheidungsaufgabe.</li>
          <li>Trigger erkennen: Ball auf Außen = Einläufer.</li>
          <li>Abwehr: 3:2:1 einführen mit Fokus auf Initiative und Ballorientierung.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du führst dein Team in die Systemwelt – ohne sie einzuengen.</li>
            <li>Spieler:innen erkennen Räume, denken Positionen flexibel und spielen Systeme intelligent.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
