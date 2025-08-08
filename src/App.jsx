import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Navbar from "./layout/Navbar";







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
      <div className="min-h-screen">
        <Navbar />
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
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
