import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul2EJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">E-Jugend - Modul 2: Athletik & Motorik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Entwicklung der grundlegenden konditionellen und koordinativen Fähigkeiten.</li>
          <li>Aufbau einer vielseitigen athletischen Basis – als Fundament für spätere Leistungsfähigkeit.</li>
          <li>Förderung von Körperwahrnehmung, Bewegungsfreude und motorischer Lernfähigkeit.</li>
          <li>Kein Drill, keine Spezialisierung – sondern altersgerechte, spielerische Belastung.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Schwerpunkte & Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Koordination – Sprungfolgen, Jonglieren, Rhythmusspiele, Balancieren, Fang-/Wurfvarianten.</li>
          <li>Schnelligkeit – Sprintduelle, Prellsprints, Reaktionsspiele, Staffelwettbewerbe.</li>
          <li>Beweglichkeit – Tierbewegungen, Rollübungen, dynamische Mobilisation im Spiel.</li>
          <li>Kraft (spielerisch) – Stützübungen, Partnerziehen, Medizinballrollen, Klettern.</li>
          <li>Gleichgewicht & Orientierung – Balancierstationen, Drehsprünge, Parcours mit Signalwechsel.</li>
          <li>Ausdauer (kindgerecht) – Intervallspiele, kurze Bewegungsspiele mit hoher Intensität.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodische Prinzipien">
        <ul className="list-disc list-inside space-y-2">
          <li>Vielseitigkeit – jede Einheit trainiert 2–3 Fähigkeiten.</li>
          <li>Spiel vor Drill – Bewegungsaufgaben immer mit Ziel.</li>
          <li>Wiederholung mit Variation – keine Monotonie.</li>
          <li>Differenzierung – Varianten je nach Niveau.</li>
          <li>Wettkampf ohne Verlierer – kooperative Challenges.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Trainingsformate & Praxisbeispiele">
        <ul className="list-disc list-inside space-y-2">
          <li>Stationstraining – Prellsprint, Balancier-Tunnel, Partner-Kraftspiel, Zielwurf.</li>
          <li>Parcoursformen – Koordinations-Achter, Farbslalom, Kombi-Strecke mit Zielwurf.</li>
          <li>Mini-Staffeln – Prell – Spring – Rolle – Fang.</li>
          <li>Kreativaufgaben – eigene Bewegungsbahn erfinden.</li>
          <li>Wettkampfformen – Gruppenzeit stoppen, Partnerduelle.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Keine Dauerläufe oder Maximalwiederholungen.</li>
          <li>Technik immer integrieren, aber nicht überfrachten.</li>
          <li>Beobachten statt bewerten – Feedback auf Bewegungserfolg.</li>
          <li>Erfolg messbar machen – kleine Fortschritte sichtbar machen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du nutzt das goldene Lernalter für Koordination, Bewegungsfreude und Körperwahrnehmung – ohne Druck.</li>
            <li>Du baust die Basis für spätere Leistung, aber schaffst heute Motivation.</li>
            <li>Du entwickelst Kinder, die sich gerne bewegen – und die wissen, wie sich Fortschritt anfühlt.</li>
            <li>Ziel: Spieler:innen, die sich bewegen wollen, sich koordinieren können – und Spaß an Athletik erleben.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
