import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const karten = [
  {
    title: "Leitbild & Zielsetzung",
    description: "Wir entwickeln Menschen durch Handball weiter.",
    link: "/leitbild",
    color: "bg-blue-500"
  },
  {
    title: "Zielgruppen & Rollenverständnis",
    description: "Wir arbeiten gemeinsam für eine starke Entwicklung.",
    link: "/zielgruppen",
    color: "bg-green-500"
  },
  {
    title: "Ausbildungsprinzipien & Werte",
    description: "Ausbildung braucht Haltung – und Haltung zeigt sich im Handeln.",
    link: "/ausbildungsprinzipien",
    color: "bg-purple-500"
  },
  {
    title: "Handball als Schule fürs Leben",
    description: "Wir entwickeln nicht nur Spieler:innen – wir stärken Menschen.",
    link: "/schule-leben",
    color: "bg-orange-500"
  },
  {
    title: "Trainingsaufbau & Methodik",
    description: "Training ist mehr als Üben – es ist bewusstes Entwickeln.",
    link: "/trainingsmethodik",
    color: "bg-red-500"
  },
  {
    title: "Alters- und Leistungsstufen",
    description: "Entwicklung braucht Struktur – und Spielraum",
    link: "/altersstufen",
    color: "bg-indigo-500"
  }
];

export default function Ebene1() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
    >
      {/* Header */}
      <motion.h1 
        variants={fadeInVariants}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 text-center mb-6 sm:mb-8"
      >
        Ebene 1: Grundlagen & Philosophie
      </motion.h1>

      {/* Intro Text */}
      <motion.p 
        variants={fadeInVariants}
        transition={{ delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-justify text-green-600 mb-8 sm:mb-12 leading-relaxed"
      >
        In der ersten Ebene legen wir die Grundlagen für unsere gesamte Ausbildung. 
        Hier definieren wir, was wir wollen, warum wir es tun und wie wir unsere 
        Verantwortung als Verein, Trainer:innen, Eltern und Spieler:innen verstehen.
      </motion.p>

      {/* Karten Grid */}
      <motion.div 
        variants={fadeInVariants}
        transition={{ delay: 0.3 }}
        className="mb-12 sm:mb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {karten.map((karte, index) => (
            <motion.div
              key={karte.title}
              variants={fadeInVariants}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link to={karte.link}>
                <div className="bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 h-full cursor-pointer group hover:border-green-400 min-h-[200px] sm:min-h-[220px] flex flex-col justify-center">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="flex justify-center">
                      <div className={`p-3 sm:p-4 rounded-full ${karte.color} text-white shadow-lg`}>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full opacity-20"></div>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-3 sm:mb-4 group-hover:text-green-700 transition-colors">
                      {karte.title}
                    </h3>
                    <p className="text-sm sm:text-base text-green-600 leading-relaxed flex-grow">
                      {karte.description}
                    </p>
                    <div className="pt-2 sm:pt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors text-sm sm:text-base">
                      Zum Detailbereich →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fazit Box */}
      <motion.div 
        variants={fadeInVariants}
        transition={{ delay: 0.8 }}
        className="bg-white border-2 border-green-200 rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-green-600 mb-6">
          Fazit Ebene 1: Grundlagen & Philosophie
        </h2>
        
        <div className="space-y-4 text-green-600 leading-relaxed">
          <p>
            Unsere Ausbildung beginnt mit Haltung.
          </p>
          
          <p>
            In dieser ersten Ebene haben wir die Basis gelegt: ein klares Leitbild, das die Menschen in den Mittelpunkt stellt. Wir haben definiert, was wir wollen, warum wir es tun und wie wir unsere Verantwortung als Verein, Trainer:innen, Eltern und Spieler:innen verstehen.
          </p>
          
          <p>
            Wir glauben an eine Ausbildung, die nicht kurzfristig denkt – sondern langfristig entwickelt.
            An Training, das nicht nur Übungen abspult – sondern Spieler:innen aufbaut.
            An Trainer:innen, die nicht belehren – sondern begeistern.
          </p>
          
          <p>
            Mit den Alters- und Leistungsstufen haben wir ein flexibles System geschaffen, das Orientierung gibt, ohne einzuengen. Denn klar ist: Entwicklung braucht Struktur – aber sie lebt vom Menschen dahinter.
          </p>
          
          <p>
            Wir haben gesehen:
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Handball ist mehr als ein Spiel – er ist ein Ort für Reife, Wachstum und Miteinander.</li>
            <li>Entwicklung braucht Struktur, Verantwortung und Vertrauen.</li>
            <li>Gute Ausbildung entsteht dort, wo Planung, Pädagogik und Persönlichkeit zusammenkommen.</li>
          </ul>
          
          <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-lg font-bold text-green-700 mb-3">
              Ausblick auf Ebene 2: Die Ausbildung bekommt ein System
            </h3>
            
            <p className="mb-4">
              In der nächsten Ebene steigen wir tiefer ein:
              Wir öffnen die Werkzeugkiste und zeigen, wie unsere Ausbildung konkret funktioniert.
            </p>
            
            <p className="mb-4">
              Modul für Modul. Altersgerecht. Wiedererkennbar. Wir bringen Technik, Taktik, Athletik, Persönlichkeit, Spielverständnis und Teamkultur in eine klare Ausbildungslogik – über alle Jahrgänge hinweg.
            </p>
            
            <p className="mb-4">
              Du wirst sehen:
            </p>
            
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>Wie aus Prinzipien Trainingsschwerpunkte werden.</li>
              <li>Wie wir Vielfalt strukturieren – und Struktur lebendig halten.</li>
              <li>Wie jede Altersstufe ihren Fokus bekommt – aber der rote Faden bleibt.</li>
            </ul>
            
            <p>
              Jetzt geht es ans Eingemachte. Und genau darauf kommt es an. Wir steigen ein in die modulare Ausbildungslogik – mit System und Seele.
            </p>
            
            <div className="mt-6">
              <Link 
                to="/ebene2"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Zur Ebene 2 →
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

