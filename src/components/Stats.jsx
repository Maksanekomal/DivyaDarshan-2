
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLandmark,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

import { getAllTemples } from "../services/templeService";
import { getAllFestivals } from "../services/festivalService";
import { useTheme } from "../context/ThemeContext";

const Stats = () => {

  const { darkMode } = useTheme();

  const [stats, setStats] = useState({
    temples: 0,
    states: 0,
    festivals: 0,
  });


  useEffect(() => {
    fetchStats();
  }, []);


  const fetchStats = async () => {
    try {
      const temples = await getAllTemples();
      const festivals = await getAllFestivals();

      const uniqueStates = new Set(
        temples.map((temple) => temple.state)
      );

      setStats({
        temples: temples.length,
        states: uniqueStates.size,
        festivals: festivals.length,
      });

    } catch (error) {
      console.log(error);
    }
  };


  const cards = [
    {
      icon: <FaLandmark />,
      number: stats.temples,
      title: "Verified Temples",
    },
    {
      icon: <FaMapMarkedAlt />,
      number: stats.states,
      title: "States Covered",
    },
    {
      icon: <FaCalendarAlt />,
      number: stats.festivals,
      title: "Major Festivals",
    },
    {
      icon: <FaUsers />,
      number: "24/7",
      title: "Visitor Information",
    },
  ];


  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gray-50"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once:true }}
              transition={{ delay:index * 0.15 }}
            >

              <div
                className={`rounded-3xl p-8 text-center border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 shadow-xl"
                    : "bg-white border-gray-200 shadow-xl"
                }`}
              >

                <div
                  className={`text-5xl flex justify-center mb-5 ${
                    darkMode
                      ? "text-orange-400"
                      : "text-orange-500"
                  }`}
                >
                  {item.icon}
                </div>


                <h2
                  className={`text-5xl font-bold ${
                    darkMode
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {item.number}
                </h2>


                <p
                  className={`mt-3 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-slate-600"
                  }`}
                >
                  {item.title}
                </p>


              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};


export default Stats;