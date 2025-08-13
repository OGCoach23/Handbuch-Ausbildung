import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function RueckraumMitte() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">Positionsprofil: Rückraum Mitte (RM)</h1>

      <CollapsibleBox title="Abschnitt A – Kernrolle & Aufgabenbeschreibung">
        <p><strong>Rollenbezeichnung:</strong> Rückraum Mitte</p>
        <p><strong>Spielbereiche:</strong> Angriff · Spielaufbau · Umschalten</p>
        <p><strong>Typische Position:</strong> RM (zentrale Rückraumposition)</p>
        <p><strong>Spielfeldzonen:</strong> Zentrale Achse, Spielaufbau, Fernwurfzone</p>
        <ul className="list-disc list-inside">
          <li>Spielaufbau und Spielsteuerung aus zentraler Position</li>
          <li>Verteilung und Timing der Angriffe</li>
          <li>Fernwürfe aus der Spielmacherposition</li>
          <li>Tempowechsel und Rhythmussteuerung</li>
          <li>Kommunikation und Teamführung</li>
          <li>Verbindung zwischen allen Angriffspositionen</li>
        </ul>
        <blockquote className="italic border-l-4 border-green-600 pl-4">
          „Der Rückraum Mitte ist der Architekt des Spiels – hier laufen alle Fäden zusammen, von hier aus wird dirigiert und entschieden."
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
                <td className="border p-2">Sicheres Passing, Übersicht entwickeln</td>
                <td className="border p-2">Passspiele, einfache Spielzüge</td>
                <td className="border p-2">Findet offene Mitspieler, sichere Ballführung</td>
              </tr>
              <tr>
                <td className="border p-2">C-Jugend</td>
                <td className="border p-2">Erste Spielsteuerung, Fernwurf entwickeln</td>
                <td className="border p-2">Entscheidungstraining, Wurfkraft aufbauen</td>
                <td className="border p-2">Bewusste Spielzugentscheidungen</td>
              </tr>
              <tr>
                <td className="border p-2">B-Jugend</td>
                <td className="border p-2">Komplexe Spielsteuerung, Führungsqualitäten</td>
                <td className="border p-2">Taktiktraining, Kommunikationsschulung</td>
                <td className="border p-2">Eigenständige Spielorganisation</td>
              </tr>
              <tr>
                <td className="border p-2">A-Jugend</td>
                <td className="border p-2">Spielmacher-Rolle, Teamführung</td>
                <td className="border p-2">Wettkampfanalyse, Führungstraining</td>
                <td className="border p-2">Vollständige Teamführung und Spielsteuerung</td>
              </tr>
            </tbody>
          </table>

          <h3 className="font-bold text-green-700 mb-2 mt-4">Taktik</h3>
          <ul className="list-disc list-inside">
            <li>Spielaufbau variabel gestalten</li>
            <li>Übersicht und Antizipation</li>
            <li>Tempowechsel strategisch einsetzen</li>
            <li>Spielzug-Auswahl und -Timing</li>
          </ul>

          <h3 className="font-bold text-green-700 mb-2 mt-4">Athletik</h3>
          <ul className="list-disc list-inside">
            <li>Ausdauer für 60 Minuten Aktivität</li>
            <li>Wurfkraft für druckvolle Fernwürfe</li>
            <li>Schnelligkeit in Tempogegenstößen</li>
            <li>Koordination für komplexe Bewegungen</li>
          </ul>
        </div>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt C – Typische Herausforderungen">
        <ul className="list-disc list-inside">
          <li>Konstante Übersicht in hektischen Phasen</li>
          <li>Balance zwischen eigenem Abschluss und Assist</li>
          <li>Teamführung in kritischen Situationen</li>
          <li>Tempowechsel zur richtigen Zeit</li>
          <li>Kommunikation unter Druck</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt D – Trainingsziele">
        <ul className="list-disc list-inside">
          <li>Spielübersicht und Antizipation stärken</li>
          <li>Passgenauigkeit und -timing perfektionieren</li>
          <li>Fernwurf-Qualität und -Konstanz</li>
          <li>Kommunikationsfähigkeiten ausbauen</li>
          <li>Führungsqualitäten entwickeln</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt E – Typische Spielfehler & Coachingimpulse">
        <ul className="list-disc list-inside">
          <li>Zu kompliziert spielen - Besser: Einfache Lösungen finden, Effizienz steigern</li>
          <li>Fehlende Kommunikation - Besser: Kontinuierlich mit Team sprechen, Ansagen machen</li>
          <li>Ungeduld im Spielaufbau - Besser: Ruhe bewahren, Chancen geduldig erarbeiten</li>
          <li>Immer selbst abschließen - Besser: Mitspieler in bessere Position bringen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt F – Bewegungsmuster & Spielverhalten">
        <ul className="list-disc list-inside">
          <li>Zentrale Position als Spielverteiler</li>
          <li>Variable Positionierung je nach Spielzug</li>
          <li>Timing bei Tempowechseln</li>
          <li>Unterstützung aller Angriffspositionen</li>
          <li>Rückzug und Umschaltverhalten</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt G – Beobachtungskriterien">
        <ul className="list-disc list-inside">
          <li>Passgenauigkeit und Assist-Rate</li>
          <li>Qualität der Spielentscheidungen</li>
          <li>Fernwurf-Quote und -Timing</li>
          <li>Kommunikation und Teamführung</li>
          <li>Übersicht und Antizipation</li>
          <li>Tempowechsel-Effektivität</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}