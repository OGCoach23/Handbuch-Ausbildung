import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const themen = [
  {
    titel: "Kompetenzkompass",
    beschreibung:
      "Systematik für individuelle Entwicklung. Unser 5-Stufen-Modell macht Fortschritte sichtbar – ohne zu bewerten.",
    highlight: true,
  },
  {
    titel: "Entwicklung Positionsprofile",
    beschreibung:
      "Positionen sind mehr als Orte auf dem Spielfeld – sie sind Lernräume mit klaren Anforderungen.",
  },
  {
    titel: "Entwicklung der Spielsysteme",
    beschreibung:
      "Spielsysteme sind keine Schablonen – sie sind Lernfelder mit Struktur, die altersgerecht wachsen.",
  },
  {
    titel: "Quer- und Neueinsteiger, Drop-out-Prophylaxe",
    beschreibung:
      "Wir nehmen Entwicklung ernst – und das bedeutet auch: Zugehörigkeit ermöglichen.",
  },
  {
    titel: "Breitensport vs. Leistungssport",
    beschreibung:
      "Nicht jede:r will Nationalspieler:in werden. Und das ist gut so. Entwicklung hat viele Wege.",
  },
];

export default function Ebene3() {
  return (
    <div className="space-y-10">
      {/* Einführung */}
      <section className="bg-green-100/30 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <h1 className="text-3xl font-bold text-primary">
            Ebene 3 – Kompetenzkompass, Durchgängigkeit & Positionen
          </h1>
          <p>
            Entwicklung braucht Klarheit – und
            <span className="font-semibold bg-yellow-100 px-1 rounded">
              Vergleichbarkeit ohne Bewertung
            </span>
            .
          </p>
          <p>
            Wir wollen wissen, ob unsere Ausbildung wirkt – durch
            <span className="font-semibold bg-yellow-100 px-1 rounded">
              sichtbaren Fortschritt statt Titel und Tabellen
            </span>
            .
          </p>
          <p>
            Es geht nicht darum, Kinder zu bewerten – sondern ihnen und uns eine
            gemeinsame Sprache für Entwicklung zu geben.
          </p>
          <p className="font-semibold italic text-primary">
            Leitfrage: Wie sieht gute Entwicklung aus – und wie erkennen wir sie
            in unterschiedlichen Altersstufen, Rollen und Spielertypen?
          </p>
          <ul className="list-disc list-inside bg-white/60 p-4 rounded-xl shadow space-y-1">
            <li>
              Kompetenzkompass: Entwicklung in fünf Stufen sichtbar machen –
              technisch, taktisch, mental, sozial
            </li>
            <li>
              Positionsprofile: altersgerecht zeigen, was Spieler:innen auf
              verschiedenen Rollen lernen sollen
            </li>
            <li>
              Stufensystem: auch Quereinsteiger:innen, Drop-out-Risiken und
              leistungsoffene Wege mitdenken
            </li>
            <li>
              Vergleichslogiken: Inhalte über Altersstufen hinweg
              wiedererkennbar machen – ohne Vereinheitlichung
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Themenkarten */}
      <section className="bg-white/40 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {themen.map(({ titel, beschreibung, highlight }, index) => (
            <Link
              to={
                titel === "Kompetenzkompass" ? "/kompetenzkompass" :
                titel === "Entwicklung Positionsprofile" ? "/torwart-profil" :
                titel === "Entwicklung der Spielsysteme" ? "/entwicklung-spielsysteme" :
                titel === "Quer- und Neueinsteiger, Drop-out-Prophylaxe" ? "/quereinsteiger" :
                titel === "Breitensport vs. Leistungssport" ? "/breitensport-vs-leistungssport" :
                "#"
              }
              key={titel}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 cursor-pointer ${
                  highlight ? "bg-yellow-100/60" : "bg-white/60"
                }`}
              >
                <h3 className="text-xl font-bold text-primary mb-3">{titel}</h3>
                <p className="text-sm text-gray-800 italic leading-relaxed">{beschreibung}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Fazit */}
      <section className="bg-green-100/30 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <h2 className="text-2xl font-bold text-primary">
            Fazit Ebene 3: Orientierung schaffen – Entwicklung sichtbar machen
          </h2>
          <p>
            <span className="text-primary font-semibold">In dieser Ebene haben wir unser Ausbildungssystem tiefer verankert.</span> Wir haben nicht nur Inhalte vermittelt, sondern auch gezeigt, wie
            man Entwicklung erkennt, beschreibt und begleitet – über alle
            Jahrgänge hinweg.
          </p>
          <div className="bg-white/60 p-4 rounded-xl shadow">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Wie Positionsprofile dabei helfen, Rollen zu verstehen und gezielt
                zu fördern
              </li>
              <li>
                Wie Spielsysteme pro Altersstufe Lernräume statt Vorgaben schaffen
              </li>
              <li>
                Wie unser 5-Stufen-Kompass Verläufe sichtbar und vergleichbar macht
                – ohne zu bewerten
              </li>
              <li>
                Und wie Durchgängigkeit entsteht, wenn Inhalte, Haltung und
                Strukturen ineinandergreifen
              </li>
            </ul>
          </div>
          <p>
            Diese Ebene ist das Bindeglied zwischen Konzept und Alltag. Sie
            bringt Ordnung ins System – und macht Entwicklung planbar,
            kommunizierbar und reflektierbar.
          </p>
          <div className="border-l-4 border-primary bg-white/50 p-4 italic rounded">
            <strong>Ausblick auf Ebene 4:</strong> Vom Konzept zur Praxis – und wieder zurück
          </div>
          <p>
            Jetzt geht es in die Umsetzung. In Ebene 4 zeigen wir, wie wir unser
            Konzept in den Trainingsalltag bringen – mit Struktur, Plan und
            Raum für Entwicklung.
          </p>
          <p className="text-sm">
            <Link to="/ebene4" className="text-primary underline hover:text-secondary transition-colors">
              ➔ Hier geht's weiter zu Ebene 4
            </Link>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
