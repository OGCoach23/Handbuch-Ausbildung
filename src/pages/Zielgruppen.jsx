import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Zielgruppen() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Überschrift */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-green-600 mb-6">
            Zielgruppen & Rollenverständnis
          </h1>
        </motion.div>

        {/* Einleitungstext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-justify text-lg leading-relaxed mb-10 text-green-600"
        >
          <p className="mb-4">
            <strong>Wir arbeiten gemeinsam für eine starke Entwicklung.</strong><br />
            Handballausbildung ist Teamarbeit – und jede Rolle zählt. Unser Konzept richtet sich an Trainer:innen,
            Spieler:innen und Eltern – alle mit eigenen Aufgaben, Erwartungen und Gestaltungsmöglichkeiten.
          </p>
          <p className="mb-4">
            Unser Ziel ist es, die unterschiedlichen Perspektiven zu verstehen und aufeinander abzustimmen.
            Nur wenn alle Beteiligten wissen, was sie erwartet und wie sie beitragen können, entsteht echte
            Entwicklung – für jeden einzelnen und für das ganze Team.
          </p>
          <p>
            Die folgenden Abschnitte zeigen konkret, wie wir mit jeder Zielgruppe arbeiten, welche Erwartungen
            wir haben und welche Unterstützung wir bieten. Denn nur gemeinsam können wir das Beste aus jedem
            Spieler und jeder Spielerin herausholen.
          </p>
        </motion.div>

        {/* Warum verschiedene Zielgruppen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg mb-10"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">Warum verschiedene Zielgruppen?</h3>
          <ul className="list-disc list-inside space-y-2 text-green-600">
            <li>Trainer:innen brauchen klare Ausbildungskonzepte und methodische Hilfen</li>
            <li>Spieler:innen wollen verstehen, was sie lernen und warum es wichtig ist</li>
            <li>Eltern möchten wissen, wie sie ihre Kinder bestmöglich unterstützen können</li>
            <li>Alle zusammen schaffen ein starkes Entwicklungsumfeld</li>
          </ul>
        </motion.div>

        {/* Karten-Container - Zielgruppen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Für Trainer:innen Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Für Trainer:innen
              </h3>
              <div className="space-y-4 text-green-600">
                <div>
                  <h4 className="font-semibold mb-2">Was erwarten wir?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Engagement für kontinuierliche Weiterbildung</li>
                    <li>Bereitschaft, mit dem Ausbildungskonzept zu arbeiten</li>
                    <li>Offene Kommunikation mit Spieler:innen und Eltern</li>
                    <li>Fokus auf langfristige Entwicklung statt kurzfristige Erfolge</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Was bieten wir?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Strukturierte Ausbildungspläne für alle Altersgruppen</li>
                    <li>Regelmäßige Fortbildungen und Austausch</li>
                    <li>Methodische Hilfen und Übungssammlungen</li>
                    <li>Unterstützung bei schwierigen Situationen</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Für Spieler:innen Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Für Spieler:innen
              </h3>
              <div className="space-y-4 text-green-600">
                <div>
                  <h4 className="font-semibold mb-2">Was erwarten wir?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Regelmäßige Teilnahme am Training</li>
                    <li>Bereitschaft, Neues zu lernen und auszuprobieren</li>
                    <li>Respektvoller Umgang mit Mitspielern und Trainern</li>
                    <li>Ehrliches Feedback und eigene Ziele formulieren</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Was bieten wir?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Altersgerechte und systematische Ausbildung</li>
                    <li>Individuelle Förderung und Entwicklungsgespräche</li>
                    <li>Spaß am Sport und starke Teamgemeinschaft</li>
                    <li>Vorbereitung auf höhere Spielklassen</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Für Eltern Karte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="md:col-span-2"
          >
            <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group hover:border-green-400">
              <h3 className="text-xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                Für Eltern
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-green-600">
                <div>
                  <h4 className="font-semibold mb-2">Was erwarten wir?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Unterstützung der Vereinsphilosophie und -ziele</li>
                    <li>Konstruktive Kommunikation bei Fragen oder Problemen</li>
                    <li>Geduld bei der langfristigen Entwicklung</li>
                    <li>Respekt vor Trainer-Entscheidungen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Was bieten wir?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Transparente Kommunikation über Ziele und Fortschritte</li>
                    <li>Regelmäßige Elternabende und Informationsveranstaltungen</li>
                    <li>Offene Türen für Gespräche und Feedback</li>
                    <li>Einblick in die Trainingsphilosophie und -methoden</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fazit-Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg text-justify text-lg leading-relaxed"
        >
          <p className="text-green-600">
            <strong>Unser Grundsatz:</strong> Handball-Entwicklung gelingt am besten, wenn alle Beteiligten an einem Strang ziehen.
            Deshalb investieren wir bewusst in Kommunikation, Transparenz und gemeinsame Ziele.
          </p>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16">
        <Link 
          to="/leitbild"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          ← Leitbild
        </Link>
        <Link 
          to="/ausbildungsprinzipien"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Ausbildungsprinzipien →
        </Link>
      </div>
    </div>
  );
}