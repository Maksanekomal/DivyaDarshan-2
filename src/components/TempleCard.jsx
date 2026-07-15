
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPlaceOfWorship,
  FaArrowRight,
} from "react-icons/fa";

const TempleCard = ({ temple }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-500"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={temple.image}
          alt={temple.name}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <span className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {temple.category}
        </span>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {temple.name}
        </h3>

        <div className="flex items-center gap-2 mt-4 text-gray-500">
          <FaMapMarkerAlt className="text-orange-600" />
          <span>{temple.city}, {temple.state}</span>
        </div>

        <div className="flex items-center gap-2 mt-3 text-gray-500">
          <FaPlaceOfWorship className="text-orange-600" />
          <span>{temple.deity}</span>
        </div>

        <p className="mt-5 text-gray-600 dark:text-gray-300 line-clamp-3">
          {temple.shortDescription}
        </p>

        <Link
          to={`/temple/${temple.id}`}
          className="mt-6 inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all"
        >
          View Details
          <FaArrowRight />
        </Link>

      </div>
    </motion.div>
  );
};

export default TempleCard;