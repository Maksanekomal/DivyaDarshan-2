
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

const Stats = () => {
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
      console.error("Failed to load stats:", error);
    }
  };

  const cards = [
    {
      icon: <FaLandmark />,
      number: stats.temples,
      title: "Verified Temples",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaMapMarkedAlt />,
      number: stats.states,
      title: "States Covered",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaCalendarAlt />,
      number: stats.festivals,
      title: "Major Festivals",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaUsers />,
      number: "24/7",
      title: "Visitor Information",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            DivyaDarshan at a Glance
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Your trusted platform for discovering India's sacred temples,
            pilgrimage routes, festivals, and cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20`}
              />

              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

                <div className="text-5xl text-orange-400 flex justify-center mb-5">
                  {item.icon}
                </div>

                <h2 className="text-5xl font-bold text-white">
                  {item.number}
                </h2>

                <p className="text-gray-400 mt-3">
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