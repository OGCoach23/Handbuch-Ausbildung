import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul2BJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">B-Jugend - Modul 2: Athletik & Motorik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen entwickeln eine funktionale, vielseitige und handballspezifische Athletik.</li>
          <li>Der Fokus liegt auf Bewegungskompetenz statt Maximalleistung – Qualität vor Quantität.</li>
          <li>Belastbarkeit, Körperspannung und Koordination werden in spielnahen Kontexten geschult.</li>
          <li>Prävention, Körpergefühl und Trainingsfreude stehen gleichrangig neben Leistungsentwicklung.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Schwerpunkte & Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Schnelligkeit:</strong> Reaktionsduelle, Farb- oder akustikgesteuerte Starts, Antritte mit Richtungswechsel.</li>
          <li><strong>Koordination:</strong> Komplexe Sprungformen, Prell-Parcours, Reaktionsleiter, Rhythmuswechsel mit Ball.</li>
          <li><strong>Stabilität:</strong> Partnerstütz, Rumpf-Übungen, statisch-dynamische Kraftformen.</li>
          <li><strong>Beweglichkeit:</strong> Mobilisation mit Ball, Tierbewegungen, Dehn-Zirkel.</li>
          <li><strong>Kraft (eigenes Körpergewicht):</strong> Medizinballrollen, Stütz-Balancierformen, Zug-/Druckübungen mit Partner.</li>
          <li><strong>Ausdauer (intervallnah):</strong> Spiele mit 3–5 Minuten Belastung, Fangreihen, Wechselspiele in Zonen.</li>
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
          <li><strong>Vielseitigkeit:</strong> Jede Einheit kombiniert mehrere Fähigkeiten.</li>
          <li><strong>Zielorientierung:</strong> Aufgaben mit klaren Motorikzielen.</li>
          <li><strong>Variationsprinzip:</strong> gleiche Übung in neuen Kombinationen.</li>
          <li><strong>Belastungssteuerung:</strong> Wechsel von Anspannung & Erholung.</li>
          <li><strong>Spiel vor Drill:</strong> Anwendung im Spielformat.</li>
          <li><strong>Individualisierung:</strong> Levelgruppen und Selbstwahl-Stationen.</li>
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

      <CollapsibleBox title="Ergebnis für den Trainer">
        <ul className="list-disc list-inside space-y-2">
          <li>Du entwickelst keine Bodybuilder – sondern belastbare, bewegungsintelligente Athlet:innen.</li>
          <li>Grundstein für Schnellkraft, Körperspannung und Handlungstempo.</li>
          <li><strong>Ziel:</strong> Spieler:innen, die schnell reagieren, stabil stehen und clever mit Belastung umgehen.</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}
