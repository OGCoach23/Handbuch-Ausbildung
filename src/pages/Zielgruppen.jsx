import { motion } from "framer-motion";

export default function Zielgruppen() {
  return (
    <div className="space-y-10">
      {/* Section 1 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-dark space-y-4"
          >
          <h1 className="text-3xl font-bold text-primary">Zielgruppen & Rollenverständnis</h1>

          <p>
            <span className="text-primary font-semibold">Wir arbeiten gemeinsam für eine starke Entwicklung.</span>
            Handballausbildung ist Teamarbeit – und jede Rolle zählt. Unser Konzept richtet sich an Trainer:innen,
            Spieler:innen und Eltern – alle mit eigenen Aufgaben, Erwartungen und Gestaltungsmöglichkeiten.
          </p>

          <p>
            Unser Ziel ist es, die unterschiedlichen Perspektiven zu verstehen und aufeinander abzustimmen.
            Nur wenn alle Beteiligten wissen, was sie erwartet und wie sie beitragen können, entsteht echte
            Entwicklung – für jeden einzelnen und für das ganze Team.
          </p>

          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2 text-primary">Warum verschiedene Zielgruppen?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Trainer:innen brauchen klare Ausbildungskonzepte und methodische Hilfen</li>
              <li>Spieler:innen wollen verstehen, was sie lernen und warum es wichtig ist</li>
              <li>Eltern möchten wissen, wie sie ihre Kinder bestmöglich unterstützen können</li>
              <li>Alle zusammen schaffen ein starkes Entwicklungsumfeld</li>
            </ul>
          </div>

          <p>
            Die folgenden Abschnitte zeigen konkret, wie wir mit jeder Zielgruppe arbeiten, welche Erwartungen
            wir haben und welche Unterstützung wir bieten. Denn nur gemeinsam können wir das Beste aus jedem
            Spieler und jeder Spielerin herausholen.
          </p>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Unser Grundsatz:</strong> Handball-Entwicklung gelingt am besten, wenn alle Beteiligten an einem Strang ziehen.
            Deshalb investieren wir bewusst in Kommunikation, Transparenz und gemeinsame Ziele.
          </div>
        </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-4 text-primary text-xl">Für Trainer:innen</h2>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Was erwarten wir?</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Engagement für kontinuierliche Weiterbildung</li>
                <li>Bereitschaft, mit dem Ausbildungskonzept zu arbeiten</li>
                <li>Offene Kommunikation mit Spieler:innen und Eltern</li>
                <li>Fokus auf langfristige Entwicklung statt kurzfristige Erfolge</li>
              </ul>
            </div>
            <div className="space-y-2 mt-4">
              <h3 className="font-semibold text-lg">Was bieten wir?</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Strukturierte Ausbildungspläne für alle Altersgruppen</li>
                <li>Regelmäßige Fortbildungen und Austausch</li>
                <li>Methodische Hilfen und Übungssammlungen</li>
                <li>Unterstützung bei schwierigen Situationen</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-4 text-primary text-xl">Für Spieler:innen</h2>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Was erwarten wir?</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Regelmäßige Teilnahme am Training</li>
                <li>Bereitschaft, Neues zu lernen und auszuprobieren</li>
                <li>Respektvoller Umgang mit Mitspielern und Trainern</li>
                <li>Ehrliches Feedback und eigene Ziele formulieren</li>
              </ul>
            </div>
            <div className="space-y-2 mt-4">
              <h3 className="font-semibold text-lg">Was bieten wir?</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Altersgerechte und systematische Ausbildung</li>
                <li>Individuelle Förderung und Entwicklungsgespräche</li>
                <li>Spaß am Sport und starke Teamgemeinschaft</li>
                <li>Vorbereitung auf höhere Spielklassen</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-4 text-primary text-xl">Für Eltern</h2>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Was erwarten wir?</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Unterstützung der Vereinsphilosophie und -ziele</li>
                <li>Konstruktive Kommunikation bei Fragen oder Problemen</li>
                <li>Geduld bei der langfristigen Entwicklung</li>
                <li>Respekt vor Trainer-Entscheidungen</li>
              </ul>
            </div>
            <div className="space-y-2 mt-4">
              <h3 className="font-semibold text-lg">Was bieten wir?</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Transparente Kommunikation über Ziele und Fortschritte</li>
                <li>Regelmäßige Elternabende und Informationsveranstaltungen</li>
                <li>Offene Türen für Gespräche und Feedback</li>
                <li>Einblick in die Trainingsphilosophie und -methoden</li>
              </ul>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}