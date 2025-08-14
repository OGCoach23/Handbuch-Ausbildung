import { motion } from "framer-motion";

export default function DropOutProphylaxe() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4 sm:mb-6">
            1.5 Trainingsaufbau & Methodik
          </h1>
        </motion.div>

        {/* Einleitungstext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-justify text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 text-green-600"
        >
          <p className="mb-4">
            <strong>Früh erkennen, behutsam reagieren, nachhaltig binden.</strong>
          </p>
          <p>
            Wenn Spieler:innen ihre Motivation verlieren oder überlegen aufzuhören, ist schnelles und einfühlsames Handeln gefragt.
            Unser Ziel: Probleme frühzeitig erkennen und gemeinsam Lösungen finden.
          </p>
        </motion.div>

        {/* Warum verlieren Spieler:innen die Motivation? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border-2 border-green-200 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4 sm:mb-6">
            Warum verlieren Spieler:innen die Motivation?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-green-600 text-sm sm:text-base">
            <li>Überforderung oder Unterforderung im Training</li>
            <li>Mangelnde soziale Integration in die Gruppe</li>
            <li>Leistungsdruck oder Versagensängste</li>
            <li>Konkurrierende Freizeitinteressen</li>
            <li>Probleme mit Trainer:innen oder Mitspieler:innen</li>
            <li>Körperliche oder mentale Überlastung</li>
          </ul>
        </motion.div>

        {/* Früherkennung */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white border-2 border-green-200 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4 sm:mb-6">
            Früherkennung: Warnzeichen ernst nehmen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="border-l-4 border-green-200 pl-3 sm:pl-4">
              <h3 className="font-bold mb-2 text-green-600 text-sm sm:text-base">Verhaltensänderungen</h3>
              <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                <li>Häufiges Fehlen beim Training</li>
                <li>Nachlassende Trainingsintensität</li>
                <li>Rückzug aus der Gruppe</li>
                <li>Negative Körpersprache</li>
                <li>Verminderte Kommunikation</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-200 pl-3 sm:pl-4">
              <h3 className="font-bold mb-2 text-green-600 text-sm sm:text-base">Leistungsveränderungen</h3>
              <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                <li>Plötzlicher Leistungsabfall</li>
                <li>Mangelnde Konzentration</li>
                <li>Unlust bei Übungen</li>
                <li>Häufige Verletzungen oder Beschwerden</li>
                <li>Fehlende Spielfreude</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-200 pl-3 sm:pl-4">
              <h3 className="font-bold mb-2 text-green-600 text-sm sm:text-base">Soziale Signale</h3>
              <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                <li>Konflikte mit Mitspieler:innen</li>
                <li>Isolation in der Gruppe</li>
                <li>Negative Äußerungen über den Sport</li>
                <li>Fehlende Beteiligung an Teamaktivitäten</li>
                <li>Eltern äußern Bedenken</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-200 pl-3 sm:pl-4">
              <h3 className="font-bold mb-2 text-green-600 text-sm sm:text-base">Organisatorische Hinweise</h3>
              <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                <li>Verspätete Beitragszahlungen</li>
                <li>Reduzierte Teilnahme an Spielen</li>
                <li>Absagen von Turnieren</li>
                <li>Nachlassende Ausrüstungspflege</li>
                <li>Fehlende Anmeldungen zu Events</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Intervention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white border-2 border-green-200 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4 sm:mb-6">
            Intervention: Konkrete Maßnahmen
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-green-200 pl-3 sm:pl-4">
              <h3 className="font-bold mb-2 text-green-600 text-sm sm:text-base">Schritt 1: Persönliches Gespräch</h3>
              <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                <li>Ruhige, private Atmosphäre schaffen</li>
                <li>Aktiv zuhören ohne zu bewerten</li>
                <li>Nach Gründen und Wünschen fragen</li>
                <li>Verständnis zeigen und Lösungen anbieten</li>
                <li>Zeitplan für weitere Gespräche vereinbaren</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-200 pl-3 sm:pl-4">
              <h3 className="font-bold mb-2 text-green-600 text-sm sm:text-base">Schritt 2: Anpassung der Rahmenbedingungen</h3>
              <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                <li>Trainingsinhalte individuell anpassen</li>
                <li>Neue Positionen oder Rollen ausprobieren</li>
                <li>Spielzeit und Einsätze überdenken</li>
                <li>Soziale Integration fördern</li>
                <li>Zusätzliche Unterstützung organisieren</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-200 pl-3 sm:pl-4">
              <h3 className="font-bold mb-2 text-green-600 text-sm sm:text-base">Schritt 3: Eltern und Umfeld einbeziehen</h3>
              <ul className="list-disc list-inside space-y-1 text-green-600 text-sm">
                <li>Transparente Kommunikation mit den Eltern</li>
                <li>Gemeinsame Zielsetzung vereinbaren</li>
                <li>Externe Belastungen identifizieren</li>
                <li>Unterstützung im häuslichen Umfeld sicherstellen</li>
                <li>Professionelle Hilfe vermitteln wenn nötig</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Prävention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white border-2 border-green-200 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4 sm:mb-6">
            Prävention: Probleme verhindern
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-green-200 pl-3 sm:pl-4">
              <h3 className="font-bold mb-2 text-green-600 text-sm sm:text-base">Unsere präventiven Maßnahmen:</h3>
              <ul className="list-disc list-inside space-y-2 text-green-600 text-sm">
                <li><strong>Regelmäßige Check-ins:</strong> Monatliche Gespräche mit allen Spieler:innen</li>
                <li><strong>Flexible Trainingsgestaltung:</strong> Verschiedene Schwierigkeitsgrade und Rollen</li>
                <li><strong>Starke Teamkultur:</strong> Integration neuer Spieler:innen und Konfliktprävention</li>
                <li><strong>Klare Kommunikation:</strong> Transparente Erwartungen und Feedback-Kultur</li>
                <li><strong>Auszeiten ermöglichen:</strong> Pausen ohne Stigmatisierung</li>
                <li><strong>Vielfältige Motivationsquellen:</strong> Verschiedene Ziele und Erfolgserlebnisse</li>
                <li><strong>Elternarbeit:</strong> Regelmäßiger Austausch und gemeinsame Ziele</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 sm:p-6 rounded-xl border-l-4 border-green-400">
              <p className="text-green-700 italic text-sm sm:text-base">
                <strong>Unser Grundsatz:</strong> Lieber früh reagieren und unterstützen, als später 
                jemanden zu verlieren. Jede:r Spieler:in verdient die Chance, seinen/ihren Weg 
                im Handball zu finden – auch wenn dieser anders aussieht als ursprünglich gedacht.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
