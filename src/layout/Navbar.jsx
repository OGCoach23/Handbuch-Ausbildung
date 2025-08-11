import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Passe den Pfad zu deinem Wappen an

export default function Navbar() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll- und Hover-Detection für Header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY < 10) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 80) {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  const menuItems = [
    { title: "EBENE 1", desc: "Erfahre alles über unsere Ziele und Ideen", link: "/ebene1" },
    { title: "EBENE 2", desc: "Erfahre welche Inhalte in welcher Altersstufe gefragt sind", link: "/ebene2" },
    { title: "EBENE 3", desc: "Erfahre wie sich Skills, Positionen und Spielsystem entwickeln", link: "/ebene3" },
    { title: "EBENE 4", desc: "Erfahre wie aus der Theorie Praxis wird", link: "/ebene4" },
    { title: "TRAINING", desc: "Erfahre alles über Prinzipien, Aufbau und Planung, sowie Wirkung eines Trainings", link: "/training" },
  ];

  return (
    <>
      {/* HEADER */}
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white to-gray-100 shadow-md"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
              {/* Logo + Titel */}
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Vereinslogo" className="h-10 w-10" />
                <span className="text-[#004b87] font-bold text-lg">
                  Laimer Handbuch zur Ausbildung
                </span>
              </div>

              {/* Rechts: Links + Menu */}
              <div className="flex items-center space-x-6">
                <Link to="/leitbild" className="text-[#004b87] hover:underline">Leitbild</Link>
                <Link to="/kontakt" className="text-[#004b87] hover:underline">Kontakt</Link>
                <button
                  onClick={() => setMenuOpen(true)}
                  className="text-[#004b87] hover:text-green-700"
                >
                  <Menu size={28} />
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* OVERLAY-MENÜ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-green-600 rounded-2xl shadow-lg p-8 max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
              >
                <X size={28} />
              </button>

              {/* Menü-Karten */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="bg-white rounded-xl p-6 text-center transition-all duration-300 hover:bg-green-700 hover:text-white hover:rounded-full shadow-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm mt-2">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
