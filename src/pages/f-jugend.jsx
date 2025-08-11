import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const moduleFJugend = [
  {
    titel: "Modul 1: Entwicklungsmerkmale & Methodik",
    frage: "Wie begleite ich Kinder zwischen 4 und 8 Jahren liebevoll, bewegungsreich und entwicklungsfördernd ins Handballspielen?",
    path: "/f-jugend-m1",
  },
  {
    titel: "Modul 2: Athletik & Motorik",
    frage: "Wie entwickle ich mit Spaß, Fantasie und Bewegungslust die motorische Basis für alles, was später kommt?",
    path: "/f-jugend-m2",
  },
  {
    titel: "Modul 3: Technik & Taktik",
    frage: "Wie erleben Kinder erste Ballaktionen spielerisch, ohne Technikdruck – und entwickeln ein Gefühl für Richtung, Raum und Zusammenspiel?",
    path: "/f-jugend-m3",
  },
  {
    titel: "Modul 4: Mentale & soziale Entwicklung",
    frage: "Wie helfe ich Kindern, sich selbst zu entdecken, mit anderen zu spielen – und als Teil einer Gruppe stark zu werden?",
    path: "/f-jugend-m4",
  },
  {
    titel: "Modul 5: Spielsysteme & Positionsspiel",
    frage: "Wie können Kinder Handball spielen – ohne System, aber mit Raumgefühl, Bewegungslust und ersten Spiellogiken?",
    path: "/f-jugend-m5",
  },
  {
    titel: "Modul 6: Teamkultur & Kommunikation",
    frage: "Wie entsteht in einer wilden, bunten, lauten Kindergruppe ein echtes Wir-Gefühl – das verbindet, stärkt und Spaß macht?",
    path: "/f-jugend-m6",
  },
];

export default function FJugend() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-8">
      <div className="flex space-x-[-120px] relative" style={{ perspective: "1000px" }}>
        {moduleFJugend.map((mod, index) => (
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
                zIndex: moduleFJugend.length - index,
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
