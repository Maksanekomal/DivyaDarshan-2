
import { motion } from "framer-motion";
import {
  FaPlaceOfWorship,
  FaCalendarAlt,
  FaRoute,
  FaMapMarkedAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaPlaceOfWorship />,
    number: "1000+",
    title: "Temples",
  },
  {
    icon: <FaCalendarAlt />,
    number: "100+",
    title: "Festivals",
  },
  {
    icon: <FaRoute />,
    number: "50+",
    title: "Pilgrimage Routes",
  },
  {
    icon: <FaMapMarkedAlt />,
    number: "28",
    title: "States Covered",
  },
];

const ProjectStats = () => {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Platform Statistics
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Explore India's Spiritual Heritage
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            DivyaDarshan aims to provide authentic information about India's
            sacred destinations, helping devotees and travelers plan meaningful
            spiritual journeys.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center shadow-xl"
            >
              <div className="text-5xl text-orange-500 mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-3 text-lg">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProjectStats;