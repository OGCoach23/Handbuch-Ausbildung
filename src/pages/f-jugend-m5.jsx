import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FJugendM5() {
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
        
        <h1 className="text-2xl font-bold text-primary">Modul 5: Spielsysteme & Positionsspiel</h1>

        <p className="font-semibold">Leitfrage:</p>
        <p className="bg-yellow-100 px-2 py-1 rounded">„Wie können Kinder Handball spielen – ohne System, aber mit Raumgefühl, Bewegungslust und ersten Spiellogiken?"</p>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow space-y-4">
          <div>
            <h3 className="font-semibold text-primary">Zielsetzung dieses Moduls</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Kinder erleben Spielformen als bewegtes Miteinander – nicht als taktisches Konzept</li>
              <li>Erste Spielregeln, Raumwahrnehmung und einfache Spielziele werden eingeführt</li>
              <li>Positionen werden gewechselt, erlebt, aber nie festgelegt</li>
              <li>Spiel bedeutet: gemeinsam Tore erzielen, mit Freude, Neugier und ohne Bewertung</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Inhalte & Prinzipien für den Einstieg ins Spiel</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Raumgefühl:</strong> Spielen in Zonen, Mini-Felder, 4-Tore-Felder – Bewegung in alle Richtungen</li>
              <li><strong>Zusammenspiel:</strong> Aufgaben wie: „Jeder muss den Ball einmal gehabt haben"</li>
              <li><strong>Zielorientierung:</strong> Werfen auf Zonen, Matten, Hütchen, Monsterbilder – ohne Gegenspielerdruck</li>
              <li><strong>Rollenvielfalt:</strong> Alle Kinder spielen alles – Angriff, Abwehr, Tor, Ballträger:in, Verteidiger:in</li>
              <li><strong>Wahrnehmung & Orientierung:</strong> Wo ist der freie Raum? Wer kann mir helfen? Wohin will ich laufen?</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Spielformen & Ideen</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Zwei-Zonen-Spiel:</strong> Ball muss von einer zur anderen Zone getragen oder gepasst werden</li>
              <li><strong>4-Tore-Handball:</strong> Spielfeld mit vier Toren – fördert Orientierung, Passvarianten, Entscheidungsvielfalt</li>
              <li><strong>Wurfparcours mit Teamziel:</strong> Ball muss in jede der 4 Zonen gepasst werden – dann Wurf auf Ziel</li>
              <li><strong>Zonenjagd:</strong> Zwei Gruppen besetzen wechselnde Felder – Spieler:innen müssen mit dem Ball fliehen oder jagen</li>
              <li><strong>Mini-Handball 2:2:</strong> Auf zwei Hütchen, ohne Regeln außer „Spaß & Bewegung"</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Methodik</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Kein System → nur Prinzip: „Spielen heißt gemeinsam"</li>
              <li>Positionen = Erfahrungsräume – kein Kind bleibt festgelegt</li>
              <li>Spielideen statt Spielzüge – jedes Kind darf kreativ sein</li>
              <li>Erfolg = Lachen, Bewegung, Teamgefühl – nicht Tore oder Ordnung</li>
            </ul>
          </div>

          <div className="bg-yellow-100/60 p-4 rounded-lg">
            <h3 className="font-semibold text-primary">Ergebnis für den Trainer</h3>
            <p className="mb-2">
              Du vermittelst Spielideen, keine Spielzüge. Du schaffst Freude an Bewegung mit Ball und Ziel. 
              Du legst eine Grundlage für taktisches Denken – ohne ein einziges Wort über Taktik zu verlieren. 
              Und du machst aus kleinen Einzelspieler:innen ein spielfreudiges Ganzes.
            </p>
            <p><strong>Ziel:</strong> Spieler:innen, die sich im Spiel bewegen, denken, mitspielen – und dabei gemeinsam Spaß haben.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
