import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function Modul3BJugend() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">B-Jugend - Modul 3: Technik & Taktik</h1>
      
      <CollapsibleBox title="Zielsetzung dieses Moduls" defaultOpen={true}>
        <ul className="list-disc list-inside space-y-2">
          <li>Spieler:innen vertiefen ihre Grundtechniken und lernen, sie unter Zeit-, Raum- und Gegnerdruck stabil anzuwenden.</li>
          <li>Technik wird funktional geschult – nicht als Schönbild, sondern als Werkzeug für bessere Entscheidungen.</li>
          <li>Erste taktische Prinzipien und Handlungsregeln werden systematisch eingeführt und spielnah trainiert.</li>
          <li>Spieler:innen übernehmen Verantwortung für die Anwendung ihrer Fähigkeiten im Teamkontext.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Must-have & Nice-to-have Inhalte">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Passen:</strong> Must-have: Passarten beidseitig, unter Gegnerdruck, nach Täuschung. Nice-to-have: Sprungpass, No-look, schwächere Hand.</li>
          <li><strong>Fangen:</strong> Must-have: frontal & seitlich, in Bewegung & unter Druck. Nice-to-have: Einhand-Fang, Fang nach Abpraller.</li>
          <li><strong>Werfen:</strong> Must-have: Standwurf, Wurf aus Lauf, Zielwurf in Zonen. Nice-to-have: Sprungwurf, Täuschung + Wurf, variabler Rhythmus.</li>
          <li><strong>Prellen:</strong> Must-have: Raumgewinn, unter Zeitdruck. Nice-to-have: Rhythmuswechsel, kreatives Prellen.</li>
          <li><strong>Täuschungen:</strong> Must-have: Körpertäuschung, Richtungswechsel. Nice-to-have: Wurftäuschung, Passfinte, Täuschung aus Rücklage.</li>
          <li><strong>Abwehr:</strong> Must-have: Stellungsspiel, Körperkontakt, Arme oben. Nice-to-have: Passweg schließen, 1:1-Sperrung, Abfangen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Taktische Prinzipien & Schwerpunkte">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Kleingruppe:</strong> Stoßen – Kreuzen – Einlaufen (einfach, klar).</li>
          <li><strong>Überzahlspiel:</strong> 2:1 und 3:2 mit Entscheidungsaufgabe.</li>
          <li><strong>Umschalten:</strong> Reaktionsschnelligkeit nach Ballverlust/-gewinn.</li>
          <li><strong>Räumliche Orientierung:</strong> Spiel in Zonen.</li>
          <li><strong>Trigger verstehen:</strong> z. B. 'Ball zum Außen = Einläufer'.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Methodik & Umsetzung">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Technik = Werkzeug:</strong> Jede Technik wird mit Spielsituation verknüpft.</li>
          <li><strong>Variationen statt Drill:</strong> situative Technikaufgaben.</li>
          <li><strong>Partner-Coaching:</strong> Feedback und 1:1-Coaching.</li>
          <li><strong>Verstehen statt Vormachen:</strong> Trainer:innen stellen Fragen.</li>
          <li><strong>Gegnerdruck steigern:</strong> mehr Gegenwehr in allen Technikformen.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Spiel- und Übungsformen">
        <ul className="list-disc list-inside space-y-2">
          <li>3:3 mit Technikregel.</li>
          <li>Positionsrundlauf mit Zielaufgaben.</li>
          <li>2:2 nach Einlaufen – Rückpass oder Abschluss?</li>
          <li>Technikparcours mit Stationen.</li>
          <li>Trigger-Training: Ball zu Außen = Einläufer.</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Ergebnis für den Trainer">
        <ul className="list-disc list-inside space-y-2">
          <li>Du entwickelst keine Technikroboter – du entwickelst handlungsfähige Spieler:innen.</li>
          <li>Technik als Werkzeug begreifen – gezielt im Spiel einsetzen.</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}
