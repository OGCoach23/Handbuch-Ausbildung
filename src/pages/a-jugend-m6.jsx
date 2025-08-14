import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul6AJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">A-Jugend - Modul 6: Teamkultur & Kommunikation</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen entwickeln eine starke Teamkultur mit klaren Werten, offener Kommunikation und gegenseitigem Vertrauen</li>
          <li>Trainer:innen fördern eine Kultur der Eigenverantwortung, des Respekts und der kontinuierlichen Entwicklung</li>
          <li>Ziel ist die Entwicklung von starken, zusammenhaltenden Teams mit klarer Identität und gemeinsamen Zielen</li>
          <li>Teamkultur wird als Grundlage für sportlichen Erfolg und persönliche Entwicklung verstanden</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Schwerpunkte & Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Teamkultur: gemeinsame Werte, Normen, Rituale, Symbole, Identität, Stolz auf das Team</li>
          <li>Kommunikation: offener Dialog, konstruktives Feedback, aktives Zuhören, klare Botschaften</li>
          <li>Zusammenarbeit: gegenseitige Unterstützung, Vertrauen, Respekt, gemeinsame Ziele, Teamgeist</li>
          <li>Führung: verschiedene Führungsstile, Verantwortung übernehmen, andere motivieren, Vorbild sein</li>
          <li>Konfliktlösung: Konflikte konstruktiv angehen, Lösungen finden, Beziehungen stärken</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Umsetzung">
        <ul className="list-disc list-inside space-y-2">
          <li>Kulturarbeit: gemeinsame Werte definieren, Rituale entwickeln, Symbole schaffen, Identität aufbauen</li>
          <li>Kommunikationstraining: Feedback-Kultur, Gesprächstechniken, Konfliktlösung, Teamgespräche</li>
          <li>Verantwortungsübertragung: verschiedene Rollen im Team, Führungsaufgaben, Eigeninitiative</li>
          <li>Team-Events: gemeinsame Aktivitäten, Erfolge feiern, Herausforderungen meistern, Zusammenhalt stärken</li>
          <li>Reflexion: regelmäßige Teamgespräche, Feedback-Runden, Entwicklung besprechen, Ziele anpassen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Trainingsformate & Übungen">
        <ul className="list-disc list-inside space-y-2">
          <li>Team-Building: gemeinsame Herausforderungen, Vertrauensübungen, Kooperationsspiele</li>
          <li>Kommunikationstraining: Feedback-Übungen, Gesprächstechniken, Konfliktlösung</li>
          <li>Führungstraining: verschiedene Führungsrollen, Verantwortung übernehmen, andere motivieren</li>
          <li>Kulturarbeit: Werte definieren, Rituale entwickeln, Symbole schaffen, Identität aufbauen</li>
          <li>Reflexionsformate: Teamgespräche, Feedback-Runden, Entwicklung besprechen, Ziele anpassen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Herausforderungen & Lösungsansätze">
        <ul className="list-disc list-inside space-y-2">
          <li>Konflikte im Team - Konflikte als Wachstumschancen nutzen, konstruktive Lösungen finden</li>
          <li>Kommunikationsprobleme - klare Strukturen, offenen Dialog fördern, Feedback-Kultur aufbauen</li>
          <li>Fehlende Teamidentität - gemeinsame Werte definieren, Rituale entwickeln, Stolz auf das Team fördern</li>
          <li>Führungsprobleme - verschiedene Führungsstile fördern, Verantwortung übertragen, Vorbilder schaffen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du entwickelst starke, zusammenhaltende Teams mit klarer Identität und gemeinsamen Zielen.</li>
            <li>Du schaffst eine Kultur der Eigenverantwortung, des gegenseitigen Respekts und der kontinuierlichen Entwicklung.</li>
            <li>Ziel: Teams, die Herausforderungen gemeinsam meistern, sich gegenseitig unterstützen und stolz auf ihre Identität sind.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
