import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const moduleCards = [
  {
    title: "M1: Entwicklungsmerkmale & Methodik",
    link: "/f-jugend-m1",
  },
  {
    title: "M2: Athletik & Motorik",
    link: "/f-jugend-m2",
  },
  {
    title: "M3: Technik & Taktik",
    link: "/f-jugend-m3",
  },
  {
    title: "M4: Mentale & soziale Entwicklung",
    link: "/f-jugend-m4",
  },
  {
    title: "M5: Spielsysteme & Positionsspiel",
    link: "/f-jugend-m5",
  },
  {
    title: "M6: Teamkultur & Kommunikation",
    link: "/f-jugend-m6",
  },
];

export default function FJugendPage() {
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-2xl font-bold text-primary mb-6">F-Jugend (4–8 Jahre)</h1>
        <p className="text-lg mb-8 italic">
          Leitfrage: „Wie begleite ich Kinder zwischen 4 und 8 Jahren liebevoll, bewegungsreich und entwicklungsfördernd ins Handballspielen?"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleCards.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className="bg-white/60 backdrop-blur-md p-5 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition duration-300"
            >
              <h3 className="font-bold text-primary text-center">{title}</h3>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
