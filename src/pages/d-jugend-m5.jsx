import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul5DJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">D-Jugend - Modul 5: Spielsysteme & Positionsspiel</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen verstehen einfache taktische Prinzipien und ihre Rolle im Team.</li>
          <li>Das Spielsystem wird als Orientierung vermittelt – nicht als starre Vorgabe.</li>
          <li>Alle Positionen werden erlebt – kein Kind wird frühzeitig festgelegt.</li>
          <li>Trainer:innen legen die Basis für Spiellogik, Umschalten und Abwehrverhalten.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Spielprinzipien & Raumverhalten">
        <ul className="list-disc list-inside space-y-2">
          <li>Breite & Tiefe – Feld in Zonen unterteilen, Ziel: Breite halten und Tiefe anstoßen.</li>
          <li>Zusammenspiel Kleingruppe – 2:2 / 3:3 mit Einläufer, Rückpass, Wechselspiel.</li>
          <li>Abwehrverhalten – 1:1-Training mit Hilfeprinzip, Grundhaltung.</li>
          <li>Umschaltspiel – 3:2 nach Ballgewinn: Entscheidung sofort oder sichern?</li>
          <li>Raum lesen & reagieren – Aufgaben wie 'nur in Zone 3 darf geworfen werden'.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Positionen verstehen – ohne festzulegen">
        <ul className="list-disc list-inside space-y-2">
          <li>Alle Positionen rotieren – niemand wird früh festgelegt.</li>
          <li>LA/RA – Laufwege nach außen, Einlaufen, Angriff aus Breite.</li>
          <li>Rückraum – Stoßen mit Tiefe, Passen, einfache Auslösehandlung.</li>
          <li>Kreis – Lücke erkennen, anspielbar werden.</li>
          <li>Mitte – Überblick entwickeln, Pass weiterdenken.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodische Umsetzung">
        <ul className="list-disc list-inside space-y-2">
          <li>Systemspiel = Prinzipien – keine starren Laufwege.</li>
          <li>Rollentausch fördern – nach 5 Min./1 Tor/3 Kontakten Position wechseln.</li>
          <li>Abwehr aktiv gestalten – Fokus 1:1, Beinarbeit, Kommunikation.</li>
          <li>Positionsverständnis schulen – Frageformate im Training.</li>
          <li>Spielzüge selbst erfinden – Spielzug-Baukasten nutzen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Spielformen & Organisationsideen">
        <ul className="list-disc list-inside space-y-2">
          <li>4-Zonen-Spiel.</li>
          <li>Spielzug-Werkstatt – Kinder erfinden eigenen Spielzug.</li>
          <li>Wechsel-Spiel – wer passt, muss Position tauschen.</li>
          <li>Abwehr-Angriff-Rotation.</li>
          <li>Überzahlspiel + Coaching (2:1 oder 3:2).</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du führst die Kinder in ein erstes taktisches Verständnis – über Prinzipien, nicht Vorschriften.</li>
            <li>Du machst sie neugierig auf Räume, Rollen und Zusammenhänge.</li>
            <li>Du legst die Basis für flexibles, mutiges Bewegen im System.</li>
            <li>Ziel: Spieler:innen, die verstehen, warum sie etwas tun – und flexibel reagieren.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
