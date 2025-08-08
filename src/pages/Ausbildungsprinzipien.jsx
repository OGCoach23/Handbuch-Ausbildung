import { motion } from "framer-motion";

export default function Ausbildungsprinzipien() {
  return (
    <div className="space-y-10">
      <section className="bg-white/40 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-dark space-y-4"
        >
          <h1 className="text-3xl font-bold text-primary">
            Ausbildungsprinzipien & Werte
          </h1>
          <p>
            <span className="font-semibold bg-yellow-100 px-1 rounded">Ausbildung braucht Haltung</span> – und Haltung zeigt sich im Handeln.
            Unsere Ausbildung beruht auf einem stabilen Wertefundament.
          </p>
          <p>
            Es sind Prinzipien, die Orientierung geben – für Trainer:innen,
            Spieler:innen, Eltern. Sie schaffen Vertrauen, Klarheit und
            Entwicklungsspielraum – und sie verbinden sportliche Exzellenz mit
            menschlicher Reife.
          </p>
          <p>
            Wirkliche Entwicklung entsteht dort, wo Spieler:innen ernst genommen,
            gefordert und begleitet werden.
          </p>

          <div className="bg-green-100/30 p-4 rounded-xl shadow">
            <h3 className="font-bold mb-2 text-primary">Unsere Leitprinzipien:</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-semibold w-1/4">Verbindlichkeit</td>
                  <td>Strukturen geben Sicherheit – ohne Starrheit.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Individualisierung</td>
                  <td>Jede:r entwickelt sich anders – Tempo & Motivation zählen.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Vernetzung</td>
                  <td>Gemeinsame Sprache, Raum für Persönlichkeit.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Durchgängigkeit</td>
                  <td>Abgestimmte Ziele von Minis bis A-Jugend.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Ganzheitlichkeit</td>
                  <td>Körper, Technik, Mentalität – alles gehört zusammen.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Entwicklung vor Ergebnis</td>
                  <td>Motivation statt Vergleich – Fortschritt zählt.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Vielfalt als Stärke</td>
                  <td>Unterschiede bereichern Spiel & Miteinander.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Diese Prinzipien prägen unseren Alltag beim SV Laim. Spieler:innen
            lernen bei uns nicht nur was, sondern auch wie man lernt.
          </p>

          <div className="border-l-4 border-primary bg-white/30 p-4 italic rounded">
            Trainerimpuls: Diese Prinzipien sind dein Werkzeug. Nutze sie zur
            Reflexion: Passt die Aufgabe zur Persönlichkeit? Fördert meine
            Ansprache Verantwortung?
          </div>

          <div className="border-l-4 border-primary bg-white/30 p-4 italic rounded">
            Elternblick: Ihr Kind wird hier nicht in ein System gepresst,
            sondern darf sich entfalten – mit Klarheit und Herz.
          </div>

          <div className="border-l-4 border-primary bg-white/30 p-4 italic rounded">
            Für Spieler:innen – kurz erklärt: Du musst niemandem etwas beweisen –
            nur dir selbst zeigen, dass du wachsen kannst.
          </div>
        </motion.div>
      </section>
    </div>
  );
}
