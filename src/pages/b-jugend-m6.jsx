import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul6BJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">B-Jugend - Modul 6: Teamkultur & Kommunikation</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen erleben, was es heißt, Teil eines echten Teams zu sein – mit Verantwortung, Rückhalt und verbindlichen Regeln.</li>
          <li>Sie lernen, Konflikte anzusprechen, Feedback zu geben und mit Emotionen umzugehen.</li>
          <li>Trainer:innen gestalten eine Teamkultur, die Leistung ermöglicht, ohne Druck auszuüben.</li>
          <li>Kommunikation wird als sportliche Fähigkeit begriffen – trainierbar wie Technik oder Taktik.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Besonderheiten in der B-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Gruppenzugehörigkeit:</strong> extrem wichtig – oft wichtiger als die individuelle Rolle.</li>
          <li><strong>Konflikte & Cliquen:</strong> entstehen häufiger, aber bearbeitbar.</li>
          <li><strong>Kommunikation:</strong> schwankt zwischen Kinderniveau und Jugendjargon.</li>
          <li><strong>Rollenverteilung:</strong> oft unausgesprochen, aber wirksam.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Gestaltung der Teamkultur">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Wir-Gefühl:</strong> gemeinsame Symbole, Teamposter, Rituale.</li>
          <li><strong>Verantwortung:</strong> Rollen im Training (Regelwächter:in, Materialchef:in).</li>
          <li><strong>Zusammenhalt:</strong> Reflexionsrunden, Team-Events, Lobwand.</li>
          <li><strong>Kritik- & Feedbackkultur:</strong> Plus-Plus-Wunsch, Reflexionskarten.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Kommunikationsformate & Übungen">
        <ul className="list-disc list-inside space-y-2">
          <li>Teamritual vor dem Spiel: 3 Dinge, die wir heute zeigen wollen.</li>
          <li>Abschlussrunde: Was nehme ich heute mit?</li>
          <li>Partner-Coaching: Feedback zum Spielverhalten.</li>
          <li>Stopp-Zeichen im Training definieren.</li>
          <li>Rollen-Switch: Spieler:in übernimmt 10 Min. Coachrolle.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Elternarbeit in der B-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Transparenz & Vertrauen:</strong> Elternabend mit Einblick in Ziele & Philosophie.</li>
          <li><strong>Verantwortungsklarheit:</strong> Trainer:innen = Entwicklung, Eltern = Begleitung.</li>
          <li><strong>Einbindung:</strong> Mitmachaktionen, Helferlisten, Elternbeiträge sichtbar machen.</li>
          <li><strong>Kommunikationswege:</strong> Newsletter, strukturierte WhatsApp-Gruppen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer">
        <ul className="list-disc list-inside space-y-2">
          <li>Du entwickelst aus Mitspielern ein echtes Team – mit Beziehungen, Haltung und Verantwortung.</li>
          <li>Spieler:innen übernehmen Verantwortung, leben Feedback und stehen füreinander ein.</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}
