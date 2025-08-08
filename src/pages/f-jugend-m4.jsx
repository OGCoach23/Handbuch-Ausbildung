import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FJugendM4() {
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
        
        <h1 className="text-2xl font-bold text-primary">Modul 4: Mentale & soziale Entwicklung</h1>

        <p className="font-semibold">Leitfrage:</p>
        <p className="bg-yellow-100 px-2 py-1 rounded">„Wie helfe ich Kindern, sich selbst zu entdecken, mit anderen zu spielen – und als Teil einer Gruppe stark zu werden?"</p>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow space-y-4">
          <div>
            <h3 className="font-semibold text-primary">Zielsetzung dieses Moduls</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Entwicklung eines positiven Selbstbilds durch Erfolgserlebnisse & emotionale Sicherheit</li>
              <li>Förderung von ersten sozialen Kompetenzen wie Teilen, Rücksichtnahme und Hilfsbereitschaft</li>
              <li>Aufbau eines wertschätzenden Umgangs miteinander – spielerisch, kindgerecht und durch Vorleben</li>
              <li>Emotionale Bindung an Trainer:in, Team und Verein als Basis für Entwicklung und Teilhabe</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Entwicklungsmerkmale & Zielverhalten</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Selbstbild:</strong> Kinder wollen gesehen und gehört werden – jedes Kind ist wichtig</li>
              <li><strong>Frust & Emotionen:</strong> Schnelle Stimmungswechsel, Frust bei Misserfolg – brauchen klare Worte & emotionale Begleitung</li>
              <li><strong>Beziehungsfähigkeit:</strong> Erste Teamgefühle entstehen, aber Ich-Perspektive dominiert</li>
              <li><strong>Rücksicht & Empathie:</strong> Anfangsstufen: „Ich helfe, weil ich darf" – gefördert durch Lob & Geschichten</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Methodische Prinzipien</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Gemeinsam vor Gegeneinander</li>
              <li>Gefühle sichtbar machen</li>
              <li>Erfolge stärken Selbstbild</li>
              <li>Wertschätzung als Haltung</li>
              <li>Wiederholung & Rituale</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Spiele & Rituale für soziales Lernen</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Freundschafts-Fangspiel:</strong> Wer gefangen wird, bekommt ein Lob oder eine Frage: „Was hat dir heute Spaß gemacht?"</li>
              <li><strong>Zauberkreis:</strong> Abschlussspiel: Jede:r darf sagen, wer heute mutig, freundlich oder hilfsbereit war</li>
              <li><strong>Ball der Gefühle:</strong> Wer den Ball hat, darf sagen, wie es ihm geht – Wort oder Bild zeigen</li>
              <li><strong>Werte-Karten:</strong> Karten mit Symbolen: Freundschaft, Mut, Hilfe – Kinder wählen ihre Wochenkarte</li>
              <li><strong>Team-Geschichte:</strong> Gemeinsam mit Trainer:in erfinden – jede Woche ein Kapitel („Wie wurde unser Team mutig?")</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Hinweise für Trainer:innen</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Keine Konkurrenzspiele mit Sieger:innen – stattdessen: Erlebnisse, bei denen alle strahlen können</li>
              <li>Kinder brauchen Beziehung – und keine Bewertung</li>
              <li>Es zählt, wie sich Kinder fühlen – nicht nur, was sie „leisten"</li>
              <li>Lob wirkt stärker als Kritik – und Blickkontakt wirkt Wunder</li>
            </ul>
          </div>

          <div className="bg-yellow-100/60 p-4 rounded-lg">
            <h3 className="font-semibold text-primary">Ergebnis für den Trainer</h3>
            <p className="mb-2">
              Du schaffst ein Umfeld, in dem jedes Kind sich sicher, willkommen und gebraucht fühlt. 
              Du hilfst ihnen, ein positives Selbstbild aufzubauen und erste soziale Fähigkeiten zu entwickeln – 
              mit Fantasie, Ritualen und echter Zuwendung.
            </p>
            <p><strong>Ziel:</strong> Spieler:innen, die lachen, helfen, mutig fragen – und sich im Handball zuhause fühlen.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
