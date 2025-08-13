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
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Positionsprofile
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Jede Position ist ein Lernraum mit klaren Anforderungen und Entwicklungswegen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Einführung */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Positionen verstehen – Entwicklung fördern
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Positionsprofile sind mehr als nur Beschreibungen von Aufgaben auf dem Spielfeld. 
              Sie sind systematische Entwicklungswege, die altersgerecht zeigen, was Spieler:innen 
              in verschiedenen Rollen lernen sollen und können.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Unser Ansatz:</h3>
              <ul className="text-green-700 space-y-1 text-left">
                <li>• Jede Position hat spezifische technische, taktische und mentale Anforderungen</li>
                <li>• Entwicklung erfolgt altersgerecht und individuell</li>
                <li>• Positionswechsel fördern Vielseitigkeit und Spielverständnis</li>
                <li>• Klare Orientierung für Trainer:innen und Spieler:innen</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Positionskarten */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
          </motion.div>
        </div>
      </section>

      {/* Entwicklungsprinzipien */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Entwicklungsprinzipien
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Altersgerechte Entwicklung
                </h3>
                <p className="text-blue-700">
                  Jede Altersstufe hat spezifische Entwicklungsmerkmale. Unsere Positionsprofile 
                  berücksichtigen diese und zeigen, was in welcher Phase möglich und sinnvoll ist.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Vielseitigkeit fördern
                </h3>
                <p className="text-green-700">
                  Spieler:innen sollen verschiedene Positionen kennenlernen und ausprobieren. 
                  Das fördert das Spielverständnis und die Flexibilität.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">
                  Individuelle Stärken
                </h3>
                <p className="text-purple-700">
                  Jede:r Spieler:in hat besondere Talente und Vorlieben. Positionsprofile helfen, 
                  diese zu erkennen und gezielt zu fördern.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">
                  Teamorientierung
                </h3>
                <p className="text-orange-700">
                  Positionen sind Teil eines Systems. Spieler:innen lernen, wie ihre Rolle 
                  zum Teamerfolg beiträgt und mit anderen Positionen zusammenarbeitet.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-400 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Bereit für die nächste Stufe?
            </h2>
            <p className="text-xl opacity-90">
              Entdecken Sie unsere detaillierten Positionsprofile und finden Sie den richtigen 
              Entwicklungsweg für Ihre Spieler:innen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/kompetenzkompass"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Kompetenzkompass entdecken
              </Link>
              <Link
                to="/altersstufen"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                Altersstufen erkunden
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
