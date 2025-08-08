import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    { title: "F-Jugend", link: "/jugend/f", description: "Infos & Inhalte für F-Jugend" },
    { title: "E-Jugend", link: "/jugend/e", description: "Trainings- und Spielinfos" },
    { title: "D-Jugend", link: "/jugend/d", description: "Lernziele & Methodik" },
    { title: "C-Jugend", link: "/jugend/c", description: "Technik & Taktik" },
    { title: "B-Jugend", link: "/jugend/b", description: "Weiterführende Inhalte" },
    { title: "A-Jugend", link: "/jugend/a", description: "Übergang in den Erwachsenenbereich" },
    { title: "Kompetenzkompass", link: "/themen/kompetenz", description: "Kompetenzraster & Bewertung" },
    { title: "Entwicklung Positionen", link: "/themen/positionen", description: "Spielerrollen & Anforderungen" },
    { title: "Entwicklung Spielsysteme", link: "/themen/systeme", description: "Taktische Konzepte" },
    { title: "Laimkademie", link: "https://laimkademie.de", description: "Externer Link zur Akademie" },
  ];

  return (
    <main className="min-h-screen bg-lightgray p-8">
      <section className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Willkommen im Ausbildungshandbuch</h1>
        <section className="max-w-3xl mx-auto text-dark space-y-4 leading-relaxed text-lg">
          <p>Bei uns geht's nicht nur um Handball. Es geht um viel mehr: um Gemeinschaft, um Herzblut, um Kinder, die mit leuchtenden Augen in die Halle rennen. Um Trainer, die Woche für Woche alles geben. Um Eltern, die anfeuern, trösten, fahren, helfen. Und um einen Verein, der all das möglich macht.</p>

          <p>Wir sind der SV Laim, ein Traditionsverein (seit 1910) mit erfolgreichen Wurzeln im Handball, wir sind zentral in München eingebettet und engagieren uns weit über den Sport hinaus.</p>

          <p>Das vorliegende Konzept ist unsere Einladung an euch alle: Trainer, Eltern, Spielerinnen und Spieler. Es ist unser gemeinsamer Wegweiser, unser Kompass, unser Versprechen. Denn wir wollen nicht einfach nur „irgendwie" ausbilden – wir wollen es richtig machen. Mit Plan. Mit Leidenschaft. Mit einem roten Faden von den Kleinsten bis zur A-Jugend.</p>

          <p>Wir glauben an den langfristigen Weg. An Entwicklung statt Schnellschuss. An Spielfreude UND Struktur. Und ja – wir glauben an unseren Verein. Weil wir wissen, was wir gemeinsam schaffen können.</p>

          <p>Dieses Handbuch ist keine trockene Theorie. Es ist voll mit Leben, Ideen, Praxis. Es wurde geschrieben aus vielen Gesprächen, aus Erfahrungen in der Halle, aus Erfolgen und Fehlern. Es zeigt dir, was wirklich zählt: Wann du was trainieren solltest. Wie du individuell förderst. Wie du Kinder stark machst – nicht nur im Spiel, sondern fürs Leben.</p>

          <p>Vielleicht wirst du beim Lesen schmunzeln, nicken, kritisch hinterfragen. Vielleicht bekommst du an manchen Stellen Gänsehaut – weil du spürst: „Ja, genau so wollen wir Handball machen."</p>

          <p>Dieses Konzept ist nicht perfekt. Aber es ist ehrlich. Und es wächst mit jedem, der es lebt.</p>

          <p className="font-semibold text-primary">Also: Lass dich inspirieren. Mach mit. Gib dem, was wir gemeinsam aufgebaut haben, ein noch stärkeres Fundament. Für unseren Verein. Für unsere Kinder. Für echten Handball.</p>

          <p className="italic text-sm text-gray-700">Auf den ersten Blick mag das Konzept erschlagend wirken. Es ist umfangreich, das stimmt. Es steckt auch sehr viel Herzblut und Zeit drin. Es öffnet den Blick für die unterschiedlichen Rollen und Beteiligten. Es ist transparent und schafft Verständnis für die Sichtweise der jeweils anderen. Nimm dir Zeit, die für dich relevanten Inhalte herauszufiltern, denn dann ist es plötzlich gar nicht mehr so viel Text. Es wird dir gefallen und dich inspirieren. Lass es zu.</p>
        </section>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
