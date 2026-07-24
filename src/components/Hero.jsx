
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/images/hero.jpg";

// Updated popular temples (using names instead of hardcoded MongoDB IDs)
const popularTemples = [
  "Kedarnath",
  "Somnath",
  "Tirupati",
  "Mahakaleshwar",
  "Kashi Vishwanath",
];

const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All States");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      navigate("/temples");
    } else {
      navigate(
        `/temples?search=${encodeURIComponent(
          searchTerm
        )}&state=${encodeURIComponent(selectedState)}`
      );
    }
  };

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
              <span className="text-orange-400">Temple Heritage</span>
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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-4 outline-none bg-transparent text-gray-700"
                />
              </div>

              {/* State */}
              <div className="flex items-center border rounded-xl px-4">
                <HiOutlineMapPin className="text-orange-600 mr-2" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="py-4 outline-none bg-transparent text-gray-700"
                >
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
                onClick={handleSearch}
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
                    onClick={() =>
                      navigate(`/temple/${encodeURIComponent(temple)}`)
                    }
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
              <button
                onClick={() => navigate("/temples")}
                className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition duration-300 shadow-xl"
              >
                Explore Temples
              </button>

              <button
                onClick={() => navigate("/routes")}
                className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300"
              >
                View Pilgrimage Routes
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;