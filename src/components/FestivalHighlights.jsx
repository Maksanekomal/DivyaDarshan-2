
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

import { getAllFestivals } from "../services/festivalService";
import { useTheme } from "../context/ThemeContext";

const FestivalHighlights = () => {
  const { darkMode } = useTheme();

  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const data = await getAllFestivals();

        setFestivals(data.slice(0, 4));
      } catch (error) {
        console.error("Festival fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFestivals();
  }, []);


  return (
    <section
      className={`relative py-24 overflow-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-[#020617]"
          : "bg-gray-50"
      }`}
    >

      {/* Glow Background */}
      <div className="absolute left-0 top-20 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-80 h-80 bg-yellow-500/10 blur-[150px] rounded-full" />


      <div className="relative max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Festivals
          </span>


          <h2
            className={`mt-4 text-4xl md:text-6xl font-bold ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Celebrate India's Spiritual Festivals
          </h2>


          <p
            className={`mt-6 max-w-3xl mx-auto leading-8 ${
              darkMode
                ? "text-gray-400"
                : "text-slate-600"
            }`}
          >
            Experience the vibrant traditions, rituals and celebrations
            that unite millions of devotees across India.
          </p>

        </div>



        {/* Cards */}
        {loading ? (

          <div className="text-center text-orange-500">
            Loading Festivals...
          </div>

        ) : festivals.length === 0 ? (

          <div
            className={`text-center ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            No Festivals Found
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            {festivals.map((festival, index) => (

              <motion.div

                key={festival._id}

                initial={{
                  opacity: 0,
                  y: 60
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index * 0.15
                }}

                whileHover={{
                  y:-10
                }}

                className={`group rounded-3xl overflow-hidden border shadow-xl transition-all duration-500 ${
                  darkMode
                    ? "bg-[#111827] border-gray-800 hover:border-orange-500"
                    : "bg-white border-gray-200 hover:border-orange-500"
                }`}

              >


                {/* Image */}
                <div className="overflow-hidden">

                  <img

                    src={`/festivals/${festival.image}`}

                    alt={festival.name}

                    onError={(e)=>{
                      e.currentTarget.src="/festivals/default.jpg";
                    }}

                    className="
                      h-56
                      w-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "

                  />

                </div>



                {/* Content */}
                <div className="p-6">


                  <h3
                    className={`text-xl font-bold ${
                      darkMode
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >
                    {festival.name}
                  </h3>



                  <div className="flex items-center gap-2 mt-4 text-orange-500">

                    <FaCalendarAlt />

                    <span>
                      {festival.month}
                    </span>

                  </div>



                  <p
                    className={`mt-4 text-sm leading-7 line-clamp-3 ${
                      darkMode
                        ? "text-gray-400"
                        : "text-slate-600"
                    }`}
                  >
                    {festival.description}
                  </p>




                  <Link

                    to={`/festival/${festival._id}`}

                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-orange-500
                      font-semibold
                      hover:gap-4
                      transition-all
                    "

                  >
                    View Details
                    <FaArrowRight />

                  </Link>


                </div>


              </motion.div>

            ))}


          </div>

        )}

      </div>


    </section>
  );
};

export default FestivalHighlights;