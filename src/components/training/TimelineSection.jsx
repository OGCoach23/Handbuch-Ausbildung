import { motion } from "framer-motion";

const timelineData = [
  {
    phase: "Einleitung",
    ziel: "Mentale Einstimmung & Zielklärung",
    zeit: "5–10 Min",
    beschreibung: `
      Begrüßung, Ritual, Ziel des Trainings.
      Mentale Vorbereitung: Orientierung, Zugehörigkeit, Spielfokus.
    `
  },
  {
    phase: "Aktivierung",
    ziel: "Körperliche & kognitive Aktivierung",
    zeit: "20–25 Min",
    beschreibung: `
      Mobilisation, Koordination, Schnelligkeit, kleine Spiele mit Regeln.
      Kombination aus Ballgewöhnung & kognitiver Aktivierung.
    `
  },
  {
    phase: "Grundübung",
    ziel: "Erwerb & Festigung von Technik",
    zeit: "25–30 Min",
    beschreibung: `
      Technische oder athletische Basisfertigkeiten in Variationen.
      Methodisch sauber aufgebaut: vom Modellieren über Wiederholung zur Aufgabe.
    `
  },
  {
    phase: "Grundspiel",
    ziel: "Anwendung unter Vorgaben",
    zeit: "15–20 Min",
    beschreibung: `
      Reduzierte Spielsituation mit taktischen Regeln.
      Fokus: Raumwahrnehmung, Kommunikation, Entscheidung.
    `
  },
  {
    phase: "Zielspiel",
    ziel: "Freies Spiel mit Transfersicherung",
    zeit: "10–15 Min",
    beschreibung: `
      Freies Spiel mit Zielbonus.
      Transfer ins Spiel, Spielfreude, Ownership.
    `
  },
  {
    phase: "Ausklang",
    ziel: "Regeneration & Reflexion",
    zeit: "10–15 Min",
    beschreibung: `
      Cool-down, Dehnen, Feedbackrunde, Zielcheck.
    `
  }
];

export default function TimelineSection() {
  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Struktur einer Standard-Trainingseinheit
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-lg rounded-xl border border-green-200 p-6 flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">{item.phase}</h3>
              <p className="text-sm text-gray-500 mb-2 font-medium">{item.zeit}</p>
              <p className="text-gray-700 mb-3"><strong className="text-green-700">Ziel:</strong> {item.ziel}</p>
              <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">{item.beschreibung}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
