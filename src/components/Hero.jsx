
import { motion } from "framer-motion";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/images/hero.jpg";

const popularTemples = [
  "Kedarnath",
  "Somnath",
  "Tirupati",
  "Mahakaleshwar",
  "Kashi Vishwanath",
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">

      {/* Background Image */}

      <motion.img
        src={heroImage}
        alt="DivyaDarshan"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/40"></div>

      {/* Decorative Glow */}

      <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 blur-[150px] rounded-full"></div>

      {/* Hero Content */}

      <div className="relative z-10 flex items-center min-h-[92vh]">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-4xl">

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[6px] text-orange-400 font-semibold"
            >
              Incredible India • Sacred Heritage
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-white text-5xl md:text-7xl font-black leading-tight"
            >
              Discover India's
              <br />

              <span className="text-orange-400">
                Temple Heritage
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-gray-300 text-lg md:text-xl leading-9 max-w-3xl"
            >
              Explore India's sacred temples, festivals, pilgrimage
              routes, darshan timings, rituals, architecture,
              history and visitor guidelines from one trusted platform.
            </motion.p>

            {/* Search Box */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 backdrop-blur-xl bg-white/95 rounded-2xl p-3 flex flex-col lg:flex-row gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >

              {/* Search */}

              <div className="flex items-center flex-1 px-4">

                <HiOutlineMagnifyingGlass className="text-2xl text-orange-600" />

                <input
                  type="text"
                  placeholder="Search Temple, City or Deity..."
                  className="flex-1 px-4 py-4 outline-none bg-transparent text-gray-700"
                />

              </div>

              {/* State */}

              <div className="flex items-center border rounded-xl px-4">

                <HiOutlineMapPin className="text-orange-600 mr-2" />

                <select className="py-4 outline-none bg-transparent text-gray-700">

                  <option>All States</option>
                  <option>Maharashtra</option>
                  <option>Uttarakhand</option>
                  <option>Tamil Nadu</option>
                  <option>Gujarat</option>
                  <option>Uttar Pradesh</option>

                </select>

              </div>

              {/* Search Button */}

              <button
                className="bg-orange-600 hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all duration-300 text-white px-10 rounded-xl font-semibold flex items-center justify-center gap-3"
              >
                Search

                <FaArrowRight />

              </button>

            </motion.div>

            {/* Popular Searches */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >

              <p className="text-gray-300 mb-4 font-medium">

                Popular Searches

              </p>

              <div className="flex flex-wrap gap-4">

                {popularTemples.map((temple) => (

                  <button
                    key={temple}
                    className="px-5 py-2 rounded-full border border-orange-500 text-orange-300 hover:bg-orange-600 hover:text-white transition duration-300"
                  >
                    {temple}
                  </button>

                ))}

              </div>

            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-5 mt-10"
            >

              <button className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition duration-300 shadow-xl">

                Explore Temples

              </button>

              <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300">

                View Pilgrimage Routes

              </button>

            </motion.div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="w-7 h-12 border-2 border-white rounded-full flex justify-center"
        >

          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;