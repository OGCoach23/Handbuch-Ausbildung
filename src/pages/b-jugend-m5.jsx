import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul5BJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">B-Jugend - Modul 5: Spielsysteme & Positionsspiel</h1>
      
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
          <li><strong>Abwehr:</strong> 3:2:1-System mit aktivem Verteidigen und Balljagd.</li>
          <li><strong>Angriff:</strong> Tiefe, Breite, Passqualität, Laufwege vor Ball, Rückraumbasics.</li>
          <li><strong>Umschalten:</strong> schneller Rückzug / schnelles Aufrücken.</li>
          <li><strong>Spiellogik:</strong> Erkennen, was das Spiel braucht – und entsprechend handeln.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Positionsverständnis & Rotation">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Torwart:</strong> aktiv im Spiel, Kommandos in Abwehr, klare Gegenstoß-Abläufe.</li>
          <li><strong>Außen:</strong> Breite halten, Einlaufen, Zielwurf aus spitzem Winkel.</li>
          <li><strong>Rückraum:</strong> Stoßen, Passen unter Druck, einfache Auslösehandlungen.</li>
          <li><strong>Kreis:</strong> Lücken anlaufen, Sperren stellen, Passwege antizipieren.</li>
          <li><strong>Rotation:</strong> Jede:r spielt mind. 2–3 Positionen pro Saison.</li>
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
          <li><strong>Breite & Tiefe schaffen:</strong> z. B. Zonenregel für Würfe.</li>
          <li><strong>1. Welle / Gegenstoß:</strong> 3-gegen-2 mit Entscheidungsaufgabe.</li>
          <li><strong>Trigger erkennen:</strong> Ball auf Außen = Einläufer.</li>
          <li><strong>Abwehr:</strong> 3:2:1 einführen mit Fokus auf Initiative und Ballorientierung.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer">
        <ul className="list-disc list-inside space-y-2">
          <li>Du führst dein Team in die Systemwelt – ohne sie einzuengen.</li>
          <li>Spieler:innen erkennen Räume, denken Positionen flexibel und spielen Systeme intelligent.</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}
