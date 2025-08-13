import { useState } from "react";
import { motion } from "framer-motion";

export default function EvaluationFeedbackZielsystem() {
  const tools = [
    {
      name: "Kompetenzkompass (5-Stufen-Modell)",
      verwendung: "Orientierung für Trainer:innen zur Einordnung von Spielfähigkeit, Technik, Verhalten pro Altersstufe",
      vorteile: "Entwicklung sichtbar machen, klarer Gesprächsrahmen, Basis für individuelle Förderung"
    },
    {
      name: "Zielkarten / Zielposter",
      verwendung: "Spieler:innen notieren 1–2 persönliche Trainingsziele pro Block/Phase – sichtbar in der Halle oder Mappe",
      vorteile: "Selbststeuerung fördern, Motivation erhöhen, Fortschritt reflektieren"
    },
    {
      name: "Reflexionsbogen für Spieler:innen",
      verwendung: "Kurze Rückmeldebögen 3–4x/Jahr (Fragen wie: Was hast du gelernt? Was willst du verbessern?)",
      vorteile: "Selbsteinschätzung fördern, Gesprächsgrundlage für Trainer, Eltern können Entwicklung nachvollziehen"
    },
    {
      name: "1:1 Entwicklungsgespräche",
      verwendung: "Kurzgespräche (10–15 Min) Trainer:in ↔ Spieler:in mit Zielabgleich, Rückblick und Ausblick",
      vorteile: "Vertrauensaufbau, individuelle Rückmeldung, Zielklarheit"
    },
    {
      name: "Trainingsfeedback-Baustein",
      verwendung: "Feste Reflexionsphasen in der Einheit: Smileykarten, 3-Min-Gespräch, Gruppenfrage",
      vorteile: "Sofortige Rückmeldung, Spieler:innen fühlen sich gehört, Teamstimmung einschätzbar"
    },
    {
      name: "Eltern-Infoblatt zur Entwicklung",
      verwendung: "Kurz erklärt: Was ist uns wichtig, wie begleiten wir Entwicklung, wie sehen wir Fortschritt?",
      vorteile: "Erwartungsklärung, Verständnis fördern, Vertrauen stärken"
    },
    {
      name: "Zielsystem für Teams (Saisonziele)",
      verwendung: "Gemeinsame Zielfindung mit Team: z. B. ‚Wir wollen in der 1. Welle besser werden', ‚Jede:r wirft ein Tor'",
      vorteile: "Teamkultur stärken, Verantwortung gemeinsam tragen, Fokus im Training setzen"
    },
    {
      name: "Visuelle Lernrückschau",
      verwendung: "Trainingseinheiten oder Blöcke aufzeichnen: ‚Was war unser Thema? Was können wir jetzt besser?'",
      vorteile: "Fortschritt sichtbar, Kontinuität fördern, Wiederholung sichern"
    },
    {
      name: "Feedbackbox / Online-Formular",
      verwendung: "Anonyme Rückmeldungsmöglichkeit für Spieler:innen oder Eltern",
      vorteile: "Vertrauen schaffen, Offenheit fördern, Trainer:innen reflektieren Wirkung"
    },
    {
      name: "Mentorenbogen / Entwicklungstagebuch",
      verwendung: "Persönliche Begleitung für ambitionierte Spieler:innen: Reflexion, Zielabgleiche, Coaching",
      vorteile: "Tieferes Lernen, Trainer-Schüler-Beziehung stärken, Talente gezielt entwickeln"
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-green-700 mb-4"
        >
          Evaluation, Feedback, Zielsystem
        </motion.h1>
        <p className="text-justify">
          Struktur in 3 Säulen: Entwicklung sichtbar machen, Feedbackkultur stärken, Zielsystem verankern. Diese Seite zeigt, wie wir Fortschritt messen, Rückmeldung lebendig gestalten und Ziele klar setzen – für Trainer:innen, Eltern und Spieler:innen.
        </p>
      </section>

      {/* Zeitstrahl */}
      <section className="bg-green-50 py-10 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Entwicklung sichtbar machen",
              content: "Mit Kompetenzrastern, Lernstufen und Positionsprofilen – nicht als Notensystem, sondern als Entwicklungsverlauf."
            },
            {
              title: "Feedbackkultur stärken",
              content: "Im Training, nach Spielen, in 1:1-Gesprächen – Spieler lernen zu sprechen, Trainer:innen zu hören."
            },
            {
              title: "Zielsystem verankern",
              content: "Individuelle und Teamziele setzen, regelmäßig abgleichen – auf Basis der Ausbildungsmodule."
            }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600"
            >
              <h3 className="font-bold text-green-700 mb-2">{step.title}</h3>
              <p>{step.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ziele & Vorteile */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Trainer:innen",
              color: "bg-green-100",
              content: [
                "Fortschritt beschreiben & steuern",
                "Transparenz in der Trainingswirkung",
                "Gezielt fordern, nicht nur fördern"
              ]
            },
            {
              title: "Eltern",
              color: "bg-blue-100",
              content: [
                "Entwicklung nachvollziehen",
                "Sicherheit statt Vergleichsdruck",
                "Vertrauen in System, das Entwicklung begleitet"
              ]
            },
            {
              title: "Spieler:innen",
              color: "bg-yellow-100",
              content: [
                "Selbsteinschätzung lernen",
                "Ziele setzen & reflektieren",
                "Motivation durch Fortschritt"
              ]
            }
          ].map((group, idx) => (
            <div key={idx} className={`${group.color} p-6 rounded-xl shadow-md`}>
              <h3 className="font-bold text-lg mb-3">{group.title}</h3>
              <ul className="list-disc list-inside space-y-1">
                {group.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Tabelle */}
      <section className="py-10 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-3">Tool</th>
                <th className="p-3">Verwendbarkeit</th>
                <th className="p-3">Vorteile</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool, idx) => (
                <tr key={idx} className="odd:bg-white even:bg-green-100">
                  <td className="p-3 font-semibold">{tool.name}</td>
                  <td className="p-3">{tool.verwendung}</td>
                  <td className="p-3">{tool.vorteile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Fazit */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto bg-green-700 text-white p-6 rounded-xl shadow-lg text-justify">
          <h3 className="font-bold mb-4">Fazit: Umsetzung, die lebt – Entwicklung, die wirkt</h3>
          <p>
            Ebene 4 ist das Herzstück der Realität: Hier zeigen wir, dass unser Konzept nicht nur auf dem Papier stark ist, sondern auf dem Feld, in der Halle, im Vereinsleben. Wir geben unseren Trainer:innen die Werkzeuge, holen Eltern ins Boot und bauen ein lernendes System, das sich selbst weiterentwickelt – mit Feedback, Reflexion und klaren Zielen.
          </p>
          <p className="mt-4">
            👉 Jetzt beginnt der echte Weg: in der Halle, auf der Bank, im Dialog. Aus Konzept wird Haltung. Aus Haltung wird Handlung. Aus Handlung wird Entwicklung.
          </p>
        </div>
      </section>
    </div>
  );
}
