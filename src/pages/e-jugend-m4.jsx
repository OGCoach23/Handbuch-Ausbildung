import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul4EJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">E-Jugend - Modul 4: Mentale & soziale Entwicklung</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Aufbau von Selbstvertrauen, Teamverantwortung und emotionaler Selbststeuerung.</li>
          <li>Förderung von Kooperation, Rücksichtnahme und Umgang mit Erfolgsdruck.</li>
          <li>Entwicklung eines positiven, aktiven Selbstbilds in der Rolle als Mitspieler:in.</li>
          <li>Vorbereitung auf spätere leistungsorientierte Umfelder – ohne Überforderung.</li>
          <li>Erkenne Dein Team als Freund und Helfer.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Mentale & soziale Entwicklungsziele">
        <ul className="list-disc list-inside space-y-2">
          <li>Selbstbild & Selbstvertrauen – Eigene Stärken erkennen, Fehler zulassen, Kritik nicht als Abwertung empfinden.</li>
          <li>Motivation & Zielorientierung – Kleine Aufgaben fokussieren, Anstrengung als Wert verstehen.</li>
          <li>Kooperation & Teamfähigkeit – Sich in Gruppen organisieren, Verantwortung übernehmen, unterstützen.</li>
          <li>Umgang mit Emotionen – Frust erkennen & regulieren, Empathie zeigen.</li>
          <li>Rollenverständnis – Erste Rollen im Team entdecken & ausprobieren.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodische Prinzipien">
        <ul className="list-disc list-inside space-y-2">
          <li>Lernen durch Erleben – kooperative Spiele, Reflexionsrunden, gemeinsame Regeln.</li>
          <li>Reflexion einfach halten – kurze, kindgerechte Fragen.</li>
          <li>Teamverantwortung einbauen – Aufgabenteilung, Gruppenpunkte, gemeinsame Ziele.</li>
          <li>Fehler = Lernchance – konstruktive Auseinandersetzung statt Tadel.</li>
          <li>Verstärken statt sanktionieren – positives Verhalten sofort sichtbar machen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methoden & Spiele">
        <ul className="list-disc list-inside space-y-2">
          <li>Team der Woche – für faires, mutiges oder hilfsbereites Verhalten.</li>
          <li>Kooperationsparcours – Zusammenarbeit stärken.</li>
          <li>Stopp-Spiel + Feedback – Beobachtungen gemeinsam reflektieren.</li>
          <li>Zielkarten – persönliche Ziele für das Training.</li>
          <li>Rollenwechselspiel – Kinder übernehmen verschiedene Rollen.</li>
          <li>Ball der Gefühle – Emotionen mitteilen und besprechen.</li>
          <li>Mut- & Fairnesspunkte – positives Verhalten belohnen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Rituale für mentale Entwicklung">
        <ul className="list-disc list-inside space-y-2">
          <li>Kreis der Stärken – gegenseitiges Loben.</li>
          <li>Emotionen-Uhr – Stimmung sichtbar machen.</li>
          <li>Mutfrage des Tages – Erlebnisse teilen.</li>
          <li>Teamvertrag sichtbar – gemeinsam erarbeitete Regeln.</li>
          <li>Ich kann...-Tafel – persönliche Erfolge festhalten.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du stärkst das Selbstvertrauen, die Sozialkompetenz und die Frustrationstoleranz deiner Spieler:innen.</li>
            <li>Du gestaltest Training als Lernort für Kopf und Herz.</li>
            <li>Du hilfst Kindern, im Spiel Gemeinschaft, Verantwortung und Mut zu erleben.</li>
            <li>Ziel: Spieler:innen, die sich selbst vertrauen, Verantwortung übernehmen – und gemeinsam stark sind.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
