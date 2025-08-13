import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardsData = [
  {
    title: "Zielsetzung dieses Moduls",
    content: [
      "Spieler:innen werden in ihrer körperlichen, kognitiven und emotionalen Reife differenziert gefördert",
      "Trainer:innen passen Inhalte, Ansprache und Struktur an die leistungsrelevante Entwicklungsphase an",
      "Ziel ist eine Ausbildung, die sowohl auf den Übergang in die A-Jugend als auch auf persönliche Reife und Eigenverantwortung vorbereitet"
    ]
  },
  {
    title: "Entwicklungsmerkmale der B-Jugend",
    content: [
      "Körperlich: Viele haben das Wachstum abgeschlossen, Kraft- & Belastungsaufbau sind möglich, große Leistungsschere",
      "Kognitiv: Strategisches Denken, Planung, kritisches Mitdenken, Wunsch nach Eigenbeteiligung",
      "Emotional: Selbstbild stabilisiert sich, aber Leistungsdruck und Vergleich mit anderen (auch online) nehmen zu",
      "Sozial: Gruppenstrukturen stabil, Rollenbewusstsein steigt, Loyalität und Konfliktpotenzial nehmen zu",
      "Motivation: Leistungstypen zeigen Eigenantrieb – aber extrinsische Einflüsse (Trainer, Eltern, Umfeld) bleiben relevant"
    ]
  },
  {
    title: "Was Trainer:innen besonders beachten müssen",
    content: [
      "Ernst nehmen – auf Augenhöhe bleiben: Jugendliche wollen gehört werden, ohne dass Trainer:innen zum Kumpel werden müssen",
      "Persönlichkeitsunterschiede anerkennen: Unterschiedliche Reifegrade erfordern individuelle Ansprache und Förderung",
      "Feedback systematisieren: Strukturierte Zielgespräche, Videoanalysen, klare Rückmeldungspfade statt Bauchgefühl",
      "Verantwortung übergeben: Spieler:innen leiten Aufwärmen, übernehmen Co-Coaching, führen Trainingsprotokolle",
      "Langfristigkeit betonen: Entwicklung statt Ergebnis – Haltung, Kommunikation und Geduld statt kurzfristiger Druck"
    ]
  },
  {
    title: "Methodik & Organisation",
    content: [
      "Trainingsstruktur: 2–3 Einheiten/Woche à 90–105 Minuten + Zusatzmodule (Athletik, Video, Taktik)",
      "Lernformate: Gruppenaufgaben, Selbstreflexion, Videoanalyse, Feedbackrunden, Spieler:innen-Input",
      "Teamsteuerung: Rollenvergabe, Aufgabenverteilung, Mitverantwortung z. B. für Scouting, Warm-up, Kommunikation",
      "Zielorientierung: Persönliche Ziele im Training definieren, festhalten und gemeinsam nachverfolgen",
      "Spielzeitmanagement: Transparent, kommuniziert, begründet – Entwicklungsgespräche als Grundlage"
    ]
  },
  {
    title: "Typische Fallstricke & Trainerfehler",
    content: [
              "'Alle trainieren gleich.' → Besser: Ziel- und potenzialorientiert differenzieren",
              "'Jetzt ist Schluss mit lustig.' → Leistung braucht Freude – fordern und fördern mit Haltung statt Härte",
              "'Wenn du X willst, musst du mehr…' → Klare Zielabsprache, Entwicklung begleiten, statt nur zu fordern",
              "'Ich hab das erklärt – mach's!' → Jugendliche wollen verstehen, nicht nur gehorchen → Dialog und Geduld"
    ]
  },
  {
    title: "Ergebnis für den Trainer",
    highlight: true,
    content: [
      "Du entwickelst die Jugendlichen zu spielerisch starken, eigenständigen Persönlichkeiten.",
      "Du gibst Struktur, forderst Eigenverantwortung und setzt gezielt Impulse zur Leistungsentwicklung.",
      "Du begleitest Identitätsbildung – mit sportlicher und pädagogischer Klarheit.",
      "Ziel: Spieler:innen, die Verantwortung übernehmen, Entscheidungen reflektieren – und den nächsten Schritt gehen wollen."
    ]
  }
];

export default function Modul1AJugend() {
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
  const footerRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    const updateSizes = () => {
      setIsMobile(window.innerWidth < 768);
      const vh = window.innerHeight;
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      const assumedFooterHeight = 100;
      const availableHeight = vh - headerHeight - assumedFooterHeight;
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
            to="/a-jugend" 
            className="rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 shadow-lg hover:from-blue-600 hover:to-green-500 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            ← Zurück zur A-Jugend Übersicht
          </Link>
        </div>
      </header>

      {/* Hauptbereich */}
      <div 
        ref={mainContentRef} 
        className="flex-1 flex flex-col items-center justify-center p-4"
        style={{ minHeight: `${carouselConfig.availableHeight}px` }}
      >
        {/* Überschrift */}
        <motion.div
          initial={{ opacity: 0, y: -50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 w-full max-w-4xl"
          style={{ perspective: "1000px" }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h1 className="text-4xl font-bold text-green-600 text-center mb-4">
              Modul 1: Entwicklungsmerkmale & Methodik
            </h1>
            <p className="text-center text-xl text-green-700 italic leading-relaxed">
              "Spielerisch starke, eigenständige Persönlichkeiten entwickeln"
            </p>
          </div>
        </motion.div>

        {/* Karussell - PERFEKTE ZENTRIERUNG & RESPONSIV */}
        <div className="relative flex items-center justify-center w-full overflow-hidden">
          {/* Pfeil links */}
          <motion.button
            onClick={rotateLeft}
            disabled={isAnimating}
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-2 md:left-[-60px] z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Karten Container - MATHEMATISCH KORREKTE ZENTRIERUNG */}
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
              
              const isFront = isMobile ? offset === 0 : offset === 0;
              const isVisible = isMobile 
                ? Math.abs(offset) <= 1 
                : offset <= 3 || offset >= cardsData.length - 3;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={index}
                  className={`absolute rounded-xl shadow-2xl flex items-center justify-center text-center cursor-pointer ${
                    card.highlight ? "border-4 border-yellow-400" : "border border-gray-200"
                  }`}
                  style={{
                    width: carouselConfig.cardWidth,
                    height: carouselConfig.cardHeight,
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: "#166534",
                    left: "50%",
                    top: "50%",
                    transform: isMobile 
                      ? `translate(-50%, -50%) translateX(${x}px)`
                      : `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`,
                    zIndex: isFront ? 20 : 10 - Math.abs(offset),
                    filter: isFront ? "none" : `brightness(${1 - Math.abs(offset) * 0.1})`,
                  }}
                  animate={{
                    scale: isFront ? 1 : 0.9,
                    opacity: isFront ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
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
          <motion.button
            onClick={rotateRight}
            disabled={isAnimating}
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-2 md:right-[-60px] z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Indikatoren */}
        <div className="mt-6 flex space-x-3">
          {cardsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToCard(index)}
              disabled={isAnimating}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-blue-600 scale-125 shadow-lg" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-3xl w-full shadow-2xl overflow-y-auto max-h-[85vh]"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className={`text-3xl font-bold mb-6 ${
                selectedCard.highlight ? "text-yellow-600" : "text-green-600"
              }`}>
                {selectedCard.title}
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                {selectedCard.content.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => setSelectedCard(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium text-lg"
              >
                Schließen
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
