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
            F – Jugend: Wie begleite ich Kinder zwischen 4 und 8 Jahren liebevoll, bewegungsreich und entwicklungsfördernd ins Handballspielen?
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

        {/* Karten-Stack - Mobile-optimiert */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          {/* Mobile: Vertikaler Stack */}
          <div className="block sm:hidden space-y-4">
            {moduleFJugend.map((mod, index) => (
              <Link to={mod.path} key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-white border-2 border-green-200 rounded-xl shadow-lg p-4 cursor-pointer transition-all duration-300"
                >
                  <h2 className="text-lg font-bold text-green-600 mb-3">
                    {mod.titel}
                  </h2>
                  <p className="text-green-600 text-sm leading-relaxed">{mod.frage}</p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Desktop: 3D Karten-Stack */}
          <div className="hidden sm:flex justify-center">
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
