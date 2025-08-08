import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const moduleData = [
  {
    title: "Modul 1: Entwicklungsmerkmale & Methodik",
    to: "/Kompetenzkompass/Modul1"
  },
  {
    title: "Modul 2: Athletik & Motorik",
    to: "/Kompetenzkompass/Modul2"
  },
  {
    title: "Modul 3: Technik & Taktik",
    to: "/Kompetenzkompass/Modul3"
  },
  {
    title: "Modul 4: Mentales & Soziales",
    to: "/Kompetenzkompass/Modul4"
  },
  {
    title: "Modul 5: Spielsysteme",
    to: "/Kompetenzkompass/Modul5"
  },
  {
    title: "Modul 6: Teamkultur & Kommunikation",
    to: "/Kompetenzkompass/Modul6"
  }
];

export default function KompetenzkompassModule() {
  return (
    <div className="bg-green-100/30 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-6"
      >
        <h2 className="text-2xl font-bold text-primary">Kompetenzkompass – Modulübersicht</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleData.map((modul, index) => (
            <Link
              key={index}
              to={modul.to}
              className="bg-white/40 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{modul.title}</h3>
              <p className="text-sm">Zum Modul</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
