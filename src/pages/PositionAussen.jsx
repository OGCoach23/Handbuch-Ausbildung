import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function PositionAussen() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">Positionsprofil: Außenspieler:in (LA / RA)</h1>

      <CollapsibleBox title="Abschnitt A – Kernrolle & Aufgabenbeschreibung">
        <p><strong>Rollenbezeichnung:</strong> Außenspieler:in</p>
        <p><strong>Spielbereiche:</strong> Angriff · Abwehr · Umschalten</p>
        <p><strong>Typische Position:</strong> LA / RA (ggf. erste Welle im Gegenstoß)</p>
        <p><strong>Spielfeldzonen:</strong> Seitenlinie, Nahwurfzone, 1. Welle, Abwehr auf Außen oder Halb</p>
        <ul className="list-disc list-inside">
          <li>Räume am Flügel nutzen: Spiel in die Breite ziehen, Tiefe durch Einläufe oder Druck über Außen erzeugen</li>
          <li>Abschlüsse aus spitzem Winkel sichern</li>
          <li>Gegenstoßwege belaufen</li>
          <li>Spiel ohne Ball aktiv gestalten</li>
          <li>Verteidigen im 1:1 und im Zusammenspiel mit Halbverteidigung</li>
          <li>Kooperation mit Rückraum und Kreis im Timing der Aktionen</li>
        </ul>
        <blockquote className="italic border-l-4 border-green-600 pl-4">
          „Außenspieler:innen müssen denken wie Sprinter, handeln wie Scharfschützen und lesen wie Spielmacher – immer bereit, in Sekundenbruchteilen zu entscheiden."
        </blockquote>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt B – Anforderungsprofil (Technik / Taktik / Athletik / Kognition / Mental)">
        <div>
          <h3 className="font-bold text-green-700 mb-2">Technik</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Stufe</th>
                <th className="border p-2">Zielentwicklung</th>
                <th className="border p-2">Methodik / Fokus</th>
                <th className="border p-2">Woran du's erkennst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">D-Jugend</td>
                <td className="border p-2">Grundlagen Sprungwurf (kurzer Anlauf, stabiler Absprung)</td>
                <td className="border p-2">Einfache Zielwürfe, Pass-Fang-Spiele, Wurf von markierter Position</td>
                <td className="border p-2">Ballannahme im Stehen, wenig Variabilität, Wurf oft flach oder überhastet</td>
              </tr>
              <tr>
                <td className="border p-2">C-Jugend</td>
                <td className="border p-2">Sprungwurf aus Bewegung, Ballannahme unter Druck</td>
                <td className="border p-2">Bewegungsabläufe, Wurf aus verschiedenen Positionen</td>
                <td className="border p-2">Flüssigere Bewegungen, bessere Ballkontrolle</td>
              </tr>
              <tr>
                <td className="border p-2">B-Jugend</td>
                <td className="border p-2">Variabler Sprungwurf, Täuschungen, Präzision</td>
                <td className="border p-2">Wurftäuschungen, variable Anläufe, Zielgenauigkeit</td>
                <td className="border p-2">Kreative Lösungen, höhere Trefferquote</td>
              </tr>
              <tr>
                <td className="border p-2">A-Jugend</td>
                <td className="border p-2">Höchstleistung, Wettkampfstabilität</td>
                <td className="border p-2">Wettkampfsimulation, Druckübungen, Perfektion</td>
                <td className="border p-2">Konstante Leistung unter Druck</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt C – Typische Herausforderungen">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Perspektive</th>
              <th className="border p-2">Herausforderung</th>
              <th className="border p-2">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Spieler:in</td>
              <td className="border p-2">„Ich bekomme im Spiel kaum den Ball."</td>
              <td className="border p-2">Positionierung zu passiv, kein Kontakt zur Spielführung</td>
            </tr>
            <tr>
              <td className="border p-2">Spieler:in</td>
              <td className="border p-2">„Ich treffe nie aus spitzem Winkel."</td>
              <td className="border p-2">Technische Unsicherheit, fehlende Wurfpräzision</td>
            </tr>
            <tr>
              <td className="border p-2">Trainer:in</td>
              <td className="border p-2">„Wie fördere ich die Aktivität?"</td>
              <td className="border p-2">Motivation und Spielverständnis entwickeln</td>
            </tr>
          </tbody>
        </table>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt D – Trainingsziele">
        <ul className="list-disc list-inside">
          <li>Verbesserung des Sprungwurfs aus spitzem Winkel</li>
          <li>Flüssige Ballannahme bei hohem Tempo</li>
          <li>Entscheidungskompetenz: Wurf oder Weiterpass?</li>
          <li>Aktive Positionierung und Spielgestaltung</li>
          <li>Koordination mit Rückraum und Kreis</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt E – Typische Spielfehler & Coachingimpulse">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Fehlerbild</th>
              <th className="border p-2">Coachingimpuls</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Wurf aus zu großer Entfernung</td>
              <td className="border p-2">Zielzone markieren, Wurflösung gemeinsam durchspielen</td>
            </tr>
            <tr>
              <td className="border p-2">Passive Positionierung</td>
              <td className="border p-2">Aktive Laufwege vorgeben, Spielverständnis fördern</td>
            </tr>
            <tr>
              <td className="border p-2">Fehlende Koordination</td>
              <td className="border p-2">Timing-Übungen, Kommunikation verbessern</td>
            </tr>
          </tbody>
        </table>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt F – Bewegungsmuster & Spielverhalten">
        <h4 className="font-bold mt-2">D-Jugend – Fokus: Orientierung & Grundbewegung</h4>
        <table className="w-full border border-gray-300 mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Bewegungsmuster</th>
              <th className="border p-2">Beschreibung & Ziel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Anlauf aus der Ecke</td>
              <td className="border p-2">gerader Lauf zur Ballannahme mit vorbereitetem Sprungwurf</td>
            </tr>
            <tr>
              <td className="border p-2">Einlaufen</td>
              <td className="border p-2">Timing mit Rückraum, Lücken erkennen und nutzen</td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-bold mt-4">C-Jugend – Fokus: Spielverständnis & Technik</h4>
        <table className="w-full border border-gray-300 mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Bewegungsmuster</th>
              <th className="border p-2">Beschreibung & Ziel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Variable Anläufe</td>
              <td className="border p-2">verschiedene Winkel und Tempi, Täuschungen einbauen</td>
            </tr>
            <tr>
              <td className="border p-2">Gegenstoß</td>
              <td className="border p-2">erste Welle, schnelle Entscheidungen</td>
            </tr>
          </tbody>
        </table>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt G – Beobachtungskriterien">
        <h4 className="font-bold mt-2">D-Jugend – Grundverhalten & Aktivität</h4>
        <table className="w-full border border-gray-300 mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Kriterium</th>
              <th className="border p-2">Was es zeigt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Hält sich an der Seitenlinie spielbereit</td>
              <td className="border p-2">Raumgefühl, Grundposition</td>
            </tr>
            <tr>
              <td className="border p-2">Reagiert auf Ballzuwürfe</td>
              <td className="border p-2">Spielverständnis, Aktivität</td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-bold mt-4">C-Jugend – Entwicklung & Verständnis</h4>
        <table className="w-full border border-gray-300 mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Kriterium</th>
              <th className="border p-2">Was es zeigt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Variiert Anläufe und Winkel</td>
              <td className="border p-2">Kreativität, Spielverständnis</td>
            </tr>
            <tr>
              <td className="border p-2">Koordiniert mit Rückraum</td>
              <td className="border p-2">Teamverständnis, Timing</td>
            </tr>
          </tbody>
        </table>
      </CollapsibleBox>
    </div>
  );
}
