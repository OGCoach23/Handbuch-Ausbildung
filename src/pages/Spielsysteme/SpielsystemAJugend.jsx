import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemAJugend() {
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
        <span className="text-gray-600">A-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          A-Jugend – 6:0-Deckung (offensiv)
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
              <li>● Systemname: 6:0-Deckung (offensiv gespielt)</li>
              <li>● Einsatzdauer: A-Jugend (2 Jahre verbindlich)</li>
            </ul>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Ziel des Systems:</h4>
              <p className="text-gray-700">
                Spielintelligenz, Effizienz und taktische Variabilität – die 6:0 bildet die Basis für nahezu alle Erwachsenenformationen. Die offensive Variante schult aktives Heraustreten, Raumkontrolle, Verschieben und Täuschungsverhalten.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Spielnahe Bedeutung:</h4>
              <p className="text-gray-700">
                Die 6:0 ist das Fundament im Seniorenbereich. Wer sie aktiv interpretieren kann, bringt defensive Stabilität mit offensivem Zugriff zusammen.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Verbindung zur Zukunft (Aktivenbereich):</h4>
              <p className="text-gray-700">
                Die offensive 6:0 ist adaptierbar auf jede Spielsituation – Grundlage für spätere Hybridformationen (z. B. 5+1, 3:2:1-Elemente, antizipative Sperre-Verteidigung).
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt B: Taktische Prinzipien & Ausbildungsschwerpunkte">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Grundprinzipien:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Verschieben in der Linie – ballnah Druck erzeugen</li>
                <li>Heraustreten, wenn es die Situation erfordert – nicht dauerhaft</li>
                <li>Sperreverhalten lesen – nicht „reagieren", sondern agieren</li>
                <li>Kommunikation & Antizipation entscheiden über Qualität</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Altersangepasste Schwerpunkte:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Verantwortung für „meinen Raum" übernehmen</li>
                <li>– situatives Heraustreten mit Rückendeckung</li>
                <li>– Handlungsketten im Team (z. B. Stoß → Hilfe → Übergabe)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Taktische Lernziele:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Isolation & Lenkung von Rückraumspieler:innen</li>
                <li>– Verteidigung gegen komplexe Kombinationen</li>
                <li>– Koordination mit Torhüter:in und Kommunikation im Innenblock</li>
                <li>– Abwehrumstellung während des Spiels</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt C: Positionsprofil (altersgerecht)">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Außenverteidiger:innen:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– kontrollieren Einläufer:innen + Passwege zur Außenbahn</li>
                <li>– treten bei breiten Rückraumbelastungen heraus</li>
                <li>– arbeiten in enger Abstimmung mit Halbpositionen</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Halbverteidiger:innen:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– ballnah aktiv: Stoßbewegungen stören, Druck erzeugen</li>
                <li>– ballfern sichernd: Rückzugsbereitschaft, Raumkontrolle</li>
                <li>– reagieren auf Übergänge, Sperren und Kreuzungen</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Innenblock (Mitte):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Kreisspieler:in kontrollieren, Sperren antizipieren</li>
                <li>– helfen bei Durchbrüchen, ohne Raum zu öffnen</li>
                <li>– klare Kommunikation mit Torhüter:in und Halbpositionen</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt D: Methodik & Trainingseinführung">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Didaktische Einführung:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– „Von der Linie in den Raum" – Bewegung statt Stillstand</li>
                <li>– Entscheidungsübungen: Wann bleibe ich tief, wann trete ich raus?</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Methodische Reihen:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>2:2 & 3:3 auf einer Seite (Stoß + Sperre)</li>
                <li>4:4 mit Einlauf und Kreuzungsdruck</li>
                <li>6:6 mit Stoß-Rückstoß-Simulation & Reaktionscoaching</li>
                <li>Freies Spiel mit „Abwehr-Call" (z. B. „Press", „Halten")</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Beispielhafte Spielformen:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– „Stören & Sichern" mit Punktewertung</li>
                <li>– „6:0-Challenge" (Wie oft Druck erzeugen + Raum sichern?)</li>
                <li>– Videocoaching mit Triggeranalyse</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Rotationsprinzipien:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Innen- & Außenpositionen je nach Spieltyp verteilen</li>
                <li>– Spielstärke entscheidet zunehmend über Position, nicht mehr Rotation</li>
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
                    <td className="border border-gray-300 p-3">Ballnah bleibt zu passiv – Gegner läuft frei</td>
                    <td className="border border-gray-300 p-3">„Zeig Präsenz – der Raum gehört dir, nicht ihm!"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Ballfern rücken alle zurück – Lücken entstehen</td>
                    <td className="border border-gray-300 p-3">„Halt die Linie – du bist noch Teil der Aktion!"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Kommunikation fehlt bei Übergaben</td>
                    <td className="border border-gray-300 p-3">„Wer nichts sagt, übergibt keine Verantwortung."</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Innenblock überhilft – Sperre wird zu leicht</td>
                    <td className="border border-gray-300 p-3">„Stehen ist nicht gleich helfen – Position vor Aktion!"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Außen verliert Einläufer:innen bei Seitenwechsel</td>
                    <td className="border border-gray-300 p-3">„Dein Raum – deine Regel: keiner läuft da durch!"</td>
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
                <li>– Alle Spieler:innen verstehen das System und ihre Positionen</li>
                <li>– Kommunikation & Antizipation sind Standard</li>
                <li>– Umstellung auf alternative Systeme jederzeit möglich</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Was wird vorbereitet?</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Seniorentaugliche Abwehrintelligenz</li>
                <li>– Entscheidungsspieler:innen, keine Lückenfüller</li>
                <li>– Systemkompetenz auf hohem Niveau</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Übertragbarkeit in den Erwachsenenbereich:</h4>
              <p className="text-gray-700">
                Wer in der A-Jugend eine offensive 6:0 spielen kann, ist bereit für Liga-Abwehrsysteme – mit klaren Zonen, aktiven Störaktionen und taktischen Varianten.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt G: Lösungen gegen Sondersituationen (A-Jugend – 6:0 offensiv)">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Einläufer von Außen</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Außen rückt mit – Halb sichert innen mit</li>
                <li>• Kommunikation: „Einläufer links – bleib tief!"</li>
                <li>• Torhüter:in wird eingebunden („Kurzer Pfosten übernehmen")</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Einlauf + Rückstoß + Lücken-Coaching
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Übergang von RL/RR</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Halb tritt früh raus – kontrollierter Kontakt</li>
                <li>• Mitte übernimmt nur bei klarer Bedrohung</li>
                <li>• Passfenster blockieren – nicht Gegenspieler folgen</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Übergang-Simulation mit Entscheidungsoptionen
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Übergang von RM</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Halb / Mitte arbeitet gemeinsam mit Spitze (falls hybrid gespielt)</li>
                <li>• Stoß lenken, Sperre verhindern</li>
                <li>• Kein unnötiges Heraustreten → Absprache entscheidet</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> RM-Übergang mit Sperre + Rückpass auf Außen
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Kreuzen</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Kein unreflektiertes Übernehmen – Position & Raum zählen</li>
                <li>• Abwehrreihe bleibt kompakt</li>
                <li>• Kommunikation: „Komm du", „Ich bleib!"</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Kreuz-Auswertung im Live-Coaching
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Sperre vom Kreis</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Innenblock hält Abstand + agiert aktiv gegen Sperre</li>
                <li>• Antizipation wichtiger als Reaktion</li>
                <li>• Absprache mit Halb: „Sperre rechts – ich helfe kurz!"</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Sperre-Wahrnehmung + Sperre-Versatzübungen
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Kombinationen</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• keine Panik – Position halten vor Aktion</li>
                <li>• Fokus auf Mitte + Rückpassoption</li>
                <li>• Störaktionen bei Rückstoß gezielt einbauen</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> 6:6 mit Kombinationsverbot → Analyse in Kleingruppe
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
          to="/spielsystem-b-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Vorheriges: B-Jugend
        </Link>
      </motion.div>
    </motion.div>
  );
}
