import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardsData = [
  {
    title: "Zielsetzung dieses Moduls",
    content: [
      "Die Trainer:innen erkennen die körperlichen, kognitiven, emotionalen und sozialen Umbruchprozesse in der C-Jugend – und richten ihr Training gezielt darauf aus.",
      "Sie begleiten den Übergang vom kindlichen Spiel zum jugendlichen Leistungsbewusstsein mit Struktur, Klarheit und Beziehung.",
      "Das Training vermittelt Sicherheit und Orientierung, fordert Eigenverantwortung – und fördert aktives Mitdenken."
    ]
  },
  {
    title: "Entwicklungsmerkmale der C-Jugend",
    content: [
      "Körperlich: Wachstumsschübe, ungleiche Reife, temporäre Koordinationsdellen, Leistungsgefälle zwischen biologisch 'frühen' und 'späten' Spielern",
      "Kognitiv: Steigende Spielintelligenz, Regelreflexion, taktisches Denken, verstärktes Bedürfnis nach Mitgestaltung",
      "Sozial: Gruppenzugehörigkeit im Fokus, erste Rollenverteilung (Anführer, Helfer, Widerständler), gesteigerter Wunsch nach Anerkennung",
      "Emotional: Sensibilität für Kritik, schwankendes Selbstbild, Frustration bei Leistungsunterschieden, emotionale Überforderung bei sozialem Druck",
      "In dieser Altersstufe beginnt die Ausbildung von Verantwortungsspielern – mit Rücksicht auf psychologische Reifung und Unterschiedlichkeit."
    ]
  },
  {
    title: "Methodik & Organisation",
    content: [
      "Trainingslogik: Einheiten 90–105 Minuten, mit Struktur: Aktivierung - Technik - Anwendung - Reflexion",
      "Aufgabenorientierung: Spieler:innen treffen Entscheidungen, bekommen offene Fragen statt Lösungen.",
      "Selbststeuerung fördern: Mini-Aufgaben, eigene Zielkarten, Spieler:innen übernehmen Teile der Organisation.",
      "Fehler zulassen & nutzen: Aus Fehlern wird Handlungskompetenz.",
      "Visualisierung von Zielen: Trainingsziele sichtbar machen im Hallenbereich."
    ]
  },
  {
    title: "Was Trainer:innen besonders beachten müssen",
    content: [
      "Trainingsstruktur gibt Halt – aber flexibel anpassen.",
      "Entwicklungsunterschiede erkennen und Varianten anbieten.",
      "Klare Kommunikation – keine Ironie, einfache Sprache.",
      "Struktur und Rituale schaffen Zugehörigkeit.",
      "Verantwortung geben: Gruppenleitungen, Regelklärung, Feedbackgespräche.",
      "Entwicklung sichtbar machen: 'Heute besser als gestern'-Mentalität fördern."
    ]
  },
  {
    title: "Typische Trainerfehler (und Alternativen)",
    content: [
      "'Jetzt konzentriert euch endlich!' - 'Was braucht ihr gerade, um euch besser fokussieren zu können?'",
      "Starre Leistungsgruppen - Levelgruppen, gemischt, wechselnd.",
      "Dauer-Coaching beim Üben - Spieler:innen erklären sich gegenseitig.",
      "Fokus auf Einzelne - Teamrollen rotieren.",
      "Lange Redepassagen - Kürzen auf max. 60 Sek. + Zwischenfragen."
    ]
  },
  {
    title: "Ergebnis für den Trainer",
    highlight: true,
    content: [
      "Du bist Strukturgeber, Rollenklärer, Spielraumöffner.",
      "Du begleitest Spieler:innen durch eine sensible und prägende Phase.",
      "Ziel: Spieler:innen, die sich selbst kennen, im Team funktionieren, Verantwortung übernehmen – und dranbleiben."
    ]
  }
];

export default function Modul1CJugend() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const carouselConfig = {
    radius: 300,
    cardWidth: 320,
    cardHeight: 420,
    availableHeight: 700,
  };

  const headerRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    const updateSizes = () => {
      setIsMobile(window.innerWidth < 768);
      const vh = window.innerHeight;
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      const availableHeight = vh - headerHeight - 100;
      carouselConfig.availableHeight = availableHeight > 0 ? availableHeight : vh;
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const rotateLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const rotateRight = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToCard = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleCardClick = (index) => {
    if (isAnimating) return;
    if (index === currentIndex) {
      setSelectedCard(cardsData[index]);
    } else {
      goToCard(index);
    }
  };

  const getCardPosition3D = (index) => {
    const { radius } = carouselConfig;
    const offset = (index - currentIndex + cardsData.length) % cardsData.length;
    const angle = (offset * 360) / cardsData.length;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    return { x, z, angle, offset };
  };

  const getCardPosition2D = (index) => {
    const offset = index - currentIndex;
    const x = offset * (carouselConfig.cardWidth + 20);
    return { x, offset };
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header ref={headerRef} className="z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="flex justify-center pt-8 pb-4">
          <Link
            to="/c-jugend"
            className="rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 shadow-lg hover:from-blue-600 hover:to-green-500 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            ← Zurück zur C-Jugend Übersicht
          </Link>
        </div>
      </header>

      {/* Hauptbereich */}
      <div
        ref={mainContentRef}
        className="flex-1 flex flex-col items-center justify-center p-4 relative"
        style={{ minHeight: `${carouselConfig.availableHeight}px` }}
      >
        {/* Überschrift */}
        <motion.div
          initial={{ opacity: 0, y: -50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 w-full max-w-5xl"
          style={{ perspective: "1000px" }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-100">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-center mb-6">
              Modul 1: Entwicklungsmerkmale & Methodik
            </h1>
            <p className="text-center text-2xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
              "Wie begleite ich C-Jugendliche durch ihre Umbruchphase mit Struktur, Klarheit und Beziehung?"
            </p>
          </div>
        </motion.div>

        {/* Karussell */}
        <div className="relative flex items-center justify-center w-full overflow-hidden">
          {/* Pfeil links */}
          <motion.button
            onClick={rotateLeft}
            disabled={isAnimating}
            className="absolute left-4 md:left-[-80px] z-30 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-white transition-all duration-300 disabled:opacity-50 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={28} />
          </motion.button>

          {/* Karten Container */}
          <div
            className="relative"
            style={{
              width: isMobile ? carouselConfig.cardWidth * 3 : carouselConfig.cardWidth * 2.5,
              height: isMobile ? carouselConfig.cardHeight : carouselConfig.cardHeight * 1.2,
              perspective: isMobile ? "none" : "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            {cardsData.map((card, index) => {
              const { x, z, angle, offset } = isMobile
                ? getCardPosition2D(index)
                : getCardPosition3D(index);
              const isFront = offset === 0;
              const isVisible = isMobile
                ? Math.abs(offset) <= 1
                : offset <= 3 || offset >= cardsData.length - 3;
              if (!isVisible) return null;

              return (
                <motion.div
                  key={index}
                  className={`absolute rounded-2xl shadow-2xl flex items-center justify-center text-center cursor-pointer backdrop-blur-sm ${
                    card.highlight
                      ? "border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50"
                      : "border border-gray-200 bg-white/95"
                  }`}
                  style={{
                    width: carouselConfig.cardWidth,
                    height: carouselConfig.cardHeight,
                    left: "50%",
                    top: "50%",
                    transform: isMobile
                      ? `translate(-50%, -50%) translateX(${x}px)`
                      : `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`,
                    zIndex: isFront ? 20 : 10 - Math.abs(offset),
                    filter: isFront
                      ? "none"
                      : `brightness(${1 - Math.abs(offset) * 0.1})`,
                  }}
                  animate={{
                    scale: isFront ? 1 : 0.9,
                    opacity: isFront ? 1 : 0.8,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: isFront ? 1.05 : 0.95,
                    zIndex: 25,
                    transition: { duration: 0.2 },
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="p-8">
                    <h3 className="font-bold text-2xl leading-tight text-gray-800">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pfeil rechts */}
          <motion.button
            onClick={rotateRight}
            disabled={isAnimating}
            className="absolute right-4 md:right-[-80px] z-30 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-white transition-all duration-300 disabled:opacity-50 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>

        {/* Indikatoren */}
        <div className="mt-8 flex space-x-4">
          {cardsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToCard(index)}
              disabled={isAnimating}
              className={`w-5 h-5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-600 to-green-600 scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 max-w-4xl w-full shadow-2xl overflow-y-auto max-h-[85vh] border border-gray-200"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                className={`text-4xl font-bold mb-8 text-center ${
                  selectedCard.highlight
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                {selectedCard.title}
              </h2>
              <ul className="list-disc pl-8 space-y-4 text-gray-700 text-xl">
                {selectedCard.content.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-10">
                <motion.button
                  onClick={() => setSelectedCard(null)}
                  className="px-10 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-green-500 transition-all duration-300 font-semibold text-xl shadow-lg transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schließen
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
