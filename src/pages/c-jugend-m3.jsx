import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul3CJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">C-Jugend - Modul 3: Mentale & soziale Entwicklung</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen erkennen eigene Stärken und Schwächen – und lernen, damit umzugehen.</li>
          <li>Sie bauen Selbstvertrauen auf und entwickeln ein realistisches Selbstbild.</li>
          <li>Teamfähigkeit, Empathie und Konfliktfähigkeit werden gezielt gefördert.</li>
          <li>Mentale Stärke wird über Aufgaben, Reflexion und Verantwortung systematisch entwickelt.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische mentale & soziale Themen">
        <ul className="list-disc list-inside space-y-2">
          <li>Selbstbild & Identität: schwankend, stark von Rückmeldung abhängig.</li>
          <li>Leistungsdruck: Vergleich mit anderen, Frust bei Rückschlägen, Angst vor Versagen.</li>
          <li>Teamverhalten: Rollenfindung, Gruppendruck, Cliquenbildung.</li>
          <li>Emotionale Steuerung: Wut, Rückzug, Aufbrausen – häufig noch unreguliert.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsfördernde Maßnahmen">
        <ul className="list-disc list-inside space-y-2">
          <li>Selbstvertrauen stärken: Erfolge sichtbar machen, Positivprotokolle, feiern.</li>
          <li>Umgang mit Frust lernen: Reflexionsrunden, Frustskala, Auszeit-Übungen.</li>
          <li>Teamverantwortung stärken: Rollen verteilen, Materialchef, Feedbackpartner.</li>
          <li>Empathie & Kommunikation: Perspektivwechsel, Lobrituale, Kleingruppengespräche.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Übungen & Methoden aus der Praxis">
        <ul className="list-disc list-inside space-y-2">
          <li>"Mut-Moment": jede:r benennt etwas, das sie/er sich getraut hat.</li>
          <li>"Rolle rückwärts": gegenseitiges Coaching mit Ich-Botschaften.</li>
          <li>"Team-Vertrag": gemeinsam erarbeitet und sichtbar aufgehängt.</li>
          <li>"Was war dein Highlight?" – fester Abschluss jeder Einheit.</li>
          <li>"Gefühlsbarometer" als Start- oder Endimpuls.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Trainerkommunikation">
        <ul className="list-disc list-inside space-y-2">
          <li>Klarheit & Struktur: feste Rituale, klare Sprache, Regeln besprechen.</li>
          <li>Zuhören & Spiegeln: aktives Zuhören, nonverbale Signale ernst nehmen.</li>
          <li>Individuelle Ansprache: auch stille Spieler:innen aktiv einbeziehen.</li>
          <li>Haltung statt Kontrolle: Spielräume geben, klare Reaktion bei Grenzüberschreitungen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du bist Entwicklungspartner:in, nicht nur Technik-Coach.</li>
            <li>Du förderst mutige, respektvolle und resiliente Persönlichkeiten.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
