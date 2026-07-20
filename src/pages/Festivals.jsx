
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FestivalCard from "../components/FestivalCard";
import { getAllFestivals } from "../services/festivalService";

const Festivals = () => {
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
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <h2 className="text-white text-2xl font-bold">
            Loading Festivals...
          </h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Spiritual Celebrations
            </span>

            <h1 className="text-5xl font-bold text-white mt-5">
              Temple Festivals
            </h1>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
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