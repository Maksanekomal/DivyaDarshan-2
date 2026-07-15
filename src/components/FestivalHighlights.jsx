import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import festivals from "../data/festivals";

const FestivalHighlights = () => {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden">

      {/* Glow */}

      <div className="absolute left-0 top-20 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-80 h-80 bg-yellow-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Festivals
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            Celebrate India's Spiritual Festivals
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
            Experience the vibrant traditions, rituals and celebrations
            that unite millions of devotees across India.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {festivals.map((festival, index) => (

            <motion.div
              key={festival.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden bg-[#111827] border border-slate-700 hover:border-orange-500 transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={festival.image}
                  alt={festival.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-white">
                  {festival.name}
                </h3>

                <div className="flex items-center gap-2 mt-4 text-orange-400">

                  <FaCalendarAlt />

                  <span>{festival.month}</span>

                </div>

                <p className="text-gray-400 mt-4 text-sm leading-7">
                  {festival.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-4 transition-all">

                  View Details

                  <FaArrowRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FestivalHighlights;