import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const jugenden = [
  {
    titel: "F-Jugend (4–8 Jahre)",
    frage: "Wie begleite ich Kinder zwischen 4 und 8 Jahren liebevoll, bewegungsreich und entwicklungsfördernd ins Handballspielen?",
    path: "/f-jugend",
  },
  {
    titel: "E-Jugend (9–10 Jahre)",
    frage: "Worauf muss ich als Trainer:in bei 9- bis 10-jährigen besonders achten?",
    path: "/e-jugend",
  },
  {
    titel: "D-Jugend (11–12 Jahre)",
    frage: "Wie gestalten wir ein motivierendes, entwicklungsfreundliches Training für Kinder, die sich mitten im Umbruch befinden – körperlich, geistig und sozial?",
    path: "/d-jugend",
  },
  {
    titel: "C-Jugend (13–14 Jahre)",
    frage: "Wie entwickeln wir gemeinsam ein leistungsorientiertes, wertschätzendes Miteinander – auf und neben dem Feld?",
    path: "/c-jugend",
  },
  {
    titel: "B-Jugend (15–16 Jahre)",
    frage: "Wie begleite ich Jugendliche individuell und verantwortungsvoll in einer Phase zwischen Selbstbehauptung, Leistungswunsch und Orientierungsbedürfnis?",
    path: "/b-jugend",
  },
  {
    titel: "A-Jugend (17–18 Jahre)",
    frage: "Wie begleite ich junge Erwachsene in ihrer letzten Jugendphase – zwischen Leistung, Identität und dem Übergang ins Aktivenleben?",
    path: "/a-jugend",
  },
];

export default function Ebene2() {
  return (
    <div className="bg-white">
      {/* Einleitung */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-dark space-y-4"
          >
          <h1 className="text-3xl font-bold text-primary">
            Ebene 2 – Modulbasierte Ausbildungslogik
          </h1>
          <p>
            Jetzt wird's konkret. Wir haben unsere Haltung geschärft, unsere Prinzipien festgelegt und ein flexibles Gerüst aus Alters- und Leistungsstufen aufgebaut. Jetzt machen wir daraus ein lebendiges System – modular, wiedererkennbar und praxisnah.
          </p>
          <p>
            Denn gute Ausbildung braucht Struktur. Und Struktur braucht Inhalte, die zur Entwicklungsphase passen. In dieser Ebene zeigen wir, wie wir die Laimer Werte im Trainingsalltag umsetzen – und was Spieler:innen in welcher Phase lernen sollen.
          </p>
          <p>
            Unsere sechs Module bilden das Herzstück der Ausbildung: <br />
            Modul 1: Entwicklungsmerkmale & Methodik – Wie lernen Kinder und Jugendliche – und wie richten wir unser Training darauf aus? <br />
            Modul 2: Athletik & Motorik – Bewegungskompetenz als Fundament: kindgerecht, vielseitig, handballspezifisch. <br />
            Modul 3: Technik & Taktik – Vom ersten Prellen bis zum komplexen Umschaltspiel – wir strukturieren den Weg. <br />
            Modul 4: Mentale & soziale Entwicklung – Persönlichkeit stärken, Teamverhalten fördern, mit Druck und Fehlern umgehen. <br />
            Modul 5: Spielsysteme & Positionsspiel – Was Spieler:innen wann über Räume, Rollen und Systeme lernen sollen – ohne zu überfordern. <br />
            Modul 6: Teamkultur & Kommunikation – Miteinander wachsen – durch Sprache, Werte und gelebte Verantwortung.
          </p>
          <p>
            Jedes Modul ist altersgerecht aufbereitet – mit klaren Entwicklungszielen, Trainingsimpulsen und Methodentipps. Du bekommst kein starres Raster, sondern ein System mit Spielraum: für deinen Stil, dein Team, deinen Alltag.
          </p>
        </motion.div>
        </div>
      </div>

      {/* Karten-Slider */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1.5}
          centeredSlides={true}
          grabCursor={true}
          className="pb-10"
        >
          {jugenden.map((jugend, index) => (
            <SwiperSlide key={index}>
              <Link to={jugend.path}>
                <motion.div
                  whileHover={{ backgroundColor: "#005baa", scale: 1.02 }}
                  initial={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                  className="border rounded-2xl shadow-lg p-8 h-[400px] flex flex-col justify-center items-center backdrop-blur-md transition-colors duration-300"
                >
                  <h2 className="text-xl font-bold mb-4 text-center">
                    {jugend.titel}
                  </h2>
                  <p className="text-center">{jugend.frage}</p>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fazit */}
      <div className="max-w-4xl mx-auto px-4 py-8 mt-24">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-dark space-y-4"
          >
          <h2 className="text-2xl font-bold text-primary">Fazit Ebene 2: Ausbildung mit System</h2>
          <p>Wir haben die Haltung mit Inhalt gefüllt. In dieser Ebene ist sichtbar geworden, wie unser Ausbildungssystem funktioniert – modular, zielgerichtet und entwicklungsfördernd. Jedes Modul hat gezeigt: Entwicklung lässt sich planen, ohne starr zu werden. Und sie gewinnt an Tiefe, wenn sie auf mehreren Ebenen gleichzeitig wirkt – körperlich, technisch, taktisch, mental und sozial.</p>
          <p>Unsere Module geben Trainer:innen Struktur – und Spieler:innen Orientierung.</p>
          <ul className="list-disc list-inside">
            <li>Entwicklung folgt keiner Einbahnstraße – sie braucht Raum für Umwege und Sprünge.</li>
            <li>Inhalte wirken stärker, wenn sie zur Entwicklungsphase passen – nicht zu früh, nicht zu spät.</li>
            <li>Gute Ausbildung entsteht dort, wo Systematik und Menschenkenntnis zusammenkommen.</li>
          </ul>
          <p>Jetzt wissen wir, was wir wann trainieren – und wie wir es altersgerecht vermitteln.</p>
          <p>Der nächste Schritt: Wir machen Entwicklung sichtbar und vergleichbar.</p>
          <div className="mt-6 flex justify-center">
            <Link to="/ebene3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500 text-white px-8 py-6 rounded-xl shadow-lg cursor-pointer"
              >
                Ausblick auf Ebene 3: Entwicklung messen – ohne zu bewerten
              </motion.div>
            </Link>
          </div>
          <p>In Ebene 3 schärfen wir unser Verständnis von Kompetenz: Was bedeutet Fortschritt konkret – auf Technik-, Spiel- oder Haltungsebene?</p>
          <ul className="list-disc list-inside">
            <li>wie unser Kompetenzkompass (inkl. 5-Stufen-Modell) Orientierung bietet</li>
            <li>wie sich Positionsprofile und Spielsysteme über die Jahrgänge hinweg entwickeln</li>
            <li>wie wir mit Quer- und Neueinsteigern umgehen – ohne sie zu verlieren</li>
            <li>wie wir Breitensport und Leistungssport parallel und durchlässig gestalten</li>
            <li>und wie unser System über alle Jahrgänge hinweg wiedererkennbar bleibt – durch klare Raster, aber flexible Wege</li>
          </ul>
          <p>Es geht um Durchgängigkeit mit Leben, nicht um Gleichmacherei. Wir schaffen ein gemeinsames Verständnis von Qualität – ohne den Menschen aus dem Blick zu verlieren. Jetzt geht es darum, den roten Faden sichtbar zu machen – von der F-Jugend bis zur A-Jugend, vom Einstieg bis zum Übergang in den Erwachsenenbereich.</p>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
