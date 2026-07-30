
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPlaceOfWorship,
  FaRoute,
  FaCalendarAlt,
  FaSearch,
  FaMapMarkedAlt,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPlaceOfWorship />,
    title: "Comprehensive Temple Information",
    description:
      "Explore detailed information about India's famous temples, including history, architecture, timings, rituals, and travel guidance.",
    link: "/temples",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Festival Calendar",
    description:
      "Stay updated with important temple festivals, celebrations, and religious events celebrated across India.",
    link: "/festivals",
  },
  {
    icon: <FaRoute />,
    title: "Pilgrimage Routes",
    description:
      "Discover popular pilgrimage circuits with route details, travel information, and suggested itineraries.",
    link: "/routes",
  },
  {
    icon: <FaSearch />,
    title: "Smart Search",
    description:
      "Quickly search temples by name, state, deity, or pilgrimage route for a seamless experience.",
    link: "/temples",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Easy Navigation",
    description:
      "Access Google Maps locations and nearby attractions to plan your spiritual journey effortlessly.",
    link: "/routes",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Experience",
    description:
      "Enjoy a smooth and optimized browsing experience across desktop, tablet, and mobile devices.",
    link: "/contact",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 font-semibold uppercase tracking-[4px]">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6">
            Why Choose DivyaDarshan?
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Everything you need to explore India's rich spiritual heritage
            through one modern, informative, and easy-to-use platform.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-3xl shadow-lg hover:shadow-2xl hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 p-8 h-full"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 group-hover:bg-orange-600 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:text-white text-3xl transition-all duration-300 mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 mb-4 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-8">
                  {feature.description}
                </p>

                <div className="mt-6 text-orange-600 dark:text-orange-400 font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                  Learn More →
                </div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;