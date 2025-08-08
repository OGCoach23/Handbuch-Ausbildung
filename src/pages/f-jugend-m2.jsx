import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FJugendM2() {
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="mb-6">
          <Link to="/f-jugend" className="text-primary hover:underline">
            ← Zurück zur F-Jugend Übersicht
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold text-primary">Modul 2: Athletik & Motorik</h1>

        <p className="font-semibold">Leitfrage:</p>
        <p className="bg-yellow-100 px-2 py-1 rounded">„Wie entwickle ich mit Spaß, Fantasie und Bewegungslust die motorische Basis für alles, was später kommt?"</p>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow space-y-4">
          <div>
            <h3 className="font-semibold text-primary">Zielsetzung dieses Moduls</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>✅ Aufbau grundlegender Bewegungskompetenzen – ohne Leistungsdruck</li>
              <li>✅ Förderung einer vielseitigen motorischen Basis durch abwechslungsreiche Bewegungserfahrungen</li>
              <li>✅ Stärkung von Körpergefühl, Koordination und Freude an Bewegung</li>
              <li>✅ Kein Sportspezifikum – sondern allgemeine, kreative Bewegungsentwicklung</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Schlüsselkompetenzen & Inhalte</h3>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left p-2">Bereich</th>
                    <th className="text-left p-2">Inhalte & Methoden</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200"><td className="p-2 font-medium">Koordination</td><td className="p-2">Balancieren, Springen zur Musik, Reaktionsspiele mit Farben oder Geräuschen</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-medium">Gleichgewicht</td><td className="p-2">Einbeinstand, Balancierparcours, Partneraufgaben („Zieh mich nicht um!")</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-medium">Orientierung</td><td className="p-2">Spiele mit Raumwechsel, Richtungswechsel, Raumwahrnehmung („Finde deinen Platz")</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-medium">Beweglichkeit</td><td className="p-2">Bewegungsreisen mit Tierbewegungen, Dehnspiele, langsames Strecken</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-medium">Reaktion</td><td className="p-2">Farbenlauf, Kommando-Spiele, Geräusch-Reaktionsspiele</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-medium">Sprungkraft</td><td className="p-2">Känguru-Sprung über Matten, beidbeiniges Springen („Flucht aus dem Vulkan")</td></tr>
                  <tr><td className="p-2 font-medium">Laufen & Ausdauer</td><td className="p-2">Kurzspiele wie „Geisterjagd", kein Dauerlauf oder Belastungstest</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Methodische Prinzipien</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Vielseitigkeit:</strong> Verschiedene Bewegungsformen pro Einheit</li>
              <li><strong>Entdecken statt Vormachen:</strong> „Finde 3 Wege über die Bank!"</li>
              <li><strong>Keine Bewertungen:</strong> Keine Wettrennen mit Siegern – Aufgaben statt Vergleiche</li>
              <li><strong>Raumnutzung kreativ gestalten:</strong> Bewegungslandschaften aus Hallengeräten</li>
              <li><strong>Sinne einbeziehen:</strong> Barfuß-Elemente, akustische Signale, Fühlen & Sehen</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Praxisideen & Materialtipps</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Alltagsmaterialien:</strong> Kissen, Seile, Kartons für Balancierspiele</li>
              <li><strong>Koordinationskarten:</strong> Tierbewegungen wie „Krabbe", „Pinguin", „Frosch"</li>
              <li><strong>Musik & Rhythmus:</strong> Laufspiele mit Musik („Spring zur Trommel")</li>
              <li><strong>Bewegungsgeschichten:</strong> „Wikingerreise", „Dschungeltraining", „Zauberwald"</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Beispielhafter Trainingsaufbau (45–60 Minuten)</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Begrüßung & Ritual (5 Min)</li>
              <li>Bewegungsgeschichte (10 Min)</li>
              <li>Motorik-Zirkel (20 Min)</li>
              <li>Spiel mit Aufgaben (10 Min)</li>
              <li>Abschluss & Ruhespiel (10 Min)</li>
            </ol>
          </div>

          <div className="bg-yellow-100/60 p-4 rounded-lg">
            <h3 className="font-semibold text-primary">Ergebnis für den Trainer</h3>
            <p className="mb-2">
              Du förderst Begeisterung für Bewegung, Vertrauen in den Körper und motorische Vielfalt. 
              Du schaffst eine Basis für jede weitere sportliche Entwicklung.
            </p>
            <p><strong>Ziel:</strong> Spieler:innen, die sich gerne bewegen, sich selbst erleben – und mit Freude durch Hallen jagen.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
