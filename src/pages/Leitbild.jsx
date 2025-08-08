import { motion } from "framer-motion";

export default function Leitbild() {
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
          <h1 className="text-3xl font-bold text-primary">Leitbild & Zielsetzung</h1>

          <p>
            <span className="text-primary font-semibold">Wir entwickeln Menschen durch Handball weiter.</span>
            Unser Ausbildungskonzept verfolgt eine klare Vision: Handball ist mehr als ein Spiel – er ist eine Schule fürs Leben.
          </p>

          <p>
            Wir wollen Kinder und Jugendliche ganzheitlich fördern: <span className="bg-yellow-100 px-1 rounded">sportlich, persönlich, sozial und mental</span>.
            Dabei geht es uns nicht nur um Talente oder Siege, sondern darum, Menschen zu entwickeln, die mit Teamgeist, Fairness und Selbstvertrauen durchs Leben gehen.
          </p>

          <p className="text-sm text-gray-700 italic">
            Denn nur wer sich als Mensch entfaltet, kann auch als Spieler:in wachsen.
          </p>

          <p>
            Handball ist eine intensive Mannschaftssportart, nur im Team kann man gewinnen, nur gemeinsam lernt man aus Niederlagen. 
            Handball ist körperlich, aber immer fair. HandballerInnen sind sportlich, engagiert, fröhlich und lebensfroh.
          </p>

          <p className="font-semibold">Wir glauben: Gute Ausbildung beginnt mit guter Haltung.</p>
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
            <h2 className="font-bold mb-2 text-primary">Wir vermitteln eine Haltung:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Leistung entsteht aus Freude und Klarheit</li>
              <li>Teamgeist wächst aus Verantwortung und Kommunikation</li>
              <li>Selbstbewusstsein entwickelt sich durch Vertrauen und Erleben</li>
            </ul>
          </div>

          <p>
            Wir schaffen ein Umfeld, das auf Vertrauen, Herausforderung und Eigenverantwortung basiert. Unsere Spieler:innen
            sollen erleben, wie Lernen funktioniert – und wie erfüllend es ist, an sich selbst zu wachsen, statt sich
            ständig mit anderen zu messen.
          </p>

          <p className="font-semibold">Positiver Wettbewerb und kein neidvoller Vergleich!</p>

          <p>
            Wir fördern deshalb eine aufgabenorientierte Lernkultur: Nicht das Ergebnis steht im Vordergrund, sondern der
            Fortschritt. Erfolg bedeutet: Ich kann heute etwas besser als gestern – weil ich dranbleibe, mich fordere, mich
            weiterentwickle.
          </p>
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="bg-green-100/30 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="bg-white/60 p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2 text-primary">Unsere Ziele:</h2>
            <p className="text-sm text-gray-700 italic mb-2">Am Ende der Jugendzeit soll jede:r Spieler:in …</p>
            <ul className="list-disc list-inside space-y-1">
              <li>technisch-taktisch handlungsfähig sein</li>
              <li>über eine stabile, funktionale Athletik verfügen</li>
              <li>Teamgeist, Selbstvertrauen und Spielintelligenz entwickelt haben</li>
              <li>die eigene Position verstehen und Verantwortung übernehmen</li>
              <li>sich mit dem Verein identifizieren – und bereit für neue Aufgaben sein</li>
            </ul>
          </div>

          <p>
            Unsere Ausbildung folgt einer Entwicklungstreppe, auf der sich Spieler:innen systematisch und individuell
            weiterentwickeln – vom ersten Kontakt mit dem Ball bis hin zur Vorbereitung auf den Erwachsenenbereich.
          </p>

          <p>
            Unsere Ausbildung basiert auf sechs wiederkehrenden Modulen (siehe Ebene 2) – angepasst an jede Altersstufe und
            begleitet durch unseren Kompetenzkompass. Entwicklung verläuft vom Einfachen zum Komplexen, vom Spieler zum
            Mitgestalter – mit dem Fokus: Entwicklung ermöglichen statt Leistung erzwingen.
          </p>
        </motion.div>
      </section>

      {/* Section 4 */}
      <section className="bg-white/40 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Trainerimpuls:</strong> Du bist nicht nur Übungsleiter – du bist Wegbegleiter. Du gestaltest Erfahrungsräume. Dein Ziel: nicht Spieler:innen „fertig machen", sondern sie fähig machen, ihre Stärken zu erkennen, Entscheidungen zu treffen und mit Druck umzugehen. Das geht weit über das Sportliche hinaus.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Elternblick:</strong> Wir wollen mehr als Punkte oder Tabellen – wir wollen, dass Ihr Kind stark wird: im Kopf, im Herz, im Spiel. Handball ist für uns eine Bühne, auf der Kinder wachsen – nicht nur als Spieler:innen, sondern als Menschen.
          </div>

          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Für Spieler:innen – kurz erklärt:</strong> Hier geht's nicht nur ums Gewinnen. Es geht darum, dass du deinen Weg findest. Du lernst, was du kannst, wie du denkst – und dass du mehr schaffen kannst, als du glaubst. Dass du ein Team hast, dass du Ansprechpartner kennen lernst, die dir helfen können. Dass du den Verein als deine Heimat wahrnimmst. Dafür geben wir dir Raum, Rückenwind – und echte Aufgaben.
          </div>
        </motion.div>
      </section>
    </div>
  );
}
