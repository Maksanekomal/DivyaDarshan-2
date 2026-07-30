
import { motion } from "framer-motion";
import developerImage from "../assets/about/developer.jpg";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const technologies = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaGitAlt />, name: "Git & GitHub" },
];

const DeveloperSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={developerImage}
              alt="Developer"
              className="w-full rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
            />

            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 px-6 py-4">
              <h4 className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                MERN
              </h4>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Full Stack Project
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 uppercase tracking-[4px] font-semibold">
              Project Overview
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 leading-tight">
              Built with Passion & Technology
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-8 text-lg">
              DivyaDarshan is a modern web application designed to preserve and
              promote India's spiritual heritage. It brings together temple
              information, pilgrimage routes, festivals, travel guidance, and
              cultural insights into one intuitive platform for devotees and
              travelers.
            </p>

            {/* Technologies */}
            <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-12 mb-6">
              Technologies Used
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 text-2xl">
                    {tech.icon}
                  </div>

                  <span className="font-semibold text-gray-800 dark:text-white">
                    {tech.name}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* Future Plans */}
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-800 border border-orange-200 dark:border-slate-700 rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-6">
                Future Enhancements
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">

                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  AI Temple Assistant
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  Online Darshan Booking
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  Personalized Pilgrimage Planner
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  Multi-language Support
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  Live Festival Updates
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  Offline Travel Guide
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DeveloperSection;