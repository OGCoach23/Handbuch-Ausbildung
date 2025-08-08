import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FJugendM6() {
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
        
        <h1 className="text-2xl font-bold text-primary">Modul 6: Teamkultur & Kommunikation</h1>

        <p className="font-semibold">Leitfrage:</p>
        <p className="bg-yellow-100 px-2 py-1 rounded">„Wie entsteht in einer wilden, bunten, lauten Kindergruppe ein echtes Wir-Gefühl – das verbindet, stärkt und Spaß macht?"</p>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow space-y-4">
          <div>
            <h3 className="font-semibold text-primary">Zielsetzung dieses Moduls</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Aufbau einer kindgerechten, stabilen Teamkultur durch Rituale, Sprache und Beziehung</li>
              <li>Förderung erster sozialer Regeln: Rücksicht, Helfen, Zuhören, Mitfreuen</li>
              <li>Kommunikation als Spielimpuls – nicht als Belehrung</li>
              <li>Eltern als Teil des Ganzen mitdenken und einbinden</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Grundlagen für Teamverhalten in der F-Jugend</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Beziehung:</strong> Jedes Kind wird begrüßt, gesehen, verabschiedet – Kontakt durch Namen, Lächeln, Geste</li>
              <li><strong>Verlässlichkeit & Regeln:</strong> 2–3 feste Teamregeln gemeinsam festgelegt („Wir helfen", „Wir hören zu", „Wir lachen")</li>
              <li><strong>Wir-Gefühl stärken:</strong> Spiele in Paaren & Gruppen, kein Einzeldrill, gemeinsam gewinnen = gemeinsam spielen</li>
              <li><strong>Sprache entwickeln:</strong> Bildhafte Sätze („Du warst ein Löwe beim Verteidigen"), Ich-Botschaften im Spiel</li>
              <li><strong>Konflikte lösen lernen:</strong> „Wie fühlst du dich?", „Was können wir tun?" – mit Symbolkarten, Emotionshänden</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Spielformen & Rituale für Teamkultur</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Applauskreis:</strong> Am Ende: Jede:r bekommt Applaus für etwas Positives</li>
              <li><strong>Mutstein:</strong> Wandert wöchentlich: Wer war mutig, fair, hilfsbereit?</li>
              <li><strong>Du-und-Ich-Spiel:</strong> Passen, fangen, loben – Kinder lernen: Wir brauchen einander</li>
              <li><strong>Stopp-Ball:</strong> Bei Konflikt ruft jemand „Stopp" → Spiel pausiert, alle sprechen kurz darüber</li>
              <li><strong>Abschlussritual:</strong> „Ich war heute…", „Ich will morgen…", „Ich danke…" – in Bild-, Wort- oder Gestenform</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Eltern als Kulturträger:innen mitdenken</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Begrüßung & Verabschiedung:</strong> Eltern aktiv begrüßen → Beziehung beginnt nicht erst in der Halle</li>
              <li><strong>Elterninfo kreativ gestalten:</strong> Z. B. Teamposter mit Fotos, Mini-Newsletter, „Was wir üben" in Bildform</li>
              <li><strong>Eltern-Kind-Bewegungsspiele:</strong> Ballspiele gemeinsam erleben – Bindung stärken, Verständnis aufbauen</li>
              <li><strong>Feedbackimpuls nach dem Training:</strong> „Was hat dir gefallen?" – kleine Gesprächsanlässe schaffen</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Was Trainer:innen besonders beachten müssen</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Sprache, Mimik, Gestik = Training für die Seele</li>
              <li>Beziehung schlägt Konzept – immer</li>
              <li>Konflikte nicht vermeiden, sondern gemeinsam bewältigen lernen</li>
              <li>Eltern sind keine Gegner – sie wollen verstehen und unterstützen</li>
            </ul>
          </div>

          <div className="bg-yellow-100/60 p-4 rounded-lg">
            <h3 className="font-semibold text-primary">Ergebnis für den Trainer</h3>
            <p className="mb-2">
              Du bist nicht nur Spielanleiter:in, sondern Kulturstifter:in. Du baust eine Trainingswelt, 
              in der Kinder sich aufgehoben, verbunden und sicher fühlen. Du trainierst Haltung, Beziehung 
              und soziale Entwicklung – mit Fantasie, Herz und viel Bewegung.
            </p>
            <p><strong>Ziel:</strong> Spieler:innen, die sich trauen, fragen, lachen, helfen – und gerne wiederkommen.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
