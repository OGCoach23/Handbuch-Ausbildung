import { motion } from "framer-motion";

export default function Modul3() {
  return (
    <div className="bg-white/40 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary">Modul 3: Technik & Taktik</h2>

        <p className="font-semibold">Kompetenzstufen</p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Stufe 1 (weiß):</strong> Begegnet dem Ball neugierig, probiert Aktionen aus</li>
          <li><strong>Stufe 2 (gelb):</strong> Führt einfache Aktionen mit Ball sicher aus, erkennt Spielsituationen</li>
          <li><strong>Stufe 3 (grün):</strong> Reagiert flexibel im Spiel, variiert technische Elemente</li>
          <li><strong>Stufe 4 (blau):</strong> Nutzt Technik bewusst zur Lösung taktischer Situationen</li>
          <li><strong>Stufe 5 (rot):</strong> Setzt Technik taktisch ein, beeinflusst Spielverlauf aktiv</li>
        </ul>

        <p className="font-semibold">Hinweise zur Beobachtung</p>
        <ul className="list-disc list-inside pl-4">
          <li>Wie variabel ist der Umgang mit Ball, Raum und Mitspielenden?</li>
          <li>Wie intuitiv reagiert das Kind im Spielgeschehen?</li>
          <li>Welche technischen Fähigkeiten werden situationsgerecht eingesetzt?</li>
        </ul>

        <p className="font-semibold">Trainerimpuls</p>
        <p className="bg-yellow-100 px-1 rounded">Technik ist kein Ziel – sondern Werkzeug für Spiel und Kreativität.</p>
      </motion.div>
    </div>
  );
}
