import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HoverFooter from "./layout/HoverFooter";
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
import EvaluationFeedbackZielsystem from "./pages/evaluation-feedback-zielsystem";
import Training from "./pages/training.jsx";
import FJugendPage from "./pages/f-jugend";
import FJugendM1 from "./pages/f-jugend-m1";
import FJugendM2 from "./pages/f-jugend-m2";
import FJugendM3 from "./pages/f-jugend-m3";
import FJugendM4 from "./pages/f-jugend-m4";
import FJugendM5 from "./pages/f-jugend-m5";
import FJugendM6 from "./pages/f-jugend-m6";
// Neue 3D-Karten-Komponenten für alle Jugendstufen
import EJugend from "./pages/e-jugend";
import DJugend from "./pages/d-jugend";
import CJugend from "./pages/c-jugend";
import BJugend from "./pages/b-jugend";
import AJugend from "./pages/a-jugend";
// D-Jugend Module
import Modul1DJugend from "./pages/d-jugend-m1";
import Modul2DJugend from "./pages/d-jugend-m2";
import Modul3DJugend from "./pages/d-jugend-m3";
import Modul4DJugend from "./pages/d-jugend-m4";
import Modul5DJugend from "./pages/d-jugend-m5";
import Modul6DJugend from "./pages/d-jugend-m6";
// E-Jugend Module
import Modul1EJugend from "./pages/e-jugend-m1";
import Modul2EJugend from "./pages/e-jugend-m2";
import Modul3EJugend from "./pages/e-jugend-m3";
import Modul4EJugend from "./pages/e-jugend-m4";
import Modul5EJugend from "./pages/e-jugend-m5";
import Modul6EJugend from "./pages/e-jugend-m6";
// C-Jugend Module
import Modul1CJugend from "./pages/c-jugend-m1";
import Modul2CJugend from "./pages/c-jugend-m2";
import Modul3CJugend from "./pages/c-jugend-m3";
import Modul4CJugend from "./pages/c-jugend-m4";
import Modul5CJugend from "./pages/c-jugend-m5";
import Modul6CJugend from "./pages/c-jugend-m6";
// B-Jugend Module
import Modul1BJugend from "./pages/b-jugend-m1";
import Modul2BJugend from "./pages/b-jugend-m2";
import Modul3BJugend from "./pages/b-jugend-m3";
import Modul4BJugend from "./pages/b-jugend-m4";
import Modul5BJugend from "./pages/b-jugend-m5";
import Modul6BJugend from "./pages/b-jugend-m6";
// A-Jugend Module
import Modul1AJugend from "./pages/a-jugend-m1";
import Modul2AJugend from "./pages/a-jugend-m2";
import Modul3AJugend from "./pages/a-jugend-m3";
import Modul4AJugend from "./pages/a-jugend-m4";
import Modul5AJugend from "./pages/a-jugend-m5";
import Modul6AJugend from "./pages/a-jugend-m6";
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

// Positionsprofile
import Positionsprofile from "./pages/Positionsprofile";
import TorwartProfil from "./pages/TorwartProfil";
import PositionAussen from "./pages/PositionAussen";
import KreislaeuferProfil from "./pages/KreislaeuferProfil";
import RueckraumProfil from "./pages/RueckraumProfil";
import RueckraumMitte from "./pages/RueckraumMitte";
import PositionsprofilTemplate from "./pages/PositionsprofilTemplate";

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
            <Route path="/evaluation-feedback-zielsystem" element={<EvaluationFeedbackZielsystem />} />
            <Route path="/training" element={<Training />} />
            <Route path="/kontakt" element={<KontaktPage />} />

            {/* F-Jugend */}
            <Route path="/f-jugend" element={<FJugendPage />} />
            <Route path="/f-jugend-m1" element={<FJugendM1 />} />
            <Route path="/f-jugend-m2" element={<FJugendM2 />} />
            <Route path="/f-jugend-m3" element={<FJugendM3 />} />
            <Route path="/f-jugend-m4" element={<FJugendM4 />} />
            <Route path="/f-jugend-m5" element={<FJugendM5 />} />
            <Route path="/f-jugend-m6" element={<FJugendM6 />} />

            {/* E-Jugend */}
            <Route path="/e-jugend" element={<EJugend />} />
            <Route path="/e-jugend-m1" element={<Modul1EJugend />} />
            <Route path="/e-jugend-m2" element={<Modul2EJugend />} />
            <Route path="/e-jugend-m3" element={<Modul3EJugend />} />
            <Route path="/e-jugend-m4" element={<Modul4EJugend />} />
            <Route path="/e-jugend-m5" element={<Modul5EJugend />} />
            <Route path="/e-jugend-m6" element={<Modul6EJugend />} />

            {/* D-Jugend */}
            <Route path="/d-jugend" element={<DJugend />} />
            <Route path="/d-jugend-m1" element={<Modul1DJugend />} />
            <Route path="/d-jugend-m2" element={<Modul2DJugend />} />
            <Route path="/d-jugend-m3" element={<Modul3DJugend />} />
            <Route path="/d-jugend-m4" element={<Modul4DJugend />} />
            <Route path="/d-jugend-m5" element={<Modul5DJugend />} />
            <Route path="/d-jugend-m6" element={<Modul6DJugend />} />

            {/* C-Jugend */}
            <Route path="/c-jugend" element={<CJugend />} />
            <Route path="/c-jugend-m1" element={<Modul1CJugend />} />
            <Route path="/c-jugend-m2" element={<Modul2CJugend />} />
            <Route path="/c-jugend-m3" element={<Modul3CJugend />} />
            <Route path="/c-jugend-m4" element={<Modul4CJugend />} />
            <Route path="/c-jugend-m5" element={<Modul5CJugend />} />
            <Route path="/c-jugend-m6" element={<Modul6CJugend />} />

            {/* B-Jugend */}
            <Route path="/b-jugend" element={<BJugend />} />
            <Route path="/b-jugend-m1" element={<Modul1BJugend />} />
            <Route path="/b-jugend-m2" element={<Modul2BJugend />} />
            <Route path="/b-jugend-m3" element={<Modul3BJugend />} />
            <Route path="/b-jugend-m4" element={<Modul4BJugend />} />
            <Route path="/b-jugend-m5" element={<Modul5BJugend />} />
            <Route path="/b-jugend-m6" element={<Modul6BJugend />} />

            {/* A-Jugend */}
            <Route path="/a-jugend" element={<AJugend />} />
            <Route path="/a-jugend-m1" element={<Modul1AJugend />} />
            <Route path="/a-jugend-m2" element={<Modul2AJugend />} />
            <Route path="/a-jugend-m3" element={<Modul3AJugend />} />
            <Route path="/a-jugend-m4" element={<Modul4AJugend />} />
            <Route path="/a-jugend-m5" element={<Modul5AJugend />} />
            <Route path="/a-jugend-m6" element={<Modul6AJugend />} />

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

            {/* Positionsprofile */}
            <Route path="/positionsprofile" element={<Positionsprofile />} />
            <Route path="/torwart-profil" element={<TorwartProfil />} />
            <Route path="/aussen-profil" element={<PositionAussen />} />
            <Route path="/kreis-profil" element={<KreislaeuferProfil />} />
            <Route path="/rueckraum-profil" element={<RueckraumProfil />} />
            <Route path="/rueckraum-mitte-profil" element={<RueckraumMitte />} />
            <Route path="/positionsprofil-template" element={<PositionsprofilTemplate />} />

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
        <HoverFooter />
      </div>
    </Router>
  );
}

export default App;
