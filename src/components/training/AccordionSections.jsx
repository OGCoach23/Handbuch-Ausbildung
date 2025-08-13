import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const accordionData = [
  {
    title: "Teil B: Jahresplanung – Entwicklung braucht Rhythmus",
    content: `
Gute Trainingsarbeit entsteht nicht spontan – sie entsteht aus einem durchdachten Plan,
der Raum für Entwicklung, Belastung und Entlastung bietet.

**Makroplanung – der Jahresrahmen**
Wir gliedern das Trainingsjahr in 3–4 Hauptphasen:
- Vorbereitungsphase: Grundlagen legen (Technik, Athletik, Teamkultur)
- Saisonphase 1: Umsetzung + Stabilisierung
- Übergangsphase: Reflexion, Regeneration, individuelle Förderung
- Saisonphase 2 / neue Saison: Fortschritt ausbauen, Spezialisierung, Positionstraining

**Mesoplanung – Monatslogik & Schwerpunkte**
4–6-Wochen-Blöcke wie z. B.:
- Technik unter Belastung
- Entscheidungsverhalten im Spiel
- Athletik & Schnellkraft + Spielsysteme
- Mentale Stärke & Resilienz

**Mikroplanung – Woche & Einheit**
- Jede Woche hat 1–2 konkrete Themen
- Wiederholung in neuen Varianten
- Übungen passen zum Stand der Gruppe

➡ Entwicklung entsteht nicht durch Dauerdruck – sondern durch kluges Steuern von Reiz & Erholung.
    `
  },
  {
    title: "Teil C: Die Rolle des Trainers – Architekt für Entwicklung",
    content: `
Unsere Trainer:innen sind mehr als Vermittler von Technik oder Spielzügen – sie sind Entwicklungsarchitekten.

**Trainerrollen:**
- Methodiker: Plant Einheiten mit System
- Beobachter: Sieht Entwicklung im Detail wie im Gesamtbild
- Feedbackgeber: Gibt ehrliche, individuelle Rückmeldung
- Entwicklungsbegleiter: Hilft, Hürden zu überwinden
- Haltungsvorbild: Lebt Werte auf und neben dem Feld

**Haltung vor Handlung:**
- Fragen stellen statt nur Anweisungen geben
- Potenziale sehen, nicht nur Probleme
- Entwicklung als Weg, nicht Sprint, verstehen

**Rechtliche Rahmenbedingungen:**
- Aufsichtspflicht beachten
- Eltern einbinden
- Erweiterte Führungszeugnisse alle 5 Jahre

➡ Entwicklung entsteht dort, wo Verantwortung geteilt, Vertrauen gegeben und Reflexion möglich ist.
    `
  }
];

export default function AccordionSections() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        {accordionData.map((item, index) => (
          <div key={index} className="border border-green-200 rounded-xl shadow-md overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 bg-green-100 hover:bg-green-200 rounded-t-xl flex justify-between items-center transition-colors duration-200"
            >
              <span className="text-lg font-semibold text-green-800">{item.title}</span>
              <span className="text-green-600 font-bold text-xl">{openIndex === index ? "–" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 text-gray-700 leading-relaxed whitespace-pre-line"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
