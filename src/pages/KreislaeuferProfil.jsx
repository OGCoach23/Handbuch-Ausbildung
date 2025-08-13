import React from "react";
import CollapsibleBox from "../components/CollapsibleBox";

export default function KreislaeuferProfil() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-green-700">Positionsprofil: Kreisläufer:in (KM)</h1>

      <CollapsibleBox title="Abschnitt A – Kernrolle & Aufgabenbeschreibung">
        <p><strong>Rollenbezeichnung:</strong> Kreisläufer:in</p>
        <p><strong>Spielbereiche:</strong> Angriff · Abwehr · Umschalten</p>
        <p><strong>Typische Position:</strong> KM (ggf. Abwehr innen)</p>
        <p><strong>Spielfeldzonen:</strong> 6-Meter-Raum, Nahwurfbereich, Zentrale Abwehr</p>
        <ul className="list-disc list-inside">
          <li>Zentrale Anspielstation im 6-Meter-Raum</li>
          <li>Abschlüsse aus kurzer Distanz sichern</li>
          <li>Störaktionen in der gegnerischen Abwehr</li>
          <li>Abpraller und zweite Bälle verwerten</li>
          <li>Zentrale Abwehrarbeit</li>
          <li>Blockaktionen und Stellungsspiel</li>
        </ul>
        <blockquote className="italic border-l-4 border-green-600 pl-4">
          „Kreisläufer:innen sind das Herz der Offensive – sie schaffen Raum, nutzen kleinste Lücken und verwandeln jede Chance in Tore."
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
                <td className="border p-2">Ballannahme im Gedränge, einfache Abschlüsse</td>
                <td className="border p-2">Nahwurfspiele, Mut im Gewühl entwickeln</td>
                <td className="border p-2">Traut sich in den 6m-Raum, nimmt Kontakt auf</td>
              </tr>
              <tr>
                <td className="border p-2">C-Jugend</td>
                <td className="border p-2">Sperren setzen, Position halten</td>
                <td className="border p-2">Körpereinsatz lernen, Stellungsspiel</td>
                <td className="border p-2">Bewusste Sperrarbeit, bessere Orientierung</td>
              </tr>
              <tr>
                <td className="border p-2">B-Jugend</td>
                <td className="border p-2">Kreuzungsläufe, variable Abschlüsse</td>
                <td className="border p-2">Komplexe Bewegungsmuster, Timing</td>
                <td className="border p-2">Flüssige Läufe, sichere Abschlüsse unter Druck</td>
              </tr>
              <tr>
                <td className="border p-2">A-Jugend</td>
                <td className="border p-2">Komplette Kreisläufer-Palette, Abwehrorganisation</td>
                <td className="border p-2">Wettkampfspezifisches Training, Zweikampfstärke</td>
                <td className="border p-2">Eigenständige Entscheidungen, Führung in der Abwehr</td>
              </tr>
            </tbody>
          </table>

          <h3 className="font-bold text-green-700 mb-2 mt-4">Taktik</h3>
          <ul className="list-disc list-inside">
            <li>Optimale Positionierung im 6m-Raum</li>
            <li>Timing bei Kreuzungen und Läufen</li>
            <li>Spielübersicht für Abpraller</li>
            <li>Abwehrverhalten im Zentrum</li>
          </ul>

          <h3 className="font-bold text-green-700 mb-2 mt-4">Athletik</h3>
          <ul className="list-disc list-inside">
            <li>Körperstabilität und Kraft</li>
            <li>Schnelligkeit auf kurzen Wegen</li>
            <li>Sprungkraft für erhöhte Abschlüsse</li>
            <li>Ausdauer für konstante Intensität</li>
          </ul>
        </div>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt C – Typische Herausforderungen">
        <ul className="list-disc list-inside">
          <li>Zweikämpfe unter dem Korb bestehen</li>
          <li>Schnelle Orientierung im Gedränge</li>
          <li>Timing bei Anspielen optimieren</li>
          <li>Balance zwischen Störung und Regelwerk</li>
          <li>Physische Belastung über 60 Minuten</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt D – Trainingsziele">
        <ul className="list-disc list-inside">
          <li>Abschlusssicherheit aus allen Positionen</li>
          <li>Kreuzungsläufe und Timing perfektionieren</li>
          <li>Körpereinsatz und Zweikampfstärke</li>
          <li>Spielübersicht für Abpraller entwickeln</li>
          <li>Abwehrverhalten im Zentrum stärken</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt E – Typische Spielfehler & Coachingimpulse">
        <ul className="list-disc list-inside">
          <li>Zu statisch im Kreis - Besser: Kontinuierlich bewegen, Lücken suchen</li>
          <li>Abpraller nicht antizipieren - Besser: Wurfrichtung lesen, Position nehmen</li>
          <li>Regelwidrige Aktionen - Besser: Clever stören, Regelwerk beachten</li>
          <li>Fehlende Kommunikation - Besser: Abwehr organisieren, Kommandos geben</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt F – Bewegungsmuster & Spielverhalten">
        <ul className="list-disc list-inside">
          <li>Dynamische Positionierung im 6m-Raum</li>
          <li>Kreuzungsläufe mit Timing</li>
          <li>Abpraller-Antizipation und -Verwertung</li>
          <li>Sperrarbeit für Mitspieler</li>
          <li>Zentrale Abwehrorganisation</li>
        </ul>
      </CollapsibleBox>

      <CollapsibleBox title="Abschnitt G – Beobachtungskriterien">
        <ul className="list-disc list-inside">
          <li>Abschlussquote aus verschiedenen Positionen</li>
          <li>Erfolg bei Abpraller-Verwertung</li>
          <li>Qualität der Sperrarbeit</li>
          <li>Positionsdisziplin in der Abwehr</li>
          <li>Zweikampfstärke und Körpereinsatz</li>
          <li>Kommunikation und Führung</li>
        </ul>
      </CollapsibleBox>
    </div>
  );
}