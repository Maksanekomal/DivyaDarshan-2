
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaPlaceOfWorship, FaArrowRight } from "react-icons/fa";

const FestivalCard = ({ festival, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-72">

        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

        <span className="absolute top-5 left-5 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {festival.month}
        </span>

      </div>

      {/* Content */}

      <div className="p-7">

        <h2 className="text-2xl font-bold text-white">
          {festival.name}
        </h2>

        <div className="flex items-center gap-2 mt-5 text-gray-400">

          <FaCalendarAlt className="text-orange-500" />

          <span>{festival.month}</span>

        </div>

        <div className="flex items-center gap-2 mt-3 text-gray-400">

          <FaPlaceOfWorship className="text-orange-500" />

          <span>{festival.temple}</span>

        </div>

        <p className="text-gray-400 mt-5 leading-7 line-clamp-3">
          {festival.description}
        </p>

        <Link
          to={`/festival/${festival.id}`}
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