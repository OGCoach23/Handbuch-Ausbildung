import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AJugendUebersicht() {
  const module = [
    { id: 1, title: "Modul 1: Entwicklungsmerkmale & Methodik" },
    { id: 2, title: "Modul 2: Athletik & Motorik" },
    { id: 3, title: "Modul 3: Technik & Taktik" },
    { id: 4, title: "Modul 4: Mentale & soziale Entwicklung" },
    { id: 5, title: "Modul 5: Spielsysteme & Positionsspiel" },
    { id: 6, title: "Modul 6: Teamkultur & Kommunikation" },
  ];

  return (
    <div className="bg-white/40 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {module.map((mod) => (
          <motion.div
            key={mod.id}
            whileHover={{ scale: 1.05 }}
            className="bg-green-200/40 rounded-2xl shadow-xl p-6 flex flex-col justify-between backdrop-blur-md border border-green-300/50 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-green-900 mb-4 drop-shadow-sm">
              {mod.title}
            </h3>
            <Link
              to={`/a-jugend/modul${mod.id}`}
              className="mt-auto inline-block bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 active:scale-95 transition-transform duration-200"
            >
              Zum Modul
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
