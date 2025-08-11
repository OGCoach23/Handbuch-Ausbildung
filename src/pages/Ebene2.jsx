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
    </div>
  );
}
