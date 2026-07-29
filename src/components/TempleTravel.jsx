
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FaPlane,
  FaTrain,
  FaBus,
  FaMapMarkedAlt,
  FaArrowRight,
} from "react-icons/fa";

const TempleTravel = ({ temple }) => {
  const { darkMode } = useTheme();

  const travelInfo = [
    {
      title: "By Air",
      icon: <FaPlane />,
      value: temple.howToReach?.air,
    },
    {
      title: "By Rail",
      icon: <FaTrain />,
      value: temple.howToReach?.rail,
    },
    {
      title: "By Road",
      icon: <FaBus />,
      value: temple.howToReach?.road,
    },
  ];

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
          Plan Your Journey
        </span>

        <h2
          className={`text-4xl md:text-5xl font-bold mt-5 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Travel Information
        </h2>

        <p
          className={`max-w-3xl mx-auto mt-5 leading-8 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Reach the temple comfortably by air, rail, or road. Plan your
          pilgrimage with ease.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {travelInfo.map((item, index) => (

          <motion.div
            key={item.title}
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
            className={`rounded-3xl border p-8 transition-all duration-500 ${
              darkMode
                ? "bg-slate-900 border-slate-800 hover:border-orange-500/40 hover:shadow-orange-500/20"
                : "bg-white border-slate-200 hover:border-orange-300 hover:shadow-xl"
            }`}
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-3xl">
              {item.icon}
            </div>

            <h3
              className={`mt-7 text-2xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {item.title}
            </h3>

            <p
              className={`mt-4 leading-7 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {item.value || "Information not available"}
            </p>

            <div
              className={`mt-8 pt-5 border-t ${
                darkMode ? "border-slate-800" : "border-slate-200"
              }`}
            >
              <span className="text-sm text-orange-500 font-medium">
                Temple Travel Guide
              </span>
            </div>
          </motion.div>
        ))}

        {/* Maps Card */}

        <motion.a
          href={temple.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white shadow-2xl p-8 flex flex-col justify-between"
        >
          <div>
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
              <FaMapMarkedAlt className="text-3xl" />
            </div>

            <h3 className="text-3xl font-bold mt-8">
              Google Maps
            </h3>

            <p className="mt-5 leading-7 text-orange-100">
              Open the temple location in Google Maps and start your journey with real-time navigation.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <span className="font-semibold text-lg">
              Get Directions
            </span>

            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <FaArrowRight />
            </div>
          </div>
        </motion.a>

      </div>
    </section>
  );
};

export default TempleTravel;