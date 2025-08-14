import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul1DJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">D-Jugend - Modul 1: Entwicklungsmerkmale & Methodik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Die Trainer:innen erkennen die typischen körperlichen, geistigen und sozialen Veränderungen der Vorpubertät.</li>
          <li>Sie gestalten ein leistungsorientiertes, aber kindgerechtes Training mit klarer Struktur und viel Spiel.</li>
          <li>Der Übergang vom 'spielerischen Erleben' zur 'spielerischen Leistung' wird aktiv gestaltet – ohne Druck, aber mit Anspruch.</li>
          <li>Spieler:innen erfahren: Ich wachse an Herausforderungen – nicht an Lob oder Angst.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale der D-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Körperlich: Erste Pubertätszeichen (v.a. bei Mädchen), Wachstumsschübe, Koordinationsdellen, große Unterschiede in Kraft & Ausdauer</li>
          <li>Kognitiv: Reflektierteres Denken, erste taktische Logik möglich, Erklärungen werden nachvollzogen und hinterfragt</li>
          <li>Sozial: Freundschaften & Anerkennung gewinnen an Bedeutung, Rollenverhalten differenziert sich, erste Cliquen entstehen</li>
          <li>Emotional: Stolz, Scham, Frust wechseln schnell – Feedback wirkt stark, auch unbewusst</li>
          <li>Sportlich: Wunsch nach Spielzeit & Erfolg nimmt zu, Spielverständnis erwacht, Rückzug bei Misserfolg ist häufig</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Individuelle Entwicklung ernst nehmen – Wachstum & Reife sind extrem unterschiedlich – keine Rankings!</li>
          <li>Spieler:innen fordern, aber nicht überfordern – viel erklären, aber nicht zupredigen, Selbstdenken fördern!</li>
          <li>Stabilität durch Rituale & Struktur – feste Abläufe, Wiederholungen, persönliche Begrüßung, Abschlussrunde geben Halt</li>
          <li>Leistung sichtbar machen – nicht vergleichen: 'Heute besser als gestern' statt 'besser als andere'</li>
          <li>Fragen statt Korrekturen: 'Was hätte dir geholfen?' statt 'Warum hast du das nicht gemacht?'</li>
          <li>Klare, motivierende Sprache – kurze Sätze, positive Ansprache, keine Ironie – Begeisterung statt Bewertung</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li>Trainingsdauer & Aufbau: 75–90 Minuten, Struktur: Warm-up - Technik/Spiel - Intensivspiel - Reflexion</li>
          <li>Gruppengestaltung: Heterogene Gruppen, wechselnde Aufgaben & Rollen, Rücksicht auf Reifegrade</li>
          <li>Kommunikationsstil: 'Du kannst das.' / 'Was war dein bester Moment heute?' / Rückfragen erwünscht</li>
          <li>Spielorientierung bleibt: Technik wird immer im Spielkontext vermittelt – keine reinen Technikblöcke</li>
          <li>Verantwortung fördern: Aufwärmleitung, Regelvorschläge, Trainingsfeedback von Spieler:innen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Trainerfehler (und wie du sie vermeidest)">
        <ul className="list-disc list-inside space-y-2">
          <li>'Du bist der Spielmacher' - Jede:r darf jede Rolle erleben – Positionsverständnis statt Festlegung</li>
          <li>'Ihr müsst euch jetzt konzentrieren!' - 'Was hilft euch gerade, besser bei der Sache zu bleiben?'</li>
          <li>Lange Monologe - Max. 60 Sek. Reden – dann ausprobieren lassen</li>
          <li>Technikdrill ohne Spielbezug - Technik direkt ins Spiel integrieren, auch im 2:2 oder 3:3</li>
          <li>Gruppenvergleiche - Fokus auf individuelle Entwicklung im Teamkontext</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du gestaltest ein Training, das weder überfordert noch unterfordert.</li>
            <li>Du schaffst eine Atmosphäre, in der sich Spieler:innen ernst genommen, gefordert und sicher fühlen.</li>
            <li>Du legst den Grundstein für spielintelligente, selbstbewusste und teamfähige Jugendliche.</li>
            <li>Ziel: Spieler:innen, die Spaß am Handball haben, sich selbst entdecken – und wachsen wollen, weil sie dürfen.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
