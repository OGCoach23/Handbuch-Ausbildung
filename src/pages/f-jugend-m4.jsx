import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul4FJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">F-Jugend - Modul 4: Mentale & soziale Entwicklung</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Entwicklung von Selbstbewusstsein und sozialen Kompetenzen</li>
          <li>Aufbau von Teamgeist und Zusammengehörigkeitsgefühl</li>
          <li>Förderung von Empathie und Perspektivübernahme</li>
          <li>Stärkung der emotionalen Stabilität und Frustrationstoleranz</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale">
        <ul className="list-disc list-inside space-y-2">
          <li>Körperlich: Sehr hohe Bewegungsfreude, geringe Ausdauer, grobe Koordination</li>
          <li>Emotional: Spontane Freude & Frust, hohe emotionale Impulsivität</li>
          <li>Sozial: Egozentrisch, aber neugierig auf gemeinsame Aktivitäten</li>
          <li>Kognitiv: Kurze Aufmerksamkeitsspanne, lernen durch Nachahmung</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Beziehung vor Leistung: Bindung sichert Teilnahme und Wiederkommen</li>
          <li>Jedes Kind ist einzigartig: Individuelle Bedürfnisse erkennen und respektieren</li>
          <li>Emotionen sind okay: Freude, Frust, Angst - alles darf sein</li>
          <li>Gemeinsam statt einsam: Kooperationsspiele fördern Teamgeist</li>
          <li>Lob und Anerkennung: Jeden Erfolg feiern, auch kleine Fortschritte</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li>Trainingsformate: Kooperationsspiele, Vertrauensübungen, Rollenspiele</li>
          <li>Organisation: Kleine Gruppen, Partnerarbeit, gemeinsame Rituale</li>
          <li>Sprache & Kommunikation: Ermutigende Sprache, Gefühle benennen</li>
          <li>Feedback & Motivation: Viel Lob, konstruktive Rückmeldung, Teamgeist stärken</li>
          <li>Zeitstruktur: 45–60 Min: Warm-up – Kooperationsspiele – Vertrauensübungen – Schlussritual</li>
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
            <li>Du schaffst eine sichere, wertschätzende Umgebung für emotionale Entwicklung.</li>
            <li>Du förderst Teamgeist und soziale Kompetenzen spielerisch.</li>
            <li>Du legst den Grundstein für starke, selbstbewusste Persönlichkeiten.</li>
            <li>Ziel: Spieler:innen sollen sich als Teil eines Teams fühlen und wertgeschätzt werden.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
