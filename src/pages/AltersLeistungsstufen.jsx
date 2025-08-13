import { motion } from "framer-motion";

export default function AltersLeistungsstufen() {
  return (
    <div className="space-y-10">
      {/* Section 1 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-dark space-y-4"
          >
            <h1 className="text-3xl font-bold text-primary">Alters- & Leistungsstufen</h1>

            <p>
              <span className="text-primary font-semibold">Säulen auf: altersgerechte Entwicklungsstufen und zielgerichtete Leistungswege.</span>
              Sie geben Orientierung – und lassen gleichzeitig Raum für individuelle Wege.
            </p>

            <p>
              Unsere Struktur ist kein starres Raster, sondern ein flexibles Gerüst: Sie hilft Spieler:innen, sich in ihrer
              jeweiligen Phase zurechtzufinden, ihre nächsten Schritte zu erkennen – und ihr Potenzial zu entfalten.
            </p>

            <p className="text-sm text-gray-700 italic">
              Jede Stufe bringt neue körperliche, geistige und soziale Herausforderungen mit sich. Unsere Inhalte, Methoden und
              Erwartungen passen wir daran an – ohne starre Übergänge, aber mit klarem Blick für Entwicklungsfenster.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h2 className="font-bold mb-2 text-primary">Unsere Altersklassen – systematisch, aber menschlich gedacht:</h2>
              <div className="space-y-2">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary">F-Jugend</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                    <li>Bambinis (unter 6 Jahren)</li>
                    <li>MiniMinis (6–7 Jahre)</li>
                    <li>Minis (7–8 Jahre)</li>
                  </ul>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold text-secondary">E-Jugend (9–10 Jahre)</h3>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary">D-Jugend (11–12 Jahre)</h3>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold text-secondary">C-Jugend (13–14 Jahre)</h3>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary">B-Jugend (15–16 Jahre)</h3>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold text-secondary">A-Jugend (17–18 Jahre)</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h2 className="font-bold mb-2 text-primary">Leistungsstufen – Entwicklung mit Raum für Persönlichkeit:</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Breitensport-Ebene:</strong> Sport als Freizeitgestaltung und persönliche Weiterentwicklung (alle Altersklassen)</li>
                <li><strong>Talentsichtung & -förderung:</strong> erste leistungsorientierte Schritte (ab D-Jugend)</li>
                <li><strong>Leistungsteams:</strong> gezieltes Fördern in Richtung Verbandsliga und höher (ab C-Jugend)</li>
                <li><strong>Übergangshilfe:</strong> begleiteter Wechsel ins Aktivenleben (A-Jugend)</li>
              </ul>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Warum sind Stufen für uns wichtig?</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Sie schaffen Orientierung für Spieler:innen: Was ist in meiner Phase dran?</li>
                <li>Sie helfen Trainer:innen bei der Auswahl der richtigen Inhalte und Methoden</li>
                <li>Sie machen Entwicklung sichtbar – als Motivation und Bestätigung</li>
                <li>Sie ermöglichen passgenaue Anforderungen, die weder über- noch unterfordern</li>
              </ul>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Individuelle Wege innerhalb der Stufen:</h3>
              <p>
                Nicht jede:r Spieler:in entwickelt sich gleich schnell. Manche brauchen länger für den nächsten Schritt,
                andere sind früh bereit für neue Herausforderungen. Unsere Stufensystematik ist flexibel: Es geht um
                Entwicklungsbegleitung, nicht um starres Sortieren.
              </p>
              <p className="mt-2">
                <strong>Entscheidend ist:</strong> Jede:r bekommt die Anforderungen, die zur aktuellen Entwicklungsphase passen –
                bei klarer Perspektive auf die nächsten Schritte.
              </p>
            </div>

            <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
              <strong>Unser Versprechen:</strong> Wir sehen jeden Menschen in seiner individuellen Entwicklung.
              Die Stufen sind da, um zu helfen – nicht um zu begrenzen.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}