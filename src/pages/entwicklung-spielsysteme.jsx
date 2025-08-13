import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

export default function EntwicklungSpielsysteme() {
  const spielsystemeCards = [
    {
      title: "E-Jugend – Manndeckung",
      systemName: "Manndeckung über das ganze Feld",
      duration: "E-Jugend (2 Jahre verbindlich)",
      description: "Aufbau der Raumorientierung, Förderung von Eigenverantwortung und Aufmerksamkeit. Jeder übernimmt Verantwortung für einen Gegenspieler:in.",
      imageAlt: "E-Jugend Manndeckung Diagramm",
      link: "/spielsystem-e-jugend"
    },
    {
      title: "D-Jugend – 1:5-Deckung",
      systemName: "1:5-Deckung (1 Spieler:in absichernd hinten, 5 auf Ballhöhe)",
      duration: "D-Jugend (2 Jahre verbindlich)",
      description: "Spieler:innen lernen, aktiv Druck auf den Ball auszuüben, Laufwege zu stören und als Gruppe offensiv zu agieren. Nur ein:e Spieler:in sichert zentral den Raum hinter der Linie.",
      imageAlt: "D-Jugend 1:5-Deckung Diagramm",
      link: "/spielsystem-d-jugend"
    },
    {
      title: "C-Jugend – 3:2:1-Deckung",
      systemName: "3:2:1-Deckung (drei hinten, zwei Halbe davor, ein:e Spitze vorn)",
      duration: "C-Jugend (2 Jahre verbindlich)",
      description: "Förderung des Spielverständnisses: Wer greift an, wer sichert ab? Spieler:innen müssen Raum, Ball und Gegner gleichzeitig im Blick behalten und Entscheidungen treffen.",
      imageAlt: "C-Jugend 3:2:1-Deckung Diagramm",
      link: "/spielsystem-c-jugend"
    },
    {
      title: "B-Jugend – 5:1-Deckung",
      systemName: "5:1-Deckung (fünf in der Linie + eine aktive Spitze)",
      duration: "B-Jugend (2 Jahre verbindlich)",
      description: "Aufbau taktischer Flexibilität und Spielintelligenz: Spieler:innen lernen, Gegner zu lenken, Räume zu provozieren und im Team zu entscheiden, wann sie Druck machen oder sichern.",
      imageAlt: "B-Jugend 5:1-Deckung Diagramm",
      link: "/spielsystem-b-jugend"
    },
    {
      title: "A-Jugend – 6:0-Deckung (offensiv)",
      systemName: "6:0-Deckung (offensiv gespielt)",
      duration: "A-Jugend (2 Jahre verbindlich)",
      description: "Spielintelligenz, Effizienz und taktische Variabilität – die 6:0 bildet die Basis für nahezu alle Erwachsenenformationen. Die offensive Variante schult aktives Heraustreten, Raumkontrolle, Verschieben und Täuschungsverhalten.",
      imageAlt: "A-Jugend 6:0-Deckung Diagramm",
      link: "/spielsystem-a-jugend"
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      {/* Header */}
      <motion.h1 
        variants={fadeInVariants}
        className="text-4xl font-bold text-green-700 text-center mb-8"
      >
        Entwicklung der Abwehrsysteme
      </motion.h1>

      {/* Intro Text */}
      <motion.p 
        variants={fadeInVariants}
        transition={{ delay: 0.2 }}
        className="text-xl text-justify text-green-600 mb-12 leading-relaxed"
      >
        Abwehrsysteme sind keine Schablonen – sie sind Lernfelder mit Struktur.
        Wir legen für jede Altersstufe ein verbindliches Abwehrsystem fest. Warum? Weil Systematik Orientierung gibt – für Trainer:innen, Spieler:innen und Teams. Und weil Abwehrverständnis wachsen muss, bevor es kreativ wird.
        Das Ziel ist nicht, starre Abläufe zu vermitteln, sondern kollektives Handeln, Räume verstehen und Abwehridee erkennen. Wer versteht, wie das Team funktioniert, kann sich besser einbringen – und später variabel agieren.
      </motion.p>

      {/* Content Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div 
          variants={fadeInVariants}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">Ziele</h2>
          <ul className="space-y-3 text-green-600">
            <li>• Spieler:innen lernen, sich innerhalb eines klaren Abwehrsystems zurechtzufinden</li>
            <li>• Teams gewinnen an Stabilität, Klarheit und Zusammenspiel</li>
            <li>• Trainer:innen erhalten eine altersstufengerechte Struktur, die individuelle Schwerpunkte sinnvoll einbettet</li>
            <li>• Wir schaffen abwehrspezifische Entwicklungsvoraussetzungen, die aufeinander aufbauen</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={fadeInVariants}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">Grundprinzipien</h2>
          <ul className="space-y-3 text-green-600">
            <li>• Ein Abwehrsystem pro Altersstufe – reduziert Komplexität und fördert Wiedererkennung</li>
            <li>• Vom Einfachen zum Komplexen: klare Entwicklungslinie vom Mini-Handball bis zum erweiterten Abwehrspiel</li>
            <li>• Abwehrsystem = Ausbildungssystem: Wir nutzen die Abwehr, um technische, taktische und soziale Kompetenzen zu entwickeln</li>
            <li>• System bleibt gleich – Umsetzung wird tiefer: Die Qualität wächst mit dem Verständnis, nicht mit der Komplexität</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={fadeInVariants}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">Anwendung in der Praxis</h2>
          <ul className="space-y-3 text-green-600">
            <li>• Jede Altersstufe hat ein vorgegebenes Abwehrsystem – z. B. Manndeckung in der E-Jugend, oder 6:0 in der A-Jugend etc.</li>
            <li>• Systeme werden spielerisch aufgebaut, schrittweise vertieft und reflektiert</li>
            <li>• Trainer:innen erhalten Handlungsleitfäden und Trainingsschwerpunkte, die zum jeweiligen Abwehrsystem passen</li>
            <li>• Die Abwehridee wird altersgerecht vermittelt – nicht als Taktik-Vorgabe, sondern als gemeinsame Abwehrlogik</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={fadeInVariants}
          transition={{ delay: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">Vorteile</h2>
          <ul className="space-y-3 text-green-600">
            <li>• Spieler:innen erleben klare Rollen, wiederkehrende Abläufe und gemeinsame Orientierung</li>
            <li>• Teams wachsen schneller zusammen – weil alle wissen, wie verteidigt wird</li>
            <li>• Die Ausbildung wird durchgängig und anschlussfähig – jede Stufe bereitet auf die nächste vor</li>
            <li>• Trainer:innen können sich inhaltlich tiefer mit einzelnen Elementen beschäftigen – statt ständig neu zu strukturieren</li>
          </ul>
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div 
        variants={fadeInVariants}
        transition={{ delay: 0.7 }}
      >
        <Carousel cards={spielsystemeCards} />
      </motion.div>

      {/* Fazit Section */}
      <motion.div 
        variants={fadeInVariants}
        transition={{ delay: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Fazit: Systematisch verteidigen – bewusst ausbilden
        </h2>
        
        <p className="text-xl text-justify text-green-600 mb-8 leading-relaxed">
          Mit der konsequenten Einführung altersgerechter Abwehrformationen von der E- bis zur A-Jugend schaffen wir eine klare Entwicklungslogik:
          Spieler:innen lernen schrittweise, Verantwortung in der Defensive zu übernehmen, taktisch zu denken und sich in verschiedenen Rollen zurechtzufinden.
        </p>

        <div className="bg-green-50 p-8 rounded-2xl shadow-lg mb-8">
          <p className="text-green-700 leading-relaxed">
            <strong>Jede Formation ist mehr als nur eine Anordnung auf dem Feld – sie vermittelt Prinzipien:</strong><br />
            → In der Manndeckung: Eigenverantwortung und Aufmerksamkeit.<br />
            → In der 1:5: Mut zum Stören und erste Gruppenabsprachen.<br />
            → In der 3:2:1: Spielintelligenz, Raumkontrolle und flexible Entscheidungen.<br />
            → In der 5:1: Antizipation, Lenkung und systemisches Verhalten.<br />
            → In der 6:0 offensiv: Stabilität mit Zugriff, Kommunikation und Anpassungsfähigkeit.
          </p>
        </div>

        <p className="text-xl text-justify text-green-600 leading-relaxed">
          Durch diese Struktur wird Abwehr nicht zufällig gelernt – sondern geplant, erlebt und verstanden.
          Die Spieler:innen entwickeln ein tiefes taktisches Verständnis, das ihnen im Übergang in den Erwachsenenbereich Orientierung, Sicherheit und Qualität gibt – unabhängig vom späteren Spielsystem.
          Ziel muss hier sein zu vermitteln, dass eine kluge ballorientierte Abwehr Spaß macht. Jeder Ballgewinn zählt mehr als ein Tor. Mannschaft muss sich dafür feiern, Spieler*innen müssen Abwehr spielen, nicht nur arbeiten!
        </p>
      </motion.div>
    </motion.div>
  );
}