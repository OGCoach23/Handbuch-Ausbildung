import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardsData = [
  {
    title: "Zielsetzung dieses Moduls",
    content: [
      "Kinder lernen, sich im Raum zu orientieren und auf Mitspieler:innen zu reagieren.",
      "Erste Spielprinzipien wie Breite, Tiefe und Rückzugsverhalten werden spielerisch vermittelt.",
      "Alle dürfen alles ausprobieren – Positionen werden erlebt, aber nicht festgelegt.",
      "Trainer:innen fördern Spielintelligenz durch Regeln, Zonen und Rollen – statt durch Systeme."
    ]
  },
  {
    title: "Grundprinzipien für die Altersstufe",
    content: [
      "Viel spielen – wenig reden: Lernen durch Erleben – kurze Erklärungen, lange Spielformen.",
      "Alle dürfen alles: Positionen rotieren, Erfahrungen sammeln in Angriff, Abwehr und Tor.",
      "Räume sichtbar machen: Zonen markieren, Raumaufgaben formulieren.",
      "Spiellogik statt Systemlogik: 'Was braucht das Spiel gerade?' statt 'Was macht mein Posten?'.",
      "Mini-Regeln statt Vorgaben: z. B. 'Jeder muss einmal passen, bevor ein Tor zählt'."
    ]
  },
  {
    title: "Inhalte & Entwicklungsziele",
    content: [
      "Raumgefühl – freie Räume erkennen, ausweichen, Breite halten.",
      "Mitspielerwahrnehmung – Zusammenspiel statt Einzelaktionen, Unterstützung erkennen.",
      "Rollenwechsel – Angriff, Abwehr, Tor, Helfer, Beobachter regelmäßig erleben.",
      "Übersicht & Antizipation – Spielsituationen früher erkennen, einfache Reaktionen vorbereiten.",
      "Umschaltverhalten – Rückzug nach Ballverlust, Räume öffnen nach Ballgewinn."
    ]
  },
  {
    title: "Spielformen & Methodik",
    content: [
      "Zonenspiele – Spielfeld in Zonen, Wurf nur aus bestimmter Zone.",
      "4-Tore-Spiel – Raumöffnung und Entscheidungsvielfalt.",
      "Positionschaos – max. 3 Sekunden in einem Feld.",
      "Goldene Zone-Spiel – Punkte nur aus bestimmten Zonen.",
      "Rollenroulette – auf Signal Rolle wechseln.",
      "2:1 / 3:2 Situationen – Über-/Unterzahl bewusst erleben."
    ]
  },
  {
    title: "Didaktische Hilfen",
    content: [
      "Feldmarkierungen – Orientierung ermöglichen.",
      "Rollenkarten – Aufgaben sichtbar machen.",
      "Beobachtungsaufträge – Kinder beobachten und Rückmeldung geben.",
      "Spezialspielregeln – Prinzipien erfahrbar machen."
    ]
  },
  {
    title: "Ergebnis für den Trainer",
    highlight: true,
    content: [
      "Du ermöglichst deinen Spieler:innen ein erstes Gefühl für Spiellogik, Raumverhalten und Zusammenspiel.",
      "Du zeigst ihnen, wie Entscheidungen entstehen – und warum sie etwas tun.",
      "Du legst die Basis für taktisches Denken – ohne es zu nennen.",
      "Ziel: Spieler:innen, die den Raum nutzen, Entscheidungen treffen – und gemeinsam besser spielen wollen."
    ]
  }
];

export default function Modul5EJugend() {
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
        to="/e-jugend" 
        className="mb-8 rounded-full bg-white text-green-600 px-6 py-2 shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
      >
        ← Zurück zur E-Jugend Übersicht
      </Link>

      {/* Überschrift und Leitfrage */}
      <motion.div
        initial={{ opacity: 0, y: -50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 w-full max-w-4xl"
        style={{ perspective: "1000px" }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 transform-gpu hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-rotate-y-1">
          <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
            Modul 5: Spielintelligenz & Raumverhalten
          </h1>
          <div className="text-center">
            <p className="text-xl text-green-700 italic leading-relaxed">
              "Wie lernen Kinder, den Raum zu nutzen, Entscheidungen zu treffen und mit anderen zusammenzuspielen – ohne starre Systeme?"
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3D Karussell */}
      <div className="relative w-full max-w-8xl h-[900px] flex items-center justify-center overflow-hidden">
        {/* Linker Pfeil */}
        <button
          onClick={rotateLeft}
          disabled={isAnimating}
          className="absolute left-8 z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Karussell Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div 
            className="relative w-[800px] h-[700px]"
            style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
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
                  animate={{
                    x,
                    z,
                    rotateY: angle,
                    scale: isFront ? 1 : 0.9,
                    opacity: isFront ? 1 : 0.8
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
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

        {/* Rechter Pfeil */}
        <button
          onClick={rotateRight}
          disabled={isAnimating}
          className="absolute right-8 z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indikator-Punkte */}
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

        {/* Position Anzeige */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-gray-600 font-medium z-30">
          {currentIndex + 1} von {cardsData.length}
        </div>
      </div>

      {/* Modal für Karteninhalt */}
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
