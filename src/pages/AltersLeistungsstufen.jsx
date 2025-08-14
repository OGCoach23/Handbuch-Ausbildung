import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AltersLeistungsstufen() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Überschrift */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-green-600 mb-6">
            Alters- & Leistungsstufen
          </h1>
        </motion.div>

        {/* Einleitungstext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-justify text-lg leading-relaxed mb-10 text-green-600"
        >
          <p className="mb-4">
            <strong>Säulen auf: altersgerechte Entwicklungsstufen und zielgerichtete Leistungswege.</strong><br />
            Sie geben Orientierung – und lassen gleichzeitig Raum für individuelle Wege.
          </p>
          <p className="mb-4">
            Unsere Struktur ist kein starres Raster, sondern ein flexibles Gerüst: Sie hilft Spieler:innen, sich in ihrer
            jeweiligen Phase zurechtzufinden, ihre nächsten Schritte zu erkennen – und ihr Potenzial zu entfalten.
          </p>
          <p>
            Jede Stufe bringt neue körperliche, geistige und soziale Herausforderungen mit sich. Unsere Inhalte, Methoden und
            Erwartungen passen wir daran an – ohne starre Übergänge, aber mit klarem Blick für Entwicklungsfenster.
          </p>
        </motion.div>

        {/* Karten-Container - Altersklassen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* F-Jugend Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/f-jugend">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400 hover:bg-green-50">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  F-Jugend
                </h3>
                <ul className="list-disc list-inside space-y-2 text-green-600">
                  <li>Bambinis (unter 6 Jahren)</li>
                  <li>MiniMinis (6–7 Jahre)</li>
                  <li>Minis (7–8 Jahre)</li>
                </ul>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zur F-Jugend →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* E-Jugend Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/e-jugend">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400 hover:bg-green-50">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  E-Jugend (9–10 Jahre)
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Grundlegende Entwicklung der Handball-Fertigkeiten und spielerische Heranführung an den Sport.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zur E-Jugend →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* D-Jugend Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/d-jugend">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400 hover:bg-green-50">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  D-Jugend (11–12 Jahre)
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Technik und Taktik werden vertieft, erste taktische Grundlagen werden vermittelt.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zur D-Jugend →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* C-Jugend Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="/c-jugend">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400 hover:bg-green-50">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  C-Jugend (13–14 Jahre)
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Systeme und Positionen werden eingeführt, leistungsorientiertes Training beginnt.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zur C-Jugend →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* B-Jugend Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to="/b-jugend">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400 hover:bg-green-50">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  B-Jugend (15–16 Jahre)
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Leistungsorientierung wird verstärkt, individuelle Förderung steht im Vordergrund.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zur B-Jugend →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* A-Jugend Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link to="/a-jugend">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400 hover:bg-green-50">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  A-Jugend (17–18 Jahre)
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Übergang ins Aktivenleben, letzte Jugendphase mit erwachsenen Anforderungen.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zur A-Jugend →
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Leistungsstufen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg mb-10"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">Leistungsstufen – Entwicklung mit Raum für Persönlichkeit:</h3>
          <ul className="list-disc list-inside space-y-3 text-green-600">
            <li><strong>Breitensport-Ebene:</strong> Sport als Freizeitgestaltung und persönliche Weiterentwicklung (alle Altersklassen)</li>
            <li><strong>Talentsichtung & -förderung:</strong> erste leistungsorientierte Schritte (ab D-Jugend)</li>
            <li><strong>Leistungsteams:</strong> gezieltes Fördern in Richtung Verbandsliga und höher (ab C-Jugend)</li>
            <li><strong>Übergangshilfe:</strong> begleiteter Wechsel ins Aktivenleben (A-Jugend)</li>
          </ul>
        </motion.div>

        {/* Warum sind Stufen wichtig */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg mb-10"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">Warum sind Stufen für uns wichtig?</h3>
          <ul className="list-disc list-inside space-y-3 text-green-600">
            <li>Sie schaffen Orientierung für Spieler:innen: Was ist in meiner Phase dran?</li>
            <li>Sie helfen Trainer:innen bei der Auswahl der richtigen Inhalte und Methoden</li>
            <li>Sie machen Entwicklung sichtbar – als Motivation und Bestätigung</li>
            <li>Sie ermöglichen passgenaue Anforderungen, die weder über- noch unterfordern</li>
          </ul>
        </motion.div>

        {/* Individuelle Wege */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg mb-10"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">Individuelle Wege innerhalb der Stufen:</h3>
          <div className="space-y-4 text-green-600">
            <p>
              Nicht jede:r Spieler:in entwickelt sich gleich schnell. Manche brauchen länger für den nächsten Schritt,
              andere sind früh bereit für neue Herausforderungen. Unsere Stufensystematik ist flexibel: Es geht um
              Entwicklungsbegleitung, nicht um starres Sortieren.
            </p>
            <p>
              <strong>Entscheidend ist:</strong> Jede:r bekommt die Anforderungen, die zur aktuellen Entwicklungsphase passen –
              bei klarer Perspektive auf die nächsten Schritte.
            </p>
          </div>
        </motion.div>

        {/* Fazit-Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg text-justify text-lg leading-relaxed"
        >
          <p className="text-green-600">
            <strong>Unser Versprechen:</strong> Wir sehen jeden Menschen in seiner individuellen Entwicklung.
            Die Stufen sind da, um zu helfen – nicht um zu begrenzen.
          </p>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16">
        <Link 
          to="/trainingsmethodik"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          ← Trainingsmethodik
        </Link>
        <Link 
          to="/ebene1"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Zurück zu Ebene 1 →
        </Link>
      </div>
    </div>
  );
}