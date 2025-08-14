import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul3AJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">A-Jugend - Modul 3: Technik & Taktik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Technik wird unter Druck, in Tempo und taktischem Kontext angewendet – nicht isoliert trainiert</li>
          <li>Taktische Prinzipien bestimmen die Technikwahl – nicht umgekehrt</li>
          <li>Die Spieler:innen verstehen Technik als individuelles Werkzeug innerhalb kollektiver Spiellösungen</li>
          <li>Fehler werden als Feedback genutzt – Variation und Entscheidungskompetenz stehen im Zentrum</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Schwerpunkte & Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Technikanwendung: Wurf unter Gegnerdruck, Pass unter Zeitdruck, variable Prelltechniken, beidseitiges Spiel</li>
          <li>Taktikindividualisierung: Technikwahl nach Situation: Finte vs. Pass, Rückstoß vs. Wurf, Laufweg vs. Ballhalten</li>
          <li>Kleingruppentaktik: 2:2 und 3:3 unter taktischen Triggern (z. B. Stoßen – Sperre – Pass – Entscheidung)</li>
          <li>Abwehrtechnik & -verhalten: 1:1-Kontaktverhalten, Helfen vs. Halten, Auslöseverhalten erkennen und unterbrechen</li>
          <li>Triggerverständnis & Spielintelligenz: Wann reagiere ich wie? Was macht der Gegner – und welche Technik hilft mir dabei?</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Umsetzung">
        <ul className="list-disc list-inside space-y-2">
          <li>Technik im Spielkontext: Kein Isolattraining – alle Technikübungen in Spielnähe oder Spielsituation</li>
          <li>Variation vor Wiederholung: Technik in wechselnden Aufgaben, Gegnern, Positionen, Zonen</li>
          <li>Kognitive Aktivierung: Vorwissen abfragen, Entscheidungen bewusst herbeiführen, Perspektivwechsel ermöglichen</li>
          <li>Peer-Coaching einbauen: Spieler:innen geben Technikfeedback, analysieren Bewegungen gegenseitig</li>
          <li>Video & Selbstanalyse nutzen: Technik aus Spielsituationen analysieren - Selbstbild vs. Fremdbild erkennen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Trainingsformate & Spielformen">
        <ul className="list-disc list-inside space-y-2">
          <li>3:3 mit Regelbindung: z. B. 'Tor nur nach Wurfvariante + vorherigem Positionswechsel'</li>
          <li>Positionsspezifisches Kombitraining: Rückraum: Pass-Wurf-Finte / Kreis: Sperre-Lösen-Durchbruch</li>
          <li>Entscheidungstraining mit Trigger: Reaktion auf z. B. Verteidigungsverhalten: Finte oder Pass?</li>
          <li>Kleingruppen mit Coachingrolle: Spieler:innen coachen Teamkamerad:in mit Beobachtungsauftrag (z. B. 'Wann war deine Technik effektiv?')</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Fehler & wie du sie vermeidest">
        <ul className="list-disc list-inside space-y-2">
          <li>Techniktraining ohne Spielziel - Technik an taktische Prinzipien koppeln ('Wofür brauchst du diese Bewegung?')</li>
          <li>Drillartige Wiederholungen - Variationen einbauen, situativ steuern, Gegnerdruck steigern</li>
          <li>Korrekturen im Dauermodus - Lieber: gezielte Einzelimpulse + Selbstreflexion durch Video/Frage</li>
          <li>Nur 'Lieblingsseite' nutzen - Immer beidseitig trainieren – auch wenn 'es komisch aussieht'</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du förderst technische Handlungskompetenz auf höchstem Niveau – nicht durch Drill, sondern durch Kontext, Variation und Eigenverantwortung.</li>
            <li>Du hilfst deinen Spieler:innen, ihr Spiel zu verfeinern, ihre Rolle zu erkennen und Technik taktisch wirksam einzusetzen.</li>
            <li>Ziel: Spieler:innen, die Technik bewusst und spielintelligent einsetzen – als individuelle Lösung in kollektiven Aufgaben.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
