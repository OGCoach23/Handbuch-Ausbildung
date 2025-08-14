import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul4AJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">A-Jugend - Modul 4: Mentale & soziale Entwicklung</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen entwickeln mentale Stärke und soziale Kompetenz als Grundlage für Leistung und Persönlichkeitsentwicklung</li>
          <li>Trainer:innen fördern Selbstreflexion, Eigenverantwortung und Teamfähigkeit systematisch</li>
          <li>Ziel ist die Entwicklung von resilienten, selbstbewussten und teamorientierten Persönlichkeiten</li>
          <li>Mentale und soziale Fähigkeiten werden als trainierbare Kompetenzen begriffen – nicht als angeborene Talente</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Schwerpunkte & Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Mentale Stärke: Umgang mit Druck, Frustrationstoleranz, Zielorientierung, Selbstmotivation, Konzentration</li>
          <li>Soziale Kompetenz: Kommunikation, Konfliktlösung, Empathie, Teamverantwortung, Führungsqualitäten</li>
          <li>Selbstreflexion: Bewusstsein für eigene Stärken/Schwächen, Lernprozesse reflektieren, Feedback verarbeiten</li>
          <li>Eigenverantwortung: Entscheidungen treffen, Konsequenzen tragen, Initiative ergreifen, Verantwortung übernehmen</li>
          <li>Teamfähigkeit: Rollen im Team verstehen, andere unterstützen, gemeinsame Ziele verfolgen, Konflikte konstruktiv lösen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Umsetzung">
        <ul className="list-disc list-inside space-y-2">
          <li>Strukturierte Reflexionsformate: regelmäßige Feedbackrunden, Selbstbewertung, Zielsetzungsgespräche</li>
          <li>Verantwortungsübertragung: Spieler:innen leiten Trainingseinheiten, übernehmen Coaching-Aufgaben, organisieren Events</li>
          <li>Konfliktlösungstraining: Rollenspiele, Mediation, Kommunikationstechniken, Perspektivwechsel</li>
          <li>Mentale Übungen: Visualisierung, Atemtechniken, Fokusübungen, Entspannungsmethoden</li>
          <li>Teamaufgaben: gemeinsame Projekte, Herausforderungen meistern, Erfolge feiern, Rückschläge bewältigen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Trainingsformate & Übungen">
        <ul className="list-disc list-inside space-y-2">
          <li>'Leadership-Rotation': Spieler:innen übernehmen wöchentlich verschiedene Führungsrollen im Training</li>
          <li>Reflexionsrunden: strukturierte Gespräche über Erfolge, Herausforderungen und Lernziele</li>
          <li>Team-Challenges: gemeinsame Aufgaben, die mentale Stärke und Zusammenarbeit erfordern</li>
          <li>Feedback-Kultur: konstruktive Rückmeldung geben und empfangen, Wachstumsorientierung</li>
          <li>Mentale Vorbereitung: Routinen vor Spielen, Umgang mit Nervosität, Fokus-Techniken</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Herausforderungen & Lösungsansätze">
        <ul className="list-disc list-inside space-y-2">
          <li>Leistungsdruck - Druck als Herausforderung begreifen, Bewältigungsstrategien entwickeln</li>
          <li>Konflikte im Team - Konflikte als Wachstumschancen nutzen, konstruktive Lösungen finden</li>
          <li>Motivationsschwankungen - intrinsische Motivation fördern, persönliche Ziele entwickeln</li>
          <li>Kommunikationsprobleme - klare Kommunikationsregeln, aktives Zuhören, Feedback-Kultur</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du entwickelst nicht nur sportlich starke, sondern auch mental und sozial kompetente Persönlichkeiten.</li>
            <li>Du schaffst eine Kultur der Eigenverantwortung, des gegenseitigen Respekts und der kontinuierlichen Entwicklung.</li>
            <li>Ziel: Spieler:innen, die Herausforderungen meistern, im Team funktionieren und ihre Persönlichkeit weiterentwickeln.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
