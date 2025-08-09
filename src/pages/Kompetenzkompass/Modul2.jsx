import { motion } from "framer-motion";

export default function Modul2() {
  return (
    <div className="bg-white/40 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary">Modul 2: Athletik & Motorik</h2>

        <p className="font-semibold">Kompetenzstufen</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Stufe 1 (weiß):</strong> Nimmt an Bewegungsformaten teil, zeigt Bewegungslust & Neugier</li>
          <li><strong>Stufe 2 (gelb):</strong> Erkennt Bewegungsmuster wieder, setzt Impulse mit Hilfe um</li>
          <li><strong>Stufe 3 (grün):</strong> Setzt koordinative Impulse eigenständig um, entdeckt Bewegungsmöglichkeiten</li>
          <li><strong>Stufe 4 (blau):</strong> Variiert Bewegungen, reagiert flexibel auf veränderte Bedingungen</li>
          <li><strong>Stufe 5 (rot):</strong> Kombiniert Bewegungen kreativ, leitet Aufgaben an, zeigt Körperbewusstsein</li>
        </ul>

        <p className="font-semibold">Hinweise zur Beobachtung</p>
        <ul className="list-disc list-inside pl-4">
          <li>Wie sicher und variabel bewegt sich das Kind?</li>
          <li>Wie reagiert es auf neue oder kreative Aufgabenstellungen?</li>
          <li>Wie stark sind Bewegungsfreude, Ausdauer und Koordination?</li>
        </ul>

        <p className="font-semibold">Trainerimpuls</p>
        <p className="bg-yellow-100 px-1 rounded">Bewegung ist keine Pflicht – sondern ein Ausdruck innerer Freiheit und Freude.</p>
      </motion.div>
    </div>
  );
}
