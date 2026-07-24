
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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Why Choose DivyaDarshan?
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Everything you need to explore India's rich spiritual heritage in one
            modern and easy-to-use platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl hover:border-orange-500 transition-all duration-300 cursor-pointer h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white text-3xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl text-white font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {feature.description}
                </p>
              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;