import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Home, BookOpen, Users, Target, GraduationCap, Heart, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/sv-laim-logo.svg";

export default function Navbar() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

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

  // Schließe Dropdown beim Klick außerhalb
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigationItems = [
    {
      title: "Leitbild",
      icon: <BookOpen size={20} />,
      link: "/leitbild",
      description: "Leitbild und Ausbildungsprinzipien"
    },
    {
      title: "Altersstufen",
      icon: <Users size={20} />,
      hasDropdown: true,
      dropdownItems: [
        { title: "F-Jugend", link: "/f-jugend", description: "6-7 Jahre - Grundlagen" },
        { title: "E-Jugend", link: "/e-jugend", description: "8-9 Jahre - Spielerische Entwicklung" },
        { title: "D-Jugend", link: "/d-jugend", description: "10-11 Jahre - Technik & Taktik" },
        { title: "C-Jugend", link: "/c-jugend", description: "12-13 Jahre - Systeme & Positionen" },
        { title: "B-Jugend", link: "/b-jugend", description: "14-15 Jahre - Leistungsorientierung" },
        { title: "A-Jugend", link: "/a-jugend", description: "16-17 Jahre - Erwachsenenbereich" }
      ]
    },
    {
      title: "Training",
      icon: <Target size={20} />,
      hasDropdown: true,
      dropdownItems: [
        { title: "Methodik", link: "/trainingsaufbau", description: "Trainingsaufbau & Prinzipien" },
        { title: "Trainingsaufbau", link: "/training", description: "Struktur & Jahresplanung" },
        { title: "Handball Leben", link: "/schule-leben", description: "Schule fürs Leben" },
        { title: "Altersstufen", link: "/altersstufen", description: "Überblick aller Stufen" }
      ]
    },
    {
      title: "Positionen",
      icon: <Heart size={20} />,
      hasDropdown: true,
      dropdownItems: [
        { title: "Übersicht", link: "/positionsprofile", description: "Alle Positionsprofile im Überblick" },
        { title: "Torwart", link: "/torwart-profil", description: "Torwart-Positionsprofil" },
        { title: "Außen", link: "/aussen-profil", description: "Außenspieler-Positionsprofil" },
        { title: "Kreis", link: "/kreis-profil", description: "Kreisläufer-Positionsprofil" },
        { title: "Rückraum", link: "/rueckraum-profil", description: "Rückraum-Positionsprofil" },
        { title: "Rückraum Mitte", link: "/rueckraum-mitte-profil", description: "Rückraum Mitte-Positionsprofil" }
      ]
    },
    {
      title: "Spielsysteme",
      icon: <Target size={20} />,
      hasDropdown: true,
      dropdownItems: [
        { title: "Übersicht", link: "/entwicklung-spielsysteme", description: "Entwicklung der Spielsysteme" },
        { title: "E-Jugend", link: "/spielsystem-e-jugend", description: "Manndeckung" },
        { title: "D-Jugend", link: "/spielsystem-d-jugend", description: "1:5-Deckung" },
        { title: "Alle Systeme", link: "/spielsysteme-uebersicht", description: "Komplette Übersicht" }
      ]
    },
    {
      title: "Kompetenzkompass",
      icon: <GraduationCap size={20} />,
      link: "/kompetenzkompass",
      description: "Systematische Kompetenzentwicklung"
    },
    {
      title: "Evaluation & Feedback",
      icon: <BarChart3 size={20} />,
      link: "/evaluation-feedback-zielsystem",
      description: "Entwicklung messen & Ziele setzen"
    }
  ];

  const handleDropdownToggle = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

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
            className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
              {/* Logo + Titel */}
              <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <img src={logo} alt="Vereinslogo" className="h-12 w-12" />
                <div className="hidden md:block">
                  <span className="text-[#004b87] font-bold text-xl block">
                    Laimer Handbuch zur Ausbildung
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <div key={item.title} className="relative" ref={dropdownRef}>
                    {item.hasDropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => handleDropdownToggle(item.title)}
                          className="flex items-center space-x-2 px-4 py-2 text-[#004b87] hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-300 font-medium"
                        >
                          {item.icon}
                          <span>{item.title}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-300 ${
                              activeDropdown === item.title ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.title && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                            >
                              <div className="p-4">
                                <h3 className="font-bold text-lg text-[#004b87] mb-3 flex items-center">
                                  {item.icon}
                                  <span className="ml-2">{item.title}</span>
                                </h3>
                                <div className="space-y-2">
                                  {item.dropdownItems.map((dropdownItem) => (
                                    <Link
                                      key={dropdownItem.title}
                                      to={dropdownItem.link}
                                      onClick={closeAllMenus}
                                      className="block p-3 rounded-lg hover:bg-green-50 transition-colors duration-200"
                                    >
                                      <div className="font-medium text-[#004b87]">{dropdownItem.title}</div>
                                      <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.link}
                        className="flex items-center space-x-2 px-4 py-2 text-[#004b87] hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-300 font-medium"
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Menu Button */}
              <button
                onClick={() => setMenuOpen(true)}
                className="text-[#004b87] hover:bg-green-50 hover:text-green-700 p-2 rounded-lg transition-all duration-300"
              >
                <Menu size={28} />
              </button>
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
            onClick={closeAllMenus}
          >
            <motion.div
              initial={{ y: -200, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -200, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeAllMenus}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={24} />
              </button>

              {/* Mobile Menü */}
              <div className="mt-8 space-y-4">
                <Link
                  to="/"
                  onClick={closeAllMenus}
                  className="flex items-center space-x-3 p-4 rounded-xl hover:bg-green-50 transition-colors duration-200"
                >
                  <Home size={24} className="text-green-600" />
                  <div>
                    <div className="font-bold text-lg text-[#004b87]">Home</div>
                    <div className="text-sm text-gray-600">Zurück zur Startseite</div>
                  </div>
                </Link>

                {navigationItems.map((item) => (
                  <div key={item.title}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                            <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50">
                              {item.icon}
                              <div className="font-bold text-lg text-[#004b87]">{item.title}</div>
                            </div>
                            <div className="ml-8 space-y-1">
                              {item.dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.title}
                                  to={dropdownItem.link}
                                  onClick={closeAllMenus}
                                  className="block p-3 rounded-lg hover:bg-green-50 transition-colors duration-200"
                                >
                                  <div className="font-medium text-[#004b87]">{dropdownItem.title}</div>
                                  <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                    ) : (
                      <Link
                        to={item.link}
                        onClick={closeAllMenus}
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-green-50 transition-colors duration-200"
                      >
                        {item.icon}
                        <div>
                          <div className="font-bold text-lg text-[#004b87]">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
