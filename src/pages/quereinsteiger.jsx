import { useState } from 'react';
import { motion } from 'framer-motion';
import CardNeueinsteiger from '../components/quereinsteiger/CardNeueinsteiger';
import CardQuereinsteiger from '../components/quereinsteiger/CardQuereinsteiger';
import CardDropOut from '../components/quereinsteiger/CardDropOut';
import CardDoppelspielrecht from '../components/quereinsteiger/CardDoppelspielrecht';

// Karten-Daten basierend auf der neuen HTML-Vorlage
const cardData = [
  {
    id: 'neueinsteiger',
    title: 'Neueinsteiger:innen – Willkommen statt Überforderung',
    content: 'Egal ob mit 8 oder 16 – jede:r ist willkommen. Wir holen sie dort ab, wo sie stehen. Kein Start ist zu spät – entscheidend ist die Begleitung. Wir geben Struktur, Aufgaben, Vertrauen – und das klare Signal: Du gehörst dazu.'
  },
  {
    id: 'quereinsteiger',
    title: 'Quereinsteiger:innen – Klarheit & Perspektive statt Frust',
    content: 'Wer aus einer anderen Sportart, einem anderen Verein oder nach Pause kommt, bringt Ressourcen mit – aber auch Unsicherheit. Wir machen Stärken sichtbar, geben Orientierung, schaffen Rollen – ohne Vergleichsdruck.'
  },
  {
    id: 'dropout',
    title: 'Drop-out verhindern – Hinsehen, handeln, halten',
    content: 'Ausstieg beginnt oft leise: durch Rückzug, Vermeidung, fehlende Bindung. Wir schaffen Strukturen, um das früh zu erkennen – und Räume, um Spieler:innen wieder einzufangen: mit Gesprächen, Flexibilität und Perspektiven.'
  },
  {
    id: 'doppelspielrecht',
    title: 'Sonderfall Doppelspielrecht – Ausbildung statt Abwerbung',
    content: 'Ziel: Spieler:innen mit Doppelspielrecht sollen sich beim SV Laim vollwertig aufgenommen, gefördert und respektiert fühlen – unabhängig davon, ob sie langfristig bleiben oder nicht. Ziel ist ein transparentes, verbindliches und wertschätzendes Miteinander, das auf Ausbildung statt Abwerbung setzt.'
  }
];

export default function Quereinsteiger() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

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
          <h1 className="text-4xl font-bold text-[#0a6c38] mb-6">
            Quer- und Neueinsteiger, Drop-out-Prophylaxe
          </h1>
        </motion.div>

        {/* Einleitungstext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-justify text-lg leading-relaxed mb-10 text-black"
        >
          <p className="mb-4">
            <strong>EINSTIEG – Warum dieses Modul wichtig ist</strong><br />
            Nicht alle starten mit 6 Jahren. Nicht alle bleiben durchgehend dabei. Und nicht alle fühlen sich immer sicher, gesehen oder gebraucht.
            Deshalb brauchen wir ein System, das Einsteiger:innen integriert, Querwechsler:innen Perspektiven gibt und Drop-outs vermeidet, bevor sie passieren.
            Wir nehmen Entwicklung ernst – und das bedeutet auch: Zugehörigkeit ermöglichen.
          </p>
          <p className="mb-4">
            Dieses Kapitel richtet sich an Trainer:innen, Spieler:innen und Eltern – es zeigt, wie wir als Verein aktiv Zugehörigkeit gestalten – mit Struktur, Haltung und offenen Wegen. Für Neueinsteiger:innen. Für Quereinsteiger:innen. Für Spieler:innen mit Fragezeichen. Und für jene, die bei uns mit Doppelspielrecht andocken.
          </p>
          <p>
            Drop-out ist kein plötzlicher Bruch – sondern oft ein schleichender Prozess. Wer hinschaut, kann ihn stoppen.
            Und wer neue Wege aufmacht, kann Spieler:innen gewinnen, die sonst nie Teil dieses Spiels geworden wären.
          </p>
        </motion.div>

        {/* Karten-Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardNeueinsteiger />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <CardQuereinsteiger />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardDropOut />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <CardDoppelspielrecht />
          </motion.div>
        </div>

        {/* Fazit-Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-lg p-6 shadow-lg text-justify text-lg leading-relaxed"
          style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        >
          <p>
            <strong>Fazit: Entwicklung ermöglichen heißt: Wege offenhalten</strong><br /><br />
            Dieses Kapitel zeigt: Wir nehmen alle ernst. Die frühen, die späten, die unsicheren, die wechselnden. Unser Ziel ist nicht, alle zu halten – sondern alle zu entwickeln.
            Wenn wir das schaffen – mit Haltung, Struktur und Herz – dann bleiben mehr, als wir dachten. Und die, die gehen, tun es mit einem Plus an Können, Haltung und Erfahrung.
            Denn das ist unser Job: Menschen wachsen lassen. Nicht nur im Trikot des SV Laim – sondern auf ihrem Weg.
          </p>
        </motion.div>
      </div>
    </div>
  );
}