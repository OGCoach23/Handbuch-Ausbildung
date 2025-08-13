import { motion } from "framer-motion";

export default function DropOutProphylaxe() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-dark space-y-4"
          >
            <h1 className="text-3xl font-bold text-primary">Drop-Out-Prophylaxe</h1>
            
            <p>
              <span className="text-primary font-semibold">Früh erkennen, behutsam reagieren, nachhaltig binden.</span>
              Wenn Spieler:innen ihre Motivation verlieren oder überlegen aufzuhören, ist schnelles und einfühlsames Handeln gefragt.
              Unser Ziel: Probleme frühzeitig erkennen und gemeinsam Lösungen finden.
            </p>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h2 className="font-bold mb-2 text-primary">Warum verlieren Spieler:innen die Motivation?</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Überforderung oder Unterforderung im Training</li>
                <li>Mangelnde soziale Integration in die Gruppe</li>
                <li>Leistungsdruck oder Versagensängste</li>
                <li>Konkurrierende Freizeitinteressen</li>
                <li>Probleme mit Trainer:innen oder Mitspieler:innen</li>
                <li>Körperliche oder mentale Überlastung</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Früherkennung */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-primary">Früherkennung: Warnzeichen ernst nehmen</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/60 p-4 rounded-xl shadow">
                <h3 className="font-bold mb-2 text-primary">Verhaltensänderungen</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Häufiges Fehlen beim Training</li>
                  <li>Nachlassende Trainingsintensität</li>
                  <li>Rückzug aus der Gruppe</li>
                  <li>Negative Körpersprache</li>
                  <li>Verminderte Kommunikation</li>
                </ul>
              </div>

              <div className="bg-white/60 p-4 rounded-xl shadow">
                <h3 className="font-bold mb-2 text-primary">Leistungsveränderungen</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Plötzlicher Leistungsabfall</li>
                  <li>Mangelnde Konzentration</li>
                  <li>Unlust bei Übungen</li>
                  <li>Häufige Verletzungen oder Beschwerden</li>
                  <li>Fehlende Spielfreude</li>
                </ul>
              </div>

              <div className="bg-white/60 p-4 rounded-xl shadow">
                <h3 className="font-bold mb-2 text-primary">Soziale Signale</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Konflikte mit Mitspieler:innen</li>
                  <li>Isolation in der Gruppe</li>
                  <li>Negative Äußerungen über den Sport</li>
                  <li>Fehlende Beteiligung an Teamaktivitäten</li>
                  <li>Eltern äußern Bedenken</li>
                </ul>
              </div>

              <div className="bg-white/60 p-4 rounded-xl shadow">
                <h3 className="font-bold mb-2 text-primary">Organisatorische Hinweise</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Verspätete Beitragszahlungen</li>
                  <li>Reduzierte Teilnahme an Spielen</li>
                  <li>Absagen von Turnieren</li>
                  <li>Nachlassende Ausrüstungspflege</li>
                  <li>Fehlende Anmeldungen zu Events</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Intervention */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-primary">Intervention: Konkrete Maßnahmen</h2>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Schritt 1: Persönliches Gespräch</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Ruhige, private Atmosphäre schaffen</li>
                <li>Aktiv zuhören ohne zu bewerten</li>
                <li>Nach Gründen und Wünschen fragen</li>
                <li>Verständnis zeigen und Lösungen anbieten</li>
                <li>Zeitplan für weitere Gespräche vereinbaren</li>
              </ul>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Schritt 2: Anpassung der Rahmenbedingungen</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Trainingsinhalte individuell anpassen</li>
                <li>Neue Positionen oder Rollen ausprobieren</li>
                <li>Spielzeit und Einsätze überdenken</li>
                <li>Soziale Integration fördern</li>
                <li>Zusätzliche Unterstützung organisieren</li>
              </ul>
            </div>

            <div className="bg-white/60 p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2 text-primary">Schritt 3: Eltern und Umfeld einbeziehen</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Transparente Kommunikation mit den Eltern</li>
                <li>Gemeinsame Zielsetzung vereinbaren</li>
                <li>Externe Belastungen identifizieren</li>
                <li>Unterstützung im häuslichen Umfeld sicherstellen</li>
                <li>Professionelle Hilfe vermitteln wenn nötig</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Prävention */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-primary">Prävention: Probleme verhindern</h2>

            <div className="bg-primary/10 p-4 rounded-xl">
              <h3 className="font-bold mb-2 text-primary">Unsere präventiven Maßnahmen:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Regelmäßige Check-ins:</strong> Monatliche Gespräche mit allen Spieler:innen</li>
                <li><strong>Flexible Trainingsgestaltung:</strong> Verschiedene Schwierigkeitsgrade und Rollen</li>
                <li><strong>Starke Teamkultur:</strong> Integration neuer Spieler:innen und Konfliktprävention</li>
                <li><strong>Klare Kommunikation:</strong> Transparente Erwartungen und Feedback-Kultur</li>
                <li><strong>Auszeiten ermöglichen:</strong> Pausen ohne Stigmatisierung</li>
                <li><strong>Vielfältige Motivationsquellen:</strong> Verschiedene Ziele und Erfolgserlebnisse</li>
                <li><strong>Elternarbeit:</strong> Regelmäßiger Austausch und gemeinsame Ziele</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
              <strong>Unser Grundsatz:</strong> Lieber früh reagieren und unterstützen, als später 
              jemanden zu verlieren. Jede:r Spieler:in verdient die Chance, seinen/ihren Weg 
              im Handball zu finden – auch wenn dieser anders aussieht als ursprünglich gedacht.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
