import { motion } from "framer-motion";

export default function Trainingsmethodik() {
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
          <h1 className="text-3xl font-bold text-primary">Trainingsaufbau & Methodik</h1>

          <p>
            <span className="text-primary font-semibold">Training ist mehr als Üben – es ist bewusstes Entwickeln.</span>
            Wir verstehen Training als aktiven Lernprozess – nicht als Wiederholung. Wer trainiert, wächst: körperlich,
            technisch, taktisch – aber auch mental und sozial.
          </p>

          <p>
            Unser Ziel ist es, Einheiten zu gestalten, die mehr auslösen als nur Bewegung. 
            <span className="bg-yellow-100 px-1 rounded">Wir schaffen Lernräume – mit Struktur, Tiefe und Sinn.</span>
          </p>

          <p className="text-sm text-gray-700 italic">
            Deshalb folgen unsere Einheiten klaren Prinzipien:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Vom Einfachen zum Komplexen</li>
            <li>Vom Spieler zum Mitgestalter</li>
            <li>Vom Instrukteur zum Lernbegleiter</li>
          </ul>
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
            <h2 className="font-bold mb-2 text-primary">Jede Trainingseinheit verbindet daher:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-semibold">Technik mit Spielnähe</span></li>
              <li><span className="font-semibold">Taktik mit Verantwortung</span></li>
              <li><span className="font-semibold">Athletik mit Spielfähigkeit</span></li>
              <li><span className="font-semibold">Mentale Stärke mit Reflexion</span></li>
              <li><span className="font-semibold">Teamgeist mit Kommunikation</span></li>
            </ul>
          </div>

          <p>
            Entwicklung verläuft nicht linear – sie verläuft in Stufen, in Sprüngen, mit Rückschlägen und Erkenntnissen.
            Unsere Trainingsmethodik spiegelt das wider: Spieler:innen sollen durch Aufgaben wachsen, nicht durch Vorgaben.
            Durch Entscheidungen, nicht durch Drill.
          </p>

          <p className="font-semibold">Wir trainieren nicht für das Spiel – wir trainieren durch das Spiel.</p>
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
            <strong>Trainerimpuls:</strong> Plane nicht nur Übungen – plane Entwicklung. Denk nicht in Technikbausteinen, sondern in Handlungsfeldern. Dein Ziel ist nicht, dass alle gleich funktionieren – sondern dass jede:r wirksam wird.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Elternblick:</strong> Unsere Trainings sind mehr als Bewegungseinheiten. Sie sind Räume, in denen Ihr Kind Selbstvertrauen, Entscheidungsfähigkeit und Teamkompetenz entwickelt. Hier wird nicht nur geworfen – hier wird fürs Leben gelernt.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Für Spieler:innen – kurz erklärt:</strong> Du lernst bei uns, wie du selbst klug handelst – nicht nur, wie du Anweisungen umsetzt. Unser Training fordert dich – aber es hilft dir, zu wachsen. Mit Ball, mit Team, mit dir selbst.
          </div>
        </motion.div>
      </section>
    </div>
  );
}
