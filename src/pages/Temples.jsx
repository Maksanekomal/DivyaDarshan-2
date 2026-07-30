
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  getAllTemples,
  deleteTemple,
} from "../services/templeService";
import { motion } from "framer-motion";

import MainLayout from "../layouts/MainLayout";
import TempleCard from "../components/TempleCard";
import TempleFilters from "../components/TempleFilters";
import { useTheme } from "../context/ThemeContext";

const Temples = () => {
  const { darkMode } = useTheme();

  const [templesData, setTemplesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedState, setSelectedState] = useState(
    searchParams.get("state") === "All States"
      ? ""
      : searchParams.get("state") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState("");

  const isLoggedIn = !!localStorage.getItem("adminToken");

  const fetchTemples = async () => {
    try {
      const data = await getAllTemples();
      setTemplesData(data);
    } catch (error) {
      console.error("Error fetching temples:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemples();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this temple?")) {
      try {
        await deleteTemple(id);
        alert("Temple deleted successfully!");
        fetchTemples();
      } catch (error) {
        console.error(error);
        alert("Error deleting temple");
      }
    }
  };

  const filteredTemples = templesData
    .filter((temple) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        (temple.name || "").toLowerCase().includes(searchValue) ||
        (temple.city || "").toLowerCase().includes(searchValue) ||
        (temple.deity || "").toLowerCase().includes(searchValue) ||
        (temple.state || "").toLowerCase().includes(searchValue);

      const matchesState =
        selectedState === "" ||
        (temple.state || "") === selectedState;

      const matchesCategory =
        selectedCategory === "" ||
        (temple.category || "") === selectedCategory;

      return matchesSearch && matchesState && matchesCategory;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  if (loading) {
    return (
      <MainLayout>
        <div
          className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
            darkMode ? "bg-slate-950" : "bg-gray-50"
          }`}
        >
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Loading Temples...
          </h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section
        className={`min-h-screen py-20 transition-all duration-300 ${
          darkMode
            ? "bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827]"
            : "bg-gradient-to-b from-orange-50 via-white to-orange-100"
        }`}
      >
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

            <h1
              className={`text-5xl md:text-6xl font-bold mt-4 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Sacred Temples of India
            </h1>

            <p
              className={`max-w-3xl mx-auto mt-6 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
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

          {/* Count + Add Button */}
          <div className="flex justify-between items-center mb-10">
            <h2
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {filteredTemples.length} Temple
              {filteredTemples.length > 1 ? "s" : ""} Found
            </h2>

            {isLoggedIn && (
              <Link
                to="/admin/add-temple"
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-xl font-semibold transition"
              >
                + Add Temple
              </Link>
            )}
          </div>

          {/* Temple Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTemples.map((temple) => (
              <div key={temple._id} className="relative">
                <TempleCard temple={temple} />

                {isLoggedIn && (
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <Link
                      to={`/admin/edit-temple/${temple._id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-semibold"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(temple._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredTemples.length === 0 && (
            <div className="text-center py-24">
              <h2
                className={`text-3xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                No Temple Found
              </h2>

              <p
                className={`mt-4 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
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