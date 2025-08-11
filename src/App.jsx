import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
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
import FJugendPage from "./pages/f-jugend";
import FJugendM1 from "./pages/f-jugend-m1";
import FJugendM2 from "./pages/f-jugend-m2";
import FJugendM3 from "./pages/f-jugend-m3";
import FJugendM4 from "./pages/f-jugend-m4";
import FJugendM5 from "./pages/f-jugend-m5";
import FJugendM6 from "./pages/f-jugend-m6";
// Kompetenzkompass
import KompetenzkompassIndex from "./pages/Kompetenzkompass";
import KompetenzkompassModule from "./pages/Kompetenzkompass/Module";
import KompetenzModul1 from "./pages/Kompetenzkompass/Modul1";
import KompetenzModul2 from "./pages/Kompetenzkompass/Modul2";
import KompetenzModul3 from "./pages/Kompetenzkompass/Modul3";
import KompetenzModul4 from "./pages/Kompetenzkompass/Modul4";
import KompetenzModul5 from "./pages/Kompetenzkompass/Modul5";
import KompetenzModul6 from "./pages/Kompetenzkompass/Modul6";
import KompetenzkompassStart from "./pages/Kompetenzkompass/Kompetenzkompass";
import PraktischeAnwendung from "./pages/Kompetenzkompass/PraktischeAnwendung";
// Jugend-Übersichten
import AJugendUebersicht from "./pages/AJugend/AJugendUebersicht";
import BJugendUebersicht from "./pages/BJugend/BJugendUebersicht";
import CJugendUebersicht from "./pages/CJugend/CJugendUebersicht";
import DJugendUebersicht from "./pages/DJugend/DJugendUebersicht";
import EJugendUebersicht from "./pages/EJugend/EJugendUebersicht";
// E-Jugend Module
import EJugendModul1 from "./pages/EJugend/Modul1";
import EJugendModul2 from "./pages/EJugend/Modul2";
import EJugendModul3 from "./pages/EJugend/Modul3";
import EJugendModul4 from "./pages/EJugend/Modul4";
import EJugendModul5 from "./pages/EJugend/Modul5";
import EJugendModul6 from "./pages/EJugend/Modul6";

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

// Scroll-to-Top Komponente
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-r from-white to-gray-100">
        <Navbar />
        <div className="pt-48"> {/* Globaler Abstand für alle Unterseiten */}
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

            {/* F-Jugend */}
            <Route path="/f-jugend" element={<FJugendPage />} />
            <Route path="/f-jugend-m1" element={<FJugendM1 />} />
            <Route path="/f-jugend-m2" element={<FJugendM2 />} />
            <Route path="/f-jugend-m3" element={<FJugendM3 />} />
            <Route path="/f-jugend-m4" element={<FJugendM4 />} />
            <Route path="/f-jugend-m5" element={<FJugendM5 />} />
            <Route path="/f-jugend-m6" element={<FJugendM6 />} />

            {/* Jugendbereiche Übersichten */}
            <Route path="/e-jugend" element={<EJugendUebersicht />} />
            <Route path="/d-jugend" element={<DJugendUebersicht />} />
            <Route path="/c-jugend" element={<CJugendUebersicht />} />
            <Route path="/b-jugend" element={<BJugendUebersicht />} />
            <Route path="/a-jugend" element={<AJugendUebersicht />} />

            {/* E-Jugend Module */}
            <Route path="/e-jugend/modul1" element={<EJugendModul1 />} />
            <Route path="/e-jugend/modul2" element={<EJugendModul2 />} />
            <Route path="/e-jugend/modul3" element={<EJugendModul3 />} />
            <Route path="/e-jugend/modul4" element={<EJugendModul4 />} />
            <Route path="/e-jugend/modul5" element={<EJugendModul5 />} />
            <Route path="/e-jugend/modul6" element={<EJugendModul6 />} />

            {/* Kompetenzkompass */}
            <Route path="/kompetenzkompass" element={<KompetenzkompassIndex />} />
            <Route path="/kompetenzkompass/module" element={<KompetenzkompassModule />} />
            <Route path="/kompetenzkompass/ueberblick" element={<KompetenzkompassStart />} />
            <Route path="/kompetenzkompass/praxis" element={<PraktischeAnwendung />} />
            <Route path="/kompetenzkompass/modul1" element={<KompetenzModul1 />} />
            <Route path="/kompetenzkompass/modul2" element={<KompetenzModul2 />} />
            <Route path="/kompetenzkompass/modul3" element={<KompetenzModul3 />} />
            <Route path="/kompetenzkompass/modul4" element={<KompetenzModul4 />} />
            <Route path="/kompetenzkompass/modul5" element={<KompetenzModul5 />} />
            <Route path="/kompetenzkompass/modul6" element={<KompetenzModul6 />} />

            {/* Alias-Routen */}
            <Route path="/kinderbereich" element={<AltersLeistungsstufen />} />
            <Route path="/jugendbereich" element={<Ebene2 />} />
            <Route path="/positionsprofile" element={<Ebene3 />} />
            <Route path="/spielsysteme" element={<Ebene3 />} />
            <Route path="/zielgruppen" element={<Zielgruppen />} />
            <Route path="/schule-fuers-leben" element={<HandballLeben />} />
            <Route path="/trainingsmethodik" element={<Trainingsmethodik />} />
            <Route path="/stufen" element={<AltersLeistungsstufen />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
