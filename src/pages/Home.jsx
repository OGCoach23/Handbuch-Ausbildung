import { Link } from "react-router-dom";

const links = [
  {
    title: "Leitbild & Zielsetzung",
    link: "/leitbild",
    description:
      "Wir wollen langfristig, planvoll und mit Leidenschaft ausbilden. Unser Ziel: starke Persönlichkeiten auf und neben dem Spielfeld.",
  },
  {
    title: "Ausbildungsprinzipien & Werte",
    link: "/prinzipien",
    description:
      "Unser Handeln basiert auf pädagogischen, sportlichen und sozialen Prinzipien – mit Fokus auf Haltung, Kommunikation und Entwicklungsfreude.",
  },
  {
    title: "Handball als Schule für's Leben",
    link: "/schule-fuers-leben",
    description:
      "Kinder stark machen – nicht nur im Spiel, sondern fürs Leben. Handball als Ort für Selbstwirksamkeit, Gemeinschaft und Lernen.",
  },
  {
    title: "Trainingsaufbau & Methodik",
    link: "/trainingsmethodik",
    description:
      "Wie wir Training gestalten: strukturiert, altersgerecht, abwechslungsreich – mit klaren methodischen Bausteinen.",
  },
  {
    title: "Alters- & Leistungsstufen",
    link: "/stufen",
    description:
      "Was wann gelernt wird: Entwicklungsstufen und pädagogische Ausrichtung von der F-Jugend bis zur A-Jugend.",
  },
  {
    title: "Ebene 2: Modulbasierte Ausbildungslogik",
    link: "/ebene2",
    description:
      "Unsere Inhalte sind modular aufgebaut – logisch, strukturiert, wiederholbar. So entsteht ein roter Faden über Jahre hinweg.",
  },
  {
    title: "Ebene 3: Kompetenzkompass, Durchgängigkeit & Positionen",
    link: "/ebene3",
    description:
      "Mit dem Kompetenzkompass schaffen wir Vergleichbarkeit, Individualisierung und Entwicklung über Positionen hinweg.",
  },
  {
    title: "Ebene 4: Umsetzung & Weiterentwicklung",
    link: "/ebene4",
    description:
      "Wie wir Ideen in die Halle bringen, Feedback nutzen und als Verein gemeinsam besser werden.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Section 1: Einleitung */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-6">Ausbildung mit Herz & Verstand</h1>
          <p className="text-lg text-dark">
            Dieses Handbuch bietet Trainer:innen, Eltern und Spieler:innen unseres Vereins einen umfassenden Überblick
            über Ziele, Inhalte und Methoden der Nachwuchsausbildung im Handball.
          </p>
        </div>
      </section>

      {/* Section 2: Themenkarten */}
      <section className="bg-lightgray py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="block bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-secondary hover:text-white transition-all duration-200"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 3: Gesamtfazit */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4 text-dark text-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Gesamtfazit</h2>
          <p>
            Unsere Ausbildung verfolgt ein Ziel: ein durchgängiges, individuelles und werteorientiertes Fördersystem zu schaffen – für Kinder und Jugendliche aller Leistungsstufen.
          </p>
          <p>
            Sie basiert auf einem klaren pädagogischen Fundament, ist modular aufgebaut, transparent, teamorientiert und offen für Weiterentwicklung. Sie bietet Trainer:innen Orientierung und Eltern Vertrauen.
          </p>
          <p>
            Dieses Konzept ist lebendig – es lebt vom Austausch, vom Ausprobieren und vom gemeinsamen Ziel: Kinder zu begleiten, stark zu machen und für den Handball zu begeistern.
          </p>
        </div>
      </section>
    </main>
  );
}
