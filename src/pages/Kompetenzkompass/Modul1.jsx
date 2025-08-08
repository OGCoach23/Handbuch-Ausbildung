import { motion } from "framer-motion";

export default function Modul1() {
  return (
    <div className="bg-white/40 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary">Modul 1: Entwicklungsmerkmale & Methodik</h2>

        <p className="font-semibold">Kompetenzstufen</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Stufe 1 (weiß):</strong> Kann den Trainingsrahmen einhalten, kennt grundlegende Rituale, erkennt Wiederholungen</li>
          <li><strong>Stufe 2 (gelb):</strong> Erkennt den Aufbau der Einheit, zeigt Vertrautheit mit Sprache, Abläufen und Rollen</li>
          <li><strong>Stufe 3 (grün):</strong> Kann sich in neuen Settings orientieren, strukturiert Bewegungszeit eigenständig</li>
          <li><strong>Stufe 4 (blau):</strong> Entwickelt eigene Ideen zur Trainingsstruktur, motiviert andere durch Verhalten</li>
          <li><strong>Stufe 5 (rot):</strong> Unterstützt Trainer:in bei Struktur & Organisation, erkennt Hintergründe & Methoden</li>
        </ul>

        <p className="font-semibold">Hinweise zur Beobachtung</p>
        <ul className="list-disc list-inside pl-4">
          <li>Wie sicher bewegt sich das Kind im Ablauf?</li>
          <li>Wie reagiert es auf veränderte Impulse?</li>
          <li>Wie stark erkennt man die Rituale, Strukturen, Sprache wieder?</li>
        </ul>

        <p className="font-semibold">Trainerimpuls</p>
        <p className="bg-yellow-100 px-1 rounded">Nicht die Leistung zählt – sondern die Sicherheit, mit der ein Kind sich in Trainingssettings bewegt.</p>
      </motion.div>
    </div>
  );
}
