import PrinciplesSection from "../components/training/PrinciplesSection";
import TimelineSection from "../components/training/TimelineSection";
import AccordionSections from "../components/training/AccordionSections";

export default function Training() {
  return (
    <div className="bg-white">

      {/* Intro */}
      <section className="bg-green-100/30 py-12">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <h1 className="text-4xl font-bold text-green-700">
            Trainingsaufbau & Jahresplanung
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Gute Entwicklung entsteht nicht zufällig – sie folgt einem Plan mit Haltung.
            Unsere Ausbildung will mehr als „gutes Training" – sie will wirksame Entwicklung.
            Wir denken Training in drei Ebenen: Makro, Meso, Mikro – immer mit Struktur und Flexibilität.
          </p>
        </div>
      </section>

      {/* Teil A: Principles */}
      <PrinciplesSection />

      {/* Timeline */}
      <TimelineSection />

      {/* Teil B + C: Accordion */}
      <AccordionSections />

      {/* Fazit */}
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-200">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Fazit</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Unser Ziel: Du sollst nicht nur Training „machen", sondern Entwicklung gestalten –
              planvoll, wirkungsvoll und mit Freude.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
