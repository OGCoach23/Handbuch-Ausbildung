import { motion } from "framer-motion";

export default function EJugendModul4() {
  return (
    <div className="bg-white/70 p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-800 mb-6"
      >
        Modul 4: Mentale & soziale Entwicklung
      </motion.h1>
      <div className="prose max-w-none">
        <h2>Leitfrage</h2>
        <p>„Wie fördere ich Selbstbewusstsein, Teamgeist & Verantwortung – mit kindgerechten Methoden und echten Erlebnissen?“</p>

        <h2>Zielsetzung dieses Moduls</h2>
        <ul>
          <li>Aufbau von Selbstvertrauen, Teamverantwortung und emotionaler Selbststeuerung</li>
          <li>Förderung von Kooperation, Rücksichtnahme und Umgang mit Erfolgsdruck</li>
          <li>Entwicklung eines positiven Selbstbilds als Mitspieler:in</li>
          <li>Vorbereitung auf spätere leistungsorientierte Umfelder – ohne Überforderung</li>
        </ul>

        <h2>Mentale & soziale Entwicklungsziele</h2>
        <p>Selbstbild & Selbstvertrauen, Motivation & Zielorientierung, Kooperation & Teamfähigkeit, Umgang mit Emotionen, Rollenverständnis.</p>

        <h2>Methodische Prinzipien</h2>
        <ul>
          <li>Lernen durch Erleben – kooperative Spiele, Reflexion</li>
          <li>Reflexion einfach halten</li>
          <li>Teamverantwortung einbauen</li>
          <li>Fehler = Lernchance</li>
          <li>Positives Verhalten verstärken</li>
        </ul>

        <h2>Methoden & Spiele</h2>
        <p>„Team der Woche“, Kooperationsparcours, Stopp-Spiel + Feedback, Zielkarten, Rollenwechselspiel, Ball der Gefühle, Mut- & Fairnesspunkte.</p>

        <h2>Rituale</h2>
        <p>Kreis der Stärken, Emotionen-Uhr, Mutfrage des Tages, Teamvertrag sichtbar machen, „Ich kann...“-Tafel.</p>

        <h2>Trainerhinweise</h2>
        <ul>
          <li>Kontinuität und Geduld</li>
          <li>Feedback sofort und konkret</li>
          <li>Trainer:innen sind Vorbilder</li>
          <li>Soziales Verhalten ins Spiel integrieren</li>
        </ul>

        <h2>Typische Trainerfehler</h2>
        <ul>
          <li>Nur auf Leistung achten → Sozialverhalten sichtbar machen</li>
          <li>Konflikte ignorieren → moderieren</li>
          <li>Verbote statt Lösungen → gute Alternativen erfragen</li>
          <li>Fehlverhalten sanktionieren → positives Verhalten verstärken</li>
        </ul>

        <h2>Ergebnis für den Trainer</h2>
        <p>Du stärkst Selbstvertrauen, Sozialkompetenz und Frustrationstoleranz. Training wird ein Lernort für Kopf und Herz. Kinder sehen im Spiel Gemeinschaft, Verantwortung und Mut.</p>
      </div>
    </div>
  );
}
