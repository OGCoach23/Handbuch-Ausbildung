import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importiere die neuen Detail-Komponenten
import NeueinsteigerDetails from '../components/quereinsteiger/NeueinsteigerDetails';
import QuereinsteigerDetails from '../components/quereinsteiger/QuereinsteigerDetails';
import ErfahreneDetails from '../components/quereinsteiger/ErfahreneDetails';

// Ausgelagerte Daten für die Karten
const cardData = [
  { id: 'neueinsteiger', title: 'Neueinsteiger' },
  { id: 'quereinsteiger', title: 'Quereinsteiger' },
  { id: 'erfahrene', title: 'Erfahrene' },
];

// Die neue Komponente, die basierend auf dem `activeCard`-State die richtige Detail-Komponente rendert
const DetailContent = ({ activeCard }) => {
  switch (activeCard) {
    case 'neueinsteiger':
      return <NeueinsteigerDetails />;
    case 'quereinsteiger':
      return <QuereinsteigerDetails />;
    case 'erfahrene':
      return <ErfahreneDetails />;
    default:
      return null;
  }
};

export default function Quereinsteiger() {
  const [activeCard, setActiveCard] = useState(null);
  const detailsRef = useRef(null);

  // Scrollt zur Details-Sektion, wenn eine Karte ausgewählt wird
  useEffect(() => {
    if (activeCard && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeCard]);

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Überschrift und Einleitung */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center my-8"
      >
        <h1 className="text-4xl font-bold text-green-700">Dein Weg in die Trainertätigkeit</h1>
        <p className="mt-4 text-xl text-gray-600">
          Wähle die Karte, die am besten zu deiner Erfahrung passt, um deinen persönlichen Leitfaden zu starten.
        </p>
      </motion.div>

      {/* Karten-Sektion */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              relative flex flex-col items-center justify-center p-6 rounded-2xl shadow-xl cursor-pointer
              transition-all duration-300 ease-in-out
              ${activeCard === card.id ? 'bg-blue-100 scale-105 ring-4 ring-blue-500' : 'bg-white hover:scale-105 hover:shadow-2xl'}
              w-72 h-48 md:w-80 md:h-52
            `}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className={`text-xl font-semibold ${activeCard === card.id ? 'text-blue-700' : 'text-gray-800'}`}>
              {card.title}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Detail-Sektion, die dynamisch gerendert wird */}
      <AnimatePresence mode="wait">
        {activeCard && (
          <motion.div
            ref={detailsRef}
            key={activeCard}
            className="mt-16 bg-white p-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hier wird die neue Komponente aufgerufen */}
            <DetailContent activeCard={activeCard} />
            
            <button
              onClick={() => setActiveCard(null)}
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Schließen
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
