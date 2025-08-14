import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul4DJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">D-Jugend - Modul 4: Mentale & soziale Entwicklung</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen lernen, mit Frust, Erfolg, Rückschlägen und Verantwortung umzugehen.</li>
          <li>Sie entwickeln ein stärkeres Selbstbild – unabhängig von Toren oder Spielzeit.</li>
          <li>Trainer:innen schaffen Strukturen, die emotionale Reife, Konfliktfähigkeit und Teamverantwortung fördern.</li>
          <li>Mentale Stärke wird spielnah gefördert – durch klare Kommunikation, Rituale und gezielte Impulse.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsschwerpunkte in der D-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Selbstbild – Leistung wird als Wertmaßstab erlebt</li>
          <li>Teamverhalten – Gruppendynamiken, Cliquen, Ausgrenzung möglich</li>
          <li>Kritikfähigkeit – schwankend, zwischen Überempfindlichkeit und Gleichgültigkeit</li>
          <li>Emotionen – Frust, Wut, Unsicherheit – brauchen Rahmen & Sprache</li>
          <li>Leistungsdruck – Erwartungshaltung wächst, Vergleich mit anderen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsfördernde Maßnahmen">
        <ul className="list-disc list-inside space-y-2">
          <li>Selbstvertrauen stärken – Stärkenkarten, Warm-up anleiten lassen</li>
          <li>Frustration regulieren – Frust-Farbskala, Stopp-Regel</li>
          <li>Teamverantwortung fördern – Teamrollen rotieren lassen</li>
          <li>Fehlerfreundlichkeit leben – Mut-Moment statt MVP</li>
          <li>Konflikte klären – Reflexionszirkel, Ich-Botschaften</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Übungen & Methoden aus der Praxis">
        <ul className="list-disc list-inside space-y-2">
          <li>Gefühlsampel (rot/gelb/grün)</li>
          <li>Ich habe geholfen, als… – Reflexion im Kreis</li>
          <li>Wer hat heute Mut gezeigt? – positive Verstärkung</li>
          <li>1:1-Selbstgespräch</li>
          <li>Partneraufgabe: positives Feedback geben</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Kommunikation & Feedbackkultur">
        <ul className="list-disc list-inside space-y-2">
          <li>Mini-Gespräche – konkret, ehrlich, zeitnah</li>
          <li>Feedbackrad – 3 Fragen im Kreis</li>
          <li>Wertestationen – Bonus für faires Verhalten</li>
          <li>Fragekarten im Abschluss – z. B. Wann warst du mutig?</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du gestaltest emotionale Sicherheit – nicht durch Nachsicht, sondern durch Klarheit.</li>
            <li>Du hilfst Spieler:innen, sich selbst besser zu verstehen – und Verantwortung im Team zu übernehmen.</li>
            <li>Mentale Entwicklung ist das Fundament für alles Weitere.</li>
            <li>Ziel: Spieler:innen, die sich reflektieren, Emotionen steuern und im Team wachsen wollen.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
