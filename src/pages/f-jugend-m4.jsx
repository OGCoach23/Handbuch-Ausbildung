import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FJugendM4() {
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-6">
          <Link to="/f-jugend" className="text-primary hover:underline">
            ← Zurück zur F-Jugend Übersicht
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold text-primary mb-6">M4: Mentale & soziale Entwicklung</h1>
        <p className="text-lg mb-8 italic">
          Persönlichkeit stärken, Teamverhalten fördern, mit Druck und Fehlern umgehen.
        </p>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-primary mb-4">Inhalt wird noch erstellt</h2>
          <p className="text-gray-700">
            Dieses Modul wird noch mit detaillierten Inhalten zur mentalen und sozialen Entwicklung für die F-Jugend gefüllt.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
