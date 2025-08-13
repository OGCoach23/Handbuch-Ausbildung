import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardsData = [
  {
    title: "Zielsetzung des Moduls",
    content: [
      "Nicht jede:r will Nationalspieler:in werden. Und das ist gut so.",
      "Nicht jede:r bleibt im Breitensport, nur weil es „entspannter" ist. Auch das ist gut so.",
      "Dieses Modul schafft Klarheit – ohne zu bewerten. Es zeigt, was beide Wege ausmacht, welche Haltung sie brauchen und wie wir Spieler:innen altersgerecht begleiten können.",
      "Wir orientieren uns an den Prinzipien: Entwicklung vor Selektion, Begeisterung als Antrieb, Vielfalt als Stärke.",
      "Hilft bei Verständnis, Haltung, Orientierung, Entscheidungshilfe und Altersgerechtigkeit."
    ],
  },
  {
    title: "Breitensport bedeutet",
    content: [
      "Handball als Erlebnisraum – mit Freude, Freundschaft und Bewegung",
      "Förderung ohne Druck, Beteiligung statt Selektion",
      "Flexible Trainingsstrukturen, abwechslungsreiche Rollen, weniger Verpflichtung",
      "Ein sicherer Ort, um sich selbst auszuprobieren",
      "Haltung: Jeder darf mitmachen. Ziel ist das „Dranbleiben" – nicht das „Herausstechen". Training ist kein Casting – sondern Beziehung, Vertrauen, Bewegung."
    ],
  },
  {
    title: "Leistungssport bedeutet",
    content: [
      "Handball als Entwicklungsraum – mit klaren Zielen, Herausforderungen und Struktur",
      "Mehr Trainingsumfang, systematische Förderung, höhere Eigenverantwortung",
      "Spielzeit, Rollen, Förderung basieren auf Leistung und Haltung",
      "Ziel: besser werden – nicht perfekt sein, aber dranbleiben",
      "Haltung: Niemand muss – aber wer will, bekommt eine klare Perspektive. Leistungssport beginnt nicht bei der Auswahl – sondern bei der inneren Entscheidung."
    ],
  },
  {
    title: "Altersstufenspezifische Ausrichtung (D–A-Jugend)",
    content: [
      "D-Jugend (11–12): Breitensport: 2x Training/Woche, alle dürfen alles. Leistungssport: evtl. 3. Einheit, frühe Sonderförderung",
      "C-Jugend (13–14): Breitensport: Training bleibt flexibel, Positionen rotieren. Leistungssport: 3–4x Training/Woche, individuelle Förderpläne",
      "B-Jugend (15–16): Breitensport: Beteiligung als Ziel, Freundschaften, Turniere. Leistungssport: Ziel: Kader, Stützpunkt, höhere Liga",
      "A-Jugend (17–18): Breitensport: freiwilliger Übergang in Senioren. Leistungssport: Integration in Erwachsenenbereich, Karriereorientierung"
    ],
  },
  {
    title: "Anschlussmöglichkeiten an höhere Förderstrukturen",
    content: [
      "BHV-Talentförderung: Zentrale Sichtungen, Stützpunkttrainings, Bayerische Meisterschaft der Bezirke",
      "DHB-Leistungssportsichtung: Nominierung für DHB-Sichtungslehrgänge, orientiert am DHB-Sichtungsmanual",
      "SV Laim trägt durch kontinuierliche, geplante und zielgerichtete Ausbildung dazu bei",
      "Fokus auf individueller Spielkompetenz, qualitativ bewertet durch gemeinsame Grundübungen, Grundspiele und Zielspiele",
      "BHV-Youtube-Playlist zur Vertiefung der DHB-Sichtungsmanual-Inhalte empfohlen"
    ],
  },
  {
    title: "Für Trainer:innen",
    content: [
      "Training planen: Breitensport: Erlebnisbasiert, offen, mit Variation. Leistungssport: Zielgerichtet, strukturiert, mit Wiederholung",
      "Fortschritt bewerten: Breitensport: Beteiligung, Mut, soziale Entwicklung. Leistungssport: Technik, Taktik, Entscheidungsqualität",
      "Gespräche führen: Breitensport: Persönlich, empathisch, motivierend. Leistungssport: Klar, ehrlich, mit Zielen & nächsten Schritten",
      "Besonders achten: Breitensport: Bindung, Gruppengefühl, Sicherheit. Leistungssport: Eigenmotivation, Belastbarkeit, Lernwille"
    ],
  },
  {
    title: "Für Eltern",
    content: [
      "Kind begleiten: Breitensport: Interesse zeigen, Sicherheit geben. Leistungssport: Struktur schaffen, Erfolge feiern, Rückhalt geben",
      "Besonders achten: Breitensport: Spaß erhalten, Gruppenzugehörigkeit. Leistungssport: Überforderung erkennen, gemeinsam reflektieren",
      "Rolle im Verein: Breitensport: Unterstützer:in, Helfer:in, Partner:in. Leistungssport: Kommunikationspartner:in, Rückhalt, Ermöglicher:in",
      "Wichtig zu verstehen: Breitensport: Handball ist ein Raum für Entwicklung. Leistungssport: Leistung braucht Haltung, nicht nur Talent"
    ],
  },
  {
    title: "Abschlusspunkt",
    highlight: true,
    content: [
      "Leistungssport ist kein „Upgrade" – und Breitensport kein „Plan B".",
      "Es sind zwei Wege in ein erfülltes Handballeben.",
      "Was zählt: Der Weg passt zum Menschen. Und der Verein begleitet ihn.",
      "Entwicklung vor Selektion – Begeisterung als Antrieb – Vielfalt als Stärke",
      "Ziel: Klarheit schaffen, ohne zu bewerten, und beide Wege als gleich wertvoll zu begreifen."
    ],
  },
];

export default function BreitensportVsLeistungssport() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const carouselConfig = {
    radius: 300,
    cardWidth: 320,
    cardHeight: 420,
    availableHeight: 700,
  };
  
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    const updateSizes = () => {
      setIsMobile(window.innerWidth < 768);
      const vh = window.innerHeight;
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      const assumedFooterHeight = 100;
      const availableHeight = vh - headerHeight - assumedFooterHeight;
      carouselConfig.availableHeight = availableHeight > 0 ? availableHeight : vh;
    };
    
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const rotateLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const rotateRight = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToCard = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleCardClick = (index) => {
    if (isAnimating) return;
    if (index === currentIndex) {
      setSelectedCard(cardsData[index]);
    } else {
      goToCard(index);
    }
  };

  const getCardPosition3D = (index) => {
    const { radius } = carouselConfig;
    const offset = (index - currentIndex + cardsData.length) % cardsData.length;
    const angle = (offset * 360) / cardsData.length;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    return { x, z, angle, offset };
  };

  const getCardPosition2D = (index) => {
    const offset = index - currentIndex;
    const x = offset * (carouselConfig.cardWidth + 20);
    return { x, offset };
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header ref={headerRef} className="z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="flex justify-center pt-8 pb-4">
          <Link 
            to="/" 
            className="rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 shadow-lg hover:from-blue-600 hover:to-green-500 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            ← Zurück zur Übersicht
          </Link>
        </div>
      </header>

      {/* Hauptbereich */}
      <div 
        ref={mainContentRef} 
        className="flex-1 flex flex-col items-center justify-center p-4"
        style={{ minHeight: `${carouselConfig.availableHeight}px` }}
      >
        {/* Überschrift */}
        <motion.div
          initial={{ opacity: 0, y: -50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 w-full max-w-4xl"
          style={{ perspective: "1000px" }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h1 className="text-4xl font-bold text-green-600 text-center mb-4">
              Breitensport vs. Leistungssport
            </h1>
            <p className="text-center text-xl text-green-700 italic leading-relaxed">
              "Zwei Wege in ein erfülltes Handballeben - beide gleich wertvoll"
            </p>
          </div>
        </motion.div>

        {/* Karussell - PERFEKTE ZENTRIERUNG & RESPONSIV */}
        <div className="relative flex items-center justify-center w-full overflow-hidden">
          {/* Pfeil links */}
          <motion.button
            onClick={rotateLeft}
            disabled={isAnimating}
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-2 md:left-[-60px] z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Karten Container - MATHEMATISCH KORREKTE ZENTRIERUNG */}
          <div 
            className="relative"
            style={{
              width: isMobile ? carouselConfig.cardWidth * 3 : carouselConfig.cardWidth * 2.5,
              height: isMobile ? carouselConfig.cardHeight : carouselConfig.cardHeight * 1.2,
              perspective: isMobile ? "none" : "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            {cardsData.map((card, index) => {
              const { x, z, angle, offset } = isMobile 
                ? getCardPosition2D(index) 
                : getCardPosition3D(index);
              
              const isFront = isMobile ? offset === 0 : offset === 0;
              const isVisible = isMobile 
                ? Math.abs(offset) <= 1 
                : offset <= 3 || offset >= cardsData.length - 3;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={index}
                  className={`absolute rounded-xl shadow-2xl flex items-center justify-center text-center cursor-pointer ${
                    card.highlight ? "border-4 border-yellow-400" : "border border-gray-200"
                  }`}
                  style={{
                    width: carouselConfig.cardWidth,
                    height: carouselConfig.cardHeight,
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: "#166534",
                    left: "50%",
                    top: "50%",
                    transform: isMobile 
                      ? `translate(-50%, -50%) translateX(${x}px)`
                      : `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`,
                    zIndex: isFront ? 20 : 10 - Math.abs(offset),
                    filter: isFront ? "none" : `brightness(${1 - Math.abs(offset) * 0.1})`,
                  }}
                  animate={{
                    scale: isFront ? 1 : 0.9,
                    opacity: isFront ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={{
                    scale: isFront ? 1.05 : 0.95,
                    zIndex: 25,
                    transition: { duration: 0.2 },
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="p-6">
                    <h3 className="font-bold text-xl leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pfeil rechts */}
          <motion.button
            onClick={rotateRight}
            disabled={isAnimating}
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-2 md:right-[-60px] z-30 bg-white/95 rounded-full p-3 shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Indikatoren */}
        <div className="mt-6 flex space-x-3">
          {cardsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToCard(index)}
              disabled={isAnimating}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-blue-600 scale-125 shadow-lg" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-3xl w-full shadow-2xl overflow-y-auto max-h-[85vh]"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className={`text-3xl font-bold mb-6 ${
                selectedCard.highlight ? "text-yellow-600" : "text-green-600"
              }`}>
                {selectedCard.title}
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                {selectedCard.content.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => setSelectedCard(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium text-lg"
              >
                Schließen
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
