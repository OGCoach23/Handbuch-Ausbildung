import { motion } from "framer-motion";
import CollapsibleBox from "../components/CollapsibleBox";
import ImpulseBox from "../components/ImpulseBox";

export default function PositionsprofilTemplate() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero-Bereich */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-400 text-white p-8 md:p-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">[Positionsname]</h1>
          <p className="text-lg md:text-xl opacity-90">[Kurzer Einleitungssatz]</p>
        </div>
      </section>

      {/* Ziele & Rolle */}
      <section className="max-w-5xl mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6 border border-green-200"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">Ziele & Rolle</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Ziel der Position</h3>
              <p>[Zielbeschreibung]</p>
            </div>
            <div>
              <h3 className="font-semibold">Rolle im Spiel</h3>
              <p>[Rollenbeschreibung]</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Anforderungsprofil */}
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Anforderungsprofil</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {['Technisch', 'Taktisch', 'Athletisch', 'Mental'].map((category) => (
            <div key={category} className="bg-white rounded-xl shadow p-4 border border-green-100">
              <h3 className="font-semibold text-lg mb-2">{category}</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>[Punkt 1]</li>
                <li>[Punkt 2]</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Entwicklungsschwerpunkte nach Altersstufen */}
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Entwicklungsschwerpunkte</h2>
        <div className="space-y-3">
          {['E-Jugend', 'D-Jugend', 'C-Jugend', 'B-Jugend', 'A-Jugend'].map((group) => (
            <CollapsibleBox
              key={group}
              title={group}
              className="border border-green-200"
              headerClassName="bg-green-50 hover:bg-green-100 text-gray-800 font-semibold"
            >
              <ul className="list-disc list-inside space-y-1">
                <li>[Punkt 1]</li>
                <li>[Punkt 2]</li>
              </ul>
            </CollapsibleBox>
          ))}
        </div>
      </section>

      {/* Impuls-Boxen */}
      <section className="max-w-5xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Trainerimpuls', color: 'border-green-600', text: '[Text]' },
          { title: 'Elternblick', color: 'border-green-400', text: '[Text]' },
          { title: 'Für Spieler:innen – kurz erklärt', color: 'border-green-200', text: '[Text]' },
        ].map((box, i) => (
          <ImpulseBox
            key={i}
            title={box.title}
            content={box.text}
            borderColor={box.color}
          />
        ))}
      </section>

      {/* Fazit */}
      <section className="max-w-5xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-50 border border-green-200 rounded-xl p-6 shadow"
        >
          <h2 className="text-xl font-bold text-green-700 mb-2">Fazit</h2>
          <p>[Fazittext]</p>
        </motion.div>
      </section>
    </div>
  );
}
