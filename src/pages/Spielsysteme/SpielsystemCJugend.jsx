import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemCJugend() {
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
        <span className="text-gray-600">C-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          C-Jugend – 3:2:1-Deckung
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
              <li>● Systemname: 3:2:1-Deckung (drei hinten, zwei Halbe davor, ein:e Spitze vorn)</li>
              <li>● Einsatzdauer: C-Jugend (2 Jahre verbindlich)</li>
            </ul>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Ziel des Systems:</h4>
              <p className="text-gray-700">
                Förderung des Spielverständnisses: Wer greift an, wer sichert ab? Spieler:innen müssen Raum, Ball und Gegner gleichzeitig im Blick behalten und Entscheidungen treffen.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Spielnahe Bedeutung:</h4>
              <p className="text-gray-700">
                Die 3:2:1-Deckung verlangt erstmals echtes Spiellesen: Ballwege antizipieren, Gegenspieler:innen stören, Räume sichern.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Verbindung zur nächsten Stufe (B-Jugend – 5:1):</h4>
              <p className="text-gray-700">
                Die 3:2:1 schult das Heraustreten, Umschalten und die variable Verteidigung einzelner Räume – ideal zur Vorbereitung auf das tiefere, aber taktisch komplexere 5:1-System.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt B: Taktische Prinzipien & Ausbildungsschwerpunkte">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Grundprinzipien:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Spitze stört früh – Passwege, Stoßaktionen</li>
                <li>Halbe reagieren flexibel – sichern Mitte oder Ballseite</li>
                <li>Hintere Linie arbeitet ballseitig kompakt</li>
                <li>Kommunikation entscheidet – Wer übernimmt, wer sichert?</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Altersangepasste Schwerpunkte:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Orientierung in Raum & Bewegung</li>
                <li>– Passverhalten lesen & antizipieren</li>
                <li>– Entscheidungen treffen: raustreten oder sichern?</li>
                <li>– Verantwortungsübernahme auf jeder Position</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Taktische Lernziele:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– 3-Linien-Denken: vorne – Mitte – hinten</li>
                <li>– Verstehen von Triggern („Was passiert, wenn...?")</li>
                <li>– Übergeben – Übernehmen sicher anwenden</li>
                <li>– Gegenspieler:innen gezielt ins Zentrum lenken</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt C: Positionsprofil (altersgerecht)">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Spitze (1):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– stört Passspiel früh, nimmt RM aus dem Spiel</li>
                <li>– lenkt Stoßbewegungen zur Seite</li>
                <li>– darf nicht „verhungern" – arbeitet ständig in Bewegung</li>
                <li>– Kommunikation mit den Halben: „Komm rum!", „Ich hab ihn!"</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Halbe (2):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– reagiert auf Kreuzungen und Übergänge</li>
                <li>– übernimmt bei Durchbruch – entscheidet: raus oder sichern</li>
                <li>– bildet flexible zweite Linie</li>
                <li>– muss beide Rückraumpositionen kennen & verstehen</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Hintere Linie (3):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Außen: beobachten Einläufe + verteidigen breiten Raum</li>
                <li>– Halb: stark im 1:1, reagiert auf Sperren & Übergänge</li>
                <li>– Mitte: Kreisspieler:innen kontrollieren, Kommunikation zentral</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt D: Methodik & Trainingseinführung">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Didaktische Einführung:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Von innen nach außen: Mitte zuerst, dann Halbe, dann Spitze</li>
                <li>– Rollenspiele: „Was passiert, wenn…?" statt nur Laufwege</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Methodische Reihen:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>2:2 mit tiefer Sicherung (Halbe + Mitte)</li>
                <li>3:3 mit Kreuz-Simulation</li>
                <li>4:4 mit Einläufen & Sperre</li>
                <li>5:5 mit Schwerpunkt „Entscheidung: gehen oder bleiben?"</li>
                <li>6:6 mit Spielfeldteilung (rechts aktiv – links sichernd)</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Beispielhafte Spielformen:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– "Spitze jagt Ball" (mit Rückendeckung)</li>
                <li>– "Kreuz oder Stoß?" – Trainer gibt Trigger</li>
                <li>– 6:6 mit Kombinationsverbot → freies Reagieren</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Rotationsprinzipien:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Jeder spielt mindestens einmal Spitze, Halb & hinten</li>
                <li>– Schwerpunkt: Verständnis, nicht Spezialisierung</li>
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
                    <td className="border border-gray-300 p-3">Spitze bleibt zu passiv oder zu tief</td>
                    <td className="border border-gray-300 p-3">„Du bist der Erste – du machst das Spiel schwer!"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Halbe springen zu früh – Lücken entstehen</td>
                    <td className="border border-gray-300 p-3">„Warten – lesen – dann raustreten!"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Übergabe im Zentrum klappt nicht</td>
                    <td className="border border-gray-300 p-3">„Erst rufen – dann loslassen!"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Außenspieler:innen verlieren Einläufer:innen</td>
                    <td className="border border-gray-300 p-3">„Tor schützen – niemand hinter dir!"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Mitte übernimmt zu viel oder zu wenig</td>
                    <td className="border border-gray-300 p-3">„Du bist der Dirigent – nicht der Feuerwehrmann!"</td>
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
                <li>– Jede:r kennt mindestens zwei Rollen in der 3:2:1</li>
                <li>– Kommunikation ist Standard</li>
                <li>– Spieler:innen können Entscheidungen treffen, statt stur zu laufen</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Was wird vorbereitet?</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Druck aus der Tiefe erzeugen (für spätere 5:1)</li>
                <li>– Antizipieren statt Reagieren</li>
                <li>– Ballorientiertes Verschieben mit Rückendeckung</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Übertragbarkeit in die B-Jugend:</h4>
              <p className="text-gray-700">
                Wer in der 3:2:1 gelernt hat zu lesen, zu reagieren und mit Verantwortung zu verteidigen, kann in der 5:1 taktisch flexibel agieren – als Spitze, Halb oder als zentrale Absicherung.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt G: Lösungen gegen Sondersituationen (C-Jugend – 3:2:1)">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Einläufer von Außen</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Außen übernimmt sofort & kommuniziert: „Einläufer rechts!"</li>
                <li>• Halbe ballfern rückt ein zur Unterstützung</li>
                <li>• Mitte bleibt zentriert – nicht auf Einläufer fixieren</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Einlauf-Trigger mit Ballwechsel zur ballfernen Seite
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Übergang von RL/RR</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Halbe nimmt Körperkontakt früh auf</li>
                <li>• Bei Sperre: Kommunikation „Sperre kommt!" + absichern</li>
                <li>• Spitze hält Distanz – nur stören, nicht binden</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Übergang-Simulation mit Dreiecksverhalten
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Übergang von RM</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Spitze verfolgt oder lenkt seitlich</li>
                <li>• Halbe oder Mitte übernimmt situativ</li>
                <li>• „Komm raus!" / „Ich hab ihn!" – feste Absprachen</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> 2:2 mit RM-Übergang in Sperre + Entscheidungssituation
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Kreuzen</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Halbe bleibt tief – nicht in Kreuzung reinlaufen</li>
                <li>• Übergeben/Übernehmen mit Blick auf Passoption</li>
                <li>• Mitte hält Position – Raum verteidigen statt Gegner jagen</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Kreuz-Analyse mit Live-Korrektur
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Sperre vom Kreis</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Halbe hält Abstand, beobachtet Körperschwerpunkt</li>
                <li>• Absprache mit Mitte: „Bleib – ich geh drumrum!"</li>
                <li>• Notfallhilfe: Absicherer (meist Mitte) geht in Block</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Sperre+Stoß mit Reaktionstraining
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Kombinationen</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Kommunikation ist entscheidend: „Ich übernehme!" – „Du bleibst!"</li>
                <li>• Spieler:innen dürfen Situationen abbrechen („Reset")</li>
                <li>• Spiel ruhig halten – Tempo rausnehmen, dann verschieben</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Kombi-Simulation mit „Stop & Analyse"
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
          to="/spielsystem-d-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Vorheriges: D-Jugend
        </Link>
        <Link
          to="/spielsystem-b-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Nächstes: B-Jugend
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
