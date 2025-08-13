import { motion } from "framer-motion";
import { useState } from "react";

const sideBoxes = [
  {
    label: "Für Trainer:innen",
    color: "bg-green-600",
    hoverColor: "bg-green-700",
    text: `
      Plane nicht nur Übungen – plane Entwicklung.
      Denk nicht in Technikbausteinen, sondern in Handlungsfeldern.
      Dein Ziel: Jede:r wird wirksam.
    `,
    link: "/fuer-trainer"
  },
  {
    label: "Für Eltern",
    color: "bg-blue-600",
    hoverColor: "bg-blue-700",
    text: `
      Unsere Trainings sind Räume, in denen Ihr Kind Selbstvertrauen, Entscheidungsfähigkeit und Teamkompetenz entwickelt.
    `,
    link: "/fuer-eltern"
  },
  {
    label: "Für Spieler:innen",
    color: "bg-yellow-600",
    hoverColor: "bg-yellow-700",
    text: `
      Du entwickelst dich nicht nur als Spieler:in, sondern als Persönlichkeit.
      Jedes Training ist ein Schritt auf deinem Weg.
    `,
    link: "/fuer-spieler"
  }
];

export default function SideOutBoxes() {
  const [hoverIndex, setHoverIndex] = useState(null);

  // Nur auf der Trainingsseite anzeigen
  if (typeof window !== 'undefined' && !window.location.pathname.includes('/training')) {
    return null;
  }

  return (
    <div className="fixed right-0 top-1/3 flex flex-col gap-4 z-40">
      {sideBoxes.map((box, index) => (
        <motion.a
          key={index}
          href={box.link}
          className={`relative text-white ${box.color} rounded-l-xl shadow-lg overflow-hidden`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          initial={{ width: "2.5rem" }}
          animate={{
            width: hoverIndex === index ? "20rem" : "2.5rem"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="h-full flex items-center">
            <span
              className={`rotate-90 origin-left block text-sm font-semibold whitespace-nowrap px-2`}
            >
              {box.label}
            </span>
            {hoverIndex === index && (
              <motion.div
                className="ml-4 bg-white text-gray-700 p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">{box.text}</p>
              </motion.div>
            )}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
