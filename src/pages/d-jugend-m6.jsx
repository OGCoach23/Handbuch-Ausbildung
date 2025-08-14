import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul6DJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">D-Jugend - Modul 6: Teamkultur & Kommunikation</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen erleben, dass sie Teil eines Teams sind – mit Aufgaben, Einfluss und Rückhalt.</li>
          <li>Trainer:innen fördern eine Kultur des Miteinanders, der Transparenz und des Vertrauens.</li>
          <li>Kommunikation wird trainiert – nicht dem Zufall überlassen.</li>
          <li>Fehler, Konflikte und Erfolge werden gemeinsam getragen, reflektiert und gestaltet.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Bausteine einer entwicklungsorientierten Teamkultur">
        <ul className="list-disc list-inside space-y-2">
          <li>Werte sichtbar machen – Teamwerte definieren, visualisieren, im Alltag einfordern.</li>
          <li>Rituale & Wiederholung – Begrüßung, Abschlusskreis, Wochenthema, 'Wir-Moment'.</li>
          <li>Verantwortung verteilen – Aufgaben rotierend vergeben.</li>
          <li>Fehler- & Feedbackkultur – Reflexion mit Ich-Botschaften, Feedbackformate.</li>
          <li>Trainerrolle bewusst leben – klar, empathisch, konsequent.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Kommunikation trainieren – kindgerecht & wirksam">
        <ul className="list-disc list-inside space-y-2">
          <li>Feedback-Treppe: Was war gut? Was war schwer? Was will ich verbessern?</li>
          <li>Teammatrix – Spieler:innen bewerten sich gegenseitig anonym.</li>
          <li>Fragekarten im Kreis – z. B. 'Wann warst du mutig?'.</li>
          <li>Code of Play – eigene Teamregeln entwickeln.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Elternarbeit in der D-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Elternabend mit Haltung & Vision – Transparenz und Rollenklärung.</li>
          <li>Werteblatt für Eltern – Erwartungsklärung zum Verhalten und Kommunikation.</li>
          <li>Dialog ermöglichen – Gesprächsangebote und Feedbackgespräche.</li>
          <li>Einbindung bewusst gestalten – Helferdienste, Events, Eltern-Kind-Spiele.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Teamkultur braucht Planung, Wiederholung und Vorleben.</li>
          <li>Kommunikation ist trainierbar – nur bei Regelmäßigkeit wirksam.</li>
          <li>Verantwortung wächst mit Vertrauen – nicht mit Kontrolle.</li>
          <li>Eltern sind Teil des Systems – klare Kommunikation nötig.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du entwickelst ein Team, das sich durch Zusammenhalt, Kommunikation und Vertrauen definiert – nicht durch Ergebnisse.</li>
            <li>Du förderst Kinder, die einander stärken, Verantwortung übernehmen und offen sprechen.</li>
            <li>Gute Kommunikation ist Spielfeld und Lebensschule zugleich.</li>
            <li>Ziel: Spieler:innen, die mitdenken, mitreden und stolz sind, Teil des Teams zu sein.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
