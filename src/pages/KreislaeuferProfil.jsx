import React from "react";
import AccordionItem from "../components/AccordionItem";

export default function KreislaeuferProfil() {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Positionsprofil: KREIS</h1>

      <AccordionItem title="Abschnitt A – Kernrolle & Aufgabenbeschreibung">
        <p><strong>Rollenbezeichnung:</strong> Kreisläufer:in</p>
        <p><strong>Spielbereiche:</strong> Angriff · Abwehr · Umschalten</p>
        <p><strong>Typische Position:</strong> Kreis (am Sechsmeter), Sperre/Absetzen, Innenblock</p>
        <p><strong>Spielfeldzonen:</strong> Nahwurfzone im Angriff · zentrale Abwehrzone (meist Blockmitte)</p>
        <p><strong>Kernaufgaben:</strong></p>
        <ul className="list-disc ml-6">
          <li>Räume schaffen: Sperren stellen, verteidigen binden, Lücken öffnen</li>
          <li>Pässe empfangen & verwerten: Ballkontrolle unter Druck, Wurfsicherheit</li>
          <li>Abschluss aus Nahdistanz: Körpereinsatz, Täuschung, Wendigkeit</li>
          <li>Koordination mit Rückraum & Außen: Timing, Einlaufverhalten, Anschlussaktionen</li>
          <li>Abwehr organisieren: zentrale Kommunikation, Block stellen, Lücken schließen</li>
          <li>Umschalten: erste Rückzugsbewegung / Konterlauf je nach Spielanlage</li>
        </ul>
        <blockquote className="mt-4 italic text-gray-600">
          „Kreisläufer:innen sind das Fundament jeder Formation. Ihre Aktionen wirken klein – ihr Einfluss ist riesig. Wer hier mitdenkt, macht das Spiel für alle leichter."
        </blockquote>
      </AccordionItem>

      <AccordionItem title="Abschnitt B – Technik / Taktik / Athletik / Kognition / Mental-Sozial">
        <h3 className="font-semibold mt-4">Technik</h3>
        <table className="table-auto w-full border mt-2 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Altersstufe</th>
              <th className="border px-2 py-1">Anforderungen</th>
              <th className="border px-2 py-1">Lernziele</th>
              <th className="border px-2 py-1">Methodik</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">D-Jugend</td>
              <td className="border px-2 py-1">Grundposition, einfache Sperren</td>
              <td className="border px-2 py-1">Stabile Position, Ballannahme</td>
              <td className="border px-2 py-1">Positionierungsspiele, Passübungen</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">C-Jugend</td>
              <td className="border px-2 py-1">Aktive Sperren, Ballkontrolle</td>
              <td className="border px-2 py-1">Timing, Koordination</td>
              <td className="border px-2 py-1">Sperrübungen, Spielsituationen</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">B-Jugend</td>
              <td className="border px-2 py-1">Komplexe Sperren, Wurftechnik</td>
              <td className="border px-2 py-1">Präzision, Entscheidungen</td>
              <td className="border px-2 py-1">Wettkampfsimulation, Taktik</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">A-Jugend</td>
              <td className="border px-2 py-1">Höchstleistung, Führung</td>
              <td className="border px-2 py-1">Wettkampfstabilität, Verantwortung</td>
              <td className="border px-2 py-1">Druckübungen, Führungstraining</td>
            </tr>
          </tbody>
        </table>
      </AccordionItem>

      <AccordionItem title="Abschnitt C – Typische Herausforderungen">
        <p><strong>Spieler:in:</strong> „Ich bekomme nie den Ball." → Häufiges Gefühl bei Kreisspieler:innen, die sich nicht aktiv genug positionieren oder nicht mit dem Rückraum koordinieren.</p>
        <p><strong>Trainer:in:</strong> „Wie fördere ich die Aktivität?" → Kreisspieler:innen müssen lernen, sich aktiv zu positionieren und mit dem Spiel zu denken.</p>
      </AccordionItem>

      <AccordionItem title="Abschnitt D – Trainingsziele">
        <ul className="list-disc ml-6">
          <li>Räume aktiv nutzen und verändern</li>
          <li>Ballkontrolle unter Druck verbessern</li>
          <li>Koordination mit Rückraum optimieren</li>
          <li>Abwehrverhalten entwickeln</li>
          <li>Umschalten effektiv gestalten</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Abschnitt E – Typische Spielfehler & Coachingimpulse">
        <p><strong>Fehler:</strong> Steht zu statisch – bewegt sich nicht mit dem Spiel.</p>
        <p><strong>Coaching:</strong> „Der Kreis ist kein Pfosten." → Aktive Positionierung und Bewegung fördern.</p>
      </AccordionItem>

      <AccordionItem title="Abschnitt F – Bewegungsmuster & Spielverhalten">
        <h4 className="font-semibold mt-2">D-Jugend – Fokus: Orientierung & Grundpositionierung</h4>
        <p>Grundposition am Sechsmeter, einfache Sperren, Ballannahme im Stehen</p>
        
        <h4 className="font-semibold mt-4">C-Jugend – Fokus: Aktivität & Koordination</h4>
        <p>Aktive Sperren, Timing mit Rückraum, Ballkontrolle unter Druck</p>
        
        <h4 className="font-semibold mt-4">B-Jugend – Fokus: Präzision & Entscheidungen</h4>
        <p>Komplexe Sperren, Wurftechnik, taktische Entscheidungen</p>
        
        <h4 className="font-semibold mt-4">A-Jugend – Fokus: Führung & Wettkampf</h4>
        <p>Führungsqualitäten, Wettkampfstabilität, Verantwortung</p>
      </AccordionItem>

      <AccordionItem title="Abschnitt G – Beobachtungskriterien & Entwicklungsmarker">
        <h4 className="font-semibold mt-2">D-Jugend – Einstieg & Grundverständnis</h4>
        <ul className="list-disc ml-6">
          <li>Hält Grundposition am Sechsmeter</li>
          <li>Reagiert auf Ballzuwürfe</li>
          <li>Stellt einfache Sperren</li>
        </ul>
        
        <h4 className="font-semibold mt-4">C-Jugend – Entwicklung & Aktivität</h4>
        <ul className="list-disc ml-6">
          <li>Positioniert sich aktiv</li>
          <li>Koordiniert mit Rückraum</li>
          <li>Kontrolliert Ball unter Druck</li>
        </ul>
        
        <h4 className="font-semibold mt-4">B-Jugend – Verfeinerung & Taktik</h4>
        <ul className="list-disc ml-6">
          <li>Führt komplexe Sperren aus</li>
          <li>Trifft taktische Entscheidungen</li>
          <li>Zeigt Wurfpräzision</li>
        </ul>
        
        <h4 className="font-semibold mt-4">A-Jugend – Führung & Wettkampf</h4>
        <ul className="list-disc ml-6">
          <li>Übernimmt Führungsrolle</li>
          <li>Zeigt Wettkampfstabilität</li>
          <li>Verantwortet Abwehrorganisation</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
