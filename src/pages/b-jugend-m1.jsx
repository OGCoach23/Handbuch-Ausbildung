import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul1BJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">B-Jugend - Modul 1: Entwicklungsmerkmale & Methodik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen werden in ihrer körperlichen, kognitiven und emotionalen Reife differenziert gefördert</li>
          <li>Trainer:innen passen Inhalte, Ansprache und Struktur an die leistungsrelevante Entwicklungsphase an</li>
          <li>Ziel ist eine Ausbildung, die sowohl auf den Übergang in die A-Jugend als auch auf persönliche Reife und Eigenverantwortung vorbereitet</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Entwicklungsmerkmale der B-Jugend">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Körperlich:</strong> Viele haben das Wachstum abgeschlossen, Kraft- & Belastungsaufbau sind möglich, große Leistungsschere</li>
          <li><strong>Kognitiv:</strong> Strategisches Denken, Planung, kritisches Mitdenken, Wunsch nach Eigenbeteiligung</li>
          <li><strong>Emotional:</strong> Selbstbild stabilisiert sich, aber Leistungsdruck und Vergleich mit anderen (auch online) nehmen zu</li>
          <li><strong>Sozial:</strong> Gruppenstrukturen stabil, Rollenbewusstsein steigt, Loyalität und Konfliktpotenzial nehmen zu</li>
          <li><strong>Motivation:</strong> Leistungstypen zeigen Eigenantrieb – aber extrinsische Einflüsse (Trainer, Eltern, Umfeld) bleiben relevant</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Was Trainer:innen besonders beachten müssen">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Ernst nehmen – auf Augenhöhe bleiben:</strong> Jugendliche wollen gehört werden, ohne dass Trainer:innen zum Kumpel werden müssen</li>
          <li><strong>Persönlichkeitsunterschiede anerkennen:</strong> Unterschiedliche Reifegrade erfordern individuelle Ansprache und Förderung</li>
          <li><strong>Feedback systematisieren:</strong> Strukturierte Zielgespräche, Videoanalysen, klare Rückmeldungspfade statt Bauchgefühl</li>
          <li><strong>Verantwortung übergeben:</strong> Spieler:innen leiten Aufwärmen, übernehmen Co-Coaching, führen Trainingsprotokolle</li>
          <li><strong>Langfristigkeit betonen:</strong> Entwicklung statt Ergebnis – Haltung, Kommunikation und Geduld statt kurzfristiger Druck</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Organisation">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Trainingsstruktur:</strong> 2–3 Einheiten/Woche à 90–105 Minuten + Zusatzmodule (Athletik, Video, Taktik)</li>
          <li><strong>Lernformate:</strong> Gruppenaufgaben, Selbstreflexion, Videoanalyse, Feedbackrunden, Spieler:innen-Input</li>
          <li><strong>Teamsteuerung:</strong> Rollenvergabe, Aufgabenverteilung, Mitverantwortung z. B. für Scouting, Warm-up, Kommunikation</li>
          <li><strong>Zielorientierung:</strong> Persönliche Ziele im Training definieren, festhalten und gemeinsam nachverfolgen</li>
          <li><strong>Spielzeitmanagement:</strong> Transparent, kommuniziert, begründet – Entwicklungsgespräche als Grundlage</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Fallstricke & Trainerfehler">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Alle trainieren gleich</strong> - Besser: Ziel- und potenzialorientiert differenzieren</li>
          <li><strong>Jetzt ist Schluss mit lustig</strong> - Leistung braucht Freude, fordern und foerdern mit Haltung statt Haerte</li>
          <li><strong>Wenn du X willst, musst du mehr</strong> - Klare Zielabsprache, Entwicklung begleiten, statt nur zu fordern</li>
          <li><strong>Ich hab das erklaert, machs</strong> - Jugendliche wollen verstehen, nicht nur gehorchen, Dialog und Geduld</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer">
        <ul className="list-disc list-inside space-y-2">
          <li>Du entwickelst die Jugendlichen zu spielerisch starken, eigenständigen Persönlichkeiten.</li>
          <li>Du gibst Struktur, forderst Eigenverantwortung und setzt gezielt Impulse zur Leistungsentwicklung.</li>
          <li>Du begleitest Identitätsbildung – mit sportlicher und pädagogischer Klarheit.</li>
          <li><strong>Ziel:</strong> Spieler:innen, die Verantwortung übernehmen, Entscheidungen reflektieren – und den nächsten Schritt gehen wollen.</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}
