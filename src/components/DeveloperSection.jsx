
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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={developerImage}
              alt="Developer"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Project Overview
            </span>

            <h2 className="text-5xl font-bold text-white mt-5">
              Built with Passion & Technology
            </h2>

            <p className="text-gray-400 leading-8 mt-8">
              DivyaDarshan is a modern web application created to preserve and
              promote India's spiritual heritage. The platform brings together
              temple information, pilgrimage routes, festivals, travel guidance,
              and cultural insights in one seamless experience.
            </p>

            <h3 className="text-2xl font-bold text-orange-500 mt-10 mb-6">
              Technologies Used
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4"
                >
                  <div className="text-orange-500 text-2xl">
                    {tech.icon}
                  </div>

                  <span className="text-white">
                    {tech.name}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Future Enhancements
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>✅ AI Temple Assistant</li>
                <li>✅ Online Darshan Booking</li>
                <li>✅ Personalized Pilgrimage Planner</li>
                <li>✅ Multi-language Support</li>
                <li>✅ Live Festival Updates</li>
              </ul>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DeveloperSection;