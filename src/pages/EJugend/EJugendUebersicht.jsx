import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EJugendUebersicht() {
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
            whileHover={{ scale: 1.03 }}
            className="bg-green-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-green-200"
          >
            <h3 className="text-xl font-bold text-primary mb-4">{mod.title}</h3>
            <Link
              to={`/e-jugend-m${mod.id}`}
              className="mt-auto inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
            >
              Zum Modul
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
