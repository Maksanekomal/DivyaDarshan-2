
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import {
  FaMapMarkerAlt,
  FaPlaceOfWorship,
  FaArrowRight,
} from "react-icons/fa";

const TempleCard = ({ temple }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className={`group rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
        darkMode
          ? "bg-slate-900 border-slate-800 hover:shadow-orange-500/20"
          : "bg-white border-slate-200 hover:shadow-orange-300/30"
      }`}
    >
      {/* Temple Image */}

      <div className="relative overflow-hidden">

        <img
          src={`/temples/${temple.image}`}
          alt={temple.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <span className="absolute top-5 left-5 px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-semibold shadow-lg">
          {temple.category}
        </span>
      </div>

      {/* Content */}

      <div className="p-7">

        <h3
          className={`text-2xl font-bold transition ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {temple.name}
        </h3>

        {/* Location */}

        <div
          className={`flex items-center gap-2 mt-4 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          <FaMapMarkerAlt className="text-orange-500" />

          <span>
            {temple.city}, {temple.state}
          </span>
        </div>

        {/* Deity */}

        <div
          className={`flex items-center gap-2 mt-3 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          <FaPlaceOfWorship className="text-orange-500" />

          <span>{temple.deity}</span>
        </div>

        {/* Description */}

        <p
          className={`mt-5 leading-7 line-clamp-3 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {temple.shortDescription}
        </p>

        {/* Divider */}

        <div
          className={`my-6 border-t ${
            darkMode ? "border-slate-800" : "border-slate-200"
          }`}
        />

        {/* Button */}

        <Link
          to={`/temple/${temple._id}`}
          className="inline-flex items-center gap-2 font-semibold text-orange-500 group-hover:gap-4 transition-all duration-300"
        >
          View Details

          <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default TempleCard;