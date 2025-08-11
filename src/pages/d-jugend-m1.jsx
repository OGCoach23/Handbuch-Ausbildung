import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Daten für die Karten ---
const cardsData = [
  {
    title: "Zielsetzung dieses Moduls",
    content: [
      "Die Trainer:innen erkennen die typischen körperlichen, geistigen und sozialen Veränderungen der Vorpubertät.",
      "Sie gestalten ein leistungsorientiertes, aber kindgerechtes Training mit klarer Struktur und viel Spiel.",
      "Der Übergang vom 'spielerischen Erleben' zur 'spielerischen Leistung' wird aktiv gestaltet – ohne Druck, aber mit Anspruch.",
      "Spieler:innen erfahren: Ich wachse an Herausforderungen – nicht an Lob oder Angst.",
    ],
  },
  {
    title: "Entwicklungsmerkmale der D-Jugend",
    content: [
      "Körperlich: Erste Pubertätszeichen (v.a. bei Mädchen), Wachstumsschübe, Koordinationsdellen, große Unterschiede in Kraft & Ausdauer",
      "Kognitiv: Reflektierteres Denken, erste taktische Logik möglich, Erklärungen werden nachvollzogen und hinterfragt",
      "Sozial: Freundschaften & Anerkennung gewinnen an Bedeutung, Rollenverhalten differenziert sich, erste Cliquen entstehen",
      "Emotional: Stolz, Scham, Frust wechseln schnell – Feedback wirkt stark, auch unbewusst",
      "Sportlich: Wunsch nach Spielzeit & Erfolg nimmt zu, Spielverständnis erwacht, Rückzug bei Misserfolg ist häufig",
    ],
  },
  {
    title: "Was Trainer:innen besonders beachten müssen",
    content: [
      "Individuelle Entwicklung ernst nehmen – Wachstum & Reife sind extrem unterschiedlich – keine Rankings!",
      "Spieler:innen fordern, aber nicht überfordern – viel erklären, aber nicht zupredigen, Selbstdenken fördern!",
      "Stabilität durch Rituale & Struktur – feste Abläufe, Wiederholungen, persönliche Begrüßung, Abschlussrunde geben Halt",
      "Leistung sichtbar machen – nicht vergleichen: 'Heute besser als gestern' statt 'besser als andere'",
      "Fragen statt Korrekturen: 'Was hätte dir geholfen?' statt 'Warum hast du das nicht gemacht?'",
      "Klare, motivierende Sprache – kurze Sätze, positive Ansprache, keine Ironie – Begeisterung statt Bewertung",
    ],
  },
  {
    title: "Methodik & Organisation",
    content: [
      "Trainingsdauer & Aufbau: 75–90 Minuten, Struktur: Warm-up → Technik/Spiel → Intensivspiel → Reflexion",
      "Gruppengestaltung: Heterogene Gruppen, wechselnde Aufgaben & Rollen, Rücksicht auf Reifegrade",
      "Kommunikationsstil: 'Du kannst das.' / 'Was war dein bester Moment heute?' / Rückfragen erwünscht",
      "Spielorientierung bleibt: Technik wird immer im Spielkontext vermittelt – keine reinen Technikblöcke",
      "Verantwortung fördern: Aufwärmleitung, Regelvorschläge, Trainingsfeedback von Spieler:innen",
    ],
  },
  {
    title: "Typische Trainerfehler (und wie du sie vermeidest)",
    content: [
      "'Du bist der Spielmacher' → Jede:r darf jede Rolle erleben – Positionsverständnis statt Festlegung",
      "'Ihr müsst euch jetzt konzentrieren!' → 'Was hilft euch gerade, besser bei der Sache zu bleiben?'",
      "Lange Monologe → Max. 60 Sek. Reden – dann ausprobieren lassen",
      "Technikdrill ohne Spielbezug → Technik direkt ins Spiel integrieren, auch im 2:2 oder 3:3",
      "Gruppenvergleiche → Fokus auf individuelle Entwicklung im Teamkontext",
    ],
  },
  {
    title: "Ergebnis für den Trainer",
    highlight: true,
    content: [
      "Du gestaltest ein Training, das weder überfordert noch unterfordert.",
      "Du schaffst eine Atmosphäre, in der sich Spieler:innen ernst genommen, gefordert und sicher fühlen.",
      "Du legst den Grundstein für spielintelligente, selbstbewusste und teamfähige Jugendliche.",
      "Ziel: Spieler:innen, die Spaß am Handball haben, sich selbst entdecken – und wachsen wollen, weil sie dürfen.",
    ],
  },
];

export default function Modul1DJugend() {
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

  const getCardPosition = (index) => {
    const offset = (index - currentIndex + cardsData.length) % cardsData.length;
    const angle = (offset * 360) / cardsData.length;
    const radius = 300;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    return { x, z, angle, offset };
  };

  return (
    <div className="bg-white min-h-screen p-8 flex flex-col items-center">
      <Link
        to="/d-jugend"
        className="mb-8 rounded-full bg-white text-green-600 px-6 py-2 shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
      >
        ← Zurück zur D-Jugend Übersicht
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 w-full max-w-4xl"
        style={{ perspective: "1000px" }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 transform-gpu hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-rotate-y-1">
          <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
            Modul 1: Entwicklungsmerkmale & Methodik
          </h1>
          <div className="text-center">
            <p className="text-xl text-green-700 italic leading-relaxed">
              "Wie gestalten wir ein motivierendes, entwicklungsfreundliches Training für Kinder, die sich mitten im Umbruch befinden – körperlich, geistig und sozial?"
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative w-full max-w-8xl h-[900px] flex items-center justify-center overflow-hidden">
        <button
          onClick={rotateLeft}
          disabled={isAnimating}
          className="absolute left-8 z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[800px] h-[700px]" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
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
                  animate={{ x, z, rotateY: angle, scale: isFront ? 1 : 0.9, opacity: isFront ? 1 : 0.8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={{ scale: isFront ? 1.05 : 0.95, zIndex: 25, transition: { duration: 0.2 } }}
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

        <button
          onClick={rotateRight}
          disabled={isAnimating}
          className="absolute right-8 z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {cardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              disabled={isAnimating}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 scale-125 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

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
              <h2 className={`text-3xl font-bold mb-6 ${selectedCard.highlight ? "text-yellow-600" : "text-green-600"}`}>
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
