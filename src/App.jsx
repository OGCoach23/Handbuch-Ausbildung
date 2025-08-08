import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Leitbild from "./pages/Leitbild";

const Navbar = () => (
  <nav className="bg-primary text-white px-6 py-4 flex gap-4">
    <Link to="/" className="hover:bg-secondary px-3 py-1 rounded">Start</Link>
    <Link to="/jugend/f" className="hover:bg-secondary px-3 py-1 rounded">F-Jugend</Link>
    <Link to="/jugend/e" className="hover:bg-secondary px-3 py-1 rounded">E-Jugend</Link>
    <Link to="/jugend/d" className="hover:bg-secondary px-3 py-1 rounded">D-Jugend</Link>
    <Link to="/jugend/c" className="hover:bg-secondary px-3 py-1 rounded">C-Jugend</Link>
    <Link to="/jugend/b" className="hover:bg-secondary px-3 py-1 rounded">B-Jugend</Link>
    <Link to="/jugend/a" className="hover:bg-secondary px-3 py-1 rounded">A-Jugend</Link>
    <Link to="/themen/kompetenz" className="hover:bg-secondary px-3 py-1 rounded">Kompetenzkompass</Link>
    <Link to="/kontakt" className="hover:bg-secondary px-3 py-1 rounded">Kontakt</Link>
  </nav>
);



const Home = () => {
  const links = [
    {
      title: "Leitbild & Zielsetzung",
      link: "/leitbild",
      description: "Wir wollen langfristig, planvoll und mit Leidenschaft ausbilden. Unser Ziel: starke Persönlichkeiten auf und neben dem Spielfeld.",
    },
    {
      title: "Ausbildungsprinzipien & Werte",
      link: "/prinzipien",
      description: "Unser Handeln basiert auf pädagogischen, sportlichen und sozialen Prinzipien – mit Fokus auf Haltung, Kommunikation und Entwicklungsfreude.",
    },
    {
      title: "Handball als Schule für's Leben",
      link: "/schule-fuers-leben",
      description: "Kinder stark machen – nicht nur im Spiel, sondern fürs Leben. Handball als Ort für Selbstwirksamkeit, Gemeinschaft und Lernen.",
    },
    {
      title: "Trainingsaufbau & Methodik",
      link: "/trainingsmethodik",
      description: "Wie wir Training gestalten: strukturiert, altersgerecht, abwechslungsreich – mit klaren methodischen Bausteinen.",
    },
    {
      title: "Alters- & Leistungsstufen",
      link: "/stufen",
      description: "Was wann gelernt wird: Entwicklungsstufen und pädagogische Ausrichtung von der F-Jugend bis zur A-Jugend.",
    },
    {
      title: "Ebene 2: Modulbasierte Ausbildungslogik",
      link: "/ebene2",
      description: "Unsere Inhalte sind modular aufgebaut – logisch, strukturiert, wiederholbar. So entsteht ein roter Faden über Jahre hinweg.",
    },
    {
      title: "Ebene 3: Kompetenzkompass, Durchgängigkeit & Positionen",
      link: "/ebene3",
      description: "Mit dem Kompetenzkompass schaffen wir Vergleichbarkeit, Individualisierung und Entwicklung über Positionen hinweg.",
    },
    {
      title: "Ebene 4: Umsetzung & Weiterentwicklung",
      link: "/ebene4",
      description: "Wie wir Ideen in die Halle bringen, Feedback nutzen und als Verein gemeinsam besser werden.",
    },
  ];

  return (
    <main className="min-h-screen bg-lightgray p-8">
      <section className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Willkommen im Ausbildungshandbuch</h1>
        <p className="text-lg text-dark">
          Dieses Handbuch bietet Trainer:innen, Eltern und Spieler:innen unseres Vereins einen umfassenden Überblick
          über Ziele, Inhalte und Methoden der Nachwuchsausbildung im Handball.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {links.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="block rounded-2xl bg-white p-6 shadow-md hover:bg-secondary hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </a>
        ))}
      </section>

      <section className="max-w-3xl mx-auto text-dark space-y-4 leading-relaxed text-lg bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-primary mb-2">Gesamtfazit</h2>
        <p>
          Unsere Ausbildung verfolgt ein Ziel: ein durchgängiges, individuelles und werteorientiertes Fördersystem zu schaffen – für Kinder und Jugendliche aller Leistungsstufen.
        </p>
        <p>
          Sie basiert auf einem klaren pädagogischen Fundament, ist modular aufgebaut, transparent, teamorientiert und offen für Weiterentwicklung. Sie bietet Trainer:innen Orientierung und Eltern Vertrauen.
        </p>
        <p>
          Dieses Konzept ist lebendig – es lebt vom Austausch, vom Ausprobieren und vom gemeinsamen Ziel: Kinder zu begleiten, stark zu machen und für den Handball zu begeistern.
        </p>
      </section>
    </main>
  );
};

const KontaktPage = () => (
  <main className="min-h-screen bg-lightgray p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-dark">Kontakt</h1>
      <p className="text-lg text-gray-700">
        Hier finden Sie unsere Kontaktinformationen und Ansprechpartner.
      </p>
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <div className="bg-lightgray min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leitbild" element={<Leitbild />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
