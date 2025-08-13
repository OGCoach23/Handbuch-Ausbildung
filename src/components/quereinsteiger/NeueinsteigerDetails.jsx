import { motion } from 'framer-motion';

const NeueinsteigerDetails = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-3xl font-bold text-green-700 mb-4">
      Anleitung für Neueinsteiger 📝
    </h3>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong>Grundlagen lernen:</strong> Absolviere die Online-Kurse zu den Basisregeln und dem Spielfeld.</li>
      <li><strong>Mentorenprogramm:</strong> Nimm am Mentorenprogramm teil, um von erfahrenen Trainern zu lernen.</li>
      <li><strong>Erste Schritte auf dem Feld:</strong> Beginne mit spielerischen Übungen und dem Kennenlernen der Kinder.</li>
    </ul>
    <p className="mt-4 text-lg">
      Diese Sektion ist dein erster Schritt in die Welt des Trainer-Daseins.
    </p>
  </motion.div>
);

export default NeueinsteigerDetails;
