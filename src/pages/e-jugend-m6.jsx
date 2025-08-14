import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul6EJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">E-Jugend - Modul 6: Teamkultur & Kommunikation</h1>
      
      <CollapsibleBox title="Bausteine einer starken Teamkultur" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Wertebasis – Teamregeln gemeinsam entwickeln, sichtbar machen, regelmäßig thematisieren.</li>
          <li>Rituale – Begrüßung, Abschlussspruch, Applaus für…, Wochenziel im Kreis.</li>
          <li>Sichtbare Identität – Teamname, T-Shirt, Logo, Maskottchen gestalten.</li>
          <li>Verantwortung teilen – Rollen wie Aufwärmleiter:in, Regelwächter:in, Mutmacher:in vergeben.</li>
          <li>Fehlerkultur – Keine Bloßstellung, Fehler positiv besetzen.</li>
          <li>Respekt fördern – Gesprächsregeln, Körpersprache thematisieren, Rollenspiele nutzen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Kommunikationsmethoden & Tools">
        <ul className="list-disc list-inside space-y-2">
          <li>Runde der Erkenntnis – Was habe ich gelernt? Was war schwierig? Wem habe ich geholfen?</li>
          <li>Lobkarten – Monatlich: Kinder schreiben ein Lob an ein anderes Kind.</li>
          <li>Feedbackpausen – Kurzstopp im Spiel: Was läuft gut? Was ändern wir?</li>
          <li>Gesprächskarten – Impulse wie: Was hat dich gefreut? Was willst du besser machen?</li>
          <li>Gefühlsbarometer – Skala oder Smileys nach Training.</li>
          <li>Teamkonferenz – Regelmäßige Reflexion zu Haltung, Zielen, Konflikten, Ideen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Elternarbeit in der E-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Elternregelkarte – Vereinbarungen: Wir loben jedes Kind, wir vertrauen, wir feuern alle an.</li>
          <li>Team-Newsletter – kindgerecht formuliert, mit Trainerhaltung.</li>
          <li>Elterngespräch light – Halbjährlich 5-Minuten-Feedback, wertschätzend.</li>
          <li>Bewegungsbeteiligung – Eltern helfen bei Festen, Turnieren, Snacks.</li>
          <li>Umgang mit Niederlagen – Ratgeberblatt für Eltern.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Teamkultur wird gemacht, erlebt und gepflegt.</li>
          <li>Kommunikation gehört ins Training.</li>
          <li>Lob, Reflexion und Klarheit schaffen Orientierung.</li>
          <li>Eltern ernst nehmen – aber klar führen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Trainerfehler (und wie du sie vermeidest)">
        <ul className="list-disc list-inside space-y-2">
          <li>Keine Rituale im Training – Feste Struktur gibt Sicherheit.</li>
          <li>Konflikte aussitzen – Frühzeitig ansprechen.</li>
          <li>Eltern nur informieren – Einbeziehen und Haltung mit ins Boot holen.</li>
          <li>Lob zu pauschal – Besser konkret, ehrlich, individuell.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du formst ein Team, das mehr ist als die Summe seiner Spieler:innen.</li>
            <li>Du entwickelst eine Mannschaft, die gemeinsam lernt, lacht, verliert und wächst.</li>
            <li>Du schaffst Vertrauen zwischen Trainer:innen, Spieler:innen und Eltern.</li>
            <li>Ziel: Spieler:innen, die sich im Team gesehen, gebraucht und verstanden fühlen – und gerne bleiben.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
