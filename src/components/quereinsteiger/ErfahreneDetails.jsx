import { motion } from 'framer-motion';

const ErfahreneDetails = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-3xl font-bold text-green-700 mb-4">
      Informationen für erfahrene Trainer 🏆
    </h3>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong>Vertiefung:</strong> Entdecke fortgeschrittene Taktiken und Techniken.</li>
      <li><strong>Spezialisierung:</strong> Finde spezielle Trainingspläne für bestimmte Altersgruppen oder Positionen.</li>
      <li><strong>Weiterbildung:</strong> Informiere dich über die neuesten Trends und Weiterbildungsmöglichkeiten.</li>
    </ul>
    <p className="mt-4 text-lg">
      Nutze deine Erfahrung und dieses Handbuch, um die nächste Stufe zu erreichen.
    </p>
  </motion.div>
);

export default ErfahreneDetails;
