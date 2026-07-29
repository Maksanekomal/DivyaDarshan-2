
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FaMapMarkerAlt,
  FaPlaceOfWorship,
  FaArrowRight,
} from "react-icons/fa";

const TempleNearby = ({ temple }) => {
  const { darkMode } = useTheme();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 font-semibold">
          Explore More
        </span>

        <h2
          className={`text-4xl md:text-5xl font-bold mt-5 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Nearby Attractions
        </h2>

        <p
          className={`max-w-3xl mx-auto mt-5 leading-8 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Continue your spiritual journey by exploring nearby temples and
          sacred destinations around <strong>{temple.name}</strong>.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {temple.nearbyPlaces?.map((place, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className={`rounded-3xl border overflow-hidden transition-all duration-500 ${
              darkMode
                ? "bg-slate-900 border-slate-800 hover:border-orange-500/40 hover:shadow-orange-500/20"
                : "bg-white border-slate-200 hover:border-orange-300 hover:shadow-xl"
            }`}
          >
            {/* Header */}

            <div className="p-8">

              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-2xl">
                <FaPlaceOfWorship />
              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {place}
              </h3>

              <div
                className={`flex items-center gap-2 mt-4 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <FaMapMarkerAlt className="text-orange-500" />

                <span>Near {temple.name}</span>
              </div>

              <p
                className={`mt-6 leading-7 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Visit this beautiful spiritual destination to discover its
                rich history, architecture, traditions, and peaceful
                atmosphere.
              </p>

            </div>

            {/* Footer */}

            <div
              className={`px-8 py-5 border-t flex items-center justify-between ${
                darkMode
                  ? "border-slate-800 bg-slate-950/50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <span className="text-sm font-medium text-orange-500">
                Nearby Temple
              </span>

              <button className="flex items-center gap-2 font-semibold text-orange-500 hover:gap-4 transition-all">
                Explore
                <FaArrowRight />
              </button>
            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default TempleNearby;