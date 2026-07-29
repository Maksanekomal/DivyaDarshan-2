
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FestivalCard from "../components/FestivalCard";
import { getAllFestivals } from "../services/festivalService";
import { useTheme } from "../context/ThemeContext";

const Festivals = () => {
  const { darkMode } = useTheme();

  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const data = await getAllFestivals();
        setFestivals(data);
      } catch (error) {
        console.error("Error fetching festivals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFestivals();
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <div
          className={`min-h-screen flex items-center justify-center ${
            darkMode ? "bg-slate-950" : "bg-gray-50"
          }`}
        >
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Loading Festivals...
          </h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section
        className={`min-h-screen py-24 transition-colors duration-300 ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-orange-50 via-white to-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Spiritual Celebrations
            </span>

            <h1
              className={`mt-5 text-5xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Temple Festivals
            </h1>

            <p
              className={`mt-6 max-w-3xl mx-auto text-lg ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Discover India's grand temple festivals, sacred traditions,
              devotional celebrations, and cultural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {festivals.map((festival, index) => (
              <FestivalCard
                key={festival._id}
                festival={festival}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Festivals;