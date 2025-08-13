import React from "react";
import AccordionItem from "../components/AccordionItem";

export default function RueckraumProfil() {
  return (
    <div className="bg-white min-h-screen p-6 md:p-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Positionsprofil: RÜCKRAUM (Links/Rechts)
      </h1>

      <AccordionItem title="Abschnitt A – Kernrolle & Aufgabenbeschreibung">
        <p><strong>Rollenbezeichnung:</strong> Rückraumspieler:in (Links / Rechts)</p>
        <p><strong>Spielbereiche:</strong> Angriff · Abwehr · Umschalten</p>
        <p><strong>Typische Positionen im System:</strong> RL · RR (ggf. auch als zweite Welle in der Mitte)</p>
        <p><strong>Spielfeldzonen:</strong> Rückraum links / rechts – mit Raumzugriff zur Tiefe & Breite</p>
        <p><strong>Kernaufgaben:</strong></p>
        <ul className="list-disc pl-6">
          <li>Tiefenläufe anstoßen: Räume attackieren, Durchbrüche erzeugen, Spiel in Bewegung halten</li>
          <li>Entscheidungen treffen: 1:1, Pass, Stoßen, Rückstoßen, Rückraumschuss – je nach Situation</li>
          <li>Taktische Auslösehandlungen mitgestalten: Timing, Laufwege, Kommunikation</li>
          <li>Spielstruktur sichern: Spielgeschwindigkeit, Ballzirkulation, Umschaltverhalten</li>
          <li>In der Abwehr: Gegenspieler kontrollieren, Ballzugriff organisieren, kompakt verschieben</li>
          <li>Umschalten: Gegenstoß initiieren oder Rückzugsverhalten klug anpassen</li>
        </ul>
        <p><em>Trainerkommentar:</em> „Rückraumspieler:innen sind Taktgeber. Sie müssen lernen, zu lesen statt nur zu laufen. Ihre größte Stärke ist nicht nur Technik – sondern Timing und Entscheidung."</p>
      </AccordionItem>

      <AccordionItem title="Abschnitt B – Anforderungsprofil RL/RR">
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
              <td className="border px-2 py-1">Grundtechniken, einfache Entscheidungen</td>
              <td className="border px-2 py-1">Ballkontrolle, Passgenauigkeit</td>
              <td className="border px-2 py-1">Technikübungen, einfache Spiele</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">C-Jugend</td>
              <td className="border px-2 py-1">Erweiterte Techniken, Spielverständnis</td>
              <td className="border px-2 py-1">Timing, Entscheidungsfindung</td>
              <td className="border px-2 py-1">Situationsspiele, Taktikübungen</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">B-Jugend</td>
              <td className="border px-2 py-1">Komplexe Techniken, Führung</td>
              <td className="border px-2 py-1">Führungsqualitäten, Präzision</td>
              <td className="border px-2 py-1">Wettkampfsimulation, Führungstraining</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">A-Jugend</td>
              <td className="border px-2 py-1">Höchstleistung, Verantwortung</td>
              <td className="border px-2 py-1">Wettkampfstabilität, Teamführung</td>
              <td className="border px-2 py-1">Druckübungen, Mentaltraining</td>
            </tr>
          </tbody>
        </table>
      </AccordionItem>

      <AccordionItem title="Abschnitt C – Typische Herausforderungen">
        <p><strong>Spieler:in:</strong> „Ich weiß nicht, wann ich stoßen soll." - Unsicherheit in der Entscheidungsfindung und im Timing.</p>
        <p><strong>Trainer:in:</strong> „Wie fördere ich das Spielverständnis?" - Rückraumspieler:innen müssen lernen, das Spiel zu lesen und taktische Entscheidungen zu treffen.</p>
      </AccordionItem>

      <AccordionItem title="Abschnitt D – Trainingsziele">
        <ul className="list-disc pl-6">
          <li>Spielverständnis entwickeln</li>
          <li>Entscheidungsfindung verbessern</li>
          <li>Technische Präzision steigern</li>
          <li>Führungsqualitäten fördern</li>
          <li>Wettkampfstabilität aufbauen</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Abschnitt E – Typische Spielfehler & Coachingimpulse">
        <p><strong>Fehler:</strong> Spielt zu schnell oder zu langsam – findet nicht den richtigen Rhythmus.</p>
        <p><strong>Coaching:</strong> „Lies das Spiel, bevor du handelst." - Spielverständnis und Timing fördern.</p>
      </AccordionItem>

      <AccordionItem title="Abschnitt F – Bewegungsmuster & Spielverhalten">
        <h4 className="font-semibold mt-2">D-Jugend – Fokus: Grundlagen & Orientierung</h4>
        <p>Grundposition im Rückraum, einfache Pässe, erste Stoßversuche</p>
        
        <h4 className="font-semibold mt-4">C-Jugend – Fokus: Spielverständnis & Timing</h4>
        <p>Aktive Positionierung, Timing mit Mitspieler:innen, erweiterte Techniken</p>
        
        <h4 className="font-semibold mt-4">B-Jugend – Fokus: Führung & Präzision</h4>
        <p>Führungsrolle, präzise Techniken, taktische Entscheidungen</p>
        
        <h4 className="font-semibold mt-4">A-Jugend – Fokus: Wettkampf & Verantwortung</h4>
        <p>Wettkampfstabilität, Teamführung, Verantwortung für Spielgestaltung</p>
      </AccordionItem>

      <AccordionItem title="Abschnitt G – Beobachtungskriterien für Trainer:innen">
        <h4 className="font-semibold mt-2">D-Jugend – Grundverhalten & Technik</h4>
        <ul className="list-disc pl-6">
          <li>Hält Grundposition im Rückraum</li>
          <li>Führt einfache Pässe aus</li>
          <li>Reagiert auf Spielsituationen</li>
        </ul>
        
        <h4 className="font-semibold mt-4">C-Jugend – Entwicklung & Verständnis</h4>
        <ul className="list-disc pl-6">
          <li>Positioniert sich aktiv</li>
          <li>Zeigt Spielverständnis</li>
          <li>Trifft erste taktische Entscheidungen</li>
        </ul>
        
        <h4 className="font-semibold mt-4">B-Jugend – Führung & Präzision</h4>
        <ul className="list-disc pl-6">
          <li>Übernimmt Führungsrolle</li>
          <li>Zeigt technische Präzision</li>
          <li>Trifft taktische Entscheidungen</li>
        </ul>
        
        <h4 className="font-semibold mt-4">A-Jugend – Wettkampf & Verantwortung</h4>
        <ul className="list-disc pl-6">
          <li>Zeigt Wettkampfstabilität</li>
          <li>Führt das Team</li>
          <li>Übernimmt Verantwortung</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
