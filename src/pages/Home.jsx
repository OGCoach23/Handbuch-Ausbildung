import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollDownArrow from "../components/ScrollDownArrow";

export default function Home() {
  const [textColors, setTextColors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const paragraphs = document.querySelectorAll('.scroll-text');
      const viewportCenter = window.innerHeight / 2;
      const newColors = {};

      paragraphs.forEach((paragraph, index) => {
        const rect = paragraph.getBoundingClientRect();
        const paragraphCenter = rect.top + rect.height / 2;
        
        // Berechne Distanz vom Viewport-Center
        const distanceFromCenter = Math.abs(paragraphCenter - viewportCenter);
        const maxDistance = window.innerHeight / 3; // Bereich für blaue Farbe
        
        if (distanceFromCenter < maxDistance) {
          // Je näher zur Mitte, desto grüner
          const greenIntensity = 1 - (distanceFromCenter / maxDistance);
          newColors[index] = greenIntensity > 0.3 ? "text-green-600" : "text-gray-300";
        } else {
          newColors[index] = "text-gray-300";
        }
      });

      setTextColors(newColors);
    };

    // Initial call und Event Listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const sectionLinks = {
    "Ebene 1: Grundlagen & Philosophie": [
      { name: "Leitbild & Zielsetzung", path: "/leitbild" },
      { name: "Zielgruppen & Rollenverständnis", path: "/zielgruppen" },
      { name: "Ausbildungsprinzipien & Werte", path: "/prinzipien" },
      { name: "Handball als Schule fürs Leben", path: "/schule-leben" },
      { name: "Trainingsaufbau & Methodik", path: "/trainingsaufbau" },
      { name: "Alters- und Leistungsstufen", path: "/altersstufen" },
    ],
    "Ebene 2: Modulbasierte Ausbildungslogik": [
      { name: "F – Jugend", path: "/f-jugend" },
      { name: "E – Jugend", path: "/e-jugend" },
      { name: "D – Jugend", path: "/d-jugend" },
      { name: "C – Jugend", path: "/c-jugend" },
      { name: "B – Jugend", path: "/b-jugend" },
      { name: "A – Jugend", path: "/a-jugend" },
    ],
    "Ebene 3: Kompetenzraster, Durchgängigkeit & Positionen, Spielsysteme": [
      { name: "Kompetenzkompass", path: "/kompetenzkompass" },
      { name: "Entwicklung der Positionen", path: "/positionen" },
      { name: "Entwicklung der Spielsysteme", path: "/spielsysteme" },
      { name: "Quer- und Neueinsteiger, Drop-Out-Prophylaxe", path: "/quereinsteiger" },
      { name: "Breitensport vs. Leistungssport", path: "/breitensport" },
    ],
    "Ebene 4: Umsetzung & Weiterentwicklung": [
      { name: "Trainingsprinzipien & Jahresplanung", path: "/trainingsprinzipien" },
      { name: "Laimkademie", path: "/laimkademie" },
      { name: "Evaluation, Feedback, Zielsystem", path: "/evaluation" },
    ],
  };

  return (
    <motion.div
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Haupttext-Container */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-12">
        
        {/* Intro-Abschnitt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[0] || "text-gray-300"}`}>
            Bei uns geht's nicht nur um Handball. Es geht um viel mehr: um Gemeinschaft, um Herzblut, um Kinder, die mit leuchtenden Augen in die Halle rennen. Um Trainer, die Woche für Woche alles geben. Um Eltern, die anfeuern, trösten, fahren, helfen. Und um einen Verein, der all das möglich macht.
          </p>
        </motion.div>

        {/* Haupt-Textabschnitt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="space-y-16 mt-48"
        >
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[1] || "text-gray-300"}`}>
            Das vorliegende Konzept ist unsere Einladung an euch alle: Trainer, Eltern, Spielerinnen und Spieler. Es ist unser gemeinsamer Wegweiser, unser Kompass, unser Versprechen. Denn wir wollen nicht einfach nur "irgendwie" ausbilden – wir wollen es richtig machen. Mit Plan. Mit Leidenschaft. Mit einem roten Faden von den Kleinsten bis zur A-Jugend.
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[2] || "text-gray-300"}`}>
            Wir glauben an den langfristigen Weg. An Entwicklung statt Schnellschuss. An Spielfreude UND Struktur. Und ja – wir glauben an unseren Verein. Weil wir wissen, was wir gemeinsam schaffen können.
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[3] || "text-gray-300"}`}>
            Dieses Handbuch ist keine trockene Theorie. Es ist voll mit Leben, Ideen, Praxis. Es wurde geschrieben aus vielen Gesprächen, aus Erfahrungen in der Halle, aus Erfolgen und Fehlern. Es zeigt dir, was wirklich zählt: Wann du was trainieren solltest. Wie du individuell förderst. Wie du Kinder stark machst – nicht nur im Spiel, sondern fürs Leben.
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[4] || "text-gray-300"}`}>
            Vielleicht wirst du beim Lesen schmunzeln, nicken, kritisch hinterfragen. Vielleicht bekommst du an manchen Stellen Gänsehaut – weil du spürst: "Ja, genau so wollen wir Handball machen."
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[5] || "text-gray-300"}`}>
            Dieses Konzept ist nicht perfekt. Aber es ist ehrlich. Und es wächst mit jedem, der es lebt.
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[6] || "text-gray-300"}`}>
            Also: Lass dich inspirieren. Mach mit. Gib dem, was wir gemeinsam aufgebaut haben, ein noch stärkeres Fundament. Für unseren Verein. Für unsere Kinder. Für echten Handball.
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[7] || "text-gray-300"}`}>
            Auf den ersten Blick mag das Konzept erschlagend wirken. Es ist umfangreich, das stimmt. Es steckt auch sehr viel Herzblut und Zeit drin. Es öffnet den Blick für die unterschiedlichen Rollen und Beteiligten. Es ist transparent und schafft Verständnis für die Sichtweise der jeweils anderen.
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[8] || "text-gray-300"}`}>
            Nimm dir Zeit, die für dich relevanten Inhalte herauszufiltern, denn dann ist es plötzlich gar nicht mehr so viel Text. Es wird dir gefallen und dich inspirieren. Lass es zu.
          </p>
        </motion.div>

        {/* Gesamtfazit-Abschnitt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16 mt-48"
        >
          <h2 className={`scroll-text text-3xl font-bold transition-colors duration-500 tracking-wide leading-relaxed ${textColors[9] || "text-gray-300"}`}>
            Gesamtfazit
          </h2>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[10] || "text-gray-300"}`}>
            Dieses Konzept ist ehrlich. Es wächst mit jedem, der es lebt.
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[11] || "text-gray-300"}`}>
            Dieses Ausbildungskonzept ist mehr als eine Sammlung von Trainingsplänen und Ideen. Es ist ein Ausdruck dessen, was uns als SV Laim ausmacht: Wir bilden nicht nur Spieler:innen aus – wir begleiten Menschen auf ihrem Weg. Wir schaffen ein Umfeld, in dem Kinder wachsen, Jugendliche über sich hinauswachsen und Erwachsene Verantwortung übernehmen.
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[12] || "text-gray-300"}`}>
            Wir haben einen Weg beschrieben, der fordert, aber nicht überfordert. Der motiviert, ohne Druck zu machen. Der klare Strukturen bietet – und dennoch Raum lässt für Kreativität, Persönlichkeit und Bauchgefühl. Ein Konzept, das sich nicht an kurzfristigen Ergebnissen orientiert, sondern an nachhaltiger Entwicklung. Für jede Altersstufe, für jede Leistungsebene, für jeden einzelnen Menschen in unserem Verein.
          </p>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[13] || "text-gray-300"}`}>
            Unser Ziel ist es, dass alle, die mit uns Handball erleben – auf dem Feld oder daneben – das Gefühl haben: "Hier bin ich richtig." Weil sie spüren: Hier geht es um mehr. Um Werte. Um Team. Um echte Entwicklung.
          </p>
          
          <div className={`scroll-text text-3xl transition-colors duration-500 tracking-wide leading-relaxed ${textColors[14] || "text-gray-300"}`}>
            <p className="mb-4">Dies gelingt:</p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>durch Trainer:innen, die mutig, neugierig und verantwortungsvoll vorangehen.</li>
              <li>durch Eltern, die begleiten, vertrauen und mitgestalten.</li>
              <li>durch Spieler:innen, die sich einbringen, ausprobieren und dranbleiben.</li>
            </ul>
          </div>
          
          <p className={`scroll-text text-3xl text-justify transition-colors duration-500 tracking-wide leading-relaxed ${textColors[15] || "text-gray-300"}`}>
            Wir stehen am Anfang eines Weges, der nie ganz fertig sein wird. Aber jeder Schritt, den wir gemeinsam gehen, macht unseren Verein stärker. Lasst uns diesen Weg entschlossen, mit Freude und einem klaren Ziel vor Augen gehen: bessere Spieler, bessere Menschen, ein starker Verein.
          </p>
        </motion.div>
      </div>

      {/* EbenenSection - Übersicht aller Ebenen und Links */}
      <div className="mt-32 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* Scroll-Pfeil */}
      <ScrollDownArrow />
    </motion.div>
  );
}