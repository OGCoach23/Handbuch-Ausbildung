import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul2DJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">D-Jugend - Modul 2: Athletik & Motorik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen bauen eine robuste, vielseitige athletische Grundlage auf – abgestimmt auf ihre Entwicklung.</li>
          <li>Koordination, Schnelligkeit, Stabilität und Beweglichkeit werden spielnah verknüpft und gezielt gefördert.</li>
          <li>Athletik wird nicht bewertet, sondern erlebt: Orientierung statt Selektion, Motivation statt Kontrolle.</li>
          <li>Trainer:innen gestalten athletische Lernräume mit System, Spielfreude und Entwicklungssinn.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Schwerpunkte & Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Koordination: Reaktive Sprünge, Partneraufgaben, Balancieren + Ball, Bewegungsfolgen mit Richtungswechsel</li>
          <li>Schnelligkeit: Sprints (10–25 m), Reaktionsspiele, Handballsprints mit Entscheidung</li>
          <li>Stabilität: Stützformen, Tierbewegungen, Partnerübungen, TRX/Seilvarianten</li>
          <li>Beweglichkeit: Flow-Warm-ups, Tiergänge, Partnerdehnungen als Achtsamkeitsübung</li>
          <li>Ausdauer: Intervallspiele mit Ball, 4-Felder-Rotation</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodische Prinzipien">
        <ul className="list-disc list-inside space-y-2">
          <li>Qualität vor Quantität – Technik vor Wiederholung</li>
          <li>Bewegung = Spiel – Athletik immer mit Zielhandlung verknüpfen</li>
          <li>Variation statt Drill</li>
          <li>Individuelles Fordern – Levelsysteme oder Stationenwahl</li>
          <li>Bewegungsvielfalt zulassen</li>
          <li>Motivation vor Bewertung</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Spielformen & Praxisideen">
        <ul className="list-disc list-inside space-y-2">
          <li>Sprint + Zielwurf</li>
          <li>Balance-Challenge</li>
          <li>Partner-Parcours</li>
          <li>Sprintmemory</li>
          <li>'Tierischer Wettlauf'</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="No-Go's im Athletiktraining der D-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Zirkeltraining ohne Spiel</li>
          <li>Maximalkraftübungen</li>
          <li>Drillartige Dauerläufe</li>
          <li>Stupide 'Bauch-Rücken-Liegestütz'-Sets</li>
          <li>Leistungsvergleiche unter Kindern</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du förderst motorische Grundlagen – ohne deine Spieler:innen zu überfordern.</li>
            <li>Du schaffst Bewegungsfreude, Sicherheit und Belastbarkeit – ohne Druck, ohne Drill.</li>
            <li>Dein Athletiktraining macht sie stabiler, schneller und selbstbewusster – auf dem Feld und im Leben.</li>
            <li>Ziel: Spieler:innen, die ihren Körper kontrollieren, mit ihm arbeiten – und Lust auf Bewegung behalten.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
