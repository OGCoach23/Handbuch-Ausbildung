import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const moduleEJugend = [
  {
    titel: "Modul 1: Entwicklungsmerkmale & Methodik",
    frage: "Worauf muss ich als Trainer:in bei 9- bis 10-jährigen besonders achten?",
    path: "/e-jugend-m1",
  },
  {
    titel: "Modul 2: Athletik & Motorik",
    frage: "Wie trainiere ich altersgerecht Koordination, Ausdauer und Kraft – mit Spaß, Struktur und ohne Überforderung?",
    path: "/e-jugend-m2",
  },
  {
    titel: "Modul 3: Technik & Taktik",
    frage: "Wie lernen Kinder handballtypische Techniken – mit Spielbezug, Motivation und eigener Entscheidungsfreude?",
    path: "/e-jugend-m3",
  },
  {
    titel: "Modul 4: Mentale & soziale Entwicklung",
    frage: "Wie fördere ich Selbstbewusstsein, Teamgeist & Verantwortung – mit kindgerechten Methoden und echten Erlebnissen?",
    path: "/e-jugend-m4",
  },
  {
    titel: "Modul 5: Spielsysteme & Positionsspiel",
    frage: "Wie baue ich erstes Spielverständnis auf – ohne feste Positionen, aber mit Klarheit im Raum und Zusammenspiel?",
    path: "/e-jugend-m5",
  },
  {
    titel: "Modul 6: Teamkultur & Kommunikation",
    frage: "Wie entsteht ein Teamgefühl, das trägt, begeistert und entwickelt – bei Kindern, Eltern und Trainer:innen?",
    path: "/e-jugend-m6",
  },
];

export default function EJugend() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-start p-8">
      {/* Überschrift */}
      <h1 className="text-green-600 text-4xl font-bold mb-12">E - Jugend</h1>

      {/* Karten-Stack */}
      <div className="flex space-x-[-120px] relative" style={{ perspective: "1000px" }}>
        {moduleEJugend.map((mod, index) => (
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
                zIndex: moduleEJugend.length - index,
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
    </div>
  );
}
