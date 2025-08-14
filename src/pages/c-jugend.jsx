import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const moduleCJugend = [
  {
    titel: "Modul 1: Entwicklungsmerkmale & Methodik",
    frage: "Wie entwickeln wir gemeinsam ein leistungsorientiertes, wertschätzendes Miteinander – auf und neben dem Feld?",
    path: "/c-jugend-m1",
  },
  {
    titel: "Modul 2: Athletik & Motorik",
    frage: "Wie trainieren wir unseren Körper so, dass er uns im Spiel schneller, stabiler und belastbarer macht – ohne ihn zu überlasten?",
    path: "/c-jugend-m2",
  },
  {
    titel: "Modul 3: Technik & Taktik",
    frage: "Wie wähle ich unter Druck die richtige Technik – und wie bringe ich sie schnell, sicher und wirkungsvoll ins Spiel?",
    path: "/c-jugend-m3",
  },
  {
    titel: "Modul 4: Mentale & soziale Entwicklung",
    frage: "Wie entwickeln wir mentale Stärke, Teamverantwortung und soziale Kompetenzen – und wie verankern wir sie nachhaltig im Trainingsalltag?",
    path: "/c-jugend-m4",
  },
  {
    titel: "Modul 5: Spielsysteme & Positionsspiel",
    frage: "Wie funktioniert unser Teamspiel in Angriff und Abwehr – und wie finde ich meine Rolle darin, ohne festgelegt zu sein?",
    path: "/c-jugend-m5",
  },
  {
    titel: "Modul 6: Teamkultur & Kommunikation",
    frage: "Wie wachsen wir als Team zusammen – und wie gehe ich mit Herausforderungen, Emotionen und Verantwortung im Spiel um?",
    path: "/c-jugend-m6",
  },
];

export default function CJugend() {
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
            C – Jugend: Wie trainieren wir unseren Körper und Geist so, dass er uns im Spiel schneller, stabiler und belastbarer macht – ohne ihn zu überlasten?
          </h1>
        </motion.div>

        {/* Einleitungstext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-justify text-lg leading-relaxed mb-10 text-green-600"
        >
          <p>
            Wir wollen uns, wie in der modulbasierten Ausbildungslogik festgehalten, nun genauer anschauen was das für diese Ausbildungsstufe bedeutet:
          </p>
        </motion.div>

        {/* Karten-Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-16"
        >
          <div className="flex space-x-[-120px] relative" style={{ perspective: "1000px" }}>
            {moduleCJugend.map((mod, index) => (
              <Link to={mod.path} key={index}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#005baa",
                    color: "#ffffff",
                    zIndex: 10,
                  }}
                  initial={{ backgroundColor: "rgba(255,255,255,0.8)", color: "#000" }}
                  transition={{ duration: 0.3 }}
                  className="w-[300px] h-[400px] border rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center cursor-pointer transform transition-all duration-300"
                  style={{
                    transform: `translateX(${index * 120}px) rotateY(${index * 0.5}deg)`,
                    zIndex: moduleCJugend.length - index,
                  }}
                >
                  <h2 className="text-lg font-bold text-center mb-3">
                    {mod.titel}
                  </h2>
                  <p className="text-center text-sm">{mod.frage}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Grüne Boxen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Link to="/entwicklung-positionen">
            <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Entwicklung der Positionen</h3>
              <p className="text-green-100">Wie sich Positionsprofile über die Jahrgänge entwickeln</p>
            </div>
          </Link>
          
          <Link to="/entwicklung-spielsysteme">
            <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Entwicklung der Abwehrsysteme</h3>
              <p className="text-green-100">Wie sich Abwehrsysteme altersgerecht entwickeln</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
