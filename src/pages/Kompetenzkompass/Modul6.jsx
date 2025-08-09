import { motion } from "framer-motion";

export default function Modul6() {
  return (
    <div className="bg-white/40 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary">Modul 6: Teamkultur & Kommunikation</h2>

        <p className="font-semibold">Kompetenzstufen</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Stufe 1 (weiß):</strong> Hält einfache Regeln ein, zeigt Zugehörigkeit</li>
          <li><strong>Stufe 2 (gelb):</strong> Agiert im Team, hört zu, bringt sich ein</li>
          <li><strong>Stufe 3 (grün):</strong> Kommuniziert aktiv, löst kleinere Konflikte</li>
          <li><strong>Stufe 4 (blau):</strong> Übernimmt Verantwortung, unterstützt andere</li>
          <li><strong>Stufe 5 (rot):</strong> Prägt aktiv die Teamkultur & Kommunikation</li>
        </ul>

        <p className="font-semibold">Hinweise zur Beobachtung</p>
        <ul className="list-disc list-inside pl-4">
          <li>Wie bringt sich das Kind in die Gruppe ein?</li>
          <li>Kann es Konflikte mit Worten lösen?</li>
          <li>Zeigt es Empathie & Kommunikationsfähigkeit?</li>
        </ul>

        <p className="font-semibold">Trainerimpuls</p>
        <p className="bg-yellow-100 px-1 rounded">Beziehung ist die Basis – echte Kommunikation beginnt beim Zuhören.</p>
      </motion.div>
    </div>
  );
}
