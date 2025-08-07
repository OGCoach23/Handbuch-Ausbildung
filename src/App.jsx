import React from "react";

const Card = ({ title, description, link }) => (
  <a href={link} className="block rounded-2xl shadow-lg p-6 bg-white hover:bg-blue-50 transition transform hover:-translate-y-1 hover:shadow-2xl">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>
  </a>
);

function App() {
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
    <main className="min-h-screen bg-gray-100 p-8">
      <section className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-4">Willkommen im Ausbildungshandbuch</h1>
        <p className="text-lg text-gray-700">
          Dieses Handbuch bietet Trainer:innen, Eltern und Spieler:innen unseres Vereins einen umfassenden Überblick
          über Ziele, Inhalte und Methoden der Nachwuchsausbildung im Handball.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
