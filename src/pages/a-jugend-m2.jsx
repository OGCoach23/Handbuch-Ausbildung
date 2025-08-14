import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul2AJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">A-Jugend - Modul 2: Athletik & Motorik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Entwicklung individueller athletischer Leistungsfähigkeit auf positions- und potenzialgerechtem Niveau</li>
          <li>Integration von Prävention, Bewegungsqualität und funktioneller Belastung</li>
          <li>Förderung von Eigenverantwortung in der Trainingssteuerung</li>
          <li>Kein 'Standardprogramm', sondern dynamisches, vielseitiges und nachhaltiges Athletiktraining</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Schwerpunkte & Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Kraft (Körpergewicht & Zusatz): Rumpf, Beinachsen, Sprungstabilität, kontrollierte Zusatzlasten (Langhantel einführend, Geräte), Eigenprogramme</li>
          <li>Schnelligkeit: Maximale Antritte, Richtungswechsel, Reaktionssprints mit Entscheidung, akzelerative Starts</li>
          <li>Koordination & Bewegungsqualität: Techniksauberkeit, multilokale Ansteuerung, Stabitraining mit Anforderungen an Rhythmus & Kontrolle</li>
          <li>Ausdauer: Intervallorientiert, handballspezifisch, individuell steuerbar – Belastung in Spielformen & Modellen</li>
          <li>Regeneration & Mobilität: Myofasziale Selbstarbeit, Mobility-Routinen, aktive Regeneration mit Pulssteuerung</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Umsetzung">
        <ul className="list-disc list-inside space-y-2">
          <li>Individualisierung: Zielprofile, Belastungstagebuch, Feedback-Schleifen</li>
          <li>Verständnis fördern: Warum machen wir was? – Aufklärung vor, während, nach der Übung</li>
          <li>Bewegung vor Belastung: Technik zuerst, Belastung steigern nach Qualität, nicht nach Zeitplan</li>
          <li>Verlässliche Steuerung: RPE, HF-Messung, Beobachtungsprotokolle, Eigenreflexion als fester Bestandteil</li>
          <li>Handballnähe durch Integration: Sprint- oder Kraftinhalte mit Spielformen verbinden, z. B. Triggerlauf - 2:1-Situation</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Beispielhafte Trainingsformate">
        <ul className="list-disc list-inside space-y-2">
          <li>Athletik-Modul vor Technikblock: z. B. Sprintvariation - Zielpass - 1:1 - Rückzugsverhalten</li>
          <li>Athletik-Zirkel mit Kompetenzlevel: 3 Schwierigkeitsstufen - Spieler:innen wählen abhängig von Tagesform und Zielsetzung</li>
          <li>Positionsbezogene Stabikombis: Rückraum: Rotationsstabilität + Rumpf – Außen: Unterschenkel + Fußgewölbe-Stabilität</li>
          <li>'Your Body, Your Unit': Eigenentwicklung eines Mini-Programms + Präsentation an das Team</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Fehler & wie du sie vermeidest">
        <ul className="list-disc list-inside space-y-2">
          <li>Standardzirkel für alle - Differenzierung nach Position, Ziel und Status - kein Schema-F</li>
          <li>Stumpfes Belastungstraining - Fokus auf Bewegungsqualität, dann Belastung - Feedbacksystem nutzen</li>
          <li>Athletik isoliert vom Spiel - Integration in Technik/Taktik-Blöcke oder Spielanforderungen</li>
          <li>Fehlende Erklärung 'Warum das?' - Transparenz und Mitverantwortung erhöhen Motivation & Qualität</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du machst aus allgemeinem Athletiktraining einen individuell steuerbaren, leistungsfördernden und motivierenden Baustein der Ausbildung.</li>
            <li>Du förderst Körperkompetenz, Belastbarkeit und Selbststeuerung – und legst das Fundament für spätere Spezialisierung.</li>
            <li>Ziel: Spieler:innen, die wissen, wofür sie trainieren – und wie sie ihren Körper bewusst, stabil und leistungsfähig einsetzen.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
