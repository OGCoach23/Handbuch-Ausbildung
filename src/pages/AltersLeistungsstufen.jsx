import { motion } from "framer-motion";

export default function AltersLeistungsstufen() {
  return (
    <div className="space-y-10">
      {/* Section 1 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-dark space-y-4"
        >
          <h1 className="text-3xl font-bold text-primary">Alters- & Leistungsstufen</h1>

          <p>
            <span className="text-primary font-semibold">Säulen auf: altersgerechte Entwicklungsstufen und zielgerichtete Leistungswege.</span>
            Sie geben Orientierung – und lassen gleichzeitig Raum für individuelle Wege.
          </p>

          <p>
            Unsere Struktur ist kein starres Raster, sondern ein flexibles Gerüst: Sie hilft Spieler:innen, sich in ihrer
            jeweiligen Phase zurechtzufinden, ihre nächsten Schritte zu erkennen – und ihr Potenzial zu entfalten.
          </p>

          <p className="text-sm text-gray-700 italic">
            Jede Stufe bringt neue körperliche, geistige und soziale Herausforderungen mit sich. Unsere Inhalte, Methoden und
            Erwartungen passen wir daran an – ohne starre Übergänge, aber mit klarem Blick für Entwicklungsfenster.
          </p>
        </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <section className="bg-white/40 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2 text-primary">Unsere Altersklassen – systematisch, aber menschlich gedacht:</h2>
            <div className="space-y-2">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-primary">F-Jugend</h3>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>Bambinis (unter 6 Jahren)</li>
                  <li>MiniMinis (6–7 Jahre)</li>
                  <li>Minis (7–8 Jahre)</li>
                </ul>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-secondary">E-Jugend (9–10 Jahre)</h3>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-primary">D-Jugend (11–12 Jahre)</h3>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-secondary">C-Jugend (13–14 Jahre)</h3>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-primary">B-Jugend (15–16 Jahre)</h3>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-secondary">A-Jugend (17–18 Jahre)</h3>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2 text-primary">Unsere Leistungsstufen – zwei Wege, ein Ziel: Entwicklung</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-primary">Breitensport</h3>
                <p className="text-sm">Für alle, die Handball aus Spaß und Gemeinschaft erleben. Wir fördern Freude, Bewegung und soziales Lernen – ohne Leistungsdruck, aber mit Anspruch.</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-secondary">Leistungssport</h3>
                <p className="text-sm">Für motivierte Talente, die mehr wollen. Wir bieten gezielte Förderung, hohe Trainingsqualität und echte Herausforderungen – mit Fokus auf Entwicklung, nicht auf Selektion.</p>
              </div>
            </div>
          </div>

          <p>
            Beide Wege sind gleichwertig – weil Entwicklung nicht eindimensional ist. Unser Ziel: Möglichkeitsräume
            schaffen, in denen sich jede:r entfalten kann – mit Lust, Verantwortung und Perspektive.
          </p>
        </motion.div>
        </div>
      </div>

      {/* Section 4 */}
      <section className="bg-white/40 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Trainerimpuls:</strong> Beobachte genau – nicht nur, wie Spieler:innen spielen, sondern wie sie sich entwickeln. Alters- und Leistungsklassen sind Hilfen, keine Grenzen. Gute Trainer:innen erkennen Übergänge, fordern differenziert – und lassen Bewegungen zwischen den Stufen zu.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Elternblick:</strong> Jedes Kind wächst anders. Unser System sorgt dafür, dass niemand über- oder unterfordert wird – sondern Schritt für Schritt seinen Weg gehen kann. Wichtig ist nicht, wo Ihr Kind „steht" – sondern dass es sich entwickeln darf.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Für Spieler:innen – kurz erklärt:</strong> Es gibt viele Wege im Handball – und du darfst deinen finden. Ob du einfach mit Spaß spielst oder ganz nach oben willst: Wir begleiten dich. Wichtig ist nicht, wie gut du jetzt bist – sondern dass du Lust hast, besser zu werden.
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
