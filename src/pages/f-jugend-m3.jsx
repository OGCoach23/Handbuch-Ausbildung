import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul3FJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">F-Jugend - Modul 3: Technik & Taktik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Erste spielerische Erfahrungen mit dem Handball sammeln</li>
          <li>Grundlegende Ballgewöhnung ohne Technikdruck</li>
          <li>Entwicklung von Raumgefühl und erstem Zusammenspiel</li>
          <li>Förderung der Spielfreude und des Entdeckungsdrangs</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale">
        <ul className="list-disc list-inside space-y-2">
          <li>Körperlich: Sehr hohe Bewegungsfreude, geringe Ausdauer, grobe Koordination</li>
          <li>Technisch: Erste Ballkontakte, noch unkoordinierte Bewegungen</li>
          <li>Kognitiv: Kurze Aufmerksamkeitsspanne, lernen durch Nachahmung</li>
          <li>Sozial: Egozentrisch, aber neugierig auf gemeinsame Aktivitäten</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Spielen statt Üben: Lernen durch Bewegung, nicht durch Instruktion</li>
          <li>Keine Technikkorrekturen: Alle Bewegungsformen sind erlaubt</li>
          <li>Ball als Spielzeug: Kein Leistungsdruck, nur Spaß</li>
          <li>Raumgefühl entwickeln: Wo bin ich, wo sind die anderen?</li>
          <li>Erste Regeln spielerisch: Was ist erlaubt, was nicht?</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li>Trainingsformate: Ballspiele, einfache Fangspiele, erste Wurfversuche</li>
          <li>Organisation: Kleine Gruppen, einfache Regeln, viel Bewegung</li>
          <li>Sprache & Kommunikation: Bildhafte Sprache ("Werfe den Ball wie ein Zauberer")</li>
          <li>Feedback & Motivation: Viel Lob, keine Korrekturen, nur Ermutigung</li>
          <li>Zeitstruktur: 45–60 Min: Warm-up – Ballspiele – einfache Spielform – Schlussritual</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Extras & kreative Impulse">
        <ul className="list-disc list-inside space-y-2">
          <li>Vereinsbindung: Ball-Führerschein, Zaubertrikot, Ballfest mit Eltern</li>
          <li>Elternintegration: Eltern spielen mit, Mini-Feedback mit 3 Fragen</li>
          <li>Wertearbeit: Wochenthemen mit Symbolen ("Teilen macht Spaß")</li>
          <li>Kreativideen: Ball-Memory, Tier- und Bewegungsimitation, Musik- oder Rhythmusspiele</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du schaffst eine spielerische Umgebung für erste Handballerfahrungen.</li>
            <li>Du förderst Ballgewöhnung ohne Technikdruck.</li>
            <li>Du legst den Grundstein für späteres, koordiniertes Spiel.</li>
            <li>Ziel: Spieler:innen sollen mit Freude und Neugier den Ball entdecken.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
