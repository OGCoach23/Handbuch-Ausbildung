import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CollapsibleBox from "../../components/CollapsibleBox";

export default function SpielsystemDJugend() {
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
        <span className="text-gray-600">D-Jugend</span>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          D-Jugend – 1:5-Deckung
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
              <li>● Systemname: 1:5-Deckung (1 Spieler:in absichernd hinten, 5 auf Ballhöhe)</li>
              <li>● Einsatzdauer: D-Jugend (2 Jahre verbindlich)</li>
            </ul>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Ziel des Systems:</h4>
              <p className="text-gray-700">
                Spieler:innen lernen, aktiv Druck auf den Ball auszuüben, Laufwege zu stören und als Gruppe offensiv zu agieren. Nur ein:e Spieler:in sichert zentral den Raum hinter der Linie.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Spielnahe Bedeutung:</h4>
              <p className="text-gray-700">
                Die 1:5-Deckung fördert Initiative, Bewegung und Aggressivität – und gleichzeitig Raumverantwortung. Perfekt für die Umstellung von der Manndeckung zur raumorientierten Abwehr.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Verbindung zur nächsten Stufe (C-Jugend – 3:2:1):</h4>
              <p className="text-gray-700">
                Wer in der 1:5 lernt, vorn aktiv zu verteidigen, kann in der 3:2:1 gezielt zwischen Absichern, Attackieren und Lenken wechseln.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt B: Taktische Prinzipien & Ausbildungsschwerpunkte">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Grundprinzipien:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Ballnah attackieren – ballfern sichern</li>
                <li>Raum aktiv verteidigen – Passwege stören</li>
                <li>Gegner früh unter Druck setzen – Ballgewinne erzwingen</li>
                <li>Nur eine:r sichert – alle anderen arbeiten vorne</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Altersangepasste Schwerpunkte:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Mut zur Initiative</li>
                <li>– Laufbereitschaft auf ganzer Breite</li>
                <li>– Raumwahrnehmung (Wann bin ich vorne? Wer sichert?)</li>
                <li>– Kommunikation („Ich hab ihn!" – „Ich bin hinten!")</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Taktische Lernziele:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Räume schließen, bevor sie entstehen</li>
                <li>– Pässe antizipieren & Druck aufbauen</li>
                <li>– Rückzug in Linie nach Ballverlust</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Teamtaktik vs. Individualtaktik:</h4>
              <p className="text-gray-700">
                Der Fokus liegt auf aggressiver Teamarbeit vorne + individueller Verantwortung hinten.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt C: Positionsprofil (altersgerecht)">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Absicherer (Hinten):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Positioniert sich zentral zwischen 6- und 9-m-Linie</li>
                <li>– Deckt Einläufe, Durchbrüche und zu tiefe Läufe ab</li>
                <li>– Gibt Rückmeldung nach vorne („Rechts ist offen!", „Komm zurück!")</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Außenverteidiger:innen (links/rechts):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Arbeiten hoch – oft fast am Ballführenden</li>
                <li>– Verteidigen Passwege und schließen zur Mitte</li>
                <li>– Dürfen nicht überlaufen werden</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Halbverteidiger:innen (links/rechts):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Enge Deckung gegen Rückraum</li>
                <li>– Unterstützen außen oder Mitte je nach Spielsituation</li>
                <li>– Binden Gegenspieler:innen durch Präsenz und Bewegung</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Mitte (Ballseite oder zentral):</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Geht aktiv auf Ball oder blockiert Stoßbewegung</li>
                <li>– Koordiniert vordere Linie</li>
                <li>– Leitet Übergaben/Übernahmen ein</li>
              </ul>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt D: Methodik & Trainingseinführung">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Didaktische Einführung:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– „Fünf jagen – einer sichert!" als Leitbild</li>
                <li>– Training mit Feldaufteilung in „Jagdzone" (vorn) und „Sicherheitszone" (hinten)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Methodische Reihen:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>2:2 mit 1 Absicherer im Raum</li>
                <li>3:3 mit Balljagd & Rücksicherung</li>
                <li>5:5 mit wechselndem Sicherungsspieler</li>
                <li>Komplexes 6:6 mit Rotation & Kommunikation</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Beispielhafte Spielformen:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– „Balljagd mit Absicherung"</li>
                <li>– „Wer sichert?" – Kommunikationstraining</li>
                <li>– Zonenabwehr mit Rotation (nach Ballverlust zurück in Linie)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Rotationsprinzipien im Training:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Jede:r spielt mindestens einmal absichernd</li>
                <li>– Jeder lernt: Wo ist vorne – wann bin ich hinten?</li>
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
                    <td className="border border-gray-300 p-3">Alle rücken zu weit vor – kein:e sichert</td>
                    <td className="border border-gray-300 p-3">„Wer denkt für die anderen mit?" → „Einer bleibt hinten!"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Spieler:innen jagen blind dem Ball hinterher</td>
                    <td className="border border-gray-300 p-3">„Ball sehen – nicht Ball folgen!"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Übergaben klappen nicht – zwei decken eine:n</td>
                    <td className="border border-gray-300 p-3">„Ruf früh! Sag an! Übernehmen statt loslassen!"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Absicherer reagiert zu spät</td>
                    <td className="border border-gray-300 p-3">„Du bist der Airbag – antizipiere!"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Außendeckende lassen Einläufe zu</td>
                    <td className="border border-gray-300 p-3">„Dein Raum ist heilig – niemand rein!"</td>
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
                <li>– Spieler:innen erkennen ihre Rolle: aktiv oder sichernd</li>
                <li>– Ballnahes Verhalten wird mutiger & koordinierter</li>
                <li>– Rückzugsverhalten ist strukturiert (nicht chaotisch)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Was wird vorbereitet?</h4>
              <ul className="space-y-1 text-gray-700">
                <li>– Raumdeckung mit aggressiven Elementen</li>
                <li>– Rollenverständnis zwischen „Jägern" und „Sicherern"</li>
                <li>– Erste Strukturen für 3:2:1 – mit Spitze, Halben & Raumspiel</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Übertragbarkeit in die C-Jugend:</h4>
              <p className="text-gray-700">
                Wer vorn jagen und hinten sichern kann, ist bereit für die 3:2:1 – mit aktiver Spitze, taktischem Übergeben/Übernehmen und ballorientiertem Verschieben.
              </p>
            </div>
          </div>
        </CollapsibleBox>

        <CollapsibleBox title="Abschnitt G: Lösungen gegen Sondersituationen (D-Jugend – 1:5-Deckung)">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Einläufer von Außen</h4>
              <p className="text-gray-700 mb-2">
                <strong>Problem:</strong> Außenspieler:in startet in die Tiefe, wird oft übersehen – besonders bei ballfernem Einlauf.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Lösung:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>● Außenverteidiger:in bleibt wach – „mein Raum = mein Gegner".</li>
                <li>● Immer mitlaufen!</li>
                <li>● Ballferne Seite rückt ein → klare Kommunikation: „Einläufer!"</li>
                <li>● Absicherer übernimmt, falls Außendeckung gebunden ist.</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Einlauf-Korridor + Entscheidungstraining: Wer übernimmt wann?
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Übergang von RL oder RR</h4>
              <p className="text-gray-700 mb-2">
                <strong>Problem:</strong> Übergang von Halb in Richtung Mitte oder in Sperre verwirrt die Halbverteidigung.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Lösung:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>● Halbe begleiten Übergang mit Körperkontakt → nicht „abgeben" ohne Übernahme.</li>
                <li>● Außen sichert die Lücke, wenn HL/HR rausgezogen wird.</li>
                <li>● Absicherer bleibt passiv, aber bereit zur Unterstützung.</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> 2:2 mit Übergang + Helfen-Sichern-Korrigieren
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Übergang von RM</h4>
              <p className="text-gray-700 mb-2">
                <strong>Problem:</strong> RM übergibt in Bewegung auf Kreis – zentrale Überlast entsteht.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Lösung:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>● Mittespieler:in stellt sich in Weg – „Stoppzeichen" durch Körper.</li>
                <li>● Kommunikation mit Halben: „Bleib", „Ich hab ihn"</li>
                <li>● Absicherer bleibt zentriert → Pass verhindern, nicht nur blocken.</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> 3:3 mit RM-Übergang und aktiver Mittendeckung
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Kreuzen (z. B. RL mit RM)</h4>
              <p className="text-gray-700 mb-2">
                <strong>Problem:</strong> Übergabe oder Wechsel wird verpasst – Spieler:innen folgen zu weit.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Lösung:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>● Ballnah: aktives Übergeben mit Ruf („Komm du – ich bleib!")</li>
                <li>● Keine Kreuzverfolgung – Position halten, Lücke sichern.</li>
                <li>● Absicherer unterstützt im Zentrum.</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Kreuz-Trigger + Entscheidungsübung: Bleiben oder wechseln?
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Sperre vom Kreis</h4>
              <p className="text-gray-700 mb-2">
                <strong>Problem:</strong> HL/HR werden „festgenagelt", Gegenspieler läuft frei durch.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Lösung:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>● Frühe Absprache: „Sperre kommt!"</li>
                <li>● Abstand halten zu Kreis (keine Einladung zur Sperre)</li>
                <li>● Absicherer bereit zum Helfen – nur, wenn Sperre nicht rechtzeitig gelöst wird.</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> Sperre-Korridor + Zweikampfverhalten in der Lücke
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-3">Kombinationen (z. B. Übergang + Kreuz + Einlauf)</h4>
              <p className="text-gray-700 mb-2">
                <strong>Problem:</strong> Überforderung durch mehrere aufeinanderfolgende Aktionen.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Lösung:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>● Keine Einzelverfolgung – Raum sichern, Positionen neu sortieren.</li>
                <li>● Absicherung kommunizieren: „Ich hab Kreis", „Bleib außen!"</li>
                <li>● Ruhe im Kopf trainieren: nicht alles verteidigen wollen, sondern Prioritäten.</li>
              </ul>
              <p className="text-gray-700 mt-2">
                👉 <strong>Trainingsform:</strong> 4:4 oder 5:5 mit festem Kombinationsablauf + Reaktionscoaching
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Coachingsätze für die Praxis:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>● „Sprich bevor du gehst."</li>
                <li>● „Sicherst du den Raum oder den Gegner?"</li>
                <li>● „Nicht alle laufen dem Ball hinterher – wer denkt zurück?"</li>
              </ul>
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
          to="/spielsystem-e-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Vorheriges: E-Jugend
        </Link>
        <Link
          to="/spielsystem-c-jugend"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Nächstes: C-Jugend
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
