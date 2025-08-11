import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const moduleAJugend = [
  {
    titel: "Modul 1: Entwicklungsmerkmale & Methodik",
    frage: "Wie begleite ich junge Erwachsene in ihrer letzten Jugendphase – zwischen Leistung, Identität und dem Übergang ins Aktivenleben?",
    path: "/a-jugend-m1",
  },
  {
    titel: "Modul 2: Athletik & Motorik",
    frage: "Wie trainiere ich leistungsorientiert und individuell Kraft, Ausdauer und Schnelligkeit – mit höchstem Anspruch und persönlicher Entwicklung?",
    path: "/a-jugend-m2",
  },
  {
    titel: "Modul 3: Technik & Taktik",
    frage: "Wie entwickle ich komplexe Handballtechniken und taktische Konzepte – mit eigenständigem Spielverständnis und kreativen Lösungen?",
    path: "/a-jugend-m3",
  },
  {
    titel: "Modul 4: Mentale & soziale Entwicklung",
    frage: "Wie fördere ich mentale Stärke, Führungsqualitäten und Verantwortung – in einer Phase der Persönlichkeitsentwicklung und Identitätsfindung?",
    path: "/a-jugend-m4",
  },
  {
    titel: "Modul 5: Spielsysteme & Positionsspiel",
    frage: "Wie entwickle ich flexible Spielsysteme und individuelle Positionsprofile – mit taktischem Verständnis und kreativen Lösungen?",
    path: "/a-jugend-m5",
  },
  {
    titel: "Modul 6: Teamkultur & Kommunikation",
    frage: "Wie schaffe ich eine Leistungskultur, die fordert, fördert und Fairplay lebt – bei Spielern, Eltern und Trainern?",
    path: "/a-jugend-m6",
  },
];

export default function AJugend() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-start p-8">
      {/* Überschrift */}
      <h1 className="text-green-600 text-4xl font-bold mb-12">A - Jugend</h1>

      {/* Karten-Stack */}
      <div className="flex space-x-[-120px] relative" style={{ perspective: "1000px" }}>
        {moduleAJugend.map((mod, index) => (
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
                zIndex: moduleAJugend.length - index,
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
