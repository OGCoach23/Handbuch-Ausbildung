import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul5AJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">A-Jugend - Modul 5: Spielsysteme & Positionsspiel</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen verstehen und beherrschen komplexe Spielsysteme und Positionsprofile auf höchstem Niveau</li>
          <li>Trainer:innen fördern taktische Intelligenz und positionsspezifische Kompetenzen systematisch</li>
          <li>Ziel ist die Entwicklung von spielintelligenten, positionsflexiblen und systemkompetenten Spieler:innen</li>
          <li>Spielsysteme werden als flexible Rahmen verstanden – nicht als starre Schemata</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Schwerpunkte & Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li>Spielsysteme: 5:1, 6:0, 3:2:1, variable Abwehrformationen, Umschaltspiel, Gegenstoß</li>
          <li>Positionsprofile: spezifische Anforderungen, Rollenverständnis, Entscheidungsverhalten, Kommunikation</li>
          <li>Taktische Intelligenz: Spielsituationen lesen, Antizipation, Entscheidungsqualität, Anpassungsfähigkeit</li>
          <li>Systemflexibilität: zwischen verschiedenen Formationen wechseln, situativ reagieren, kreativ agieren</li>
          <li>Kollektive Intelligenz: Teamverhalten, Zusammenspiel, Kommunikation, gemeinsame Lösungen entwickeln</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Umsetzung">
        <ul className="list-disc list-inside space-y-2">
          <li>Systematischer Aufbau: von einfachen Grundprinzipien zu komplexen Spielsystemen</li>
          <li>Positionsspezifisches Training: individuelle Förderung innerhalb kollektiver Strukturen</li>
          <li>Situationsanalyse: Videoanalyse, Spielbeobachtung, taktische Besprechungen, Feedback</li>
          <li>Variationsprinzip: gleiche Prinzipien in verschiedenen Kontexten, Anpassungsfähigkeit fördern</li>
          <li>Entscheidungstraining: Spielsituationen simulieren, Entscheidungsdruck aufbauen, Reflexion</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Trainingsformate & Spielformen">
        <ul className="list-disc list-inside space-y-2">
          <li>Systemtraining: spezifische Abwehr- und Angriffsformationen, Umschaltspiel, Gegenstoß</li>
          <li>Positionsspezifische Übungen: individuelle Technik und Taktik, Rollenverständnis</li>
          <li>Taktische Spiele: 5:5 mit spezifischen Regeln, Situationsspiele, Entscheidungstraining</li>
          <li>Videoanalyse: Spielsituationen analysieren, taktische Entscheidungen reflektieren, Verbesserungen identifizieren</li>
          <li>Spielsimulation: Wettkampfsituationen nachstellen, Druck aufbauen, Anpassungsfähigkeit testen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Typische Herausforderungen & Lösungsansätze">
        <ul className="list-disc list-inside space-y-2">
          <li>Systemkomplexität - schrittweise aufbauen, Grundprinzipien verstehen, dann erweitern</li>
          <li>Positionsfixierung - Flexibilität fördern, verschiedene Rollen ausprobieren, Anpassungsfähigkeit entwickeln</li>
          <li>Taktische Rigidität - Kreativität fördern, Spielsituationen lesen, flexible Lösungen entwickeln</li>
          <li>Kommunikationsprobleme - klare Strukturen, Verantwortlichkeiten definieren, Feedback-Kultur</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer" defaultOpen={false}>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Du entwickelst spielintelligente, positionsflexible und systemkompetente Spieler:innen.</li>
            <li>Du schaffst eine Kultur der taktischen Intelligenz, der Anpassungsfähigkeit und der kollektiven Problemlösung.</li>
            <li>Ziel: Spieler:innen, die komplexe Spielsysteme verstehen, positionsflexibel agieren und taktisch intelligent entscheiden.</li>
          </ul>
        </div>
      </CollapsibleBox>
    </div>
  );
}
