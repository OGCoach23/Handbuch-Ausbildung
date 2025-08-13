import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Radar } from "react-chartjs-2";
import 'chart.js/auto';

export default function PraktischeAnwendung() {
  const data = {
    labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
    datasets: [
      {
        label: "Aktueller Stand",
        data: [2, 3, 2, 1, 1, 2],
        backgroundColor: "rgba(0, 75, 135, 0.2)",
        borderColor: "#004b87",
        pointBackgroundColor: "#004b87",
      },
    ],
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8 p-6 bg-gradient-to-b from-green-700/50 to-transparent rounded-xl">
      
      {/* Titel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold text-primary mb-4">
          🎯 Praktische Anwendung des modulbasierten Kompetenzkompasses
        </h1>
      </motion.div>

      {/* Radar Chart Abschnitt */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xs mx-auto"
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary">Beispiel-Übersicht</CardTitle>
          </CardHeader>
          <CardContent>
            <Radar data={data} />
          </CardContent>
        </Card>
      </motion.div>

      {/* Zielkarten */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="bg-white/80 shadow p-6">
          <CardHeader>
            <CardTitle>Zielkarten und individuelle Entwicklungspläne</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Individuelle Modulprofile: Jeder Spieler erhält ein Profil mit aktuellem Stand in allen 6 Modulen</li>
              <li>Entwicklungsschwerpunkte: 2–3 Module als Fokusthemen</li>
              <li>Konkrete Ziele: Spezifische, messbare Ziele für die nächsten 3–6 Monate</li>
              <li>Fortschrittsdokumentation: Regelmäßige Aktualisierung</li>
            </ul>
            <p className="font-semibold mt-4">Beispiel einer Zielkarte:</p>
            <p>Spieler: Max Mustermann (12 Jahre)</p>
            <p>Aktueller Stand: M1: 🟠 | M2: 🟡 | M3: 🟠 | M4: 🔴 | M5: 🔴 | M6: 🟠</p>
            <ul className="list-disc list-inside">
              <li>M4 (Mentale Entwicklung): Von 🔴 auf 🟠 - Ziel: Konstruktiver Umgang mit Fehlern</li>
              <li>M3 (Technik): Von 🟠 auf 🟡 - Ziel: Sprungwurf beidbeinig sicher beherrschen</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Trainingstagebuch */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="bg-white/80 shadow p-6">
          <CardHeader>
            <CardTitle>Trainingstagebuch und Reflexion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 font-semibold">Modulbasierte Trainingsplanung:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Wöchentliche Modulschwerpunkte</li>
              <li>Klare Zuordnung der Übungen</li>
              <li>Reflexionsfragen zur Selbsteinschätzung</li>
              <li>Regelmäßige Fortschrittsmessung</li>
            </ul>
            <p className="mt-4 font-semibold">Reflexionsfragen nach Modulen:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>M1: „Wie gut konnte ich heute neue Dinge lernen?"</li>
              <li>M2: „Wie fit und beweglich fühlte ich mich?"</li>
              <li>M3: „Welche technischen/taktischen Fortschritte habe ich gemacht?"</li>
              <li>M4: „Wie bin ich mit Druck und Fehlern umgegangen?"</li>
              <li>M5: „Wie gut habe ich meine Position/Rolle gespielt?"</li>
              <li>M6: „Wie habe ich zur Teamatmosphäre beigetragen?"</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Feedbackgespräche */}
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
        <Card className="bg-white/80 shadow p-6">
          <CardHeader>
            <CardTitle>Feedbackrunden und Entwicklungsgespräche</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              <li>Modulbasierte Bewertung: Systematische Einschätzung aller 6 Module</li>
              <li>Stärken-Schwächen-Analyse</li>
              <li>Entwicklungsplanung: Nächste Schritte definieren</li>
              <li>SMART-Ziele für jeden Entwicklungsbereich</li>
            </ul>
            <p className="mt-4 font-semibold">Gesprächsleitfaden:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Selbsteinschätzung</li>
              <li>Trainereinschätzung</li>
              <li>Stärkenanalyse</li>
              <li>Entwicklungspotentiale</li>
              <li>Zielvereinbarung</li>
            </ol>
          </CardContent>
        </Card>
      </motion.div>

      {/* Abzeichen */}
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
        <Card className="bg-white/80 shadow p-6">
          <CardHeader>
            <CardTitle>Kompetenz-Abzeichen und Zertifikate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">Modulbasierte Auszeichnungen:</p>
            <ul className="list-disc list-inside">
              <li>Modulsterne</li>
              <li>Allrounder-Abzeichen</li>
              <li>Spezialist-Zertifikate</li>
              <li>Führungsabzeichen</li>
            </ul>
            <p className="mt-4 font-semibold">Zertifizierungssystem:</p>
            <ul className="list-disc list-inside">
              <li>Bronze: 🟠 in mindestens 4 Modulen</li>
              <li>Silber: 🟡 in mindestens 4 Modulen</li>
              <li>Gold: 🟢 in mindestens 4 Modulen</li>
              <li>Platin: 🔵 in mindestens 2 Modulen</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quereinsteiger */}
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
        <Card className="bg-white/80 shadow p-6">
          <CardHeader>
            <CardTitle>Integration von Quereinsteigern und Hochentwickelten</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">Quereinsteiger:</p>
            <ul className="list-disc list-inside">
              <li>Standortbestimmung</li>
              <li>Individuelle Förderpläne</li>
              <li>Mentoring-System</li>
              <li>Flexible Gruppierung</li>
            </ul>
            <p className="mt-4 font-semibold">Hochentwickelte Spieler:</p>
            <ul className="list-disc list-inside">
              <li>Führungsrollen</li>
              <li>Mentoring-Aufgaben</li>
              <li>Kreativitätstraining</li>
              <li>Spezialisierungsmöglichkeiten</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Trainingshinweise */}
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }}>
        <Card className="bg-white/80 shadow p-6">
          <CardHeader>
            <CardTitle>🎯 Trainingshinweise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">Altersunabhängige Anwendung:</p>
            <ul className="list-disc list-inside">
              <li>Flexibilität</li>
              <li>Individualität</li>
              <li>Ganzheitlichkeit</li>
              <li>Langfristigkeit</li>
            </ul>
            <p className="mt-4 font-semibold">Modulübergreifende Trainingsgestaltung:</p>
            <ul className="list-disc list-inside">
              <li>Integratives Training</li>
              <li>Schwerpunktsetzung</li>
              <li>Transferförderung</li>
              <li>Ganzheitliche Betrachtung</li>
            </ul>
            <p className="mt-4 font-semibold">Entwicklungsorientierte Förderung:</p>
            <ul className="list-disc list-inside">
              <li>Stärkenorientierung</li>
              <li>Herausforderung</li>
              <li>Unterstützung</li>
              <li>Wertschätzung</li>
            </ul>
            <p className="mt-4 font-semibold">Qualitätssicherung und Evaluation:</p>
            <ul className="list-disc list-inside">
              <li>Regelmäßige Standortbestimmung</li>
              <li>Dokumentation</li>
              <li>Anpassung</li>
              <li>Reflexion</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}


