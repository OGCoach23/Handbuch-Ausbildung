import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function RueckraumProfil() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">Positionsprofil: Rückraumspieler:in (LR / RR)</h1>

      <CollapsibleBox title="Abschnitt A – Kernrolle & Aufgabenbeschreibung">
        <p><strong>Rollenbezeichnung:</strong> Rückraumspieler:in</p>
        <p><strong>Spielbereiche:</strong> Angriff · Abwehr · Umschalten</p>
        <p><strong>Typische Position:</strong> LR / RR (ggf. Rückzug in Abwehr)</p>
        <p><strong>Spielfeldzonen:</strong> Rückraum, Fernwurfzone, Abwehr auf Halbposition</p>
        <ul className="list-disc list-inside">
          <li>Spielaufbau und Spielsteuerung aus dem Rückraum</li>
          <li>Fernwürfe und Durchbrüche aus der zweiten Reihe</li>
          <li>Zusammenspiel mit Kreis und Außen koordinieren</li>
          <li>Tempowechsel und Rhythmuswechsel initiieren</li>
          <li>Abwehrarbeit auf Halbposition</li>
          <li>Rückzugsbewegungen und Umschaltspiel</li>
        </ul>
        <blockquote className="italic border-l-4 border-green-600 pl-4">
          „Rückraumspieler:innen sind die Dirigenten des Teams – sie haben den Überblick, setzen Impulse und entscheiden, wann das Tempo anzieht."
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
                <td className="border p-2">Grundwurf aus Stand, sicheres Passing</td>
                <td className="border p-2">Zielwurf-Spiele, Passgenauigkeit</td>
                <td className="border p-2">Sichere Ballannahme, einfache Würfe treffen</td>
              </tr>
              <tr>
                <td className="border p-2">C-Jugend</td>
                <td className="border p-2">Sprungwurf, Durchbruch mit Ball</td>
                <td className="border p-2">Wurfkraft entwickeln, 1:1-Situationen</td>
                <td className="border p-2">Druckvolle Würfe, erste Durchbrüche</td>
              </tr>
              <tr>
                <td className="border p-2">B-Jugend</td>
                <td className="border p-2">Variabel werfen, Spielsteuerung</td>
                <td className="border p-2">Taktisches Verständnis, Entscheidungstraining</td>
                <td className="border p-2">Bewusste Spielzugentscheidungen</td>
              </tr>
              <tr>
                <td className="border p-2">A-Jugend</td>
                <td className="border p-2">Spielmacherqualitäten, Führung</td>
                <td className="border p-2">Komplexe Spielzüge, Teamführung</td>
                <td className="border p-2">Eigenständige Spielsteuerung, Führung des Teams</td>
              </tr>
            </tbody>
          </table>

          <h3 className="font-bold text-green-700 mb-2 mt-4">Taktik</h3>
          <ul className="list-disc list-inside">
            <li>Spielaufbau variabel gestalten</li>
            <li>Timing für Durchbrüche und Würfe</li>
            <li>Kooperation mit allen Positionen</li>
            <li>Tempowechsel bewusst einsetzen</li>
          </ul>

          <h3 className="font-bold text-green-700 mb-2 mt-4">Athletik</h3>
          <ul className="list-disc list-inside">
            <li>Wurfkraft und Wurfgenauigkeit</li>
            <li>Schnelligkeit für Durchbrüche</li>
            <li>Ausdauer für konstante Leistung</li>
            <li>Sprungkraft für erhöhte Wurfposition</li>
          </ul>
        </div>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt C – Typische Herausforderungen">
        <ul className="list-disc list-inside">
          <li>Entscheidung zwischen Wurf und Pass</li>
          <li>Konstante Wurfleistung über das Spiel</li>
          <li>Übersicht in dynamischen Situationen</li>
          <li>Balance zwischen Risiko und Sicherheit</li>
          <li>Führung des Teams in schwierigen Phasen</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt D – Trainingsziele">
        <ul className="list-disc list-inside">
          <li>Wurfvariabilität und -präzision steigern</li>
          <li>Spielübersicht und Entscheidungsfähigkeit</li>
          <li>Zusammenspiel mit allen Positionen</li>
          <li>Tempowechsel bewusst steuern</li>
          <li>Führungsqualitäten entwickeln</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt E – Typische Spielfehler & Coachingimpulse">
        <ul className="list-disc list-inside">
          <li>Zu viel alleine machen - Besser: Mitspieler einbeziehen, Teamplay stärken</li>
          <li>Kopflose Fernwürfe - Besser: Bewusst Lücken suchen, Timing beachten</li>
          <li>Fehlende Kommunikation - Besser: Spielzüge ansagen, Team dirigieren</li>
          <li>Ungeduld bei Angriff - Besser: Geduldig Chancen erarbeiten</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt F – Bewegungsmuster & Spielverhalten">
        <ul className="list-disc list-inside">
          <li>Variable Positionierung im Rückraum</li>
          <li>Timing bei Durchbrüchen und Kreuzungen</li>
          <li>Unterstützung des Spielaufbaus</li>
          <li>Rückzugsbewegungen in die Abwehr</li>
          <li>Kombination mit Kreis- und Außenspielern</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt G – Beobachtungskriterien">
        <ul className="list-disc list-inside">
          <li>Wurfquote aus verschiedenen Positionen</li>
          <li>Qualität der Spielentscheidungen</li>
          <li>Passgenauigkeit und -timing</li>
          <li>Übersicht und Antizipation</li>
          <li>Kommunikation und Teamführung</li>
          <li>Bewegung ohne Ball</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}