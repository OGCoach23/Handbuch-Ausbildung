import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul6CJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">C-Jugend - Modul 6: Teamkultur & Kommunikation</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen erleben, was es heißt, Teil eines echten Teams zu sein – mit Verantwortung, Rückhalt und verbindlichen Regeln.</li>
          <li>Sie lernen, Konflikte anzusprechen, Feedback zu geben und mit Emotionen umzugehen.</li>
          <li>Trainer:innen gestalten eine Teamkultur, die Leistung ermöglicht, ohne Druck auszuüben.</li>
          <li>Kommunikation wird als sportliche Fähigkeit begriffen – trainierbar wie Technik oder Taktik.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Besonderheiten in der C-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Gruppenzugehörigkeit extrem wichtig – oft wichtiger als die individuelle Rolle.</li>
          <li>Konflikte & Cliquen entstehen häufiger, sind aber bearbeitbar.</li>
          <li>Kommunikation schwankt zwischen Kinderniveau und Jugendjargon.</li>
          <li>Rollenverteilung oft unausgesprochen, aber wirksam.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Gestaltung der Teamkultur">
        <ul className="list-disc list-inside space-y-2">
          <li>Wir-Gefühl: gemeinsame Symbole, Teamposter, Rituale.</li>
          <li>Verantwortung: Rollen im Training (Regelwächter:in, Materialchef:in).</li>
          <li>Zusammenhalt: Reflexionsrunden, Team-Events, Lobwand.</li>
          <li>Kritik- & Feedbackkultur: Plus-Plus-Wunsch, Reflexionskarten.</li>
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

      <CollapsibleBox title="Elternarbeit in der C-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Transparenz & Vertrauen: Elternabend mit Einblick in Ziele & Philosophie.</li>
          <li>Verantwortungsklarheit: Trainer:innen = Entwicklung, Eltern = Begleitung.</li>
          <li>Einbindung: Mitmachaktionen, Helferlisten, Elternbeiträge sichtbar machen.</li>
          <li>Kommunikationswege: Newsletter, strukturierte WhatsApp-Gruppen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du entwickelst aus Mitspielern ein echtes Team – mit Beziehungen, Haltung und Verantwortung.</li>
            <li>Spieler:innen übernehmen Verantwortung, leben Feedback und stehen füreinander ein.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
