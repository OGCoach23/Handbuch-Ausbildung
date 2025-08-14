import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul1FJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">F-Jugend - Modul 1: Entwicklungsmerkmale & Methodik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Verstehen der körperlichen, kognitiven, sozialen und emotionalen Entwicklungsmerkmale der Altersgruppe</li>
          <li>Gestaltung eines sicheren, spaßorientierten und beziehungsstarken Trainingsrahmens</li>
          <li>Aufbau erster sportbezogener Rituale, Bindung und Teamzugehörigkeit</li>
          <li>Keine Leistungsmessung – Förderung durch Bewegung, Wiederholung und Begeisterung</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Körperlich:</strong> Sehr hohe Bewegungsfreude, geringe Ausdauer, grobe Koordination, große Unterschiede im Reifestand</li>
          <li><strong>Kognitiv:</strong> Magisches Denken, bildhafte Vorstellungen, sehr kurze Konzentrationsspanne</li>
          <li><strong>Sozial:</strong> Egozentrisch, kaum Perspektivübernahme, hoher Bezug zu Erwachsenen</li>
          <li><strong>Emotional:</strong> Spontane Freude & Frust, hohe emotionale Impulsivität, Bedarf nach Zuwendung</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Spielen statt Üben:</strong> Lernen durch Bewegung, nicht durch Instruktion</li>
          <li><strong>Rituale geben Sicherheit:</strong> Begrüßung, Schlusskreis, Wiederholungen – reduzieren Unsicherheit</li>
          <li><strong>Jedes Kind ist König:</strong> Jedes Kind will gesehen, gehört, bestärkt werden – unabhängig von "Leistung"</li>
          <li><strong>Fehler gibt es nicht:</strong> Technik wird nicht bewertet – alle Bewegungsformen sind erlaubt</li>
          <li><strong>Beziehung vor Inhalt:</strong> Bindung sichert Teilnahme und Wiederkommen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Trainingsformate:</strong> Bewegungsgeschichten, Kleingruppenspiele, Fantasieparcours</li>
          <li><strong>Organisation:</strong> Stationen mit freier Wahl, Bewegungsbaustellen, Alltagsmaterialien</li>
          <li><strong>Sprache & Kommunikation:</strong> Bildhafte Sprache ("Raketenlauf"), kurze klare Ansagen</li>
          <li><strong>Feedback & Motivation:</strong> Viel Lob, Aufgabenorientierung ("Schaffst du es...?")</li>
          <li><strong>Zeitstruktur:</strong> 45–60 Min: Warm-up – Bewegungsreise – Spielform – Schlussritual</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Extras & kreative Impulse">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Vereinsbindung:</strong> Ball-Führerschein, Zaubertrikot, Bewegungsfest mit Eltern</li>
          <li><strong>Elternintegration:</strong> Eltern spielen mit, Mini-Feedback mit 3 Fragen</li>
          <li><strong>Wertearbeit:</strong> Wochenthemen mit Symbolen ("Lächeln hilft")</li>
          <li><strong>Kreativideen:</strong> Handball-Memory, Tier- und Bewegungsimitation, Musik- oder Rhythmusspiele</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer">
        <ul className="list-disc list-inside space-y-2">
          <li>Du gestaltest ein Training, das Kinder emotional abholt, motorisch fördert und sozial bindet.</li>
          <li>Du machst sie neugierig auf Bewegung, Gemeinschaft und Spiel.</li>
          <li>Du legst die Grundlage für nachhaltige Vereinszugehörigkeit – ohne Leistungsdruck, aber mit Herz.</li>
          <li><strong>Ziel:</strong> Spieler:innen sollen mit Begeisterung kommen, sich willkommen fühlen – und mit Freude bleiben.</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}
