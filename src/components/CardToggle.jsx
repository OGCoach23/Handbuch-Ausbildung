import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CardToggle() {
  const [showCards, setShowCards] = useState(false);

  const rightCards = [
    { title: "Ausbildungsprinzipien & Werte", link: "/prinzipien" },
    { title: "Handball: Schule fürs Leben", link: "/schule-leben" },
    { title: "Alters- und Leistungsstufen", link: "/altersstufen" },
    { title: "Modulbasierte Ausbildungslogik", link: "/ebene2" },
    { title: "Quer- und Neueinsteiger", link: "/quereinsteiger" },
    { title: "Breitensport vs. Leistungssport", link: "/breitensport" },
  ];

  const leftCards = [
    { title: "Kompetenzkompass", link: "/kompetenzkompass" },
    { title: "Laimkademie", link: "/laimkademie" },
    { title: "F – Jugend", link: "/f-jugend" },
    { title: "E – Jugend", link: "/e-jugend" },
    { title: "D – Jugend", link: "/d-jugend" },
    { title: "C – Jugend", link: "/c-jugend" },
    { title: "B – Jugend", link: "/b-jugend" },
    { title: "A – Jugend", link: "/a-jugend" },
  ];

  const CardList = ({ cards, side }) => (
    <motion.div
      initial={{ x: side === "left" ? -300 : 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: side === "left" ? -300 : 300, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      {cards.map(({ title, link }) => (
        <Link
          key={title}
          to={link}
          className="block bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-4 hover:bg-green-600 hover:text-white transition transform hover:scale-105"
          onClick={() => setShowCards(false)}
        >
          {title}
        </Link>
      ))}
    </motion.div>
  );

  return (
    <>
      {/* Overlay bei offenen Karten */}
      <AnimatePresence>
        {showCards && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setShowCards(false)}
          />
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setShowCards(!showCards)}
        className="fixed top-1/2 right-0 z-50 bg-green-600 text-white p-3 rounded-l-full shadow-lg hover:bg-green-700 transition-colors duration-200"
      >
        {showCards ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>

      {/* Linke Karten */}
      <div className="fixed top-1/4 left-4 z-50">
        <AnimatePresence>
          {showCards && <CardList cards={leftCards} side="left" />}
        </AnimatePresence>
      </div>

      {/* Rechte Karten */}
      <div className="fixed top-1/4 right-4 z-50">
        <AnimatePresence>
          {showCards && <CardList cards={rightCards} side="right" />}
        </AnimatePresence>
      </div>
    </>
  );
}