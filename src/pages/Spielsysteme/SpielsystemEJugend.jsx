import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemEJugend() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-6 py-12 space-y-8"
    >
      {/* Navigation */}
      <motion.div
        variants={fadeInVariants}
        className="flex items-center text-green-600 mb-8"
      >
        <Link to="/spielsysteme-uebersicht" className="hover:text-green-700 transition-colors">
          Abwehrsysteme
        </Link>
        <ChevronRight className="w-5 h-5 mx-2" />
        <span className="text-gray-600">E-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          E-Jugend – Manndeckung
        </h1>
      </motion.div>

      {/* Collapsible Content Sections */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <CollapsibleBox title="Abschnitt A: Systemübersicht & Ausbildungsrahmen">
          <div className="space-y-4">
            <ul className="space-y-2 text-gray-700">
              <li>● Systemname: Manndeckung über das ganze Feld</li>
              <li>● Einsatzdauer: E-Jugend (2 Jahre verbindlich)</li>
            </ul>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Ziel des Systems:</h4>
              <p className="text-gray-700">
                Aufbau der Raumorientierung, Förderung von Eigenverantwortung und Aufmerksamkeit. Jeder übernimmt Verantwortung für einen Gegenspielerin.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Spielnahe Bedeutung:</h4>
              <p className="text-gray-700">
                Kinder lernen: "Ich bin zuständig – ich muss mitdenken!"<br />
                Aufmerksamkeit, Körpereinsatz und Reaktion werden geschult.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Verbindung zur nächsten Stufe (D-Jugend – 1:5):</h4>
              <p className="text-gray-700">
                Wer Manndeckung verstanden hat, kann später Räume besser sichern. Das ständige "Mitlaufen" wird zur Basis für ballorientiertes Verschieben.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt B: Taktische Prinzipien & Ausbildungsschwerpunkte">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Grundprinzipien:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Jede:r deckt eine:n</li>
                <li>Orientierung am Gegenspieler, nicht am Ball</li>
                <li>Immer zwischen Ball und Tor stehen</li>
                <li>Immer in Bewegung bleiben</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Altersangepasste Schwerpunkte:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Orientierung im Raum</li>
                <li>– Laufbereitschaft, Wachheit</li>
                <li>– Erste 1:1-Situationen verteidigen lernen</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Taktische Lernziele:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Gegner nicht aus den Augen verlieren</li>
                <li>– Ball und Gegner gleichzeitig wahrnehmen lernen</li>
                <li>– Umschaltverhalten (z. B. nach Ballverlust direkt reagieren)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Teamtaktik vs. Individualtaktik:</h4>
              <p className="text-gray-700">
                Fokus liegt auf der Individualtaktik (1:1-Verhalten). Teamtaktik wird nur durch den gemeinsamen Rahmen (alle decken eine:n) angedeutet.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt C: Positionsprofil (altersgerecht)">
          <div className="space-y-4">
            <p className="text-gray-700">
              Da alle Kinder gleichberechtigt decken, ist das Rollenverständnis bewusst einfach gehalten.
            </p>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Hauptaufgaben:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Meine:n Gegenspieler:in erkennen, ansprechen, begleiten</li>
                <li>– Immer zwischen Tor und Gegenspieler:in stehen</li>
                <li>– Laufwege mitgehen, Wurfversuche behindern</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Bewegungsbereich / Absprachen:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Über das ganze Feld, mit Blick zur eigenen Torseite</li>
                <li>– Orientierung im 1:1, ohne Hilfe Dritter</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Kooperationspartner:</h4>
              <p className="text-gray-700">
                – Noch nicht im Fokus. Kinder sollen lernen, selbst zu decken
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Besondere Anforderungen:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Hohe Laufbereitschaft</li>
                <li>– Mut zur Nähe & zum Zweikampf</li>
                <li>– Konzentration über längere Spielphasen</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt D: Methodik & Trainingseinführung">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Didaktische Einführung:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Jeder bekommt einen „Schlüsselspieler"</li>
                <li>– Übungen mit Namenszuordnung („Du hast Lara")</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Methodische Reihen:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Fangspiele mit Zielperson</li>
                <li>1:1 im Feld mit klarer Zuteilung</li>
                <li>Spielformen: „Wer ist dein Gegenspieler?"</li>
                <li>2:2, 3:3 mit freiem Feld</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Beispielhafte Spielformen:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– „Schattenspiel" (mitgehen, ohne Körperkontakt)</li>
                <li>– „Rettungsinsel" (Gegner darf Insel nicht erreichen)</li>
                <li>– 1:1-Reaktionsstaffel</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Rotationsprinzipien im Training:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Alle decken mal kleine/schnelle/große/langsame Spieler:innen</li>
                <li>– Ziel: nicht nur „Lieblingsgegner" suchen</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt E: Typische Fehlerbilder & Coaching-Ansätze">
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-500 text-white">
                    <th className="border border-gray-300 p-3 text-left">Fehlerbild</th>
                    <th className="border border-gray-300 p-3 text-left">Coaching-Impuls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Schaut nur auf Ball, verliert Gegner</td>
                    <td className="border border-gray-300 p-3">„Ball und Spieler gleichzeitig sehen – wie ein Chamäleon!"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Bleibt stehen, wenn Ball auf anderer Seite ist</td>
                    <td className="border border-gray-300 p-3">„Du bist immer wach – auch wenn der Ball woanders ist."</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Steht neben dem Gegner, nicht zwischen Tor und Gegner</td>
                    <td className="border border-gray-300 p-3">„Du bist das Tor – stell dich dazwischen!"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Lässt sich abschütteln durch plötzliche Richtungswechsel</td>
                    <td className="border border-gray-300 p-3">„Knie weich, bleib dran, du bist ein Schatten!"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Wechselt unkontrolliert den Gegenspieler</td>
                    <td className="border border-gray-300 p-3">„Deiner bleibt deiner – du bist der/die Bodyguard."</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt F: Entwicklung & Anschlussfähigkeit">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Was soll am Ende „sitzen"?</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Jede:r kennt das Prinzip 1:1-Verantwortung</li>
                <li>– Laufbereitschaft ist selbstverständlich</li>
                <li>– Spieler:innen verstehen, wie man sich zwischen Tor & Gegner positioniert</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Was wird vorbereitet?</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Verständnis für Verschieben</li>
                <li>– Wahrnehmung von Ball- und Gegenspielerbewegung</li>
                <li>– Grundhaltung „ich bin zuständig"</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Übertragbarkeit in die D-Jugend:</h4>
              <p className="text-gray-700">
                Wer aktiv decken kann, kann auch Raum verteidigen – die Bewegung in der Manndeckung ist der Ausgangspunkt für jede Raumdeckung.
              </p>
            </div>
          </div>
        </CollapsibleBox>
      </motion.div>

      {/* Navigation to next system */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <Link
          to="/spielsystem-d-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Nächstes System: D-Jugend (1:5-Deckung)
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
