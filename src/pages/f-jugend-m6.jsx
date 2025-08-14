import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul6FJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">F-Jugend - Modul 6: Teamkultur & Kommunikation</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Entwicklung einer positiven Teamkultur und Zusammengehörigkeitsgefühl</li>
          <li>Aufbau von Kommunikationsfähigkeiten und sozialen Kompetenzen</li>
          <li>Förderung von Werten wie Respekt, Fairplay und Hilfsbereitschaft</li>
          <li>Schaffung einer sicheren, wertschätzenden Umgebung für alle Kinder</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale">
        <ul className="list-disc list-inside space-y-2">
          <li>Körperlich: Sehr hohe Bewegungsfreude, geringe Ausdauer, grobe Koordination</li>
          <li>Sozial: Egozentrisch, aber neugierig auf gemeinsame Aktivitäten</li>
          <li>Kommunikativ: Erste Sprachfähigkeiten, lernen durch Nachahmung</li>
          <li>Emotional: Spontane Freude & Frust, hohe emotionale Impulsivität</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Vorbild sein: Kinder lernen durch Beobachtung und Nachahmung</li>
          <li>Positive Sprache: Ermutigende Worte, konstruktive Rückmeldung</li>
          <li>Werte leben: Respekt, Fairplay und Hilfsbereitschaft vorleben</li>
          <li>Gemeinsam statt einsam: Kooperationsspiele fördern Teamgeist</li>
          <li>Jedes Kind ist wichtig: Individuelle Bedürfnisse erkennen und respektieren</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li>Trainingsformate: Kooperationsspiele, Wertegeschichten, Teamchallenges</li>
          <li>Organisation: Kleine Gruppen, Partnerarbeit, gemeinsame Rituale</li>
          <li>Sprache & Kommunikation: Ermutigende Sprache, Werte benennen</li>
          <li>Feedback & Motivation: Viel Lob, konstruktive Rückmeldung, Teamgeist stärken</li>
          <li>Zeitstruktur: 45–60 Min: Warm-up – Kooperationsspiele – Wertearbeit – Schlussritual</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Extras & kreative Impulse">
        <ul className="list-disc list-inside space-y-2">
          <li>Vereinsbindung: Teamabzeichen, Freundschaftsarmbänder, Teamfest mit Eltern</li>
          <li>Elternintegration: Eltern als Vorbilder, Mini-Feedback mit 3 Fragen</li>
          <li>Wertearbeit: Wochenthemen mit Symbolen ("Freundschaft macht stark")</li>
          <li>Kreativideen: Vertrauensspiele, Kooperationsparcours, Teamchallenges</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du schaffst eine sichere, wertschätzende Umgebung für Teamkultur.</li>
            <li>Du förderst Kommunikation und soziale Kompetenzen spielerisch.</li>
            <li>Du legst den Grundstein für starke, selbstbewusste Persönlichkeiten.</li>
            <li>Ziel: Spieler:innen sollen sich als Teil eines Teams fühlen und wertgeschätzt werden.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
