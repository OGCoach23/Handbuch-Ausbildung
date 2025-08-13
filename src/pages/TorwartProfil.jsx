import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function TorwartProfil() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-green-700">Positionsprofil: Torhüter:in</h1>

      <CollapsibleBox title="Abschnitt A – Kernrolle & Aufgabenbeschreibung">
        <p><strong>Rollenbezeichnung:</strong> Torhüter:in</p>
        <p><strong>Spielbereiche:</strong> Abwehr · Umschalten · Kommunikation</p>
        <p><strong>Typische Position:</strong> Torraum · Torlinie · Aktivraum 6–9 m</p>
        <p><strong>Spielfeldzonen:</strong> Torraumverteidigung · Rückzugsorganisation · Impulsgeber:in für Gegenstoß</p>
        <ul className="list-disc list-inside">
          <li>Tor verteidigen: Würfe erkennen, antizipieren und parieren</li>
          <li>Stellungsspiel variieren: je nach Wurfzone, Abstand und Bewegung</li>
          <li>Kommunikation organisieren: Abwehr coachen, Auslösehandlungen ansagen</li>
          <li>Umschalten: Abwurf / Gegenstoß starten, Rückzugsverhalten mitsteuern</li>
          <li>Präsenz zeigen: Körpersprache, mentale Stabilität, Spiel mitgestalten</li>
          <li>Wurfmuster lesen: Trigger erkennen und Reaktionsmuster entwickeln</li>
        </ul>
        <blockquote className="italic border-l-4 border-green-600 pl-4">
          „Torhüter:innen sind keine Endstation – sie sind Taktgeber. Sie sehen alles, beeinflussen alles – und machen oft den Unterschied zwischen Sieg und Niederlage."
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
                <td className="border p-2">E-Jugend</td>
                <td className="border p-2">Grundstellung, Ballgefühl, einfache Würfe abwehren</td>
                <td className="border p-2">Spielformen mit vielen Bällen, Mut entwickeln</td>
                <td className="border p-2">Kind hat Spaß im Tor, bewegt sich zum Ball</td>
              </tr>
              <tr>
                <td className="border p-2">D-Jugend</td>
                <td className="border p-2">Stellungsspiel, Grundtechniken Parade</td>
                <td className="border p-2">Stellungskorrektur, einfache Wurfspiele</td>
                <td className="border p-2">Bewusste Stellungsnahme, erste Antizipation</td>
              </tr>
              <tr>
                <td className="border p-2">C-Jugend</td>
                <td className="border p-2">Wurfarten unterscheiden, Abpraller verwerten</td>
                <td className="border p-2">Spezifisches Training, Videoanalyse</td>
                <td className="border p-2">Reaktionen werden spezifischer und kontrollierter</td>
              </tr>
              <tr>
                <td className="border p-2">B-Jugend</td>
                <td className="border p-2">Komplexe Parade-Techniken, Tempogegenstoß einleiten</td>
                <td className="border p-2">Wettkampfnahe Situationen, Drucktraining</td>
                <td className="border p-2">Stabilität unter Druck, sichere Abwürfe</td>
              </tr>
              <tr>
                <td className="border p-2">A-Jugend</td>
                <td className="border p-2">Individueller Stil, Spielsteuerung</td>
                <td className="border p-2">Selbstanalyse, Führungsqualitäten entwickeln</td>
                <td className="border p-2">Eigenständige Entscheidungen, Team-Kommunikation</td>
              </tr>
            </tbody>
          </table>

          <h3 className="font-bold text-green-700 mb-2 mt-4">Taktik</h3>
          <ul className="list-disc list-inside">
            <li>Stellungsspiel situativ anpassen</li>
            <li>Kommunikation mit Abwehr koordinieren</li>
            <li>Gegenstoß-Timing optimieren</li>
            <li>Wurfanalyse und Antizipation</li>
          </ul>

          <h3 className="font-bold text-green-700 mb-2 mt-4">Athletik</h3>
          <ul className="list-disc list-inside">
            <li>Explosivkraft für schnelle Reaktionen</li>
            <li>Flexibilität und Beweglichkeit</li>
            <li>Koordination und Balance</li>
            <li>Ausdauer für konstante Leistung</li>
          </ul>
        </div>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt C – Typische Herausforderungen">
        <ul className="list-disc list-inside">
          <li>Druck in entscheidenden Situationen</li>
          <li>Konstanz über 60 Minuten halten</li>
          <li>Kommunikation mit wechselnder Abwehr</li>
          <li>Schnelle Entscheidungen bei Gegenstößen</li>
          <li>Mentale Stärke nach Gegentoren</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt D – Trainingsziele">
        <ul className="list-disc list-inside">
          <li>Parade-Techniken perfektionieren</li>
          <li>Stellungsspiel automatisieren</li>
          <li>Kommunikationsfähigkeiten stärken</li>
          <li>Gegenstoß-Timing verbessern</li>
          <li>Mentale Widerstandsfähigkeit entwickeln</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt E – Typische Spielfehler & Coachingimpulse">
        <ul className="list-disc list-inside">
          <li>Zu früh aus dem Tor kommen - Besser: Geduld bewahren, Stellungsspiel nutzen</li>
          <li>Fehlende Kommunikation - Besser: Kontinuierlich mit Abwehr sprechen</li>
          <li>Hektische Abwürfe - Besser: Ruhe bewahren, bewusst den Gegenstoß starten</li>
          <li>Nach Gegentor frustriert - Besser: Schnell refokussieren, nächste Situation</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt F – Bewegungsmuster & Spielverhalten">
        <ul className="list-disc list-inside">
          <li>Dynamisches Stellungsspiel je nach Angriffssituation</li>
          <li>Schnelle Reaktionen auf Wurffinten</li>
          <li>Koordinierte Bewegungen bei Kreuzbällen</li>
          <li>Aktive Rolle bei Standard-Situationen</li>
          <li>Führung der Abwehr durch Zurufe und Positionierung</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt G – Beobachtungskriterien">
        <ul className="list-disc list-inside">
          <li>Parade-Quote bei verschiedenen Wurfarten</li>
          <li>Qualität der Kommunikation mit Abwehr</li>
          <li>Erfolgsrate bei Gegenstoß-Einleitungen</li>
          <li>Stellungsspiel-Disziplin über das Spiel</li>
          <li>Mentale Stabilität in Drucksituationen</li>
          <li>Führungsqualitäten und Teamintegration</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}