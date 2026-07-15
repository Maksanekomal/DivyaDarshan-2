
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const TempleHero = ({ temple }) => {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      <img
        src={temple.image}
        alt={temple.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-7xl mx-auto h-full flex items-end pb-20 px-6"
      >

        <div>

          <span className="bg-orange-600 text-white px-5 py-2 rounded-full font-semibold">
            {temple.category}
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
            {temple.name}
          </h1>

          <div className="flex items-center gap-3 mt-5 text-gray-300">

            <FaMapMarkerAlt className="text-orange-500" />

            <span className="text-lg">
              {temple.city}, {temple.state}
            </span>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default TempleHero;