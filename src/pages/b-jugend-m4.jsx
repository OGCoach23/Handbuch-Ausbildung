import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul4BJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">B-Jugend - Modul 4: Mentale & soziale Entwicklung</h1>
      
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
          <li><strong>Selbstbild & Identität:</strong> schwankend, stark von Rückmeldung abhängig.</li>
          <li><strong>Leistungsdruck:</strong> Vergleich mit anderen, Frust bei Rückschlägen, Angst vor Versagen.</li>
          <li><strong>Teamverhalten:</strong> Rollenfindung, Gruppendruck, Cliquenbildung.</li>
          <li><strong>Emotionale Steuerung:</strong> Wut, Rückzug, Aufbrausen – häufig noch unreguliert.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsfördernde Maßnahmen">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Selbstvertrauen stärken:</strong> Erfolge sichtbar machen, Positivprotokolle, feiern.</li>
          <li><strong>Umgang mit Frust lernen:</strong> Reflexionsrunden, Frustskala, Auszeit-Übungen.</li>
          <li><strong>Teamverantwortung stärken:</strong> Rollen verteilen, Materialchef, Feedbackpartner.</li>
          <li><strong>Empathie & Kommunikation:</strong> Perspektivwechsel, Lobrituale, Kleingruppengespräche.</li>
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
          <li><strong>Klarheit & Struktur:</strong> feste Rituale, klare Sprache, Regeln besprechen.</li>
          <li><strong>Zuhören & Spiegeln:</strong> aktives Zuhören, nonverbale Signale ernst nehmen.</li>
          <li><strong>Individuelle Ansprache:</strong> auch stille Spieler:innen aktiv einbeziehen.</li>
          <li><strong>Haltung statt Kontrolle:</strong> Spielräume geben, klare Reaktion bei Grenzüberschreitungen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer">
        <ul className="list-disc list-inside space-y-2">
          <li>Du bist Entwicklungspartner:in, nicht nur Technik-Coach.</li>
          <li>Du förderst mutige, respektvolle und resiliente Persönlichkeiten.</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}
