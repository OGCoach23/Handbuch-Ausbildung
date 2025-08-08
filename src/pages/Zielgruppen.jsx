import { motion } from "framer-motion";

export default function Zielgruppen() {
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
          <h1 className="text-3xl font-bold text-primary">Zielgruppen & Rollenverständnis</h1>

          <p>
            <span className="text-primary font-semibold">Wir arbeiten gemeinsam für eine starke Entwicklung.</span>
            Handballausbildung ist Teamarbeit – und jede Rolle zählt. Unser Konzept richtet sich an Trainer:innen,
            Spieler:innen und Eltern – alle mit eigenen Aufgaben, Erwartungen und Gestaltungsmöglichkeiten.
          </p>

          <p>
            Wir verstehen Ausbildung als gemeinsamen Prozess: <span className="bg-yellow-100 px-1 rounded">Niemand wird alleine stark</span> – Entwicklung entsteht durch
            Beziehung, Vertrauen und Verantwortung.
          </p>

          <p className="text-sm text-gray-700 italic">
            Wir schaffen dafür eine Lernumgebung, in der Spieler:innen mutig ausprobieren, Fehler als Teil des Lernwegs
            begreifen und Fortschritte an der eigenen Entwicklung messen – nicht am Vergleich mit anderen.
          </p>

          <p>
            Entscheidend ist dabei eine Atmosphäre, die Sicherheit, Herausforderung und Selbstwirksamkeit vereint.
          </p>
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
            <h2 className="font-bold mb-2 text-primary">Unsere Zielgruppen im Überblick:</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-primary">Trainer:innen</h3>
                <p className="text-sm">Entwickeln Spiel- und Persönlichkeitskompetenz. Leiten, reflektieren, begleiten – systematisch und individuell.</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-secondary">Spieler:innen</h3>
                <p className="text-sm">Sind aktive Gestalter ihrer Entwicklung. Lernen Entscheidungen, Teamverhalten, Eigenverantwortung.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-primary">Eltern</h3>
                <p className="text-sm">Unterstützen den Weg. Vertrauen, motivieren, begleiten – nicht steuern. Entwicklungspartner, keine Außenstehenden.</p>
              </div>
            </div>
          </div>

          <p>
            Gleichzeitig setzen wir auf vielfältige Erfahrungen: Spieler:innen sollen mit unterschiedlichen Spielideen,
            Trainerpersönlichkeiten und Teamkonstellationen in Berührung kommen. Diese Vielfalt fördert nicht nur technische
            und taktische Entwicklung, sondern stärkt auch Flexibilität, soziale Intelligenz und ein tiefes Spielverständnis.
          </p>

          <p className="font-semibold">Diese Haltung braucht Klarheit und Kommunikation – aber auch Empathie.</p>
          <p>Wir erwarten keine Perfektion, sondern gegenseitiges Verständnis und echtes Miteinander.</p>
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
            <strong>Trainerimpuls:</strong> Begreife dich als Coach, nicht nur als Taktikgeber. Du formst Lernräume, nicht nur Spielzüge. Schaffe Struktur, aber gib Raum. Lass Spieler:innen wachsen – und auch mal stolpern. Dein Verhalten prägt, oft mehr als deine Worte. Du bist ein Vorbild.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Elternblick:</strong> Sie sind Teil unseres Teams – als Rückhalt, nicht als Ersatzcoach. Ihre Unterstützung zählt. Wir geben Einblick, laden zum Dialog ein und zeigen, wie Sie helfen können, ohne zu drängen.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Für Spieler:innen – kurz erklärt:</strong> Du bist kein Passagier – du sitzt selbst am Steuer deiner Entwicklung. Hier lernst du, Verantwortung zu übernehmen – für dein Spiel, dein Team, deinen Weg. Du wirst begleitet – aber du gehst selbst.
          </div>
        </motion.div>
      </section>
    </div>
  );
}
