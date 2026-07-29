
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkedAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import { getAllRoutes } from "../services/routeService";
import { useTheme } from "../context/ThemeContext";

const PilgrimageRoutes = () => {
  const { darkMode } = useTheme();
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const data = await getAllRoutes();
        setRoutes(data);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <section
      className={`relative py-24 overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Pilgrimage
          </span>

          <h2
            className={`mt-4 text-4xl md:text-6xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Sacred Pilgrimage Circuits
          </h2>

          <p
            className={`mt-6 max-w-3xl mx-auto leading-8 ${
              darkMode ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Explore India's most renowned pilgrimage routes that connect
            spirituality, history, and culture across different regions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {routes.map((route, index) => (
            <motion.div
              key={route._id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className={`group rounded-3xl overflow-hidden border shadow-2xl transition-all duration-500 ${
                darkMode
                  ? "bg-slate-800 border-slate-700 hover:border-orange-500"
                  : "bg-white border-gray-200 hover:border-orange-500"
              }`}
            >
              <div className="md:flex">
                <div className="md:w-2/5 overflow-hidden">
                  <img
                    src={`/routes/${route.image}`}
                    alt={route.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                    onError={(e) => {
                      e.target.src = "/routes/char-dham.jpg";
                    }}
                  />
                </div>

                <div className="md:w-3/5 p-8">
                  <h3
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {route.title}
                  </h3>

                  <p
                    className={`mt-5 leading-7 ${
                      darkMode ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    {route.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-orange-500">
                    <FaMapMarkedAlt />
                    <span>{route.temples}</span>
                  </div>

                  <div className="mt-4 flex items-center gap-3 text-orange-500">
                    <FaCalendarAlt />
                    <span>{route.duration}</span>
                  </div>

                  <Link
                    to={`/route/${route._id}`}
                    className="mt-8 inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all"
                  >
                    Explore Route
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilgrimageRoutes;