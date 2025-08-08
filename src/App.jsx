import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leitbild from "./pages/Leitbild";
import Home from "./pages/Home";
import Zielgruppen from "./pages/Zielgruppen";
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
      <div className="bg-lightgray min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leitbild" element={<Leitbild />} />
          <Route path="/zielgruppen" element={<Zielgruppen />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
