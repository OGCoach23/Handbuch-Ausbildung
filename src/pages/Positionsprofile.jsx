import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const positions = [
  {
    title: "Torwart",
    subtitle: "Der letzte Verteidiger und erste Angreifer",
    description: "Spezialist für Ballabwehr und Spielaufbau",
    link: "/torwart-profil",
    color: "bg-blue-500",
    details: "Verantwortlich für Torverteidigung, Spielaufbau und Kommunikation"
  },
  {
    title: "Außen",
    subtitle: "Schnelligkeit und Präzision am Flügel",
    description: "Flügelspieler mit Tempo und Wurfkraft",
    link: "/aussen-profil",
    color: "bg-green-500",
    details: "Schnelle Konter, präzise Würfe und Flügelspiel"
  },
  {
    title: "Kreis",
    subtitle: "Das Fundament jeder Formation",
    description: "Kraft und Präsenz im Zentrum",
    link: "/kreis-profil",
    color: "bg-red-500",
    details: "Körperliche Präsenz, Torchancen und Abwehrarbeit"
  },
  {
    title: "Rückraum",
    subtitle: "Taktgeber und Entscheidungsträger",
    description: "Spielmacher und Wurfspezialist",
    link: "/rueckraum-profil",
    color: "bg-purple-500",
    details: "Spielaufbau, Fernwürfe und taktische Führung"
  },
  {
    title: "Rückraum Mitte",
    subtitle: "Das Spielhirn der Mannschaft",
    description: "Zentraler Spielmacher und Organisator",
    link: "/rueckraum-mitte-profil",
    color: "bg-orange-500",
    details: "Spielverständnis, Entscheidungsfindung und Teamführung"
  }
];

export default function Positionsprofile() {
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
          Positionsprofile Übersicht
        </h1>
        <p className="text-xl text-green-600 max-w-4xl mx-auto">
          Jede Position ist ein Lernraum mit klaren Anforderungen und Entwicklungswegen.
          Unsere Positionsprofile zeigen systematisch, was Spieler:innen in verschiedenen Rollen lernen sollen und können.
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
          to="/"
          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5 transform rotate-180 mr-2" />
          Zurück zur Hauptseite
        </Link>
      </motion.div>

      {/* Positionskarten Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {positions.map((position, index) => (
          <motion.div
            key={position.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <Link
              to={position.link}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Header ohne Icon */}
              <div className={`${position.color} p-6 text-white`}>
                <div>
                  <h3 className="text-2xl font-bold">{position.title}</h3>
                  <p className="text-lg opacity-90">{position.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 font-medium mb-3">
                  {position.description}
                </p>
                <p className="text-gray-600 text-sm">
                  {position.details}
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
          Jede Position wird altersgerecht entwickelt und individuell gefördert. 
          Unsere Positionsprofile zeigen klare Entwicklungswege von den Grundlagen 
          bis hin zu spezialisierten Fähigkeiten. So entwickeln unsere Spieler:innen 
          ein tiefes Verständnis für ihre Rolle und werden optimal auf den Erwachsenenbereich vorbereitet.
        </p>
      </motion.div>
    </motion.div>
  );
}
