import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul5FJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">F-Jugend - Modul 5: Spielsysteme & Positionsspiel</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Erste spielerische Erfahrungen mit Raum und Positionen sammeln</li>
          <li>Entwicklung von Raumgefühl und Orientierung ohne Systemdruck</li>
          <li>Förderung der Spielfreude und des Entdeckungsdrangs</li>
          <li>Aufbau erster taktischer Grundlagen spielerisch</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale">
        <ul className="list-disc list-inside space-y-2">
          <li>Körperlich: Sehr hohe Bewegungsfreude, geringe Ausdauer, grobe Koordination</li>
          <li>Taktisch: Erste Raumwahrnehmung, noch kein Systemverständnis</li>
          <li>Kognitiv: Kurze Aufmerksamkeitsspanne, lernen durch Nachahmung</li>
          <li>Sozial: Egozentrisch, aber neugierig auf gemeinsame Aktivitäten</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Spielen statt System: Lernen durch Bewegung, nicht durch Instruktion</li>
          <li>Keine festen Positionen: Kinder sollen sich frei bewegen</li>
          <li>Raum als Spielplatz: Verschiedene Bereiche erkunden</li>
          <li>Gemeinsam statt einsam: Kooperationsspiele fördern Teamgeist</li>
          <li>Spaß vor Taktik: Kein Leistungsdruck, nur Freude am Spiel</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li>Trainingsformate: Raumspiele, Orientierungsspiele, einfache Spielformen</li>
          <li>Organisation: Verschiedene Zonen, freie Bewegung, einfache Regeln</li>
          <li>Sprache & Kommunikation: Bildhafte Sprache ("Finde den Schatz")</li>
          <li>Feedback & Motivation: Viel Lob, konstruktive Rückmeldung, Teamgeist stärken</li>
          <li>Zeitstruktur: 45–60 Min: Warm-up – Raumspiele – einfache Spielform – Schlussritual</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Extras & kreative Impulse">
        <ul className="list-disc list-inside space-y-2">
          <li>Vereinsbindung: Raumabzeichen, Zaubertrikot, Raumfest mit Eltern</li>
          <li>Elternintegration: Eltern zeigen Wege vor, Mini-Feedback mit 3 Fragen</li>
          <li>Wertearbeit: Wochenthemen mit Symbolen ("Gemeinsam sind wir stark")</li>
          <li>Kreativideen: Raum-Memory, Orientierungsparcours, Teamchallenges</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du schaffst eine spielerische Umgebung für erste taktische Erfahrungen.</li>
            <li>Du förderst Raumgefühl und Orientierung ohne Systemdruck.</li>
            <li>Du legst den Grundstein für späteres, koordiniertes Spiel.</li>
            <li>Ziel: Spieler:innen sollen mit Freude und Neugier den Raum entdecken.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
