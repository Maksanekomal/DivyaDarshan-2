
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All States");

  const handleSearch = () => {
    navigate(
      `/temples?search=${encodeURIComponent(
        searchTerm
      )}&state=${encodeURIComponent(selectedState)}`
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={heroImage}
        alt="Hero"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/45" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-28 lg:pt-36">
        <div className="max-w-7xl mx-auto w-full px-6">

          <div className="max-w-4xl">

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[6px] text-orange-400 font-semibold"
            >
              Incredible India • Sacred Heritage
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-white text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1]"
            >
              Discover India's
              <br />
              <span className="text-orange-500">
                Temple Heritage
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-gray-300"
            >
              Explore India's sacred temples, festivals,
              pilgrimage routes, darshan timings, rituals,
              architecture, history and visitor guidelines
              from one trusted platform.
            </motion.p>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 max-w-5xl bg-white/95 backdrop-blur-xl rounded-2xl p-3 shadow-2xl flex flex-col lg:flex-row gap-3"
            >
              {/* Search */}
              <div className="flex flex-1 items-center px-4">
                <HiOutlineMagnifyingGlass className="text-2xl text-orange-500" />

                <input
                  type="text"
                  placeholder="Search Temple, City or Deity..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent outline-none px-4 py-4 text-gray-700"
                />
              </div>

              {/* State */}
              <div className="flex items-center rounded-xl border px-4">
                <HiOutlineMapPin className="mr-2 text-orange-500" />

                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="bg-transparent py-4 outline-none text-gray-700"
                >
                  <option>All States</option>
                  <option>Maharashtra</option>
                  <option>Uttarakhand</option>
                  <option>Tamil Nadu</option>
                  <option>Gujarat</option>
                  <option>Uttar Pradesh</option>
                </select>
              </div>

              {/* Button */}
              <button
                onClick={handleSearch}
                className="rounded-xl bg-orange-600 px-10 text-white font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-3"
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
              className="mt-10"
            >
              <p className="mb-4 text-gray-300 font-medium">
                Popular Searches
              </p>

              <div className="flex flex-wrap gap-4">
                {popularTemples.map((temple) => (
                  <button
                    key={temple}
                    onClick={() =>
                      navigate(
                        `/temples?search=${encodeURIComponent(temple)}`
                      )
                    }
                    className="rounded-full border border-orange-500 px-5 py-2 text-orange-300 transition hover:bg-orange-600 hover:text-white"
                  >
                    {temple}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => navigate("/temples")}
                className="rounded-xl bg-orange-600 px-8 py-4 text-white font-semibold shadow-xl transition hover:scale-105 hover:bg-orange-700"
              >
                Explore Temples
              </button>

              <button
                onClick={() => navigate("/routes")}
                className="rounded-xl border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black"
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