
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPlaceOfWorship,
} from "react-icons/fa";

import { getAllTemples } from "../services/templeService";

const FeaturedTemples = () => {
  const [temples, setTemples] = useState([]);

  useEffect(() => {
    const fetchTemples = async () => {
      try {
        const data = await getAllTemples();

        // Show first 6 temples on Home page
        setTemples(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching featured temples:", error);
      }
    };

    fetchTemples();
  }, []);

  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Explore
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            Featured Sacred Temples
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
            Discover India's most famous temples, their rich history,
            architecture, festivals and spiritual importance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {temples.map((temple, index) => (
            <motion.div
              key={temple._id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-[#111827] rounded-3xl overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-500 shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={`/temples/${temple.image}`}
                  alt={temple.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/temples/default.jpg";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <span className="absolute top-5 left-5 bg-orange-600 text-white text-sm px-4 py-2 rounded-full">
                  {temple.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white">
                  {temple.name}
                </h3>

                <div className="flex items-center gap-2 mt-5 text-gray-400">
                  <FaMapMarkerAlt className="text-orange-500" />
                  <span>{temple.state}</span>
                </div>

                <div className="flex items-center gap-2 mt-3 text-gray-400">
                  <FaPlaceOfWorship className="text-orange-500" />
                  <span>{temple.deity}</span>
                </div>

                <Link
                  to={`/temple/${temple._id}`}
                  className="mt-8 inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all"
                >
                  Explore Temple
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemples;