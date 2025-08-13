import React from "react";
import AccordionItem from "../components/AccordionItem";

export default function RueckraumMitte() {
  return (
    <div className="bg-white text-black p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Positionsprofil: Rückraum – Mitte (RM)</h1>
      
      <AccordionItem title="Abschnitt A – Kernrolle & Aufgabenbeschreibung">
        <p><strong>Rollenbezeichnung:</strong> Rückraumspieler:in Mitte (RM)</p>
        <p><strong>Spielbereiche:</strong> Angriff · Abwehr · Umschalten</p>
        <p><strong>Typische Position im System:</strong> RM</p>
        <p><strong>Spielfeldzonen:</strong> zentraler Rückraum – mit Zugriff auf Tiefenräume, Breitenverlagerung und Spielgestaltung</p>
        <ul className="list-disc ml-6">
          <li>Spiel lenken und strukturieren</li>
          <li>Angriffsimpulse initiieren</li>
          <li>Mitspieler:innen führen</li>
          <li>Entscheidungen vorbereiten und treffen</li>
          <li>Spielfluss variieren</li>
          <li>In der Abwehr: Organisation der zentralen Deckung</li>
          <li>Umschalten: Rückzugsverhalten lenken</li>
        </ul>
        <blockquote className="mt-4 italic">
          „Die Rückraum Mitte ist unser Spielhirn. Hier entscheidet sich, ob wir treiben oder getrieben werden..."
        </blockquote>
      </AccordionItem>

      <AccordionItem title="Abschnitt B – Anforderungsprofil">
        <h3 className="font-bold mt-4">Technik</h3>
        <p>Tabelle mit Stufe, Zielentwicklung, Methodik / Fokus, Woran du's erkennst (D–A-Jugend)</p>
        <h3 className="font-bold mt-4">Taktik</h3>
        <p>... Tabellenstruktur analog Technik</p>
        <h3 className="font-bold mt-4">Athletik</h3>
        <p>... Tabellenstruktur analog Technik</p>
        <h3 className="font-bold mt-4">Kognition</h3>
        <p>... Tabellenstruktur analog Technik</p>
        <h3 className="font-bold mt-4">Mental / Sozial</h3>
        <p>... Tabellenstruktur analog Technik</p>
      </AccordionItem>

      <AccordionItem title="Abschnitt C – Typische Herausforderungen">
        <ul className="list-disc ml-6">
          <li>„Ich weiß nicht, wann ich das Spiel schnell machen soll – und wann nicht." → Unsicherheit im Rhythmusgefühl...</li>
          <li>„Ich verliere den Überblick, wenn alle in Bewegung sind." → Kognitive Überforderung...</li>
          <li>„Ich stoße, aber danach passiert nichts." → Anschlussaktionen fehlen...</li>
          <li>„Ich hab Angst, das Spiel zu verlangsamen." → Gefühl, nur schnell = gut...</li>
          <li>„Ich will niemanden anschreien – aber ich müsste eigentlich." → Kommunikationshemmung...</li>
          <li>„Ich weiß, was ich will – aber die anderen machen es nicht." → Frust, Isolation...</li>
          <li>„Ich erkenne oft, was möglich wäre – aber der Ball kommt nicht zu mir." → Rolle wird nicht anerkannt...</li>
          <li>„Ich kann das System auswendig – aber im Spiel funktioniert es nicht." → Starrheit unter Druck...</li>
          <li>„Ich übernehme die Führung – aber ich mache zu viel." → Übersteuerung...</li>
          <li>„Ich bin nach einem Fehler wie blockiert." → Mentale Blockade...</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Abschnitt D – Trainingsziele">
        <ul className="list-disc ml-6">
          <li>Spieltempo gezielt steuern – nicht nur beschleunigen.</li>
          <li>Trigger erkennen und bewusst auslösen.</li>
          <li>Kommunikation klar und vorausschauend führen.</li>
          <li>Verbindung zu Kreis effektiv herstellen.</li>
          <li>Rückstoß nutzen – und selbst erneut ins Spiel bringen.</li>
          <li>Taktische Spielzüge variabel anwenden.</li>
          <li>Verhalten des Gegners antizipieren.</li>
          <li>Beidseitige Spielverlagerung bewusst einsetzen.</li>
          <li>Fehlwürfe oder Ballverluste mental sofort abhaken.</li>
          <li>Stoßen mit Tiefe + Ziel.</li>
          <li>Spielverlagerungen einleiten nach Abbruch.</li>
          <li>Wurfoptionen realistisch einschätzen.</li>
          <li>Rhythmus variieren – auch ohne Ball.</li>
          <li>Mitdenken im Umschaltspiel.</li>
          <li>Teamführung in Drucksituationen.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Abschnitt E – Typische Spielfehler & Coachingimpulse">
        <ul className="list-disc ml-6">
          <li>Startet zu früh mit der Auslösehandlung...</li>
          <li>Wählt ein Spielsystem – bleibt aber dabei...</li>
          <li>Verliert nach eigenem Fehler die Präsenz...</li>
          <li>Stößt auf Tiefe – ohne Lösung oder Anschlussaktion...</li>
          <li>Spricht zu wenig – erwartet, dass andere folgen...</li>
          <li>Spielt den Ball weiter, obwohl sich eine Lücke öffnet...</li>
          <li>Übersteuert das Spiel...</li>
          <li>Bringt keinen Rhythmus ins Spiel...</li>
          <li>Lässt Trigger ungenutzt...</li>
          <li>Spielt den Ball unter Bedrängnis „irgendwohin"...</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Abschnitt F – Bewegungsmuster & Spielverhalten">
        <h4 className="font-semibold mt-2">D-Jugend</h4>
        <p>Stoß zur Mitte mit Rückpass... Pass zur Seite – Mitgehen in die Lücke...</p>
        <h4 className="font-semibold mt-2">C-Jugend</h4>
        <p>Tiefer Stoß mit bewusstem Rückstoß... Kreuz mit anschließender Sperre...</p>
        <h4 className="font-semibold mt-2">B-Jugend</h4>
        <p>Stoß mit Finte – Rückstoß mit Anschlussaktion... Doppelpass mit Kreis...</p>
        <h4 className="font-semibold mt-2">A-Jugend</h4>
        <p>Verzögerter Anlauf → provozierte Reaktion... Rhythmuswechsel innerhalb einer Aktion...</p>
      </AccordionItem>

      <AccordionItem title="Abschnitt G – Beobachtungskriterien für Trainer:innen">
        <h4 className="font-semibold mt-2">D-Jugend</h4>
        <p>Nimmt Ball aus der Bewegung auf... Bringt sich nach Ballverlust wieder ins Spiel...</p>
        <h4 className="font-semibold mt-2">C-Jugend</h4>
        <p>Steuert erste Spielrichtungen gezielt an... Kann die Position nach Systemabbruch sortieren...</p>
        <h4 className="font-semibold mt-2">B-Jugend</h4>
        <p>Erkennt Triggerpunkte... Übernimmt Verantwortung nach Fehlwürfen...</p>
        <h4 className="font-semibold mt-2">A-Jugend</h4>
        <p>Steuert das Spieltempo bewusst... Führt die Mannschaft in kritischen Situationen...</p>
      </AccordionItem>
    </div>
  );
}
