import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Kompetenzkompass() {
  const clubBlue = "#004b87"; // Blau aus dem Wappen

  const sections = [
    {
      title: "Ziel des Kompetenzkompasses",
      items: [
        "Strukturierter, nachvollziehbarer Ausbildungsweg unabhängig vom Lebensalter",
        "Differenzierte, sichtbare Entwicklung von Spieler:innen in fünf Kompetenzstufen",
        "Förderdiagnostik & Motivationstool: Orientierung, Feedback, Zielsetzung",
        "Klare Kriterien für Trainer:innen zur Beurteilung & Trainingssteuerung",
        "Integration von Quereinsteiger:innen & Hochentwickelten möglich",
        "Ergänzt die 6 Module jeder Altersstufe um eine übergreifende Entwicklungslogik"
      ]
    },
    {
      title: "Grundprinzipien",
      items: [
        "Altersunabhängig – der Kompass bewertet nicht, wie alt ein Kind ist, sondern was es kann",
        "Modular – für jedes der 6 Module (M1–M6) gibt es spezifische Stufen",
        "Sichtbar – mit Symbolsystem (z. B. Farben, Etiketten, Armbänder, digital)",
        "Fördernd, nicht bewertend – ‚Wo stehst du – was brauchst du, um weiterzukommen?‘",
        "Umsetzbar durch Trainer:innen im normalen Trainingsbetrieb"
      ]
    },
    {
      title: "Anwendung in der Praxis",
      items: [
        "Zielkarten: Jeder Spieler hat alle 6 Module mit 5 Stufen in einer persönlichen Übersicht",
        "Trainingstagebuch oder Feedbackrunde: ‚Was habe ich heute in M3 gezeigt?‘",
        "Zwischengespräche: Trainer:innen bewerten gemeinsam mit Spieler:innen den Stand – mind. 2× pro Saison",
        "Kompetenz-Abzeichen oder Zertifikat bei Erreichen einer neuen Stufe",
        "Integration in Spielerauswahl & Förderung"
      ]
    },
    {
      title: "Vorteile",
      items: [
        "Spieler:innen verstehen ihr eigenes Training besser",
        "Trainer:innen haben ein differenziertes Werkzeug zur individuellen Förderung",
        "Eltern erkennen transparent: ‚Worum geht es in der Ausbildung wirklich?‘",
        "Hohe Bindung durch sichtbare Entwicklung & Wertschätzung",
        "Klarer Unterschied zwischen Breite & Spitze, aber ohne Ausschluss"
      ]
    }
  ];

  const modules = [
    { title: "Praktische Anwendung", to: "/kompetenzkompass/praxis" },
    { title: "M1: Entwicklungsmerkmale & Methodik", to: "/kompetenzkompass/modul1" },
    { title: "M2: Athletik & Motorik", to: "/kompetenzkompass/modul2" },
    { title: "M3: Technik & Taktik", to: "/kompetenzkompass/modul3" },
    { title: "M4: Mentale & soziale Entwicklung", to: "/kompetenzkompass/modul4" },
    { title: "M5: Spielsysteme & Positionsspiel", to: "/kompetenzkompass/modul5" },
    { title: "M6: Teamkultur & Kommunikation", to: "/kompetenzkompass/modul6" }
  ];

  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
      {/* Klickbare Modul-Chips oben */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {modules
          .filter(({ to }) => to.includes('/modul'))
          .map(({ title, to }, i) => (
            <Link
              key={i}
              to={to}
              className="rounded-full px-4 py-2 text-white font-semibold shadow hover:opacity-90 transition"
              style={{ backgroundColor: clubBlue }}
            >
              {title}
            </Link>
          ))}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
        style={{ color: clubBlue }}
      >
        🧭 Kompetenzkompass
      </motion.h1>

      {/* Highlight: Praktische Anwendung */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl shadow-xl p-6 ring-2 ring-offset-2 mb-6"
        style={{ borderColor: clubBlue, background: 'linear-gradient(90deg, #eff6ff 0%, #ffffff 60%)' }}
      >
        <Link to="/kompetenzkompass/praxis" className="block rounded-xl">
          <h2 className="text-xl font-bold mb-2" style={{ color: clubBlue }}>📌 Praktische Anwendung</h2>
          <p className="text-gray-800">Zur praktischen Umsetzung des Kompetenzkompasses: Zielkarten, Planung, Feedback, Zertifikate u.v.m.</p>
        </Link>
      </motion.div>

      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white rounded-xl shadow p-4 mb-6"
        >
          <h2 className="text-xl font-semibold mb-3" style={{ color: clubBlue }}>{section.title}</h2>
          <ul className="list-disc ml-5 space-y-1">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl shadow p-4 mb-6"
      >
        <h2 className="text-xl font-semibold mb-3" style={{ color: clubBlue }}>Die 5 Kompetenzstufen</h2>
        <table className="w-full border border-gray-300">
          <thead style={{ backgroundColor: clubBlue }}>
            <tr className="text-white">
              <th className="p-2 text-left">Stufe</th>
              <th className="p-2 text-left">Symbol</th>
              <th className="p-2 text-left">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">Basis</td><td className="p-2">⚪️ Weiß</td><td className="p-2">Ich kenne die Grundlagen – ich kann mitmachen.</td></tr>
            <tr><td className="p-2">Stabil</td><td className="p-2">🟡 Gelb</td><td className="p-2">Ich kann das Geübte sicher und in Spielformen anwenden.</td></tr>
            <tr><td className="p-2">Flexibel</td><td className="p-2">🟢 Grün</td><td className="p-2">Ich erkenne Situationen und finde eigene Lösungen.</td></tr>
            <tr><td className="p-2">Spielbestimmend</td><td className="p-2">🔵 Blau</td><td className="p-2">Ich kann Spiele aktiv mitgestalten – auch unter Druck.</td></tr>
            <tr><td className="p-2">Führend</td><td className="p-2">🔴 Rot</td><td className="p-2">Ich beeinflusse Mitspieler:innen & Spielverlauf strategisch und kommunikativ.</td></tr>
          </tbody>
        </table>
      </motion.div>

      {null}


    </div>
  );
}
