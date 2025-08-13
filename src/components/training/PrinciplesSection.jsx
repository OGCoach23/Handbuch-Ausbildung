import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const principlesData = [
  {
    title: "Prinzip 1: Struktur & Stufenlogik",
    intro: "Training ist kein Zufall – es folgt einem Plan, der Entwicklung möglich macht...",
    details: [
      {
        subtitle: "Leitidee",
        content: "Wir entwickeln Handlungskompetenz in Stufen – von der Basistechnik bis zum taktisch selbstverantwortlichen Spiel."
      },
      {
        subtitle: "Methodischer Anspruch",
        content: `
          Entwicklungsschritte definieren: Für jede Altersstufe sind zentrale Entwicklungsziele klar benannt.
          Kompetenzraster anwenden: Wir arbeiten mit klaren Orientierungsmarken.
          Einheiten folgen dem Prinzip „vom Einfachen zum Komplexen".
          Rückbezüge herstellen: Spieler:innen erkennen Entwicklungslinien.
        `
      },
      {
        subtitle: "Praxisbeispiele nach Altersstufe",
        content: `
          Minis: Werfen & Fangen in Stationen, viele Wiederholungen.
          D-Jugend: Pass in Bewegung, mit Gegnerdruck.
          B-Jugend: Pass oder Täuschung je nach Raumverhalten.
          A-Jugend: Selbstgewählte Lösung in komplexer Spielsituation.
        `
      }
    ]
  },
  {
    title: "Prinzip 2: Aufgabenorientiertes Lernen",
    intro: "Wir trainieren keine Abläufe – wir entwickeln Entscheider:innen...",
    details: [
      {
        subtitle: "Leitidee",
        content: "Gute Übungen geben nicht die Lösung vor, sondern stellen eine Frage an die Spieler:innen."
      },
      {
        subtitle: "Methodischer Anspruch",
        content: `
          Lösungsoffene Aufgaben stellen.
          Fehler als Lernchance nutzen.
          Anwendung vor Wiederholung.
          Situationen variieren.
        `
      },
      {
        subtitle: "Praxisbeispiele",
        content: `
          E-Jugend: Fangspiel mit zwei Bällen.
          D-Jugend: 3-gegen-2-Übung mit Entscheidungsoptionen.
          C-Jugend: Tore nur aus bestimmtem Bereich.
          A-Jugend: Spiel mit taktischem Ziel.
        `
      }
    ]
  },
  {
    title: "Prinzip 3: Individuelle Förderung & Differenzierung",
    intro: "Alle trainieren gemeinsam – aber jede:r entwickelt sich individuell...",
    details: [
      {
        subtitle: "Leitidee",
        content: "Wir fördern nicht nur „die Guten" – wir fördern alle, die besser werden wollen."
      },
      {
        subtitle: "Methodischer Anspruch",
        content: `
          Trainingsgruppen lesen können.
          Differenzierung einbauen.
          Zusatzangebote schaffen.
          Individuelle Rückmeldung geben.
        `
      },
      {
        subtitle: "Praxisbeispiele",
        content: `
          E-Jugend: Fang-Übung mit drei Schwierigkeitsstufen.
          D-Jugend: Wurfstation mit Zielzonen.
          C-Jugend: Zwei Gruppen mit unterschiedlichen Schwerpunkten.
          B/A-Jugend: Förderblock + Zusatzaufgaben.
        `
      }
    ]
  },
  {
    title: "Prinzip 4: Ganzheitlichkeit & Vielseitigkeit",
    intro: "Wir trainieren nicht nur Spieler:innen – wir entwickeln Persönlichkeiten...",
    details: [
      {
        subtitle: "Leitidee",
        content: "Training ist kein Tunnel – es ist ein Rundumblick auf Spieler:innen als ganze Menschen."
      },
      {
        subtitle: "Methodischer Anspruch",
        content: `
          Technik + Athletik + Taktik + Mental + Team integrieren.
          Vielseitige Bewegungsformen.
          Positionen durchwechseln lassen.
          Übungsformen variieren.
        `
      },
      {
        subtitle: "Praxisbeispiele",
        content: `
          Minis/E-Jugend: Fangspiele + Zielwürfe + Partnerfeedback.
          D-Jugend: Techniktraining + Kleingruppenspiel + Gruppenreflexion.
          C-Jugend: Kraft-Zirkel + Taktikaufgaben + Kooperationsspiele.
          B/A-Jugend: Wurf unter Belastung + Videoanalyse.
        `
      }
    ]
  },
  {
    title: "Prinzip 5: Reflexion & Feedbackkultur",
    intro: "Lernen endet nicht mit der Übung – es beginnt mit dem Nachdenken darüber...",
    details: [
      {
        subtitle: "Leitidee",
        content: "Wer besser werden will, muss verstehen, wo er steht – und wohin er will."
      },
      {
        subtitle: "Methodischer Anspruch",
        content: `
          Regelmäßige Feedbackphasen einbauen.
          Reflexionsfragen stellen.
          Ziele gemeinsam definieren.
          Visualisierung nutzen.
          Offene Feedbackkultur leben.
        `
      },
      {
        subtitle: "Praxisbeispiele",
        content: `
          E-Jugend: Smiley-Karten-Runde.
          D-Jugend: Reflexionsplakat.
          C-Jugend: Kleingruppen-Feedback.
          B/A-Jugend: Videoanalyse + Zielvereinbarung.
        `
      }
    ]
  }
];

export default function PrinciplesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Die 5 Prinzipien unserer Trainingsarbeit
        </h2>
        <div className="space-y-4">
          {principlesData.map((principle, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-green-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-green-50 transition-colors duration-200"
              >
                <span className="font-semibold text-lg text-green-800">{principle.title}</span>
                <span className="text-green-600 text-xl font-bold">{openIndex === index ? "–" : "+"}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-700 space-y-4"
                  >
                    <p className="text-gray-600 italic">{principle.intro}</p>
                    {principle.details.map((detail, i) => (
                      <div key={i} className="border-l-4 border-green-200 pl-4">
                        <h4 className="font-semibold text-green-700 mb-2">{detail.subtitle}</h4>
                        <p className="whitespace-pre-line text-gray-700">{detail.content}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
