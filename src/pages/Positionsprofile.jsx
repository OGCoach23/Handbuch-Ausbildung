import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Users, Target, Zap, Heart } from "lucide-react";

const positions = [
  {
    title: "Torwart",
    description: "Der letzte Verteidiger und erste Angreifer",
    icon: <Shield size={40} className="text-blue-600" />,
    link: "/torwart-profil",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    title: "Außen",
    description: "Schnelligkeit und Präzision am Flügel",
    icon: <Zap size={40} className="text-green-600" />,
    link: "/aussen-profil",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    title: "Kreis",
    description: "Das Fundament jeder Formation",
    icon: <Target size={40} className="text-red-600" />,
    link: "/kreis-profil",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    title: "Rückraum",
    description: "Taktgeber und Entscheidungsträger",
    icon: <Users size={40} className="text-purple-600" />,
    link: "/rueckraum-profil",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    title: "Rückraum Mitte",
    description: "Das Spielhirn der Mannschaft",
    icon: <Heart size={40} className="text-orange-600" />,
    link: "/rueckraum-mitte-profil",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
];

export default function Positionsprofile() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      {/* Header */}
      <motion.h1 
        variants={fadeInVariants}
        className="text-4xl font-bold text-green-700 text-center mb-8"
      >
        Positionsprofile
      </motion.h1>

      {/* Intro Text */}
      <motion.p 
        variants={fadeInVariants}
        transition={{ delay: 0.2 }}
        className="text-xl text-justify text-green-600 mb-12 leading-relaxed"
      >
        Jede Position ist ein Lernraum mit klaren Anforderungen und Entwicklungswegen.
        Positionsprofile sind mehr als nur Beschreibungen von Aufgaben auf dem Spielfeld. 
        Sie sind systematische Entwicklungswege, die altersgerecht zeigen, was Spieler:innen 
        in verschiedenen Rollen lernen sollen und können.
      </motion.p>

      {/* Content Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div 
          variants={fadeInVariants}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">Unser Ansatz</h2>
          <ul className="space-y-3 text-green-600">
            <li>• Jede Position hat spezifische technische, taktische und mentale Anforderungen</li>
            <li>• Entwicklung erfolgt altersgerecht und individuell</li>
            <li>• Positionswechsel fördern Vielseitigkeit und Spielverständnis</li>
            <li>• Klare Orientierung für Trainer:innen und Spieler:innen</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={fadeInVariants}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">Entwicklungsprinzipien</h2>
          <ul className="space-y-3 text-green-600">
            <li>• Altersgerechte Entwicklung: Jede Altersstufe hat spezifische Entwicklungsmerkmale</li>
            <li>• Vielseitigkeit fördern: Spieler:innen sollen verschiedene Positionen kennenlernen</li>
            <li>• Individuelle Stärken: Jede:r Spieler:in hat besondere Talente und Vorlieben</li>
            <li>• Teamorientierung: Positionen sind Teil eines Systems</li>
          </ul>
        </motion.div>
      </div>

      {/* Positionskarten */}
      <motion.div 
        variants={fadeInVariants}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              variants={fadeInVariants}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link to={position.link}>
                <div className={`${position.bgColor} ${position.borderColor} border-2 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-opacity-80`}>
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${position.color} text-white shadow-lg`}>
                        {position.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {position.description}
                    </p>
                    <div className="pt-4">
                      <span className="inline-flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg font-medium group-hover:bg-gray-50 transition-colors duration-200">
                        Zum Profil →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fazit Section */}
      <motion.div 
        variants={fadeInVariants}
        transition={{ delay: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Fazit: Positionen verstehen – Entwicklung fördern
        </h2>
        
        <p className="text-xl text-justify text-green-600 mb-8 leading-relaxed">
          Durch unsere systematischen Positionsprofile wird die Entwicklung nicht zufällig gelernt – sondern geplant, erlebt und verstanden.
          Die Spieler:innen entwickeln ein tiefes Verständnis für ihre Rolle und werden optimal auf den Erwachsenenbereich vorbereitet.
        </p>

        <div className="bg-green-50 p-8 rounded-2xl shadow-lg mb-8">
          <p className="text-green-700 leading-relaxed">
            <strong>Jede Position vermittelt spezifische Prinzipien:</strong><br />
            → Torwart: Eigenverantwortung und Spielaufbau.<br />
            → Außen: Schnelligkeit und Präzision.<br />
            → Kreis: Kraft und Präsenz im Zentrum.<br />
            → Rückraum: Spielmacher und Wurfspezialist.<br />
            → Rückraum Mitte: Spielverständnis und Teamführung.
          </p>
        </div>

        <p className="text-xl text-justify text-green-600 leading-relaxed">
          Ziel ist es, dass jede:r Spieler:in ihre Position nicht nur spielt, sondern versteht.
          So entwickeln sie ein tiefes taktisches Verständnis, das ihnen Orientierung, Sicherheit und Qualität gibt.
          Bereit für die nächste Stufe? Entdecken Sie unsere detaillierten Positionsprofile und finden Sie den richtigen 
          Entwicklungsweg für Ihre Spieler:innen.
        </p>
      </motion.div>
    </motion.div>
  );
}
