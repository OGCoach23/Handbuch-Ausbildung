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
        <p className="text-lg text-dark">
          Dieses Handbuch bietet Trainer:innen, Eltern und Spieler:innen unseres Vereins einen umfassenden Überblick
          über Ziele, Inhalte und Methoden der Nachwuchsausbildung im Handball.
        </p>
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
