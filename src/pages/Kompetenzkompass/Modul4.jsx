import { motion } from "framer-motion";

export default function Modul4() {
  return (
    <div className="bg-white/40 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary">Modul 4: Mentale & soziale Entwicklung</h2>

        <p className="font-semibold">Kompetenzstufen</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Stufe 1 (weiß):</strong> Erkennt eigene Gefühle, äußert erste soziale Bedürfnisse</li>
          <li><strong>Stufe 2 (gelb):</strong> Reagiert angemessen in Gruppen, zeigt erste Empathie</li>
          <li><strong>Stufe 3 (grün):</strong> Übernimmt Verantwortung im Team, hilft anderen</li>
          <li><strong>Stufe 4 (blau):</strong> Reflektiert Verhalten, geht offen mit Emotionen um</li>
          <li><strong>Stufe 5 (rot):</strong> Gibt Impulse zur Teamkultur, unterstützt Mitspielende aktiv</li>
        </ul>

        <p className="font-semibold">Hinweise zur Beobachtung</p>
        <ul className="list-disc list-inside pl-4">
          <li>Wie geht das Kind mit Frust und Freude um?</li>
          <li>Wie verhält es sich in Gruppensituationen?</li>
          <li>Welche Rolle übernimmt es im sozialen Miteinander?</li>
        </ul>

        <p className="font-semibold">Trainerimpuls</p>
        <p className="bg-yellow-100 px-1 rounded">Soziale Entwicklung ist nicht messbar – aber spürbar im Umgang miteinander.</p>
      </motion.div>
    </div>
  );
}
