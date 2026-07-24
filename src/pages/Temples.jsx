
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

const Temples = () => {
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

  // Check if admin is logged in
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

  // Delete temple
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this temple?")) {
      try {
        await deleteTemple(id);
        alert("Temple deleted successfully!");
        fetchTemples(); // refresh list
      } catch (error) {
        console.error(error);
        alert("Error deleting temple");
      }
    }
  };

  // Filter temples
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
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <h2 className="text-white text-2xl font-bold">
            Loading Temples...
          </h2>
        </div>
      </MainLayout>
    );
  }

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

          {/* Count + Add Button */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-white text-xl font-semibold">
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

                {/* Temple Card */}
                <TempleCard temple={temple} />

                {/* Admin Actions */}
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