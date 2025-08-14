import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul2CJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">C-Jugend - Modul 2: Athletik & Motorik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Die Spieler:innen entwickeln eine funktionale, vielseitige und handballspezifische Athletik.</li>
          <li>Der Fokus liegt auf Bewegungskompetenz statt Maximalleistung – Qualität vor Quantität.</li>
          <li>Belastbarkeit, Körperspannung und Koordination werden in spielnahen Kontexten geschult.</li>
          <li>Prävention, Körpergefühl und Trainingsfreude stehen gleichrangig neben Leistungsentwicklung.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Schwerpunkte & Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Schnelligkeit: Reaktionsduelle, Farb- oder akustikgesteuerte Starts, Antritte mit Richtungswechsel.</li>
          <li>Koordination: Komplexe Sprungformen, Prell-Parcours, Reaktionsleiter, Rhythmuswechsel mit Ball.</li>
          <li>Stabilität: Partnerstütz, Rumpf-Übungen, statisch-dynamische Kraftformen.</li>
          <li>Beweglichkeit: Mobilisation mit Ball, Tierbewegungen, Dehn-Zirkel.</li>
          <li>Kraft (eigenes Körpergewicht): Medizinballrollen, Stütz-Balancierformen, Zug-/Druckübungen mit Partner.</li>
          <li>Ausdauer (intervallnah): Spiele mit 3–5 Minuten Belastung, Fangreihen, Wechselspiele in Zonen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="No-Gos im Athletiktraining">
        <ul className="list-disc list-inside space-y-2">
          <li>Zirkeltraining ohne Spielformat – motivationsarm, keine Spielnähe.</li>
          <li>Pauschale Kraftübungen mit Zusatzgewicht – Risiko und fehlende Individualisierung.</li>
          <li>Einseitige Ausdauerbelastung (z. B. Dauerläufe) – keine Relevanz zum Spiel.</li>
          <li>Technikferne Stabilitätsprogramme – oft langweilig und ohne Spielbezug.</li>
          <li>Konditionsvergleiche in der Gruppe – Leistungsdruck und Schamgefahr.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Trainingsmethodik">
        <ul className="list-disc list-inside space-y-2">
          <li>Vielseitigkeit: Jede Einheit kombiniert mehrere Fähigkeiten.</li>
          <li>Zielorientierung: Aufgaben mit klaren Motorikzielen.</li>
          <li>Variationsprinzip: gleiche Übung in neuen Kombinationen.</li>
          <li>Belastungssteuerung: Wechsel von Anspannung & Erholung.</li>
          <li>Spiel vor Drill: Anwendung im Spielformat.</li>
          <li>Individualisierung: Levelgruppen und Selbstwahl-Stationen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Spielformen & Praxisideen">
        <ul className="list-disc list-inside space-y-2">
          <li>Reaktions-Memory: Farben + Sprint.</li>
          <li>Körperkreis: Partneraufgaben in definierter Reihenfolge.</li>
          <li>Wackelparcours: Balancieren + Zielwurf.</li>
          <li>Athletik-Bingo: Bewegungs-Challenges per Karte.</li>
          <li>Fang den Ball nach Drehung: Reaktion + visuelle Kontrolle.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du entwickelst keine Bodybuilder – sondern belastbare, bewegungsintelligente Athlet:innen.</li>
            <li>Grundstein für Schnellkraft, Körperspannung und Handlungstempo.</li>
            <li>Ziel: Spieler:innen, die schnell reagieren, stabil stehen und clever mit Belastung umgehen.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
