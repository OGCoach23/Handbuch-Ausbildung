import { motion } from "framer-motion";

export default function Modul5() {
  return (
    <div className="bg-white/40 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary">Modul 5: Spielsysteme & Positionsspiel</h2>

        <p className="font-semibold">Kompetenzstufen</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Stufe 1 (weiß):</strong> Erkennt Spielfelder, weiß wo gespielt wird</li>
          <li><strong>Stufe 2 (gelb):</strong> Hält Positionen ein, bewegt sich im Spielraum</li>
          <li><strong>Stufe 3 (grün):</strong> Nutzt Räume gezielt, erkennt Mitspielerpositionen</li>
          <li><strong>Stufe 4 (blau):</strong> Spielt bewusst in Position, löst Spielsituationen</li>
          <li><strong>Stufe 5 (rot):</strong> Variiert Positionen & Entscheidungen strategisch</li>
        </ul>

        <p className="font-semibold">Hinweise zur Beobachtung</p>
        <ul className="list-disc list-inside pl-4">
          <li>Wie nutzt das Kind Räume und Positionen im Spiel?</li>
          <li>Erkennt es Spielsituationen & passt das Verhalten an?</li>
          <li>Wie flexibel ist die Rollenübernahme im Spiel?</li>
        </ul>

        <p className="font-semibold">Trainerimpuls</p>
        <p className="bg-yellow-100 px-1 rounded">Taktisches Verständnis wächst durch Spielvielfalt – nicht durch Ansagen.</p>
      </motion.div>
    </div>
  );
}
