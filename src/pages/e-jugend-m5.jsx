import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul5EJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">E-Jugend - Modul 5: Spielsysteme & Positionsspiel</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Kinder lernen, sich im Raum zu orientieren und auf Mitspieler:innen zu reagieren.</li>
          <li>Erste Spielprinzipien wie Breite, Tiefe und Rückzugsverhalten werden spielerisch vermittelt.</li>
          <li>Alle dürfen alles ausprobieren – Positionen werden erlebt, aber nicht festgelegt.</li>
          <li>Trainer:innen fördern Spielintelligenz durch Regeln, Zonen und Rollen – statt durch Systeme.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Grundprinzipien für die Altersstufe">
        <ul className="list-disc list-inside space-y-2">
          <li>Viel spielen – wenig reden: Lernen durch Erleben – kurze Erklärungen, lange Spielformen.</li>
          <li>Alle dürfen alles: Positionen rotieren, Erfahrungen sammeln in Angriff, Abwehr und Tor.</li>
          <li>Räume sichtbar machen: Zonen markieren, Raumaufgaben formulieren.</li>
          <li>Spiellogik statt Systemlogik: 'Was braucht das Spiel gerade?' statt 'Was macht mein Posten?'.</li>
          <li>Mini-Regeln statt Vorgaben: z. B. 'Jeder muss einmal passen, bevor ein Tor zählt'.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Inhalte & Entwicklungsziele">
        <ul className="list-disc list-inside space-y-2">
          <li>Raumgefühl – freie Räume erkennen, ausweichen, Breite halten.</li>
          <li>Mitspielerwahrnehmung – Zusammenspiel statt Einzelaktionen, Unterstützung erkennen.</li>
          <li>Rollenwechsel – Angriff, Abwehr, Tor, Helfer, Beobachter regelmäßig erleben.</li>
          <li>Übersicht & Antizipation – Spielsituationen früher erkennen, einfache Reaktionen vorbereiten.</li>
          <li>Umschaltverhalten – Rückzug nach Ballverlust, Räume öffnen nach Ballgewinn.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Spielformen & Methodik">
        <ul className="list-disc list-inside space-y-2">
          <li>Zonenspiele – Spielfeld in Zonen, Wurf nur aus bestimmter Zone.</li>
          <li>4-Tore-Spiel – Raumöffnung und Entscheidungsvielfalt.</li>
          <li>Positionschaos – max. 3 Sekunden in einem Feld.</li>
          <li>Goldene Zone-Spiel – Punkte nur aus bestimmten Zonen.</li>
          <li>Rollenroulette – auf Signal Rolle wechseln.</li>
          <li>2:1 / 3:2 Situationen – Über-/Unterzahl bewusst erleben.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Didaktische Hilfen">
        <ul className="list-disc list-inside space-y-2">
          <li>Feldmarkierungen – Orientierung ermöglichen.</li>
          <li>Rollenkarten – Aufgaben sichtbar machen.</li>
          <li>Beobachtungsaufträge – Kinder beobachten und Rückmeldung geben.</li>
          <li>Spezialspielregeln – Prinzipien erfahrbar machen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du ermöglichst deinen Spieler:innen ein erstes Gefühl für Spiellogik, Raumverhalten und Zusammenspiel.</li>
            <li>Du zeigst ihnen, wie Entscheidungen entstehen – und warum sie etwas tun.</li>
            <li>Du legst die Basis für taktisches Denken – ohne es zu nennen.</li>
            <li>Ziel: Spieler:innen, die den Raum nutzen, Entscheidungen treffen – und gemeinsam besser spielen wollen.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
