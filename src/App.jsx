import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Leitbild from "./pages/Leitbild";
import Home from "./pages/Home";
import Zielgruppen from "./pages/Zielgruppen";
import HandballLeben from "./pages/HandballLeben";
import Trainingsmethodik from "./pages/Trainingsmethodik";
import AltersLeistungsstufen from "./pages/AltersLeistungsstufen";
import Ebene2 from "./pages/Ebene2";
import Ebene3 from "./pages/Ebene3";
import Ebene4 from "./pages/Ebene4";
import Ausbildungsprinzipien from "./pages/Ausbildungsprinzipien";

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

// Globale Navigation für alle Unterseiten
const GlobalNavigation = () => {
  const location = useLocation();
  
  // Navigation nicht auf der Home-Seite anzeigen
  if (location.pathname === "/") {
    return null;
  }

  return (
    <header className="bg-green-700 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-green-700 font-bold text-sm">SV</span>
          </div>
          <h1 className="text-xl font-bold">Laimer Ausbildungshandbuch</h1>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm justify-center md:justify-end">
          <Link to="/" className="hover:underline bg-white/10 px-2 py-1 rounded">← Zurück zur Startseite</Link>
          <Link to="/leitbild" className="hover:underline">Leitbild</Link>
          <Link to="/prinzipien" className="hover:underline">Prinzipien</Link>
          <Link to="/ebene2" className="hover:underline">Ebene 2</Link>
          <Link to="/ebene3" className="hover:underline">Ebene 3</Link>
          <Link to="/ebene4" className="hover:underline">Ebene 4</Link>
        </nav>
      </div>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <GlobalNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leitbild" element={<Leitbild />} />
          <Route path="/prinzipien" element={<Ausbildungsprinzipien />} />
          <Route path="/schule-leben" element={<HandballLeben />} />
          <Route path="/trainingsaufbau" element={<Trainingsmethodik />} />
          <Route path="/altersstufen" element={<AltersLeistungsstufen />} />
          <Route path="/ebene2" element={<Ebene2 />} />
          <Route path="/ebene3" element={<Ebene3 />} />
          <Route path="/ebene4" element={<Ebene4 />} />
          <Route path="/ausbildungsprinzipien" element={<Ausbildungsprinzipien />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/kinderbereich" element={<AltersLeistungsstufen />} />
          <Route path="/jugendbereich" element={<Ebene2 />} />
          <Route path="/kompetenzkompass" element={<Ebene3 />} />
          <Route path="/positionsprofile" element={<Ebene3 />} />
          <Route path="/spielsysteme" element={<Ebene3 />} />
          <Route path="/zielgruppen" element={<Zielgruppen />} />
          <Route path="/schule-fuers-leben" element={<HandballLeben />} />
          <Route path="/trainingsmethodik" element={<Trainingsmethodik />} />
          <Route path="/stufen" element={<AltersLeistungsstufen />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
