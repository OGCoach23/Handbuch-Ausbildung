import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Carousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full mt-12 overflow-hidden">
      {/* Carousel Container */}
      <div className="relative bg-white rounded-2xl shadow-lg min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="p-8 text-center"
          >
            <Link 
              to={cards[currentIndex].link} 
              className="block hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6">
                <div className="w-full h-48 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-lg font-medium">
                    {cards[currentIndex].imageAlt || "Systemdiagramm"}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {cards[currentIndex].title}
              </h3>
              
              <div className="text-green-600 space-y-2">
                <p><strong>Systemname:</strong> {cards[currentIndex].systemName}</p>
                <p><strong>Einsatzdauer:</strong> {cards[currentIndex].duration}</p>
                <p><strong>Ziel des Systems:</strong> {cards[currentIndex].description}</p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-colors z-10"
        >
          <ChevronLeft size={24} className="text-green-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-colors z-10"
        >
          <ChevronRight size={24} className="text-green-600" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
