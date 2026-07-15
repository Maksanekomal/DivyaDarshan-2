
import { useState } from "react";
import { motion } from "framer-motion";

import MainLayout from "../layouts/MainLayout";
import TempleCard from "../components/TempleCard";
import TempleFilters from "../components/TempleFilters";
import templesData from "../data/temples";

const Temples = () => {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredTemples = templesData.filter((temple) => {
    const matchesSearch =
      temple.name.toLowerCase().includes(search.toLowerCase()) ||
      temple.city.toLowerCase().includes(search.toLowerCase()) ||
      temple.deity.toLowerCase().includes(search.toLowerCase());

    const matchesState =
      selectedState === "" || temple.state === selectedState;

    const matchesCategory =
      selectedCategory === "" ||
      temple.category === selectedCategory;

    return matchesSearch && matchesState && matchesCategory;
  });

  return (
    <MainLayout>
      <section className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >

            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Explore
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
              Sacred Temples of India
            </h1>

            <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg">
              Discover India's most revered temples, rich history,
              divine traditions, pilgrimage routes and timeless
              spiritual heritage.
            </p>

          </motion.div>

          {/* Filters */}

          <TempleFilters
            search={search}
            setSearch={setSearch}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            temples={templesData}
          />

          {/* Temple Count */}

          <div className="flex justify-between items-center mb-10">

            <h2 className="text-white text-xl font-semibold">
              {filteredTemples.length} Temple
              {filteredTemples.length > 1 ? "s" : ""} Found
            </h2>

          </div>

          {/* Temple Grid */}

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {filteredTemples.map((temple) => (
              <TempleCard
                key={temple.id}
                temple={temple}
              />
            ))}

          </motion.div>

          {/* Empty State */}

          {filteredTemples.length === 0 && (

            <div className="text-center py-24">

              <h2 className="text-3xl text-white font-bold">
                No Temple Found
              </h2>

              <p className="text-gray-400 mt-4">
                Try changing your search or filters.
              </p>

            </div>

          )}

        </div>

      </section>
    </MainLayout>
  );
};

export default Temples;