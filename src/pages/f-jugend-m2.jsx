import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Daten für die Karten ---
const cardsData = [
  {
    title: "Zielsetzung dieses Moduls",
    content: [
      "Entwicklung grundlegender Bewegungskompetenzen durch spielerische, fantasievolle Übungen",
      "Aufbau von Koordination, Gleichgewicht und Körpergefühl ohne Leistungsdruck",
      "Förderung der natürlichen Bewegungsfreude und des Entdeckungsdrangs",
      "Schaffung einer sicheren, motivierenden Umgebung für motorische Experimente",
    ],
  },
  {
    title: "Entwicklungsmerkmale",
    content: [
      "Körperlich: Sehr hohe Bewegungsfreude, geringe Ausdauer, grobe Koordination, große Unterschiede im Reifestand",
      "Motorisch: Grundlegende Bewegungsmuster vorhanden, aber noch unkoordiniert",
      "Kognitiv: Kurze Aufmerksamkeitsspanne, lernen durch Nachahmung und Wiederholung",
      "Sozial: Egozentrisch, aber neugierig auf gemeinsame Aktivitäten",
    ],
  },
  {
    title: "Was Trainer:innen besonders beachten müssen",
    content: [
      "Bewegung vor Technik: Lernen durch Tun, nicht durch Erklären",
      "Vielfalt statt Spezialisierung: Verschiedene Bewegungsformen anbieten",
      "Spaß vor Leistung: Keine Bewertung, nur Ermutigung",
      "Individuelle Unterschiede: Jedes Kind hat sein eigenes Tempo",
      "Sicherheit: Bewegungsräume schaffen, die zum Experimentieren einladen",
    ],
  },
  {
    title: "Methodik & Organisation",
    content: [
      "Trainingsformate: Bewegungsgeschichten, Tier-Imitationen, Fantasieparcours",
      "Organisation: Stationen mit freier Wahl, Bewegungsbaustellen, Alltagsmaterialien",
      "Sprache & Kommunikation: Bildhafte Sprache (\"Hüpfe wie ein Frosch\"), kurze klare Ansagen",
      "Feedback & Motivation: Viel Lob, Aufgabenorientierung (\"Kannst du es wie ein Eichhörnchen?\")",
      "Zeitstruktur: 45–60 Min: Warm-up – Bewegungsreise – Spielform – Schlussritual",
    ],
  },
  {
    title: "Extras & kreative Impulse",
    content: [
      "Vereinsbindung: Bewegungsabzeichen, Zaubertrikot, Bewegungsfest mit Eltern",
      "Elternintegration: Eltern zeigen Bewegungen vor, Mini-Feedback mit 3 Fragen",
      "Wertearbeit: Wochenthemen mit Symbolen (\"Mutig sein hilft\")",
      "Kreativideen: Bewegungs-Memory, Musik- und Rhythmusspiele, Natur-Imitationen",
    ],
  },
  {
    title: "Ergebnis für den Trainer",
    highlight: true,
    content: [
      "Du schaffst eine bewegungsfreundliche Umgebung, die Kinder zum Experimentieren einlädt.",
      "Du förderst motorische Grundlagen spielerisch und ohne Druck.",
      "Du legst den Grundstein für späteres, koordiniertes Bewegungslernen.",
      "Ziel: Spieler:innen sollen mit Freude und Neugier neue Bewegungen ausprobieren.",
    ],
  },
];

export default function Modul2FJugend() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Berechne Positionen für alle Karten
  const getCardPosition = (index) => {
    const offset = (index - currentIndex + cardsData.length) % cardsData.length;
    const angle = (offset * 360) / cardsData.length;
    const radius = 300; // Größerer Radius für bessere Verteilung
    
    // Konvertiere Polar- zu Kartesischen Koordinaten
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    
    return { x, z, angle, offset };
  };

  return (
    <div className="bg-white min-h-screen p-8 flex flex-col items-center">
      {/* Zurück Button */}
      <Link
        to="/f-jugend"
        className="mb-8 rounded-full bg-white text-green-600 px-6 py-2 shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
      >
        ← Zurück zur F-Jugend Übersicht
      </Link>

      {/* Überschrift und Leitfrage in 3D-Karte */}
      <motion.div
        initial={{ opacity: 0, y: -50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 w-full max-w-4xl"
        style={{ perspective: "1000px" }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 transform-gpu hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-rotate-y-1">
          <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
            Modul 2: Athletik & Motorik
          </h1>
          <div className="text-center">
            <p className="text-xl text-green-700 italic leading-relaxed">
              "Wie entwickle ich mit Spaß, Fantasie und Bewegungslust die motorische Basis für alles, was später kommt?"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Karussell Container - Größer und besser zentriert */}
      <div className="relative w-full max-w-8xl h-[900px] flex items-center justify-center overflow-hidden">
        {/* Pfeil links */}
        <button
          onClick={rotateLeft}
          disabled={isAnimating}
          className="absolute left-8 z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <ChevronLeft size={24} />
        </button>

        {/* 3D Karussell - Größerer Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div 
            className="relative w-[800px] h-[700px]" 
            style={{ 
              perspective: "1200px",
              transformStyle: "preserve-3d"
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
                  className={`absolute top-1/2 left-1/2 w-[320px] h-[420px] rounded-xl shadow-2xl flex items-center justify-center text-center cursor-pointer ${
                    card.highlight ? "border-4 border-yellow-400" : "border border-gray-200"
                  }`}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: "#166534",
                    transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`,
                    zIndex: isFront ? 20 : 10 - Math.abs(offset),
                    filter: isFront ? "none" : `brightness(${1 - Math.abs(offset) * 0.1})`,
                  }}
                  initial={false}
                  animate={{
                    x: x,
                    z: z,
                    rotateY: angle,
                    scale: isFront ? 1 : 0.9,
                    opacity: isFront ? 1 : 0.8,
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: isFront ? 1.05 : 0.95,
                    zIndex: 25,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="p-6">
                    <h3 className="font-bold text-xl leading-tight">{card.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pfeil rechts */}
        <button
          onClick={rotateRight}
          disabled={isAnimating}
          className="absolute right-8 z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indikator für aktuelle Position */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {cardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              disabled={isAnimating}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-blue-600 scale-125 shadow-lg" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Aktuelle Position Anzeige */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-white/90 px-4 py-2 rounded-full shadow-lg">
            <span className="text-sm font-medium text-gray-700">
              {currentIndex + 1} von {cardsData.length}
            </span>
          </div>
        </div>
      </div>

      {/* Ausgewählte Karte im Vordergrund */}
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
              <h2
                className={`text-3xl font-bold mb-6 ${
                  selectedCard.highlight ? "text-yellow-600" : "text-green-600"
                }`}
              >
                {selectedCard.title}
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                {selectedCard.content.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedCard(null)}
                className="mt-8 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium text-lg"
              >
                Schließen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
