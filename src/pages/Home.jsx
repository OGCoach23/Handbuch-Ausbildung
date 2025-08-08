import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const cards = [
  {
    title: "Leitbild & Zielsetzung",
    link: "/leitbild",
  },
  {
    title: "Ausbildungsprinzipien & Werte",
    link: "/ausbildungsprinzipien",
  },
  {
    title: "Handball als Schule fürs Leben",
    link: "/schule-fuers-leben",
  },
  {
    title: "Trainingsaufbau & Methodik",
    link: "/trainingsmethodik",
  },
  {
    title: "Alters & Leistungsstufen",
    link: "/stufen",
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
  return (
    <div>
      {/* Header */}
      <header className="bg-green-700 text-white p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="SV Laim" className="w-12 h-12" />
          <h1 className="text-2xl font-bold">Laimer Ausbildungshandbuch Handball</h1>
        </div>
        <nav className="space-x-4 text-sm hidden md:block">
          <a href="/leitbild" className="hover:underline">Leitbild</a>
          <a href="/trainingsmethodik" className="hover:underline">Trainingsaufbau & Jahresplanung</a>
          <a href="/stufen" className="hover:underline">Kinderbereich</a>
          <a href="/ebene2" className="hover:underline">Jugendbereich</a>
          <a href="/ebene3" className="hover:underline">Kompetenzkompass</a>
          <a href="/ebene3" className="hover:underline">Entwicklung Positionen</a>
          <a href="/ebene3" className="hover:underline">Entwicklung Spielsysteme</a>
        </nav>
      </header>

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

      {/* Karten */}
      <section className="bg-white/40 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(({ title, link }, index) => (
            <motion.a
              key={title}
              href={link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/60 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex items-center justify-center text-center border border-white/20"
            >
              <h3 className="text-lg font-bold text-primary">{title}</h3>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Fazit */}
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
          <p>
            Lass dich inspirieren. Mach mit. Gib dem, was wir gemeinsam aufgebaut haben, ein noch stärkeres Fundament. Für unseren Verein. Für unsere Kinder. Für echten Handball.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
