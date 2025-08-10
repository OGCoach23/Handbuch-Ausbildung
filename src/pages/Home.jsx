import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import logo from "../assets/logo.svg";

const cards = [
  {
    title: "Leitbild & Zielsetzung",
    link: "/leitbild",
  },
  {
    title: "Ausbildungsprinzipien & Werte",
    link: "/prinzipien",
  },
  {
    title: "Handball als Schule fürs Leben",
    link: "/schule-leben",
  },
  {
    title: "Trainingsaufbau & Methodik",
    link: "/trainingsaufbau",
  },
  {
    title: "Alters & Leistungsstufen",
    link: "/altersstufen",
  },
  {
    title: "Ebene 2 – Modulbasierte Ausbildungslogik",
    link: "/ebene2",
  },
  {
    title: "Ebene 3 – Kompetenzkompass & Positionen",
    link: "/ebene3",
  },
  {
    title: "Ebene 4 – Umsetzung & Weiterentwicklung",
    link: "/ebene4",
  },
];

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  // Scroll Events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 200);

      // Navbar nur zeigen, wenn nach oben gescrollt wird
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      {/* Integrierter Header mit Scroll-Funktionalität */}
      <header 
        className={`glass-card fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-green-700 text-white p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={logo} alt="SV Laim" className="w-12 h-12" />
              <h1 className="text-2xl font-bold">Laimer Ausbildungshandbuch Handball</h1>
            </div>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm justify-center md:justify-end">
              <Link to="/" className="hover:underline">Start</Link>
              <Link to="/leitbild" className="hover:underline">Leitbild</Link>
              <Link to="/kontakt" className="hover:underline">Kontakt</Link>
              <Link to="/trainingsaufbau" className="hover:underline">Trainingsaufbau & Jahresplanung</Link>
              <Link to="/kinderbereich" className="hover:underline">Kinderbereich</Link>
              <Link to="/jugendbereich" className="hover:underline">Jugendbereich</Link>
              {/* Kompetenzkompass-Link entfernt */}
              <Link to="/positionsprofile" className="hover:underline">Entwicklung Positionen</Link>
              <Link to="/spielsysteme" className="hover:underline">Entwicklung Spielsysteme</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Gradient-Übergang */}
      <section className="bg-gradient-to-b from-green-700/50 to-transparent p-8 mt-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-white mb-4"
          >
            Willkommen beim SV Laim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg"
          >
            Tradition trifft auf moderne Ausbildung
          </motion.p>
        </div>
      </section>

      {/* Einleitungstext */}
      <section className="bg-green-100/40 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-4"
        >
          <p>Bei uns geht's nicht nur um Handball. Es geht um viel mehr: um Gemeinschaft, um Herzblut, um Kinder, die mit leuchtenden Augen in die Halle rennen. Um Trainer, die Woche für Woche alles geben. Um Eltern, die anfeuern, trösten, fahren, helfen. Und um einen Verein, der all das möglich macht.</p>
          <p>Wir sind der SV Laim, ein Traditionsverein (seit 1910) mit erfolgreichen Wurzeln im Handball, wir sind zentral in München eingebettet und engagieren uns weit über den Sport hinaus.</p>
          <p>Das vorliegende Konzept ist unsere Einladung an euch alle: Trainer, Eltern, Spielerinnen und Spieler. Es ist unser gemeinsamer Wegweiser, unser Kompass, unser Versprechen. Denn wir wollen nicht einfach nur „irgendwie" ausbilden – wir wollen es richtig machen. Mit Plan. Mit Leidenschaft. Mit einem roten Faden von den Kleinsten bis zur A-Jugend.</p>
          <p>Wir glauben an den langfristigen Weg. An Entwicklung statt Schnellschuss. An Spielfreude UND Struktur. Und ja – wir glauben an unseren Verein. Weil wir wissen, was wir gemeinsam schaffen können.</p>
          <p>Dieses Handbuch ist keine trockene Theorie. Es ist voll mit Leben, Ideen, Praxis. Es wurde geschrieben aus vielen Gesprächen, aus Erfahrungen in der Halle, aus Erfolgen und Fehlern. Es zeigt dir, was wirklich zählt: Wann du was trainieren solltest. Wie du individuell förderst. Wie du Kinder stark machst – nicht nur im Spiel, sondern fürs Leben.</p>
          <p>Vielleicht wirst du beim Lesen schmunzeln, nicken, kritisch hinterfragen. Vielleicht bekommst du an manchen Stellen Gänsehaut – weil du spürst: „Ja, genau so wollen wir Handball machen."</p>
          <p>Dieses Konzept ist nicht perfekt. Aber es ist ehrlich. Und es wächst mit jedem, der es lebt.</p>
          <p>Also: Lass dich inspirieren. Mach mit. Gib dem, was wir gemeinsam aufgebaut haben, ein noch stärkeres Fundament. Für unseren Verein. Für unsere Kinder. Für echten Handball.</p>
          <p className="mt-4">Auf den ersten Blick mag das Konzept erschlagend wirken. Es ist umfangreich, das stimmt. Es steckt auch sehr viel Herzblut und Zeit drin. Es öffnet den Blick für die unterschiedlichen Rollen und Beteiligten. Es ist transparent und schafft Verständnis für die Sichtweise der jeweils anderen.</p>
          <p>Nimm dir Zeit, die für dich relevanten Inhalte herauszufiltern, denn dann ist es plötzlich gar nicht mehr so viel Text. Es wird dir gefallen und dich inspirieren. Lass es zu.</p>
        </motion.div>
      </section>

      {/* Karten mit Card-Komponente */}
      <section className="bg-white/40 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(({ title, link }) => (
            <Link key={title} to={link} className="block">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/60 p-6 rounded-xl shadow transition-all duration-300 transform hover:scale-105 hover:bg-[#005aa7] hover:text-white hover:shadow-2xl h-full"
              >
                <h3 className="text-lg font-bold mb-2">{title}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gesamtfazit */}
      <section className="bg-green-100/30 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <h2 className="text-xl font-bold text-primary">Gesamtfazit</h2>
          <p className="font-semibold italic">
            Dieses Konzept ist ehrlich. Es wächst mit jedem, der es lebt.
          </p>
          <p>Dieses Ausbildungskonzept ist mehr als eine Sammlung von Trainingsplänen und Ideen. Es ist ein Ausdruck dessen, was uns als SV Laim ausmacht: Wir bilden nicht nur Spieler:innen aus – wir begleiten Menschen auf ihrem Weg. Wir schaffen ein Umfeld, in dem Kinder wachsen, Jugendliche über sich hinauswachsen und Erwachsene Verantwortung übernehmen.</p>
          <p>Wir haben einen Weg beschrieben, der fordert, aber nicht überfordert. Der motiviert, ohne Druck zu machen. Der klare Strukturen bietet – und dennoch Raum lässt für Kreativität, Persönlichkeit und Bauchgefühl. Ein Konzept, das sich nicht an kurzfristigen Ergebnissen orientiert, sondern an nachhaltiger Entwicklung. Für jede Altersstufe, für jede Leistungsebene, für jeden einzelnen Menschen in unserem Verein.</p>
          <p>Unser Ziel ist es, dass alle, die mit uns Handball erleben – auf dem Feld oder daneben – das Gefühl haben: „Hier bin ich richtig." Weil sie spüren: Hier geht es um mehr. Um Werte. Um Team. Um echte Entwicklung.</p>
          <p>Dieses Handbuch ist unser gemeinsamer Nenner, unsere Plattform, unser Versprechen. Aber es ist nur dann wirkungsvoll, wenn wir es gemeinsam mit Leben füllen:</p>
          <ul className="list-disc list-inside pl-4">
            <li>durch Trainer:innen, die mutig, neugierig und verantwortungsvoll vorangehen.</li>
            <li>durch Eltern, die begleiten, vertrauen und mitgestalten.</li>
            <li>durch Spieler:innen, die sich einbringen, ausprobieren und dranbleiben.</li>
          </ul>
          <p>Wir stehen am Anfang eines Weges, der nie ganz fertig sein wird. Aber jeder Schritt, den wir gemeinsam gehen, macht unseren Verein stärker. Lasst uns diesen Weg entschlossen, mit Freude und einem klaren Ziel vor Augen gehen: bessere Spieler, bessere Menschen, ein starker Verein.</p>
        </motion.div>
      </section>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105 z-50"
          aria-label="Zurück nach oben"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
