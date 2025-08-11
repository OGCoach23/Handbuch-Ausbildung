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
    frage: "Wie entwickle ich systematisch Kraft, Ausdauer und Koordination – mit altersgerechten Methoden und wachsendem Anspruch?",
    path: "/d-jugend-m2",
  },
  {
    titel: "Modul 3: Technik & Taktik",
    frage: "Wie vermittle ich komplexere Handballtechniken – mit steigendem Schwierigkeitsgrad und taktischem Verständnis?",
    path: "/d-jugend-m3",
  },
  {
    titel: "Modul 4: Mentale & soziale Entwicklung",
    frage: "Wie fördere ich Selbstständigkeit, Kritikfähigkeit und Verantwortung – in einer Phase der Identitätsfindung?",
    path: "/d-jugend-m4",
  },
  {
    titel: "Modul 5: Spielsysteme & Positionsspiel",
    frage: "Wie baue ich erstes taktisches Verständnis auf – mit einfachen Spielsystemen und wachsender Positionsverantwortung?",
    path: "/d-jugend-m5",
  },
  {
    titel: "Modul 6: Teamkultur & Kommunikation",
    frage: "Wie entwickle ich eine Teamkultur, die Konflikte konstruktiv löst und gemeinsame Ziele verfolgt?",
    path: "/d-jugend-m6",
  },
];

export default function DJugend() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-start p-8">
      {/* Überschrift */}
      <h1 className="text-green-600 text-4xl font-bold mb-12">D - Jugend</h1>

      {/* Karten-Stack */}
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
    </div>
  );
}
