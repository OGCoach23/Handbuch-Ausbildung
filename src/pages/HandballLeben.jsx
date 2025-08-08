import { motion } from "framer-motion";

export default function HandballLeben() {
  return (
    <div className="space-y-10">
      {/* Section 1 */}
      <section className="bg-green-100/30 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-dark space-y-4"
        >
          <h1 className="text-3xl font-bold text-primary">
            Handball als Schule fürs Leben
          </h1>

          <p>
            <span className="text-primary font-semibold">Wir entwickeln nicht nur Spieler:innen</span> – wir stärken Menschen.
            Handball ist für uns kein Selbstzweck. Er ist ein Mittel, um Kinder und Jugendliche in ihrer Persönlichkeit zu stärken.
          </p>

          <p>
            Wer beim SV Laim trainiert, lernt nicht nur Wurftechniken oder Spielzüge – sondern <span className="bg-yellow-100 px-1 rounded">Mut, Haltung und Miteinander</span>.
          </p>

          <p className="text-sm text-gray-700 italic">
            Denn jede Trainingseinheit und jedes Spiel ist auch ein Lebenslernraum:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Im Spiel lernt man, mit Druck umzugehen.</li>
            <li>In der Mannschaft lernt man, Verantwortung zu übernehmen.</li>
            <li>In der Niederlage lernt man, sich neu aufzurichten.</li>
            <li>Im Erfolg lernt man, Respekt zu behalten.</li>
          </ul>

          <p>Diese Erfahrungen machen stark – im Sport wie auch im Leben.</p>
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="bg-white/40 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2 text-primary">Was Spieler:innen bei uns lernen:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-semibold">Selbstvertrauen:</span> Mut, Entscheidungen zu treffen. Fehler als Teil des Lernens begreifen.</li>
              <li><span className="font-semibold">Frustrationstoleranz:</span> Niederlagen einordnen, dranbleiben, neu versuchen.</li>
              <li><span className="font-semibold">Empathie & Kommunikation:</span> Im Team zuhören, mitdenken, Andere stärken.</li>
              <li><span className="font-semibold">Verantwortung:</span> Eigene Rolle annehmen, Aufgaben übernehmen, Feedback umsetzen.</li>
              <li><span className="font-semibold">Selbstorganisation:</span> Pünktlich sein, sich vorbereiten, selbstständig trainieren.</li>
            </ul>
          </div>

          <p>Diese Kompetenzen entstehen nicht nebenbei – sie sind Teil unserer Ausbildungslogik.</p>
          <p className="font-semibold">Wir trainieren nicht nur Körper und Technik – wir trainieren Charakter.</p>

          <ul className="list-disc list-inside space-y-1">
            <li>Wir schaffen Erlebnisse, die in Erinnerung bleiben – nicht nur Ergebnisse.</li>
            <li>Wir nehmen Spieler:innen ernst – auch wenn sie jung sind.</li>
            <li>Wir geben Verantwortung ab – weil Vertrauen wächst, wenn man es schenkt.</li>
            <li>Wir machen Spieler:innen zu Mitgestalter:innen – nicht zu Befehlsempfänger:innen.</li>
          </ul>
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="bg-green-100/30 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Trainerimpuls:</strong> Frage dich regelmäßig: „Was nehmen meine Spieler:innen heute fürs Leben mit?" Nutze Spielsituationen, um über Teamgeist, Resilienz oder Kommunikation zu sprechen. Du bildest Persönlichkeiten – jeden Tag.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Elternblick:</strong> Handball bietet Ihrem Kind mehr als Bewegung: Er vermittelt Werte, Haltung und Selbstvertrauen. Diese Erfahrungen wirken weit über das Spielfeld hinaus – und begleiten Ihr Kind in Schule, Beruf und Alltag.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Für Spieler:innen – kurz erklärt:</strong> Hier lernst du nicht nur Handball – du lernst fürs Leben. Du wirst sicherer, stärker, mutiger. Im Spiel lernst du: Du kannst was – und du kannst wachsen. Und das bleibt, auch wenn der Ball mal ruht.
          </div>
        </motion.div>
      </section>
    </div>
  );
}
