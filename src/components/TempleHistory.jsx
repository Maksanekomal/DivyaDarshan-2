
import { motion } from "framer-motion";
import {
  FaLandmark,
  FaStar,
  FaUniversity,
} from "react-icons/fa";

const sections = [
  {
    key: "history",
    title: "Temple History",
    icon: <FaLandmark />,
    field: "history",
  },
  {
    key: "significance",
    title: "Religious Significance",
    icon: <FaStar />,
    field: "significance",
  },
  {
    key: "architecture",
    title: "Architecture",
    icon: <FaUniversity />,
    field: "architecture",
  },
];

const TempleHistory = ({ temple }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full font-semibold mb-4">
          Explore the Heritage
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Temple Heritage
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mt-5 leading-8">
          Discover the rich history, spiritual importance, and magnificent
          architecture that make this temple one of India's most sacred
          pilgrimage destinations.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg hover:border-orange-500/50 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              {section.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mt-6">
              {section.title}
            </h3>

            <div className="w-16 h-1 bg-orange-500 rounded-full mt-4 mb-6"></div>

            <p className="text-gray-400 leading-8">
              {temple[section.field] || "Information coming soon."}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TempleHistory;