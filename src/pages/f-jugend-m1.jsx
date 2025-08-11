import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardsData = [
  {
    title: "Zielsetzung dieses Moduls",
    content: [
      "Verstehen der körperlichen, kognitiven, sozialen und emotionalen Entwicklungsmerkmale der Altersgruppe",
      "Gestaltung eines sicheren, spaßorientierten und beziehungsstarken Trainingsrahmens",
      "Aufbau erster sportbezogener Rituale, Bindung und Teamzugehörigkeit",
      "Keine Leistungsmessung – Förderung durch Bewegung, Wiederholung und Begeisterung",
    ],
  },
  {
    title: "Entwicklungsmerkmale",
    content: [
      "Körperlich: Sehr hohe Bewegungsfreude, geringe Ausdauer, grobe Koordination, große Unterschiede im Reifestand",
      "Kognitiv: Magisches Denken, bildhafte Vorstellungen, sehr kurze Konzentrationsspanne",
      "Sozial: Egozentrisch, kaum Perspektivübernahme, hoher Bezug zu Erwachsenen",
      "Emotional: Spontane Freude & Frust, hohe emotionale Impulsivität, Bedarf nach Zuwendung",
    ],
  },
  {
    title: "Was Trainer:innen besonders beachten müssen",
    content: [
      "Spielen statt Üben: Lernen durch Bewegung, nicht durch Instruktion",
      "Rituale geben Sicherheit: Begrüßung, Schlusskreis, Wiederholungen – reduzieren Unsicherheit",
      "Jedes Kind ist König: Jedes Kind will gesehen, gehört, bestärkt werden – unabhängig von \"Leistung\"",
      "Fehler gibt es nicht: Technik wird nicht bewertet – alle Bewegungsformen sind erlaubt",
      "Beziehung vor Inhalt: Bindung sichert Teilnahme und Wiederkommen",
    ],
  },
  {
    title: "Methodik & Organisation",
    content: [
      "Trainingsformate: Bewegungsgeschichten, Kleingruppenspiele, Fantasieparcours",
      "Organisation: Stationen mit freier Wahl, Bewegungsbaustellen, Alltagsmaterialien",
      "Sprache & Kommunikation: Bildhafte Sprache (\"Raketenlauf\"), kurze klare Ansagen",
      "Feedback & Motivation: Viel Lob, Aufgabenorientierung (\"Schaffst du es...?\")",
      "Zeitstruktur: 45–60 Min: Warm-up – Bewegungsreise – Spielform – Schlussritual",
    ],
  },
  {
    title: "Extras & kreative Impulse",
    content: [
      "Vereinsbindung: Ball-Führerschein, Zaubertrikot, Bewegungsfest mit Eltern",
      "Elternintegration: Eltern spielen mit, Mini-Feedback mit 3 Fragen",
      "Wertearbeit: Wochenthemen mit Symbolen (\"Lächeln hilft\")",
      "Kreativideen: Handball-Memory, Tier- und Bewegungsimitation, Musik- oder Rhythmusspiele",
    ],
  },
  {
    title: "Ergebnis für den Trainer",
    highlight: true,
    content: [
      "Du gestaltest ein Training, das Kinder emotional abholt, motorisch fördert und sozial bindet.",
      "Du machst sie neugierig auf Bewegung, Gemeinschaft und Spiel.",
      "Du legst die Grundlage für nachhaltige Vereinszugehörigkeit – ohne Leistungsdruck, aber mit Herz.",
      "Ziel: Spieler:innen sollen mit Begeisterung kommen, sich willkommen fühlen – und mit Freude bleiben.",
    ],
  },
];

export default function Modul1FJugend() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [carouselConfig, setCarouselConfig] = useState({
    radius: 300,
    cardWidth: 320,
    cardHeight: 420,
    availableHeight: 700,
  });

  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const updateSizes = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const cardWidth = Math.min(320, vw * 0.25);
      const cardHeight = cardWidth * 1.3;
      const radius = Math.max(200, vw * 0.2);

      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 0;
      const footerHeight = footerRef.current
        ? footerRef.current.offsetHeight
        : 0;

      const availableHeight = vh - headerHeight - footerHeight;

      setCarouselConfig({ radius, cardWidth, cardHeight, availableHeight });
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

  const getCardPosition = (index) => {
    const { radius } = carouselConfig;
    const offset = (index - currentIndex + cardsData.length) % cardsData.length;
    const angle = (offset * 360) / cardsData.length;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    return { x, z, angle, offset };
  };

  return (
    <>
      {/* Header */}
      <header ref={headerRef}>
        {/* Dein bestehender Header */}
      </header>

      {/* Hauptbereich */}
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: carouselConfig.availableHeight }}
      >
        {/* Überschrift */}
        <motion.div
          initial={{ opacity: 0, y: -50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 w-full max-w-4xl"
          style={{ perspective: "1000px" }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h1 className="text-4xl font-bold text-green-600 text-center mb-4">
              Modul 1: Entwicklungsmerkmale & Methodik
            </h1>
            <p className="text-center text-xl text-green-700 italic leading-relaxed">
              "Wie begleite ich Kinder zwischen 4 und 8 Jahren liebevoll,
              bewegungsreich und entwicklungsfördernd ins Handballspielen?"
            </p>
          </div>
        </motion.div>

        {/* Karussell */}
        <div className="relative flex items-center justify-center overflow-visible">
          {/* Pfeil links */}
          <button
            onClick={rotateLeft}
            disabled={isAnimating}
            className="absolute left-[-60px] z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Karten Container */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: carouselConfig.cardWidth * 2.5,
              height: carouselConfig.cardHeight * 1.2,
              perspective: "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            {cardsData.map((card, index) => {
              const { x, z, angle, offset } = getCardPosition(index);
              const isFront = offset === 0;
              const isVisible = offset <= 3 || offset >= cardsData.length - 3;
              if (!isVisible) return null;

              return (
                <motion.div
                  key={index}
                  className={`absolute left-1/2 top-1/2 rounded-xl shadow-2xl flex items-center justify-center text-center cursor-pointer ${
                    card.highlight
                      ? "border-4 border-yellow-400"
                      : "border border-gray-200"
                  }`}
                  style={{
                    width: carouselConfig.cardWidth,
                    height: carouselConfig.cardHeight,
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: "#166534",
                    transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`,
                    zIndex: isFront ? 20 : 10 - Math.abs(offset),
                    filter: isFront
                      ? "none"
                      : `brightness(${1 - Math.abs(offset) * 0.1})`,
                  }}
                  animate={{
                    x: x,
                    z: z,
                    rotateY: angle,
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
                  <div className="p-6">
                    <h3 className="font-bold text-xl leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pfeil rechts */}
          <button
            onClick={rotateRight}
            disabled={isAnimating}
            className="absolute right-[-60px] z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer ref={footerRef}>
        {/* Dein bestehender Footer */}
      </footer>
    </>
  );
}
