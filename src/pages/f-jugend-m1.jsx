import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FJugendM1() {
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="mb-6">
          <Link to="/f-jugend" className="text-primary hover:underline">
            ← Zurück zur F-Jugend Übersicht
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold text-primary">Modul 1: Entwicklungsmerkmale & Methodik</h1>

        <p className="italic text-lg">„Wie begleite ich Kinder zwischen 4 und 8 Jahren liebevoll, bewegungsreich und entwicklungsfördernd ins Handballspielen?"</p>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow space-y-4">
          <div>
            <h3 className="font-semibold text-primary">Zielsetzung dieses Moduls</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Verstehen der körperlichen, kognitiven, sozialen und emotionalen Entwicklungsmerkmale der Altersgruppe</li>
              <li>Gestaltung eines sicheren, spaßorientierten und beziehungsstarken Trainingsrahmens</li>
              <li>Aufbau erster sportbezogener Rituale, Bindung und Teamzugehörigkeit</li>
              <li>Keine Leistungsmessung – Förderung durch Bewegung, Wiederholung und Begeisterung</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Entwicklungsmerkmale</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Körperlich:</strong> Sehr hohe Bewegungsfreude, geringe Ausdauer, grobe Koordination, große Unterschiede im Reifestand</li>
              <li><strong>Kognitiv:</strong> Magisches Denken, bildhafte Vorstellungen, sehr kurze Konzentrationsspanne</li>
              <li><strong>Sozial:</strong> Egozentrisch, kaum Perspektivübernahme, hoher Bezug zu Erwachsenen</li>
              <li><strong>Emotional:</strong> Spontane Freude & Frust, hohe emotionale Impulsivität, Bedarf nach Zuwendung</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Was Trainer:innen besonders beachten müssen</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Spielen statt Üben:</strong> Lernen durch Bewegung, nicht durch Instruktion</li>
              <li><strong>Rituale geben Sicherheit:</strong> Begrüßung, Schlusskreis, Wiederholungen – reduzieren Unsicherheit</li>
              <li><strong>Jedes Kind ist König:</strong> Jedes Kind will gesehen, gehört, bestärkt werden – unabhängig von „Leistung"</li>
              <li><strong>Fehler gibt es nicht:</strong> Technik wird nicht bewertet – alle Bewegungsformen sind erlaubt</li>
              <li><strong>Beziehung vor Inhalt:</strong> Bindung sichert Teilnahme und Wiederkommen</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Methodik & Organisation</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Trainingsformate:</strong> Bewegungsgeschichten, Kleingruppenspiele, Fantasieparcours</li>
              <li><strong>Organisation:</strong> Stationen mit freier Wahl, Bewegungsbaustellen, Alltagsmaterialien</li>
              <li><strong>Sprache & Kommunikation:</strong> Bildhafte Sprache („Raketenlauf", „klebrige Hände"), kurze klare Ansagen</li>
              <li><strong>Feedback & Motivation:</strong> Viel Lob, Aufgabenorientierung („Schaffst du es, mit dem Ball zu balancieren?")</li>
              <li><strong>Zeitstruktur:</strong> 45–60 Min: Warm-up – Bewegungsreise – Spielidee – freies Spiel – Schlussritual</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Extras & kreative Impulse</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Vereinsbindung:</strong> Ball-Führerschein, Zaubertrikot, Bewegungsfest mit Eltern</li>
              <li><strong>Elternintegration:</strong> Eltern spielen mit („Krokodile im Fluss"), Mini-Feedback mit 3 Fragen</li>
              <li><strong>Wertearbeit:</strong> Wochenthemen mit Symbolen: „Lächeln hilft", „Freunde teilen den Ball"</li>
              <li><strong>Kreativideen:</strong> Handball-Memory, Tier- und Bewegungsimitation, Musik- oder Rhythmusspiele</li>
            </ul>
          </div>

          <div className="bg-green-100/30 p-4 rounded-lg">
            <h3 className="font-semibold text-primary">Ergebnis für den Trainer</h3>
            <p className="mb-2">
              Du gestaltest ein Training, das Kinder emotional abholt, motorisch fördert und sozial bindet.
              Du machst sie neugierig auf Bewegung, Gemeinschaft und Spiel. Du legst damit die Grundlage
              für nachhaltige Vereinszugehörigkeit – ohne Leistungsdruck, aber mit viel Herz.
            </p>
            <p><strong>Ziel:</strong> Spieler:innen, die mit Begeisterung kommen, sich willkommen fühlen – und mit Freude bleiben.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
