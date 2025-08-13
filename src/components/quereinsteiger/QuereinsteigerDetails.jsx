import { motion } from 'framer-motion';

const QuereinsteigerDetails = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-3xl font-bold text-green-700 mb-4">
      Handbuch für Quereinsteiger 🚀
    </h3>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong>Überblick verschaffen:</strong> Lerne die wichtigsten Regeln und spezifische Handball-Taktiken.</li>
      <li><strong>Lehrplan anpassen:</strong> Adaptiere deine Vorkenntnisse an die Handball-spezifischen Anforderungen.</li>
      <li><strong>Praktische Übungen:</strong> Finde Inspiration in unserer Datenbank für Trainingsübungen und Spielformen.</li>
    </ul>
    <p className="mt-4 text-lg">
      Deine Vorkenntnisse sind ein riesiger Vorteil. Hier zeigen wir dir, wie du sie am besten einsetzt.
    </p>
  </motion.div>
);

export default QuereinsteigerDetails;
