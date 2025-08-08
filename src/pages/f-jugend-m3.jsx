import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FJugendM3() {
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="mb-6">
          <Link to="/f-jugend" className="text-primary hover:underline">
            ← Zurück zur F-Jugend Übersicht
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold text-primary">Modul 3: Technik & Taktik</h1>

        <p className="font-semibold">Leitfrage:</p>
        <p className="bg-yellow-100 px-2 py-1 rounded">„Wie erleben Kinder erste Ballaktionen spielerisch, ohne Technikdruck – und entwickeln ein Gefühl für Richtung, Raum und Zusammenspiel?"</p>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow space-y-4">
          <div>
            <h3 className="font-semibold text-primary">Zielsetzung dieses Moduls</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Erste Begegnung mit handballtypischen Ballaktionen – ohne Technikdrill</li>
              <li>Spielerisches Ausprobieren statt Korrektur – Technik entsteht durch Wiederholung in Bewegung</li>
              <li>Aufbau eines intuitiven Gefühls für Ball, Raum und Mitspieler:in</li>
              <li>Förderung von Freude, Selbstwirksamkeit und Neugier im Umgang mit Ball und Zielaktionen</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Inhalte & Schwerpunkte</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Ballgewöhnung:</strong> Rollen, tippen, balancieren, Ball über Körper führen, mit Partner bewegen</li>
              <li><strong>Werfen & Fangen:</strong> Zweiarmiges Werfen, Softball-Fangen, Wurf mit Zielvorgabe, Ballwurf über Hindernisse</li>
              <li><strong>Prellen & Laufen:</strong> Prellen im Gehen (nicht verpflichtend), Ball tragen durch Hallenteile, Prellen im Tiergang</li>
              <li><strong>Zielen & Treffen:</strong> Werfen auf Hütchen, Matten, Monsterbilder, Höhenziele</li>
              <li><strong>Mini-Spielaktionen:</strong> 1:1 mit vielen Bällen, Fangspiele mit Jokerball, freies 2:2 auf Mini-Tore</li>
              <li><strong>Raumwahrnehmung:</strong> Spiele mit Zonen, Feldern, freien Plätzen („Finde die leere Ecke")</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Methodische Prinzipien</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Spielen statt Technikdrill</li>
              <li>Aufgaben statt Korrektur</li>
              <li>Vielfalt vor Perfektion</li>
              <li>Ball für alle</li>
              <li>Rollenvielfalt erleben</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Praxisimpulse & Spielformen</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Ball-Reise:</strong> Ball mit Körperteilen führen – Bauch, Rücken, Knie, Fuß</li>
              <li><strong>Monsterwurf:</strong> Zielwurf auf Bilder an der Wand – z. B. „Wer trifft das Krokodil?"</li>
              <li><strong>Safari mit Ball:</strong> Ball im Tiergang durch Parcours führen</li>
              <li><strong>Raketenstart:</strong> Auf Signal werfen – Wer trifft zuerst das „Weltall"?</li>
              <li><strong>Mini-Spiel 2:2:</strong> Freies Spiel auf Hütchenziele – keine Regeln, nur Zielvorgabe</li>
              <li><strong>Ball als Schatz:</strong> Partneraktion: Ball durch Hindernisse transportieren – „rettet den Schatz durch den Dschungel"</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Didaktische Hinweise für Trainer:innen</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Technik = Spielhandlung → Alles, was mit Ball passiert, ist erlaubt</li>
              <li>Kein Kind „schlecht" im Werfen – nur noch nicht sicher genug</li>
              <li>Spielräume statt Spielzüge: Kinder lernen, wenn sie es dürfen</li>
              <li>Du bist kein Korrektor – du bist Spielfreimacher</li>
            </ul>
          </div>

          <div className="bg-yellow-100/60 p-4 rounded-lg">
            <h3 className="font-semibold text-primary">Ergebnis für den Trainer</h3>
            <p className="mb-2">
              Du ermöglichst erste Ballaktionen ohne Druck, aber mit Struktur und Fantasie. 
              Du lässt die Kinder erleben, was sie mit einem Ball alles anfangen können – ganz ohne Technikplan. 
              Du legst die Grundlage für Handball-Liebe: durch Spiel, Mut und Mitmachen.
            </p>
            <p><strong>Ziel:</strong> Spieler:innen, die mutig werfen, neugierig prellen und mit leuchtenden Augen fangen – weil sie dürfen, nicht weil sie müssen.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
