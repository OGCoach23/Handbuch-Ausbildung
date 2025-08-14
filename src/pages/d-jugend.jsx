import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const moduleDJugend = [
  {
    titel: "Modul 1: Entwicklungsmerkmale & Methodik",
    frage: "Wie gestalten wir ein motivierendes, entwicklungsfreundliches Training für Kinder, die sich mitten im Umbruch befinden – körperlich, geistig und sozial?",
    path: "/d-jugend-m1",
  },
  {
    titel: "Modul 2: Athletik & Motorik",
    frage: "Wie entwickeln wir Körpergefühl, Schnelligkeit und Belastbarkeit – ohne zu überfordern und mit Spaß an Bewegung?",
    path: "/d-jugend-m2",
  },
  {
    titel: "Modul 3: Technik & Taktik",
    frage: "Wie bringe ich Technik sinnvoll ins Spiel – und wie lernen meine Spieler:innen, unter Druck die richtige Entscheidung zu treffen?",
    path: "/d-jugend-m3",
  },
  {
    titel: "Modul 4: Mentale & soziale Entwicklung",
    frage: "Wie stärke ich Selbstvertrauen, Frustrationstoleranz und Teamfähigkeit – und begleite die Kinder durch ihre emotionale Reifung?",
    path: "/d-jugend-m4",
  },
  {
    titel: "Modul 5: Spielsysteme & Positionsspiel",
    frage: "Wie lernen die Kinder Räume zu erkennen, Positionen zu verstehen – und gemeinsam Spiellogik zu entwickeln?",
    path: "/d-jugend-m5",
  },
  {
    titel: "Modul 6: Teamkultur & Kommunikation",
    frage: "Wie entsteht ein echtes Team – mit Werten, Verantwortung und Klarheit in der Sprache?",
    path: "/d-jugend-m6",
  },
];

export default function DJugend() {
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
            D – Jugend: Wie gestalten wir ein motivierendes, entwicklungsfreundliches Training für Kinder, die sich mitten im Umbruch befinden – körperlich, geistig und sozial?
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
            {moduleDJugend.map((mod, index) => (
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
                    zIndex: moduleDJugend.length - index,
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
