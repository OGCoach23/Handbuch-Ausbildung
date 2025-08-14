import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Ausbildungsprinzipien() {
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
            Ausbildungsprinzipien & Werte
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
            <strong>Ausbildung braucht Haltung</strong> – und Haltung zeigt sich im Handeln.
            Unsere Ausbildung beruht auf einem stabilen Wertefundament.
          </p>
          <p className="mb-4">
            Es sind Prinzipien, die Orientierung geben – für Trainer:innen,
            Spieler:innen, Eltern. Sie schaffen Vertrauen, Klarheit und
            Entwicklungsspielraum – und sie verbinden sportliche Exzellenz mit
            menschlicher Reife.
          </p>
          <p>
            Wirkliche Entwicklung entsteht dort, wo Spieler:innen ernst genommen,
            gefordert und begleitet werden.
          </p>
        </motion.div>

        {/* Leitprinzipien */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg mb-10"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">Unsere Leitprinzipien:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="border-l-4 border-green-300 pl-3">
                <h4 className="font-semibold text-green-700">Verbindlichkeit</h4>
                <p className="text-green-600 text-sm">Strukturen geben Sicherheit – ohne Starrheit.</p>
              </div>
              <div className="border-l-4 border-green-300 pl-3">
                <h4 className="font-semibold text-green-700">Individualisierung</h4>
                <p className="text-green-600 text-sm">Jede:r entwickelt sich anders – Tempo & Motivation zählen.</p>
              </div>
              <div className="border-l-4 border-green-300 pl-3">
                <h4 className="font-semibold text-green-700">Vernetzung</h4>
                <p className="text-green-600 text-sm">Gemeinsame Sprache, Raum für Persönlichkeit.</p>
              </div>
              <div className="border-l-4 border-green-300 pl-3">
                <h4 className="font-semibold text-green-700">Durchgängigkeit</h4>
                <p className="text-green-600 text-sm">Abgestimmte Ziele von Minis bis A-Jugend.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-green-300 pl-3">
                <h4 className="font-semibold text-green-700">Ganzheitlichkeit</h4>
                <p className="text-green-600 text-sm">Körper, Technik, Mentalität – alles gehört zusammen.</p>
              </div>
              <div className="border-l-4 border-green-300 pl-3">
                <h4 className="font-semibold text-green-700">Entwicklung vor Ergebnis</h4>
                <p className="text-green-600 text-sm">Motivation statt Vergleich – Fortschritt zählt.</p>
              </div>
              <div className="border-l-4 border-green-300 pl-3">
                <h4 className="font-semibold text-green-700">Vielfalt als Stärke</h4>
                <p className="text-green-600 text-sm">Unterschiede bereichern Spiel & Miteinander.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Erklärung */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg mb-10"
        >
          <p className="text-green-600 text-lg">
            Diese Prinzipien prägen unseren Alltag beim SV Laim. Spieler:innen
            lernen bei uns nicht nur was, sondern auch wie man lernt.
          </p>
        </motion.div>

        {/* Zitate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-6"
        >
          <div className="border-l-4 border-green-600 bg-green-50 p-6 italic rounded">
            <strong>Trainerimpuls:</strong> Diese Prinzipien sind dein Werkzeug. Nutze sie zur
            Reflexion: Passt die Aufgabe zur Persönlichkeit? Fördert meine
            Ansprache Verantwortung?
          </div>

          <div className="border-l-4 border-green-600 bg-green-50 p-6 italic rounded">
            <strong>Elternblick:</strong> Ihr Kind wird hier nicht in ein System gepresst,
            sondern darf sich entfalten – mit Klarheit und Herz.
          </div>

          <div className="border-l-4 border-green-600 bg-green-50 p-6 italic rounded">
            <strong>Für Spieler:innen – kurz erklärt:</strong> Du musst niemandem etwas beweisen –
            nur dir selbst zeigen, dass du wachsen kannst.
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16">
        <Link 
          to="/zielgruppen"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          ← Zielgruppen
        </Link>
        <Link 
          to="/schule-leben"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          HandballLeben →
        </Link>
      </div>
    </div>
  );
}
