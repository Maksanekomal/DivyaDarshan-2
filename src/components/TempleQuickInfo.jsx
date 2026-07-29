
import {
  FaClock,
  FaCalendarAlt,
  FaTshirt,
  FaTicketAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const TempleQuickInfo = ({ temple }) => {
  const { darkMode } = useTheme();

  const info = [
    {
      icon: <FaClock />,
      title: "Darshan Timing",
      value: temple.darshanTiming,
    },
    {
      icon: <FaCalendarAlt />,
      title: "Best Time",
      value: temple.bestTimeToVisit,
    },
    {
      icon: <FaTshirt />,
      title: "Dress Code",
      value: temple.dressCode,
    },
    {
      icon: <FaTicketAlt />,
      title: "Entry Fee",
      value: temple.entryFee,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 font-semibold">
          Visitor Information
        </span>

        <h2
          className={`text-4xl font-bold mt-5 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Plan Your Visit
        </h2>

        <p
          className={`max-w-3xl mx-auto mt-4 leading-8 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Everything you need to know before visiting the temple.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {info.map((item, index) => (
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
className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-500 ${
              darkMode
                ? "bg-slate-900 border-slate-800 hover:border-orange-500/40 hover:shadow-orange-500/20"
                : "bg-white border-slate-200 hover:border-orange-300 hover:shadow-xl"
            }`}
          >
            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-2xl">
              {item.icon}
            </div>

            <p className="mt-7 text-sm uppercase tracking-wider text-orange-500 font-semibold">
              {item.title}
            </p>

            <h3
              className={`mt-3 text-lg font-bold leading-7 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {item.value || "Not Available"}
            </h3>

            <div
              className={`mt-8 pt-5 border-t ${
                darkMode ? "border-slate-800" : "border-slate-200"
              }`}
            >
              <span
                className={`text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Temple Visitor Guide
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TempleQuickInfo;