import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul1EJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">E-Jugend - Modul 1: Entwicklungsmerkmale & Methodik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Verstehen, wie sich Kinder zwischen 9–10 Jahren körperlich, kognitiv, sozial und emotional entwickeln.</li>
          <li>Bewusstes Anpassen von Trainingsmethodik, Sprache und Erwartungshaltung.</li>
          <li>Förderung von spielerischem Lernen mit ersten strukturellen Elementen.</li>
          <li>Vermittlung grundlegender Lern- und Sozialformen – ohne Leistungsdruck, aber mit Anspruch.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale der E-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Körperlich – Hoher Bewegungsdrang, Verbesserung von Grob- & Feinmotorik, Übermut, Koordinationssprünge, Mädchen teils koordinierter.</li>
          <li>Kognitiv – Regeln werden verstanden, aber oft kreativ interpretiert; erste Reflexionsfähigkeit, steigende Konzentrationsdauer.</li>
          <li>Sozial – Gruppenzugehörigkeit wird zentral; erste Rollen (Anführer, Clown, Mitläufer); Wettbewerbsorientierung.</li>
          <li>Emotional – Anerkennung durch Trainer & Team sehr wichtig; hohe Sensibilität bei Kritik; Emotionen oft impulsiv.</li>
          <li>Spieltypisch – Erste Vorlieben für Positionen, Begeisterung für Tore und Zielspiele.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Wettbewerbe mit Augenmaß – faire Erfolgschancen bieten.</li>
          <li>Regeln klar, aber flexibel anwenden.</li>
          <li>Fragen statt Anweisungen stellen.</li>
          <li>Keine frühe Spezialisierung.</li>
          <li>Vielfalt statt Drill.</li>
          <li>Pausen für Motivation & Reflexion nutzen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li>Stationstraining, Spielreihen, Kleingruppenrotation mit 2–3 Schwerpunkten.</li>
          <li>Partnerwechsel, rotierende Führungsrollen, Teamaufgaben.</li>
          <li>Klare, motivierende Sprache, gezielte Fragen.</li>
          <li>Direktes, positives Feedback.</li>
          <li>2–3 feste Teamregeln, sichtbar machen.</li>
          <li>60–75 Minuten Struktur: Einstieg – Warm-up – Technikspiel – Hauptteil – Spiel – Reflexion.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Trainerrolle in der E-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Erklärer – Inhalte kindgerecht vermitteln.</li>
          <li>Fragender – Kinder mitdenken lassen.</li>
          <li>Beobachter – Über- oder Unterforderung erkennen.</li>
          <li>Teamcoach – Zusammenhalt fördern.</li>
          <li>Beziehungsperson – Interesse an Lebenswelt zeigen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du führst Kinder in der Zwischenphase zwischen Spielen und Lernen.</li>
            <li>Du strukturierst methodisch, stabilisierst emotional und begleitest individuell.</li>
            <li>Du schaffst die Grundlage für technische und mannschaftliche Entwicklung.</li>
            <li>Ziel: Spieler:innen, die sich wohlfühlen, sich trauen und im Team wachsen.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
