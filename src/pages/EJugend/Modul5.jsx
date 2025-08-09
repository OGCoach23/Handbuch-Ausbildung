import { motion } from "framer-motion";

export default function EJugendModul5() {
  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        Modul 5: Spielsysteme & Positionsspiel
      </motion.h1>
      <div className="prose max-w-none">
        <h2>Leitfrage</h2>
        <p>„Wie baue ich erstes Spielverständnis auf – ohne feste Positionen, aber mit Klarheit im Raum und Zusammenspiel?“</p>

        <h2>Zielsetzung dieses Moduls</h2>
        <ul>
          <li>Raumorientierung und Reaktion auf Mitspieler:innen fördern</li>
          <li>Erste Spielprinzipien wie Breite, Tiefe und Rückzugsverhalten spielerisch vermitteln</li>
          <li>Positionen ausprobieren, nicht festlegen</li>
          <li>Spielintelligenz durch Regeln, Zonen und Rollen entwickeln</li>
        </ul>

        <h2>Grundprinzipien</h2>
        <ul>
          <li>Viel spielen – wenig reden</li>
          <li>Alle dürfen alles</li>
          <li>Räume sichtbar machen</li>
          <li>Spiellogik statt Systemlogik</li>
          <li>Mini-Regeln statt starrer Vorgaben</li>
        </ul>

        <h2>Inhalte & Entwicklungsziele</h2>
        <p>Raumgefühl, Mitspielerwahrnehmung, Rollenwechsel, Übersicht & Antizipation, Umschaltverhalten.</p>

        <h2>Spielformen & Methodik</h2>
        <p>Zonenspiele, 4-Tore-Spiel, Positionschaos, Goldene Zone-Spiel, Rollenroulette, 2:1 / 3:2 Situationen.</p>

        <h2>Didaktische Hilfen</h2>
        <p>Feldmarkierungen, Rollenkarten, Beobachtungsaufträge, Spezialspielregeln.</p>

        <h2>Trainerhinweise</h2>
        <ul>
          <li>Positionsfixierung vermeiden</li>
          <li>Zonen, Ziele & Aufgaben für Spielintelligenz nutzen</li>
          <li>Aufgaben statt Systeme</li>
          <li>Abwehrtraining mit Ballbezug und Spaß gestalten</li>
        </ul>

        <h2>Typische Trainerfehler</h2>
        <ul>
          <li>Feste Positionen → lieber Rollenvielfalt ermöglichen</li>
          <li>Passive Abwehr → auf Ballgewinn, Helfen, Umschalten fokussieren</li>
          <li>Nur auf Tore spielen → auch clevere Aktionen belohnen</li>
          <li>Frühe Positionsfestlegung → regelmäßige Rotation einplanen</li>
        </ul>

        <h2>Ergebnis für den Trainer</h2>
        <p>Du vermittelst Spielverständnis, Raumverhalten und Zusammenspiel. Kinder lernen Entscheidungen zu treffen und den Raum effektiv zu nutzen – die Basis für zukünftiges taktisches Denken.</p>
      </div>
    </div>
  );
}
