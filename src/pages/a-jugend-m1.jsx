import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul1AJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">A-Jugend - Modul 1: Entwicklungsmerkmale & Methodik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen werden in ihrer körperlichen, kognitiven und emotionalen Reife differenziert gefördert</li>
          <li>Trainer:innen passen Inhalte, Ansprache und Struktur an die leistungsrelevante Entwicklungsphase an</li>
          <li>Ziel ist eine Ausbildung, die sowohl auf den Übergang in die A-Jugend als auch auf persönliche Reife und Eigenverantwortung vorbereitet</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale der B-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li>Körperlich: Viele haben das Wachstum abgeschlossen, Kraft- & Belastungsaufbau sind möglich, große Leistungsschere</li>
          <li>Kognitiv: Strategisches Denken, Planung, kritisches Mitdenken, Wunsch nach Eigenbeteiligung</li>
          <li>Emotional: Selbstbild stabilisiert sich, aber Leistungsdruck und Vergleich mit anderen (auch online) nehmen zu</li>
          <li>Sozial: Gruppenstrukturen stabil, Rollenbewusstsein steigt, Loyalität und Konfliktpotenzial nehmen zu</li>
          <li>Motivation: Leistungstypen zeigen Eigenantrieb – aber extrinsische Einflüsse (Trainer, Eltern, Umfeld) bleiben relevant</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li>Ernst nehmen – auf Augenhöhe bleiben: Jugendliche wollen gehört werden, ohne dass Trainer:innen zum Kumpel werden müssen</li>
          <li>Persönlichkeitsunterschiede anerkennen: Unterschiedliche Reifegrade erfordern individuelle Ansprache und Förderung</li>
          <li>Feedback systematisieren: Strukturierte Zielgespräche, Videoanalysen, klare Rückmeldungspfade statt Bauchgefühl</li>
          <li>Verantwortung übergeben: Spieler:innen leiten Aufwärmen, übernehmen Co-Coaching, führen Trainingsprotokolle</li>
          <li>Langfristigkeit betonen: Entwicklung statt Ergebnis – Haltung, Kommunikation und Geduld statt kurzfristiger Druck</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li>Trainingsstruktur: 2–3 Einheiten/Woche à 90–105 Minuten + Zusatzmodule (Athletik, Video, Taktik)</li>
          <li>Lernformate: Gruppenaufgaben, Selbstreflexion, Videoanalyse, Feedbackrunden, Spieler:innen-Input</li>
          <li>Teamsteuerung: Rollenvergabe, Aufgabenverteilung, Mitverantwortung z. B. für Scouting, Warm-up, Kommunikation</li>
          <li>Zielorientierung: Persönliche Ziele im Training definieren, festhalten und gemeinsam nachverfolgen</li>
          <li>Spielzeitmanagement: Transparent, kommuniziert, begründet – Entwicklungsgespräche als Grundlage</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Fallstricke & Trainerfehler">
        <ul className="list-disc list-inside space-y-2">
          <li>'Alle trainieren gleich.' - Besser: Ziel- und potenzialorientiert differenzieren</li>
          <li>'Jetzt ist Schluss mit lustig.' - Leistung braucht Freude – fordern und fördern mit Haltung statt Härte</li>
          <li>'Wenn du X willst, musst du mehr…' - Klare Zielabsprache, Entwicklung begleiten, statt nur zu fordern</li>
          <li>'Ich hab das erklärt – mach's!' - Jugendliche wollen verstehen, nicht nur gehorchen - Dialog und Geduld</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du entwickelst die Jugendlichen zu spielerisch starken, eigenständigen Persönlichkeiten.</li>
            <li>Du gibst Struktur, forderst Eigenverantwortung und setzt gezielt Impulse zur Leistungsentwicklung.</li>
            <li>Du begleitest Identitätsbildung – mit sportlicher und pädagogischer Klarheit.</li>
            <li>Ziel: Spieler:innen, die Verantwortung übernehmen, Entscheidungen reflektieren – und den nächsten Schritt gehen wollen.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
