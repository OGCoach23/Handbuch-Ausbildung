import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Users, Trophy, TrendingUp, ChevronRight } from "lucide-react";

export default function SpielsystemeUebersicht() {
  const altersstufen = [
    {
      title: "E-Jugend",
      subtitle: "Manndeckung",
      description: "Eigenverantwortung und Raumorientierung",
      icon: <Users className="w-8 h-8" />,
      link: "/spielsystem-e-jugend",
      color: "bg-blue-500",
      details: "Jeder Spieler übernimmt Verantwortung für einen Gegenspieler"
    },
    {
      title: "D-Jugend", 
      subtitle: "1:5-Deckung",
      description: "Aktiver Ballbezug und Gruppentaktik",
      icon: <Target className="w-8 h-8" />,
      link: "/spielsystem-d-jugend",
      color: "bg-green-500",
      details: "Ein Spieler sichert, fünf agieren ballbezogen"
    },
    {
      title: "C-Jugend",
      subtitle: "3:2:1-Deckung", 
      description: "Spielverständnis und Entscheidungsfindung",
      icon: <Trophy className="w-8 h-8" />,
      link: "/spielsystem-c-jugend",
      color: "bg-yellow-500",
      details: "Dreigliedrige Formation mit flexiblen Rollen"
    },
    {
      title: "B-Jugend",
      subtitle: "5:1-Deckung",
      description: "Taktische Flexibilität und Spielintelligenz", 
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/spielsystem-b-jugend",
      color: "bg-purple-500",
      details: "Linienformation mit aktiver Spitze"
    },
    {
      title: "A-Jugend",
      subtitle: "6:0-Deckung (offensiv)",
      description: "Erwachsenennahe Taktik und Variabilität",
      icon: <Target className="w-8 h-8" />,
      link: "/spielsystem-a-jugend", 
      color: "bg-red-500",
      details: "Geschlossene Formation mit offenem Spiel"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Spielsysteme Übersicht
        </h1>
        <p className="text-xl text-green-600 max-w-4xl mx-auto">
          Eine systematische Entwicklung der Abwehrformationen von der E-Jugend bis zur A-Jugend.
          Jede Altersstufe baut auf der vorherigen auf und bereitet optimal auf die nächste vor.
        </p>
      </motion.div>

      {/* Navigation Zurück */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8"
      >
        <Link
          to="/entwicklung-spielsysteme"
          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5 transform rotate-180 mr-2" />
          Zurück zur Hauptseite
        </Link>
      </motion.div>

      {/* Altersstufen Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {altersstufen.map((stufe, index) => (
          <motion.div
            key={stufe.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <Link
              to={stufe.link}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Header mit Icon */}
              <div className={`${stufe.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{stufe.title}</h3>
                    <p className="text-lg opacity-90">{stufe.subtitle}</p>
                  </div>
                  {stufe.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 font-medium mb-3">
                  {stufe.description}
                </p>
                <p className="text-gray-600 text-sm">
                  {stufe.details}
                </p>
                
                <div className="mt-4 flex items-center text-green-600 font-medium">
                  Details anzeigen
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 bg-green-50 p-8 rounded-2xl"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Systematische Entwicklung
        </h2>
        <p className="text-green-600 leading-relaxed">
          Jedes Spielsystem wird über zwei Jahre intensiv geübt und vertieft. 
          Die Progression ist bewusst gestaltet: Von der individuellen Verantwortung 
          in der Manndeckung bis hin zur komplexen Teamtaktik der 6:0-Formation. 
          So entwickeln unsere Spieler:innen ein tiefes Verständnis für Defensivarbeit 
          und werden optimal auf den Erwachsenenbereich vorbereitet.
        </p>
      </motion.div>
    </motion.div>
  );
}
