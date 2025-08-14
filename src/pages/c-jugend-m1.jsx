import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul1CJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">C-Jugend - Modul 1: Entwicklungsmerkmale & Methodik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Die Trainer:innen erkennen die körperlichen, kognitiven, emotionalen und sozialen Umbruchprozesse in der C-Jugend – und richten ihr Training gezielt darauf aus.</li>
          <li>Sie begleiten den Übergang vom kindlichen Spiel zum jugendlichen Leistungsbewusstsein mit Struktur, Klarheit und Beziehung.</li>
          <li>Das Training vermittelt Sicherheit und Orientierung, fordert Eigenverantwortung – und fördert aktives Mitdenken.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale der C-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Körperlich: Wachstumsschübe, ungleiche Reife, temporäre Koordinationsdellen, Leistungsgefälle zwischen biologisch 'frühen' und 'späten' Spielern</li>
          <li>Kognitiv: Steigende Spielintelligenz, Regelreflexion, taktisches Denken, verstärktes Bedürfnis nach Mitgestaltung</li>
          <li>Sozial: Gruppenzugehörigkeit im Fokus, erste Rollenverteilung (Anführer, Helfer, Widerständler), gesteigerter Wunsch nach Anerkennung</li>
          <li>Emotional: Sensibilität für Kritik, schwankendes Selbstbild, Frustration bei Leistungsunterschieden, emotionale Überforderung bei sozialem Druck</li>
          <li>In dieser Altersstufe beginnt die Ausbildung von Verantwortungsspielern – mit Rücksicht auf psychologische Reifung und Unterschiedlichkeit.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li>Trainingslogik: Einheiten 90–105 Minuten, mit Struktur: Aktivierung - Technik - Anwendung - Reflexion</li>
          <li>Aufgabenorientierung: Spieler:innen treffen Entscheidungen, bekommen offene Fragen statt Lösungen.</li>
          <li>Selbststeuerung fördern: Mini-Aufgaben, eigene Zielkarten, Spieler:innen übernehmen Teile der Organisation.</li>
          <li>Fehler zulassen & nutzen: Aus Fehlern wird Handlungskompetenz.</li>
          <li>Visualisierung von Zielen: Trainingsziele sichtbar machen im Hallenbereich.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Trainingsstruktur gibt Halt – aber flexibel anpassen.</li>
          <li>Entwicklungsunterschiede erkennen und Varianten anbieten.</li>
          <li>Klare Kommunikation – keine Ironie, einfache Sprache.</li>
          <li>Struktur und Rituale schaffen Zugehörigkeit.</li>
          <li>Verantwortung geben: Gruppenleitungen, Regelklärung, Feedbackgespräche.</li>
          <li>Entwicklung sichtbar machen: 'Heute besser als gestern'-Mentalität fördern.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Trainerfehler (und Alternativen)">
        <ul className="list-disc list-inside space-y-2">
          <li>'Jetzt konzentriert euch endlich!' - 'Was braucht ihr gerade, um euch besser fokussieren zu können?'</li>
          <li>Starre Leistungsgruppen - Levelgruppen, gemischt, wechselnd.</li>
          <li>Dauer-Coaching beim Üben - Spieler:innen erklären sich gegenseitig.</li>
          <li>Fokus auf Einzelne - Teamrollen rotieren.</li>
          <li>Lange Redepassagen - Kürzen auf max. 60 Sek. + Zwischenfragen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du bist Strukturgeber, Rollenklärer, Spielraumöffner.</li>
            <li>Du begleitest Spieler:innen durch eine sensible und prägende Phase.</li>
            <li>Ziel: Spieler:innen, die sich selbst kennen, im Team funktionieren, Verantwortung übernehmen – und dranbleiben.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
