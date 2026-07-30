
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
    <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 font-semibold uppercase tracking-[4px]">
            Platform Statistics
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6">
            Explore India's Spiritual Heritage
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            DivyaDarshan provides authentic information about India's sacred
            temples, festivals, pilgrimage routes, and spiritual destinations,
            helping devotees plan meaningful journeys with confidence.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-3xl shadow-lg hover:shadow-2xl hover:border-orange-300 dark:hover:border-orange-500 p-8 text-center transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-orange-100 dark:bg-orange-900/30 group-hover:bg-orange-600 flex items-center justify-center text-4xl text-orange-600 dark:text-orange-400 group-hover:text-white transition-all duration-300 mb-6">
                {item.icon}
              </div>

              <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                {item.number}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg font-medium">
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