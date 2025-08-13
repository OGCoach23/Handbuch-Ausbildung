import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Quereinsteiger() {
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
            Quer- und Neueinsteiger, Drop-out-Prophylaxe
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
            <strong>EINSTIEG – Warum dieses Modul wichtig ist</strong><br />
            Nicht alle starten mit 6 Jahren. Nicht alle bleiben durchgehend dabei. Und nicht alle fühlen sich immer sicher, gesehen oder gebraucht.
            Deshalb brauchen wir ein System, das Einsteiger:innen integriert, Querwechsler:innen Perspektiven gibt und Drop-outs vermeidet, bevor sie passieren.
            Wir nehmen Entwicklung ernst – und das bedeutet auch: Zugehörigkeit ermöglichen.
          </p>
          <p className="mb-4">
            Dieses Kapitel richtet sich an Trainer:innen, Spieler:innen und Eltern – es zeigt, wie wir als Verein aktiv Zugehörigkeit gestalten – mit Struktur, Haltung und offenen Wegen. Für Neueinsteiger:innen. Für Quereinsteiger:innen. Für Spieler:innen mit Fragezeichen. Und für jene, die bei uns mit Doppelspielrecht andocken.
          </p>
          <p>
            Drop-out ist kein plötzlicher Bruch – sondern oft ein schleichender Prozess. Wer hinschaut, kann ihn stoppen.
            Und wer neue Wege aufmacht, kann Spieler:innen gewinnen, die sonst nie Teil dieses Spiels geworden wären.
          </p>
        </motion.div>

        {/* Karten-Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Neueinsteiger Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/quereinsteiger/neueinsteiger">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  Neueinsteiger:innen – Willkommen statt Überforderung
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Egal ob mit 8 oder 16 – jede:r ist willkommen. Wir holen sie dort ab,
                  wo sie stehen. Kein Start ist zu spät – entscheidend ist die
                  Begleitung. Wir geben Struktur, Aufgaben, Vertrauen – und das klare
                  Signal: Du gehörst dazu.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zum Detailbereich →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Quereinsteiger Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/quereinsteiger/quereinsteiger">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  Quereinsteiger:innen – Klarheit & Perspektive statt Frust
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Wer aus einer anderen Sportart, einem anderen Verein oder nach Pause kommt, bringt Ressourcen mit – aber auch Unsicherheit. Wir machen Stärken sichtbar, geben Orientierung, schaffen Rollen – ohne Vergleichsdruck.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zum Detailbereich →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Drop-out Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/quereinsteiger/dropout">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  Drop-out verhindern – Hinsehen, handeln, halten
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Ausstieg beginnt oft leise: durch Rückzug, Vermeidung, fehlende Bindung. Wir schaffen Strukturen, um das früh zu erkennen – und Räume, um Spieler:innen wieder einzufangen: mit Gesprächen, Flexibilität und Perspektiven.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zum Detailbereich →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Doppelspielrecht Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="/quereinsteiger/doppelspielrecht">
              <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full cursor-pointer group hover:border-green-400">
                <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  Sonderfall Doppelspielrecht – Ausbildung statt Abwerbung
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Ziel: Spieler:innen mit Doppelspielrecht sollen sich beim SV Laim vollwertig aufgenommen, gefördert und respektiert fühlen – unabhängig davon, ob sie langfristig bleiben oder nicht. Ziel ist ein transparentes, verbindliches und wertschätzendes Miteinander, das auf Ausbildung statt Abwerbung setzt.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  Zum Detailbereich →
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Fazit-Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg text-justify text-lg leading-relaxed"
        >
          <p className="text-green-600">
            <strong>Fazit: Entwicklung ermöglichen heißt: Wege offenhalten</strong><br /><br />
            Dieses Kapitel zeigt: Wir nehmen alle ernst. Die frühen, die späten, die unsicheren, die wechselnden. Unser Ziel ist nicht, alle zu halten – sondern alle zu entwickeln.
            Wenn wir das schaffen – mit Haltung, Struktur und Herz – dann bleiben mehr, als wir dachten. Und die, die gehen, tun es mit einem Plus an Können, Haltung und Erfahrung.
            Denn das ist unser Job: Menschen wachsen lassen. Nicht nur im Trikot des SV Laim – sondern auf ihrem Weg.
          </p>
        </motion.div>
      </div>
    </div>
  );
}