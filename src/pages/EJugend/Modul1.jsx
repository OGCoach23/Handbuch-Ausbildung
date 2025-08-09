import { motion } from "framer-motion";

export default function EJugendModul1() {
  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        Modul 1: Entwicklungsmerkmale & Methodik
      </motion.h1>
      <div className="prose max-w-none">
        <h2>Leitfrage</h2>
        <p>„Worauf muss ich als Trainer:in bei 9- bis 10-jährigen besonders achten?“</p>

        <h2>Zielsetzung dieses Moduls</h2>
        <ul>
          <li>Verstehen, wie sich Kinder zwischen 9–10 Jahren körperlich, kognitiv, sozial und emotional entwickeln</li>
          <li>Bewusstes Anpassen von Trainingsmethodik, Sprache und Erwartungshaltung</li>
          <li>Förderung von spielerischem Lernen mit ersten strukturellen Elementen</li>
          <li>Vermittlung grundlegender Lern- und Sozialformen – ohne Leistungsdruck, aber mit Anspruch</li>
        </ul>

        <h2>Entwicklungsmerkmale der E-Jugend</h2>
        <table>
          <thead>
            <tr><th>Bereich</th><th>Typische Merkmale</th></tr>
          </thead>
          <tbody>
            <tr><td>Körperlich</td><td>Hoher Bewegungsdrang, Verbesserung von Grob- & Feinmotorik, Übermut, Koordinationssprünge, Mädchen teils koordinierter</td></tr>
            <tr><td>Kognitiv</td><td>Regeln werden verstanden, aber oft kreativ interpretiert; erste Reflexionsfähigkeit, steigende Konzentrationsdauer</td></tr>
            <tr><td>Sozial</td><td>Gruppenzugehörigkeit wird zentral; erste Rollen (Anführer, Clown, Mitläufer); Wettbewerbsorientierung („Wer war schneller?“)</td></tr>
            <tr><td>Emotional</td><td>Anerkennung durch Trainer & Team ist sehr wichtig; hohe Sensibilität bei Kritik; Emotionen oft impulsiv & unreguliert</td></tr>
            <tr><td>Spieltypisch</td><td>Erste Vorlieben (Tor, Angriff, Verteidigung); Begeisterung für Tore und „Zielspiele“; Wunsch nach Wiedererkennung im Spiel</td></tr>
          </tbody>
        </table>

        <h2>Was Trainer:innen besonders beachten müssen</h2>
        <table>
          <thead><tr><th>Empfehlung</th><th>Begründung / Ziel</th></tr></thead>
          <tbody>
            <tr><td>Wettbewerbe mit Augenmaß</td><td>Kinder wollen sich messen – brauchen aber faire Erfolgschancen</td></tr>
            <tr><td>Regeln klar, aber flexibel anwenden</td><td>Fördert Verantwortungsgefühl & Gerechtigkeitsempfinden</td></tr>
            <tr><td>Fragen statt Anweisungen</td><td>Kinder beginnen, selbst Lösungen zu finden – fördern statt führen</td></tr>
            <tr><td>Keine frühe Spezialisierung</td><td>Noch kein „der ist Kreisläufer“ – alle dürfen alles ausprobieren</td></tr>
            <tr><td>Vielfalt statt Drill</td><td>Wiederholung durch Variation – kein monotones Üben</td></tr>
            <tr><td>Pausen nutzen</td><td>Konzentration ist begrenzt – Pausen bieten Zeit für Reflexion & Motivation</td></tr>
          </tbody>
        </table>

        <h2>Methodik & Organisation</h2>
        <p>Trainingsformate: Stationstraining, Spielreihen, Kleingruppenrotation mit 2–3 Schwerpunkten je Einheit.</p>
        <p>Soziale Strukturierung: Partnerwechsel, rotierende Führungsrollen, Teamaufgaben.</p>
        <p>Sprache & Kommunikation: Klare, motivierende Sprache, gezielte Fragen („Wie hättest du das gelöst?“).</p>
        <p>Feedbackformen: Direkt, positiv, individuell & als Team („Wer war heute hilfsbereit?“).</p>
        <p>Regeln & Rituale: 2–3 feste Teamregeln, sichtbar machen, bei Bruch gemeinsam reflektieren – nicht sanktionieren.</p>
        <p>Dauer & Struktur: 60–75 Min.: Einstieg – Warm-up – Technikspiel – Hauptteil – Spiel – Reflexion.</p>

        <h2>Besondere methodische Hinweise</h2>
        <ul>
          <li>Ansprechbarkeit hoch: Namen oft nennen, direkte Ansprache nutzen</li>
          <li>Sensibles Selbstbild: Fehler nicht vor Gruppe thematisieren, sondern einzeln klären</li>
          <li>Frustration vermeiden: Mini-Erfolgserlebnisse ermöglichen</li>
          <li>Heterogenität hoch: Offene Aufgabenstellungen nutzen</li>
        </ul>

        <h2>Trainerrolle</h2>
        <ul>
          <li>Erklärer: kindgerecht, anschaulich, konkret</li>
          <li>Fragender: lässt Kinder mitdenken</li>
          <li>Beobachter: erkennt Über-/Unterforderung</li>
          <li>Teamcoach: baut Zusammenhalt auf</li>
          <li>Beziehungsperson: interessiert sich, kennt Lebenswelt</li>
        </ul>

        <h2>Ergebnis für den Trainer</h2>
        <p>Du weißt, wie du Kinder in der „Zwischenphase“ zwischen Spielen und Lernen führst. Du kannst methodisch sinnvoll strukturieren, emotional stabilisieren und individuell begleiten. Du schaffst die Grundlage für technische und mannschaftliche Entwicklung – ohne zu früh zu viel zu wollen.</p>
      </div>
    </div>
  );
}
