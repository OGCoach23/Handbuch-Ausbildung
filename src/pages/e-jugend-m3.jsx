import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul3EJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">E-Jugend - Modul 3: Technik & Taktik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Systematischer Aufbau technischer Grundfertigkeiten mit handballtypischen Bewegungen.</li>
          <li>Erste Verknüpfung von Technik und Spielsituation – 'Wofür brauche ich das im Spiel?'</li>
          <li>Förderung von Variabilität, Spiellust und Entscheidungsverhalten.</li>
          <li>Techniklernen spielerisch, nicht mechanisch – mit Fokus auf Anwendung statt Perfektion.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Must-have & Nice-to-have Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Passen – Must-have: Brustpass, Prellpass, Pass in Bewegung; Nice-to-have: Sprungpass, No-look, Pass mit schwacher Hand.</li>
          <li>Fangen – Must-have: Beidseitig, frontal & seitlich, in Bewegung; Nice-to-have: Einhändig, nach Abprall, mit Drehung.</li>
          <li>Werfen – Must-have: Standwurf, Wurf aus dem Laufen, Zielwürfe; Nice-to-have: Sprungwurf vorbereitet, unter Kontakt.</li>
          <li>Prellen – Must-have: Beidseitig, unter Zeitdruck, mit Raumwechsel; Nice-to-have: Rhythmuswechsel, Kreativ-Prellen.</li>
          <li>Täuschung – Must-have: Körpertäuschung, Richtungswechsel einfach; Nice-to-have: Wurftäuschung, Passfinte.</li>
          <li>Abwehrtechnik – Must-have: Stellung zum Gegner, Arme oben, Ball beobachten; Nice-to-have: Abfangen, Passweg lesen, 1:1-Kontakt.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodische Prinzipien">
        <ul className="list-disc list-inside space-y-2">
          <li>Technik mit Spielbezug – immer mit Ziel, Gegner oder Entscheidung.</li>
          <li>Wiederholung = Variation – keine starren Wiederholungen.</li>
          <li>Beidseitigkeit früh fördern – keine Wurfarm-Konditionierung.</li>
          <li>Verstehen vor Nachmachen – Bewegungslogik erklären lassen.</li>
          <li>Feedback konkret halten – spezifische Rückmeldungen geben.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Trainingsformate & Praxisbeispiele">
        <ul className="list-disc list-inside space-y-2">
          <li>Technikspiel – Zonenpassspiel: 2 Teams, 3 Pässe in Zone = 1 Punkt.</li>
          <li>Passformen + Bewegung – Viereck mit Pass & Lauf, Aufgabe: Pass – Prell – Sprung – zurück.</li>
          <li>Technik-Parcours – Zielwurf, Fangspiel, Prell-Ziellauf.</li>
          <li>Entscheidungstraining – 1:1-Situation: Pass oder Wurf je nach Gegner.</li>
          <li>Kleingruppen mit Zieltechnik – 3:3 mit Regel: Nur Punkte nach Prellpass oder Wurf nur nach Täuschung.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Technik immer funktional denken – nicht wie es aussieht, sondern wann sie gebraucht wird.</li>
          <li>Kinder dürfen selbst entdecken – Vielfalt vor Vorgabe.</li>
          <li>Spielformen bevorzugen – Technik = Teil des Spiels.</li>
          <li>Feedback sofort, spezifisch & positiv geben.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du entwickelst handballtechnische Grundlagen – mit Spaß, Spielbezug und individuellem Zugang.</li>
            <li>Du hilfst Kindern, zu verstehen, was sie tun – und wie sie es im Spiel anwenden können.</li>
            <li>Du schaffst die Basis für variantenreiches, mutiges und intelligentes Handballspiel.</li>
            <li>Ziel: Spieler:innen, die Technik verstehen, einsetzen und weiterentwickeln – weil sie Sinn ergibt und Spaß macht.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
