import React from "react";
import AccordionItem from "../components/AccordionItem";

export default function TorwartProfil() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Positionsprofil: TORHÜTER:IN</h1>

      <AccordionItem title="Abschnitt A – Kernrolle & Aufgabenbeschreibung">
        <p><strong>Rollenbezeichnung:</strong> Torhüter:in</p>
        <p><strong>Spielbereiche:</strong> Abwehr · Umschalten · Kommunikation</p>
        <p><strong>Typische Position:</strong> Torraum · Torlinie · Aktivraum 6–9 m</p>
        <p><strong>Spielfeldzonen:</strong> Torraumverteidigung · Rückzugsorganisation · Impulsgeber:in für Gegenstoß</p>
        <ul className="list-disc ml-6">
          <li>Tor verteidigen: Würfe erkennen, antizipieren und parieren</li>
          <li>Stellungsspiel variieren: je nach Wurfzone, Abstand und Bewegung</li>
          <li>Kommunikation organisieren: Abwehr coachen, Auslösehandlungen ansagen</li>
          <li>Umschalten: Abwurf / Gegenstoß starten, Rückzugsverhalten mitsteuern</li>
          <li>Präsenz zeigen: Körpersprache, mentale Stabilität, Spiel mitgestalten</li>
          <li>Wurfmuster lesen: Trigger erkennen und Reaktionsmuster entwickeln</li>
        </ul>
        <blockquote className="mt-2 italic text-gray-600">
          „Torhüter:innen sind keine Endstation – sie sind Taktgeber. Sie sehen alles, beeinflussen alles – und machen oft den Unterschied zwischen Sieg und Niederlage."
        </blockquote>
      </AccordionItem>

      <AccordionItem title="Abschnitt B – Anforderungsprofil mit differenzierter Jugendentwicklung">
        <h3 className="font-semibold mt-4">Technik</h3>
        <table className="table-auto w-full border mt-2 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Altersstufe</th>
              <th className="border px-2 py-1">Anforderungen</th>
              <th className="border px-2 py-1">Lernziele</th>
              <th className="border px-2 py-1">Typische Lernmethoden</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">D-Jugend</td>
              <td className="border px-2 py-1">Grundstellung, einfache Abwehrbewegungen</td>
              <td className="border px-2 py-1">Hände oben, Knie leicht gebeugt, bereit für Reaktion</td>
              <td className="border px-2 py-1">Übungen mit Zielwurf, Fang- und Abwehrspiele</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">C-Jugend</td>
              <td className="border px-2 py-1">Erweiterte Abwehrtechniken, Stellungsspiel</td>
              <td className="border px-2 py-1">Aktives Stellungsspiel, Antizipation</td>
              <td className="border px-2 py-1">Situationsspiele, Reaktionsübungen</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">B-Jugend</td>
              <td className="border px-2 py-1">Komplexe Abwehrsituationen, Kommunikation</td>
              <td className="border px-2 py-1">Abwehrführung, taktische Entscheidungen</td>
              <td className="border px-2 py-1">Spielanalysen, taktische Besprechungen</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">A-Jugend</td>
              <td className="border px-2 py-1">Höchstleistung, mentale Stärke</td>
              <td className="border px-2 py-1">Wettkampfstabilität, Führungsqualitäten</td>
              <td className="border px-2 py-1">Wettkampfsimulation, mentales Training</td>
            </tr>
          </tbody>
        </table>
      </AccordionItem>

      <AccordionItem title="Abschnitt C – Typische Herausforderungen (Spieler:in & Trainer:in)">
        <table className="table-auto w-full border mt-2 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Perspektive</th>
              <th className="border px-2 py-1">Typische Herausforderung</th>
              <th className="border px-2 py-1">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Spieler:in</td>
              <td className="border px-2 py-1">„Ich weiß nie, wo ich stehen soll."</td>
              <td className="border px-2 py-1">Unsicheres Stellungsspiel – steht zu tief oder zentral</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Spieler:in</td>
              <td className="border px-2 py-1">„Ich kann die Würfe nicht lesen."</td>
              <td className="border px-2 py-1">Fehlende Antizipation, zu späte Reaktionen</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Trainer:in</td>
              <td className="border px-2 py-1">„Wie fördere ich mentale Stärke?"</td>
              <td className="border px-2 py-1">Aufbau von Selbstvertrauen und Wettkampfstabilität</td>
            </tr>
          </tbody>
        </table>
      </AccordionItem>

      <AccordionItem title="Abschnitt D – Trainingsimpulse & methodischer Aufbau">
        <h4 className="font-semibold mt-4">Fokus: Stellungsspiel</h4>
        <ul className="list-decimal ml-6">
          <li>Zonen-Startübung: Torhüter:in positioniert sich je nach Wurfzone</li>
          <li>Antizipationsübungen: Wurfmuster erkennen und vorausahnen</li>
          <li>Kommunikationsspiele: Abwehr coachen und organisieren</li>
          <li>Reaktionsübungen: Schnelle Entscheidungen unter Druck</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Abschnitt E – Typische Spielfehler & Coachingimpulse">
        <table className="table-auto w-full border mt-2 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Fehlerbild / Muster</th>
              <th className="border px-2 py-1">Coachingimpuls / Alternative Handlung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Bleibt passiv auf der Linie stehen</td>
              <td className="border px-2 py-1">→ Stellungsspiel aktiv schulen</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Reagiert zu spät auf Würfe</td>
              <td className="border px-2 py-1">→ Antizipation und Vorbereitung trainieren</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Kommuniziert nicht mit der Abwehr</td>
              <td className="border px-2 py-1">→ Kommunikationsübungen einbauen</td>
            </tr>
          </tbody>
        </table>
      </AccordionItem>

      <AccordionItem title="Abschnitt F – Bewegungsmuster & Spielverhalten">
        <ul className="list-disc ml-6">
          <li>Aktives Mitgehen bei Kreuzbewegungen</li>
          <li>Stellungsspiel je nach Wurfzone anpassen</li>
          <li>Kommunikation mit Abwehrspieler:innen</li>
          <li>Umschalten nach Ballgewinn/-verlust</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Abschnitt G – Beobachtungskriterien für Trainer:innen">
        <ul className="list-disc ml-6">
          <li>Variiert Stellungsspiel je nach Situation</li>
          <li>Gibt klare Ansagen an Abwehr</li>
          <li>Antizipiert Wurfmuster</li>
          <li>Zeigt mentale Stabilität unter Druck</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
