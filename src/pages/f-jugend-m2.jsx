import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul2FJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">F-Jugend - Modul 2: Athletik & Motorik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Entwicklung grundlegender Bewegungskompetenzen durch spielerische, fantasievolle Übungen</li>
          <li>Aufbau von Koordination, Gleichgewicht und Körpergefühl ohne Leistungsdruck</li>
          <li>Förderung der natürlichen Bewegungsfreude und des Entdeckungsdrangs</li>
          <li>Schaffung einer sicheren, motivierenden Umgebung für motorische Experimente</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale">
        <ul className="list-disc list-inside space-y-2">
          <li>Körperlich: Sehr hohe Bewegungsfreude, geringe Ausdauer, grobe Koordination, große Unterschiede im Reifestand</li>
          <li>Motorisch: Grundlegende Bewegungsmuster vorhanden, aber noch unkoordiniert</li>
          <li>Kognitiv: Kurze Aufmerksamkeitsspanne, lernen durch Nachahmung und Wiederholung</li>
          <li>Sozial: Egozentrisch, aber neugierig auf gemeinsame Aktivitäten</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Bewegung vor Technik: Lernen durch Tun, nicht durch Erklären</li>
          <li>Vielfalt statt Spezialisierung: Verschiedene Bewegungsformen anbieten</li>
          <li>Spaß vor Leistung: Keine Bewertung, nur Ermutigung</li>
          <li>Individuelle Unterschiede: Jedes Kind hat sein eigenes Tempo</li>
          <li>Sicherheit: Bewegungsräume schaffen, die zum Experimentieren einladen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li>Trainingsformate: Bewegungsgeschichten, Tier-Imitationen, Fantasieparcours</li>
          <li>Organisation: Stationen mit freier Wahl, Bewegungsbaustellen, Alltagsmaterialien</li>
          <li>Sprache & Kommunikation: Bildhafte Sprache ("Hüpfe wie ein Frosch"), kurze klare Ansagen</li>
          <li>Feedback & Motivation: Viel Lob, Aufgabenorientierung ("Kannst du es wie ein Eichhörnchen?")</li>
          <li>Zeitstruktur: 45–60 Min: Warm-up – Bewegungsreise – Spielform – Schlussritual</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Extras & kreative Impulse">
        <ul className="list-disc list-inside space-y-2">
          <li>Vereinsbindung: Bewegungsabzeichen, Zaubertrikot, Bewegungsfest mit Eltern</li>
          <li>Elternintegration: Eltern zeigen Bewegungen vor, Mini-Feedback mit 3 Fragen</li>
          <li>Wertearbeit: Wochenthemen mit Symbolen ("Mutig sein hilft")</li>
          <li>Kreativideen: Bewegungs-Memory, Musik- und Rhythmusspiele, Natur-Imitationen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du schaffst eine bewegungsfreundliche Umgebung, die Kinder zum Experimentieren einlädt.</li>
            <li>Du förderst motorische Grundlagen spielerisch und ohne Druck.</li>
            <li>Du legst den Grundstein für späteres, koordiniertes Bewegungslernen.</li>
            <li>Ziel: Spieler:innen sollen mit Freude und Neugier neue Bewegungen ausprobieren.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
