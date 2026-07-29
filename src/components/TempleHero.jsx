
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPlaceOfWorship,
  FaChevronRight,
  FaOm,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const TempleHero = ({ temple }) => {
  const { darkMode } = useTheme();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] overflow-hidden">
        <img
          src={`/temples/${temple.image}`}
          alt={temple.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6"
        >
          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-gray-200 text-sm">

            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>

            <FaChevronRight size={10} />

            <Link
              to="/temples"
              className="hover:text-orange-400"
            >
              Temples
            </Link>

            <FaChevronRight size={10} />

            <span className="text-orange-400">
              {temple.name}
            </span>

          </div>

          {/* Hero Heading */}

          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-white mt-8"
          >
            {temple.name}
          </motion.h1>

          <p className="text-orange-300 text-xl mt-4">
            Sacred Temple of {temple.deity}
          </p>
        </motion.div>
      </section>

      {/* Floating Card */}

      <div className="max-w-7xl mx-auto px-6 relative -mt-20 z-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`rounded-3xl border shadow-2xl backdrop-blur-xl p-8 ${
            darkMode
              ? "bg-slate-900/90 border-slate-800"
              : "bg-white/95 border-slate-200"
          }`}
        >

          <div className="grid md:grid-cols-3 gap-8">

            {/* Category */}

            <div className="flex gap-4">

              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                <FaPlaceOfWorship className="text-orange-500 text-2xl" />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Category
                </p>

                <h3
                  className={`text-xl font-bold ${
                    darkMode
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {temple.category}
                </h3>

              </div>

            </div>

            {/* Deity */}

            <div className="flex gap-4">

              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                <FaOm className="text-orange-500 text-2xl" />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Presiding Deity
                </p>

                <h3
                  className={`text-xl font-bold ${
                    darkMode
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {temple.deity}
                </h3>

              </div>

            </div>

            {/* Location */}

            <div className="flex gap-4">

              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                <FaMapMarkerAlt className="text-orange-500 text-2xl" />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Location
                </p>

                <h3
                  className={`text-xl font-bold ${
                    darkMode
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {temple.city}, {temple.state}
                </h3>

              </div>

            </div>

          </div>

          {/* Description */}

          <div
            className={`mt-8 pt-8 border-t ${
              darkMode
                ? "border-slate-800"
                : "border-slate-200"
            }`}
          >
            <p
              className={`leading-8 text-lg ${
                darkMode
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              Experience the divine atmosphere, rich history, magnificent
              architecture, and timeless spiritual heritage of{" "}
              <strong>{temple.name}</strong>. Every year, thousands of devotees
              visit this sacred temple seeking blessings and inner peace.
            </p>
          </div>

        </motion.div>

      </div>
    </>
  );
};

export default TempleHero;