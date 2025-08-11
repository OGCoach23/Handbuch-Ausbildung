import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Daten für die Karten ---
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

  const rotateLeft = () => setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  const rotateRight = () => setCurrentIndex((prev) => (prev + 1) % cardsData.length);

  const handleCardClick = (cardIndex) => {
    // Berechne den Offset der angeklickten Karte
    const offset = (cardIndex - currentIndex + cardsData.length) % cardsData.length;
    
    // Wenn es eine seitliche Karte ist, drehe das Karussell zu ihr
    if (offset !== 0) {
      setCurrentIndex(cardIndex);
    } else {
      // Wenn es die vordere Karte ist, öffne den Inhalt
      setSelectedCard(cardsData[cardIndex]);
    }
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

      {/* Karussell Container */}
      <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center overflow-hidden">
        {/* Pfeil links */}
        <button
          onClick={rotateLeft}
          className="absolute left-4 z-20 bg-white/90 rounded-full p-3 shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Karten im 3D-Kreis */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div 
            className="relative w-[600px] h-[500px]" 
            style={{ 
              perspective: "1200px",
              transformStyle: "preserve-3d"
            }}
          >
            {cardsData.map((card, index) => {
              const offset = (index - currentIndex + cardsData.length) % cardsData.length;
              const angle = (360 / cardsData.length) * offset;
              const radius = 250; // Radius des Kreises
              const isFront = offset === 0;
              const isVisible = offset <= 2 || offset >= cardsData.length - 2; // Nur sichtbare Karten rendern

              if (!isVisible) return null;

              return (
                <motion.div
                  key={index}
                  className={`absolute top-1/2 left-1/2 w-[280px] h-[380px] rounded-xl shadow-2xl flex items-center justify-center text-center cursor-pointer transform-gpu ${
                    card.highlight ? "border-4 border-yellow-400" : "border border-gray-200"
                  }`}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: "#166534",
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden",
                    zIndex: isFront ? 10 : 5 - Math.abs(offset),
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.98)",
                    color: "#166534",
                    scale: 1.02,
                    zIndex: 15,
                    transition: { duration: 0.2 }
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="p-4">
                    <h3 className="font-bold text-lg leading-tight">{card.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pfeil rechts */}
        <button
          onClick={rotateRight}
          className="absolute right-4 z-20 bg-white/90 rounded-full p-3 shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indikator für aktuelle Position */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {cardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-blue-600 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Ausgewählte Karte im Vordergrund */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
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
                className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
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
