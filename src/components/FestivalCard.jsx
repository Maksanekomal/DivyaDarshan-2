
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  FaCalendarAlt,
  FaPlaceOfWorship,
  FaArrowRight,
} from "react-icons/fa";

const FestivalCard = ({ festival, index }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group overflow-hidden rounded-3xl border shadow-xl transition-all duration-500 ${
        darkMode
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-slate-200 hover:shadow-2xl"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-72">
        <img
          src={`/festivals/${festival.image}`}
          alt={festival.name}
          onError={(e) => {
            e.target.src = "/festivals/default.jpg";
          }}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <span className="absolute top-5 left-5 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {festival.month}
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {festival.name}
        </h2>

        <div
          className={`flex items-center gap-2 mt-5 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          <FaCalendarAlt className="text-orange-500" />
          <span>{festival.month}</span>
        </div>

        <div
          className={`flex items-center gap-2 mt-3 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          <FaPlaceOfWorship className="text-orange-500" />
          <span>{festival.temple}</span>
        </div>

        <p
          className={`mt-5 leading-7 line-clamp-3 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          {festival.description}
        </p>

        <Link
          to={`/festival/${festival._id}`}
          className="mt-8 inline-flex items-center gap-3 text-orange-500 font-semibold hover:gap-5 transition-all"
        >
          Learn More
          <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default FestivalCard;