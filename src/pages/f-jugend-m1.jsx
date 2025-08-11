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

  return (
    <div className="bg-white min-h-screen p-8 flex flex-col items-center">
      {/* Zurück Button */}
      <Link
        to="/f-jugend"
        className="mb-8 rounded-full bg-white text-green-600 px-6 py-2 shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
      >
        ← Zurück zur F-Jugend Übersicht
      </Link>

      {/* Karussell */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Pfeil links */}
        <button
          onClick={rotateLeft}
          className="absolute left-4 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-blue-500 hover:text-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Karten im Kreis */}
        <div className="relative w-[800px] h-[400px]" style={{ perspective: "1500px" }}>
          {cardsData.map((card, index) => {
            const offset = (index - currentIndex + cardsData.length) % cardsData.length;
            const angle = (360 / cardsData.length) * offset;
            const isFront = offset === 0;

            return (
              <motion.div
                key={index}
                className={`absolute top-1/2 left-1/2 w-[250px] h-[350px] rounded-xl shadow-2xl flex items-center justify-center text-center cursor-pointer ${
                  card.highlight ? "border-4 border-yellow-300" : ""
                }`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.8)",
                  color: "#166534",
                  transform: `rotateY(${angle}deg) translateZ(400px)`,
                }}
                whileHover={{
                  backgroundColor: "#005baa",
                  color: "#ffffff",
                  scale: isFront ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
                onClick={() => isFront && setSelectedCard(card)}
              >
                <h3 className="font-bold px-2">{card.title}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* Pfeil rechts */}
        <button
          onClick={rotateRight}
          className="absolute right-4 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-blue-500 hover:text-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Ausgewählte Karte im Vordergrund */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${
                  selectedCard.highlight ? "text-yellow-500" : "text-green-600"
                }`}
              >
                {selectedCard.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {selectedCard.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedCard(null)}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-600 transition-colors"
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
