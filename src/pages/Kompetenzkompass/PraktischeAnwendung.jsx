import { motion } from "framer-motion";

export default function PraktischeAnwendung() {
  return (
    <div className="bg-green-100/30 p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        🎯 Praktische Anwendung des modulbasierten Kompetenzkompasses
      </motion.h1>

      <div className="space-y-6 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Zielkarten und individuelle Entwicklungspläne</h2>
          <ul className="list-disc ml-5">
            <li>Individuelle Modulprofile: Aktueller Stand in allen 6 Modulen</li>
            <li>Entwicklungsschwerpunkte: 2-3 Module als Fokus</li>
            <li>Konkrete Ziele für 3-6 Monate</li>
            <li>Regelmäßige Fortschrittsdokumentation</li>
          </ul>
          <div className="bg-green-100 p-4 rounded-lg mt-3">
            <p className="font-bold">Beispiel Zielkarte</p>
            <p>Spieler: Max Mustermann (12 Jahre)</p>
            <p>Stand: M1: 🟠 | M2: 🟡 | M3: 🟠 | M4: 🔴 | M5: 🔴 | M6: 🟠</p>
            <p><strong>Entwicklungsschwerpunkte:</strong></p>
            <ul className="list-disc ml-5">
              <li>M4 (Mentale Entwicklung): 🔴 → 🟠 Ziel: Konstruktiver Umgang mit Fehlern</li>
              <li>M3 (Technik): 🟠 → 🟡 Ziel: Sprungwurf beidbeinig sicher</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Modulbasierte Trainingsplanung</h2>
          <ul className="list-disc ml-5">
            <li>Wöchentliche Modulschwerpunkte</li>
            <li>Klare Zuordnung von Übungen zu Modulen</li>
            <li>Reflexionsfragen pro Modul</li>
            <li>Regelmäßige Standortbestimmung</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Feedbackrunden & Entwicklungsgespräche</h2>
          <p>Strukturierte Gespräche mit Selbsteinschätzung, Trainereinschätzung, Stärkenanalyse, Zielvereinbarung</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Kompetenz-Abzeichen & Zertifikate</h2>
          <ul className="list-disc ml-5">
            <li>Modulsterne für erreichte Stufen</li>
            <li>Allrounder-Abzeichen, Spezialist-Zertifikate, Führungsabzeichen</li>
            <li>Zertifizierungen: Bronze, Silber, Gold, Platin</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Integration & Förderung</h2>
          <p>Quereinsteiger: Standortbestimmung, Förderpläne, Mentoring, flexible Gruppierung</p>
          <p>Hochentwickelte: Führungsrollen, Mentoring, Kreativitätstraining, Spezialisierung</p>
        </section>
      </div>
    </div>
  );
}


