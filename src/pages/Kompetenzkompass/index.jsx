import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function KompetenzkompassIndex() {
  return (
    <div className="bg-white/40 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary">Kompetenzkompass</h2>

        <p className="font-semibold">Ziel des Kompetenzkompasses</p>
        <ul className="list-disc list-inside pl-4">
          <li>Strukturierter, nachvollziehbarer Ausbildungsweg unabhängig vom Lebensalter</li>
          <li>Differenzierte, sichtbare Entwicklung von Spieler:innen in fünf Kompetenzstufen</li>
          <li>Förderdiagnostik & Motivationstool: Orientierung, Feedback, Zielsetzung</li>
          <li>Klare Kriterien für Trainer:innen zur Beurteilung & Trainingssteuerung</li>
          <li>Integration von Quereinsteiger:innen & Hochentwickelten möglich</li>
          <li>Ergänzt die 6 Module jeder Altersstufe um eine übergreifende Entwicklungslogik</li>
        </ul>

        <p className="font-semibold">Grundprinzipien</p>
        <ul className="list-disc list-inside pl-4">
          <li>Altersunabhängig – der Kompass bewertet nicht, wie alt ein Kind ist, sondern was es kann</li>
          <li>Modular – für jedes der 6 Module (M1–M6) gibt es spezifische Stufen</li>
          <li>Sichtbar – mit Symbolsystem (z. B. Farben, Etiketten, Armbänder, digital)</li>
          <li>Fördernd, nicht bewertend – „Wo stehst du – was brauchst du, um weiterzukommen?"</li>
          <li>Umsetzbar durch Trainer:innen im normalen Trainingsbetrieb</li>
        </ul>

        <p className="font-semibold">Anwendung in der Praxis</p>
        <ul className="list-disc list-inside pl-4">
          <li>Zielkarten: Jeder Spieler hat alle 6 Module mit 5 Stufen in einer persönlichen Übersicht</li>
          <li>Trainingstagebuch oder Feedbackrunde: „Was habe ich heute in M3 gezeigt?"</li>
          <li>Zwischengespräche: Trainer:innen bewerten gemeinsam mit Spieler:innen den Stand</li>
          <li>Kompetenz-Abzeichen oder Zertifikat bei Erreichen einer neuen Stufe</li>
          <li>Integration in Spielerauswahl & Förderung: z. B. Einladung zu Fördertraining</li>
        </ul>

        <p className="font-semibold">Vorteile</p>
        <ul className="list-disc list-inside pl-4">
          <li>Spieler:innen verstehen ihr eigenes Training besser</li>
          <li>Trainer:innen haben ein differenziertes Werkzeug zur individuellen Förderung</li>
          <li>Eltern erkennen transparent: „Worum geht es in der Ausbildung wirklich?"</li>
          <li>Hohe Bindung durch sichtbare Entwicklung & Wertschätzung</li>
          <li>Klarer Unterschied zwischen Breite & Spitze, aber ohne Ausschluss</li>
        </ul>

        <p className="font-semibold">Die 5 Kompetenzstufen</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Stufe 1 (Weiß) - Basis:</strong> Ich kenne die Grundlagen – ich kann mitmachen.</li>
          <li><strong>Stufe 2 (Gelb) - Stabil:</strong> Ich kann das Geübte sicher und in Spielformen anwenden.</li>
          <li><strong>Stufe 3 (Grün) - Flexibel:</strong> Ich erkenne Situationen und finde eigene Lösungen.</li>
          <li><strong>Stufe 4 (Blau) - Spielbestimmend:</strong> Ich kann Spiele aktiv mitgestalten – auch unter Druck.</li>
          <li><strong>Stufe 5 (Rot) - Führend:</strong> Ich beeinflusse Mitspieler:innen & Spielverlauf strategisch und kommunikativ.</li>
        </ul>

        <p>Ein Spieler kann z. B. in Modul 3 (Technik & Taktik) schon auf Stufe 4 sein, aber in Modul 4 (Mentales & Soziales) noch auf Stufe 2 → individuelles Förderprofil!</p>

        <Link to="/kompetenzkompass/module" className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-xl shadow">
          Zu den Modulen
        </Link>
      </motion.div>
    </div>
  );
}
