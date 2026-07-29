
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FaCalendarAlt,
  FaPrayingHands,
  FaCheckCircle,
} from "react-icons/fa";

const TempleFestivals = ({ temple }) => {
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
          Celebrate Divine Traditions
        </span>

        <h2
          className={`text-4xl md:text-5xl font-bold mt-5 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Festivals & Rituals
        </h2>

        <p
          className={`max-w-3xl mx-auto mt-5 leading-8 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Experience the vibrant festivals and sacred daily rituals that have
          preserved centuries of faith, devotion, and spiritual heritage.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Festivals */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className={`rounded-3xl border p-8 transition-all duration-300 ${
            darkMode
              ? "bg-slate-900 border-slate-800 hover:border-orange-500/40"
              : "bg-white border-slate-200 hover:border-orange-300 shadow-lg"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">

              <FaCalendarAlt className="text-orange-500 text-2xl" />

            </div>

            <div>

              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Major Festivals
              </h3>

              <p
                className={
                  darkMode ? "text-slate-400" : "text-slate-500"
                }
              >
                Annual Temple Celebrations
              </p>

            </div>

          </div>

          <div className="space-y-4">

            {temple.festivals?.length ? (
              temple.festivals.map((festival, index) => (

                <div
                  key={index}
                  className={`flex items-start gap-4 rounded-2xl p-5 transition ${
                    darkMode
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-slate-50 hover:bg-orange-50"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  <div>

                    <h4
                      className={`font-semibold ${
                        darkMode
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      {festival}
                    </h4>

                    <p
                      className={`mt-1 text-sm ${
                        darkMode
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      Celebrated with great devotion and cultural traditions.
                    </p>

                  </div>

                </div>

              ))
            ) : (
              <p className="text-slate-400">
                Festival information not available.
              </p>
            )}

          </div>
        </motion.div>

        {/* Rituals */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className={`rounded-3xl border p-8 transition-all duration-300 ${
            darkMode
              ? "bg-slate-900 border-slate-800 hover:border-orange-500/40"
              : "bg-white border-slate-200 hover:border-orange-300 shadow-lg"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">

              <FaPrayingHands className="text-orange-500 text-2xl" />

            </div>

            <div>

              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Daily Rituals
              </h3>

              <p
                className={
                  darkMode ? "text-slate-400" : "text-slate-500"
                }
              >
                Sacred Worship Schedule
              </p>

            </div>

          </div>

          <div className="space-y-4">

            {temple.rituals?.length ? (
              temple.rituals.map((ritual, index) => (

                <div
                  key={index}
                  className={`flex items-start gap-4 rounded-2xl p-5 transition ${
                    darkMode
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-slate-50 hover:bg-orange-50"
                  }`}
                >
                  <FaCheckCircle className="text-orange-500 mt-1" />

                  <div>

                    <h4
                      className={`font-semibold ${
                        darkMode
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      {ritual}
                    </h4>

                    <p
                      className={`mt-1 text-sm ${
                        darkMode
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      Performed daily according to ancient temple traditions.
                    </p>

                  </div>

                </div>

              ))
            ) : (
              <p className="text-slate-400">
                Ritual information not available.
              </p>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TempleFestivals;