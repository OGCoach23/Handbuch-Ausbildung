import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [textColor, setTextColor] = useState("text-gray-600");
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTextColor(window.scrollY > 100 ? "text-[#004b87]" : "text-gray-600");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rightCards = [
    { title: "Ausbildungsprinzipien & Werte", link: "/prinzipien" },
    { title: "Handball: Schule fürs Leben", link: "/schule-leben" },
    { title: "Alters- und Leistungsstufen", link: "/altersstufen" },
    { title: "Modulbasierte Ausbildungslogik", link: "/ebene2" },
    { title: "Quer- und Neueinsteiger, Drop-Out-Prophylaxe", link: "/quereinsteiger" },
    { title: "Breitensport vs. Leistungssport", link: "/breitensport" },
  ];

  const leftCards = [
    { title: "Kompetenzkompass", link: "/kompetenzkompass" },
    { title: "Laimkademie", link: "/laimkademie" },
    { title: "F – Jugend", link: "/f-jugend" },
    { title: "E – Jugend", link: "/e-jugend" },
    { title: "D – Jugend", link: "/d-jugend" },
    { title: "C – Jugend", link: "/c-jugend" },
    { title: "B – Jugend", link: "/b-jugend" },
    { title: "A – Jugend", link: "/a-jugend" },
  ];

  const CardList = ({ cards, side }) => (
    <motion.div
      initial={{ x: side === "left" ? -300 : 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: side === "left" ? -300 : 300, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      {cards.map(({ title, link }) => (
        <Link
          key={title}
          to={link}
          className="block bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-4 hover:bg-[#004b87] hover:text-white transition transform hover:scale-105"
        >
          {title}
        </Link>
      ))}
    </motion.div>
  );

  return (
    <motion.div
      className="bg-gradient-to-r from-white to-gray-100 min-h-screen relative p-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay bei offenen Karten */}
      <AnimatePresence>
        {showCards && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setShowCards(false)}
          />
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setShowCards(!showCards)}
        className="fixed top-1/2 right-0 z-50 bg-primary text-white p-3 rounded-l-full shadow-lg hover:bg-secondary"
      >
        {showCards ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>

      {/* Linke Karten */}
      <div className="fixed top-1/4 left-4 z-50">
        <AnimatePresence>
          {showCards && <CardList cards={leftCards} side="left" />}
        </AnimatePresence>
      </div>

      {/* Rechte Karten */}
      <div className="fixed top-1/4 right-4 z-50">
        <AnimatePresence>
          {showCards && <CardList cards={rightCards} side="right" />}
        </AnimatePresence>
      </div>

      {/* Intro-Kasten - zentriert mit größerem Abstand nach oben */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-green-100/40 backdrop-blur-md border border-green-200 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto mt-48 flex flex-col items-center justify-center min-h-[40vh]"
      >
        <p className="text-2xl text-center text-justify">
          Wir sind der SV Laim, ein Traditionsverein (seit 1910) mit erfolgreichen Wurzeln im Handball, wir sind zentral in München eingebettet und engagieren uns weit über den Sport hinaus.
        </p>
        <p className="mt-6 text-xl text-center text-justify">
          Bei uns geht's nicht nur um Handball. Es geht um viel mehr: um Gemeinschaft, um Herzblut, um Kinder, die mit leuchtenden Augen in die Halle rennen. Um Trainer, die Woche für Woche alles geben. Um Eltern, die anfeuern, trösten, fahren, helfen. Und um einen Verein, der all das möglich macht.
        </p>
      </motion.div>

      {/* Grauer → Blauer Textabschnitt - mit größerem Abstand und größerer Schrift */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className={`mt-80 max-w-5xl mx-auto space-y-6 ${textColor} transition-colors duration-500`}
      >
        <p className="text-4xl text-justify">
          Das vorliegende Konzept ist unsere Einladung an euch alle: Trainer, Eltern, Spielerinnen und Spieler. Es ist unser gemeinsamer Wegweiser, unser Kompass, unser Versprechen. Denn wir wollen nicht einfach nur "irgendwie" ausbilden – wir wollen es richtig machen. Mit Plan. Mit Leidenschaft. Mit einem roten Faden von den Kleinsten bis zur A-Jugend.
        </p>
        <p className="text-4xl text-justify">
          Wir glauben an den langfristigen Weg. An Entwicklung statt Schnellschuss. An Spielfreude UND Struktur. Und ja – wir glauben an unseren Verein. Weil wir wissen, was wir gemeinsam schaffen können.
        </p>
        <p className="text-4xl text-justify">
          Dieses Handbuch ist keine trockene Theorie. Es ist voll mit Leben, Ideen, Praxis. Es wurde geschrieben aus vielen Gesprächen, aus Erfahrungen in der Halle, aus Erfolgen und Fehlern. Es zeigt dir, was wirklich zählt: Wann du was trainieren solltest. Wie du individuell förderst. Wie du Kinder stark machst – nicht nur im Spiel, sondern fürs Leben.
        </p>
        <p className="text-4xl text-justify">
          Vielleicht wirst du beim Lesen schmunzeln, nicken, kritisch hinterfragen. Vielleicht bekommst du an manchen Stellen Gänsehaut – weil du spürst: "Ja, genau so wollen wir Handball machen."
        </p>
        <p className="text-4xl text-justify">
          Dieses Konzept ist nicht perfekt. Aber es ist ehrlich. Und es wächst mit jedem, der es lebt.
        </p>
        <p className="text-4xl text-justify">
          Also: Lass dich inspirieren. Mach mit. Gib dem, was wir gemeinsam aufgebaut haben, ein noch stärkeres Fundament. Für unseren Verein. Für unsere Kinder. Für echten Handball.
        </p>
        <p className="text-4xl text-justify">
          Auf den ersten Blick mag das Konzept erschlagend wirken. Es ist umfangreich, das stimmt. Es steckt auch sehr viel Herzblut und Zeit drin. Es öffnet den Blick für die unterschiedlichen Rollen und Beteiligten. Es ist transparent und schafft Verständnis für die Sichtweise der jeweils anderen.
        </p>
        <p className="text-4xl text-justify">
          Nimm dir Zeit, die für dich relevanten Inhalte herauszufiltern, denn dann ist es plötzlich gar nicht mehr so viel Text. Es wird dir gefallen und dich inspirieren. Lass es zu.
        </p>
      </motion.div>

      {/* Gesamtfazit-Kasten - mit Abstand vor der Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-green-100/40 backdrop-blur-md border border-green-200 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto mt-20 mb-20"
      >
        <h2 className="text-2xl font-bold mb-4">Gesamtfazit</h2>
        <p className="mb-6 text-xl">Dieses Konzept ist ehrlich. Es wächst mit jedem, der es lebt.</p>
        <p className="text-xl mb-4">
          Dieses Ausbildungskonzept ist mehr als eine Sammlung von Trainingsplänen und Ideen. Es ist ein Ausdruck dessen, was uns als SV Laim ausmacht: Wir bilden nicht nur Spieler:innen aus – wir begleiten Menschen auf ihrem Weg. Wir schaffen ein Umfeld, in dem Kinder wachsen, Jugendliche über sich hinauswachsen und Erwachsene Verantwortung übernehmen.
        </p>
        <p className="text-xl mb-4">
          Wir haben einen Weg beschrieben, der fordert, aber nicht überfordert. Der motiviert, ohne Druck zu machen. Der klare Strukturen bietet – und dennoch Raum lässt für Kreativität, Persönlichkeit und Bauchgefühl. Ein Konzept, das sich nicht an kurzfristigen Ergebnissen orientiert, sondern an nachhaltiger Entwicklung. Für jede Altersstufe, für jede Leistungsebene, für jeden einzelnen Menschen in unserem Verein.
        </p>
        <p className="text-xl mb-4">
          Unser Ziel ist es, dass alle, die mit uns Handball erleben – auf dem Feld oder daneben – das Gefühl haben: "Hier bin ich richtig." Weil sie spüren: Hier geht es um mehr. Um Werte. Um Team. Um echte Entwicklung.
        </p>
        <ul className="list-disc list-inside my-4 text-xl">
          <li>durch Trainer:innen, die mutig, neugierig und verantwortungsvoll vorangehen.</li>
          <li>durch Eltern, die begleiten, vertrauen und mitgestalten.</li>
          <li>durch Spieler:innen, die sich einbringen, ausprobieren und dranbleiben.</li>
        </ul>
        <p className="text-xl">
          Wir stehen am Anfang eines Weges, der nie ganz fertig sein wird. Aber jeder Schritt, den wir gemeinsam gehen, macht unseren Verein stärker. Lasst uns diesen Weg entschlossen, mit Freude und einem klaren Ziel vor Augen gehen: bessere Spieler, bessere Menschen, ein starker Verein.
        </p>
      </motion.div>

      {/* EbenenSection - Übersicht aller Ebenen und Links */}
      <div className="mt-90 bg-gray-50 py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(sectionLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-lg text-gray-800 mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-[#004b87] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-Pfeil am unteren Rand */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-600 hover:text-[#004b87] cursor-pointer"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
