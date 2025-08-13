import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemBJugend() {
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
        <span className="text-gray-600">B-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          B-Jugend – 5:1-Deckung
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
              <li>● Systemname: 5:1-Deckung (fünf in der Linie + eine aktive Spitze)</li>
              <li>● Einsatzdauer: B-Jugend (2 Jahre verbindlich)</li>
            </ul>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Ziel des Systems:</h4>
              <p className="text-gray-700">
                Aufbau taktischer Flexibilität und Spielintelligenz: Spieler:innen lernen, Gegner zu lenken, Räume zu provozieren und im Team zu entscheiden, wann sie Druck machen oder sichern.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Spielnahe Bedeutung:</h4>
              <p className="text-gray-700">
                Die 5:1 verbindet Raumdeckung mit Störelementen. Sie verlangt mehr Verantwortung von der Spitze, mehr Abstimmung in der Linie – und bietet viele Varianten.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Verbindung zur nächsten Stufe (A-Jugend – 6:0 offensiv):</h4>
              <p className="text-gray-700">
                Die 5:1 fördert das Timing für Heraustreten & Rückfallen – zentrale Fähigkeiten für die variable 6:0 im Hochleistungsbereich.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt B: Taktische Prinzipien & Ausbildungsschwerpunkte">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Grundprinzipien:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Spitze agiert aktiv gegen den Ballfluss</li>
                <li>5er-Kette verschiebt ballorientiert kompakt</li>
                <li>Hinter der Spitze wird abgesichert – kein blinder Raum</li>
                <li>Lücken entstehen nur bewusst – nie unkoordiniert</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Altersangepasste Schwerpunkte:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Spieler:innen sollen lernen: „Wann störe ich? Wann halte ich den Raum?"</li>
                <li>– Erste feste Rollenzuteilungen je nach Spielerprofil</li>
                <li>– Antizipation & Reaktion auf Spielverlagerung</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Taktische Lernziele:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Abstimmung Spitze – Halbe</li>
                <li>– Verteidigung gegen Rückraumaktionen & Sperre</li>
                <li>– Pressingpunkte erkennen & nutzen</li>
                <li>– Umschaltverhalten nach Ballgewinn</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt C: Positionsprofil (altersgerecht)">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Spitze (1):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– agiert zwischen RL – RM – RR</li>
                <li>– provoziert Ballverluste, lenkt ins Zentrum</li>
                <li>– entscheidet: pressen oder abdecken</li>
                <li>– arbeitet mit hoher Antizipation & Bewegung</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Halbe (2):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– rücken bei Bedarf raus – sichern aber hinter der Spitze</li>
                <li>– koordinieren Übergaben & Ballverlagerung</li>
                <li>– wichtige Verbindung zur Mitte</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Außen (2):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– übernehmen Einläufer:innen & Seitenverlagerung</li>
                <li>– dürfen nicht zu tief stehen → Passwege früh schließen</li>
                <li>– bei Überzahl außen: Absprache mit Halb → „schieben oder halten"</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Mitte (1):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– zentrale Kontrolle: Kreisspieler, Sperre, Rückraumschütze</li>
                <li>– entscheidet oft über Helfen oder Halten</li>
                <li>– muss kommunizieren: „Du bleibst!", „Ich helf!"</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt D: Methodik & Trainingseinführung">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Didaktische Einführung:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Einstieg über 3:3 mit beweglicher Spitze</li>
                <li>– Fokus: Bewegung + Timing + Absprache</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Methodische Reihen:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>3:3 auf einer Seite mit aktiver Spitze</li>
                <li>4:4 mit Übergabe-Training bei Stoßbewegung</li>
                <li>5:5 + 6:6 mit Kreuzung, Einlauf & Sperre</li>
                <li>„Pressing oder Raum?" als Entscheidungsübung</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Beispielhafte Spielformen:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Störer gegen Strukturierer (z. B. Spitze gegen RM)</li>
                <li>– „3 Sekunden Regel" – Wie lange hältst du den Druck?</li>
                <li>– Ballorientiertes Verschieben mit Spitzenkommandos</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Rotationsprinzipien:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– RM, Halbe und Spitze durchrotieren lassen</li>
                <li>– Außen gezielt an Einlauf-Verhalten gewöhnen</li>
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
                    <td className="border border-gray-300 p-3">Spitze stört ohne Absicherung – Lücke entsteht</td>
                    <td className="border border-gray-300 p-3">„Du gehst nur, wenn hinter dir jemand denkt!"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Halbe reagieren zu spät auf Stoßaktionen</td>
                    <td className="border border-gray-300 p-3">„Nicht warten – lesen, was kommt!"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Außen lassen Einläufer frei</td>
                    <td className="border border-gray-300 p-3">„Dein Raum = deine Verantwortung"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Mitte überhilft – Raum öffnet sich</td>
                    <td className="border border-gray-300 p-3">„Nicht jeder braucht deine Hilfe!"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Zu starres Verhalten – niemand geht raus</td>
                    <td className="border border-gray-300 p-3">„Wir verteidigen nicht Positionen – wir verteidigen Räume!"</td>
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
                <li>– Spitze agiert bewusst – nicht wild</li>
                <li>– Halbe und Mitte stimmen sich ab</li>
                <li>– Spieler:innen reagieren auf Spielsituation – nicht nur Schema</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Was wird vorbereitet?</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– flexible Verteidigungskonzepte</li>
                <li>– Wechselspiel aus Druck & Raumkontrolle</li>
                <li>– individuelle Spezialrollen</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Übertragbarkeit in die A-Jugend:</h4>
              <p className="text-gray-700">
                Wer in der 5:1 gelernt hat, Räume zu verteidigen und Gegner:innen gezielt zu stören, kann in der 6:0 Formation offensiv arbeiten, Lücken antizipieren und Spielsysteme zerstören.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt G: Lösungen gegen Sondersituationen (B-Jugend – 5:1)">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Einläufer von Außen</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Außen verfolgt aktiv & gibt klare Ansagen</li>
                <li>• Halb rückt mit ein oder blockt den Passweg</li>
                <li>• Mitte bleibt zentral – unterstützt bei Einläufer von RM</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Einlaufkorridor mit Seitenwechsel & Coachingverantwortung
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Übergang von RL/RR</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Halbe hält engen Kontakt – entscheidet früh</li>
                <li>• Spitze deckt den Raum → Störung, nicht Verfolgung</li>
                <li>• Kommunikation mit Mitte: „Bleib / Ich geh!"</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> 3:3 mit Wechselpass & Sperrbedrohung
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Übergang von RM</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Spitze lenkt RM in vorgegebene Richtung</li>
                <li>• Halbe rückt rechtzeitig ein zur Übernahme</li>
                <li>• Mitte hilft nur bei klarer Überzahl → sonst sichern</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> RM-Übergang mit Sperren & Zeitdruck
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Kreuzen</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Halbe entscheidet: Übergeben oder durch</li>
                <li>• Spitze bleibt vorn – nicht in die Kreuzung ziehen lassen</li>
                <li>• Mitte sichert Zentrum ab</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Kreuz-Reaktionsspiel mit 6:6-Drucksituation
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Sperre vom Kreis</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Abstand wahren – keine Sperren „annehmen"</li>
                <li>• Mitte kommuniziert & blockt ggf. durch Kontakt</li>
                <li>• Halbe positioniert sich im Durchbruchweg – nicht im Kontakt</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Sperre-Verschieben mit Triggeransage
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Kombinationen</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• feste Entscheidungslogik: Was zuerst verteidigen?</li>
                <li>• Spitze & Halbe geben sprachlich das Kommando</li>
                <li>• Außen halten Ruhe & Raum – keine Überreaktion</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Kombinationstraining mit Coachingstopp
              </p>
            </div>
          </div>
        </CollapsibleBox>
      </motion.div>

      {/* Navigation to next system */}
      <motion.div
        variants={fadeInVariants}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center space-x-4"
      >
        <Link
          to="/spielsystem-c-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Vorheriges: C-Jugend
        </Link>
        <Link
          to="/spielsystem-a-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Nächstes: A-Jugend
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
