
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaArrowLeft,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";
import { getAllRoutes } from "../services/routeService";

const RouteDetails = () => {
  const { id } = useParams();

  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const data = await getAllRoutes();
        const selectedRoute = data.find((r) => r._id === id);
        setRoute(selectedRoute);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoute();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
            Loading Route...
          </h2>
        </div>
      </MainLayout>
    );
  }

  if (!route) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
          <h2 className="text-4xl font-bold text-red-500">
            Route Not Found
          </h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">

        {/* Hero */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={`/routes/${route.image}`}
            alt={route.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/routes/char-dham.jpg";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-12 left-8 md:left-16">

            <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full border border-white/30">
              Pilgrimage Route
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mt-5">
              {route.title}
            </h1>

          </div>
        </section>


        <div className="max-w-7xl mx-auto px-5 py-14">

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-slate-800 hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center mb-5">
                <FaMapMarkedAlt className="text-orange-600 dark:text-orange-400 text-3xl" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Temples Covered
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                {route.temples}
              </p>

            </div>


            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-slate-800 hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center mb-5">
                <FaCalendarAlt className="text-orange-600 dark:text-orange-400 text-3xl" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Duration
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                {route.duration}
              </p>

            </div>

          </div>


          {/* About */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-800 p-10 mb-10">

            <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-5">
              About This Pilgrimage
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-8">
              {route.description}
            </p>

          </div>


          {/* Experience */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-800 p-10">

            <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-5">
              Pilgrimage Experience
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-8">
              Experience a spiritually enriching journey through sacred
              destinations, witnessing ancient temples, cultural traditions,
              breathtaking landscapes, and centuries of devotion. Every route
              offers divine blessings, peaceful surroundings, scenic mountain
              views, vibrant festivals, local culture, and unforgettable
              memories that inspire faith and inner peace.
            </p>

          </div>


          {/* Back Button */}
          <div className="mt-14">

            <Link
              to="/routes"
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              <FaArrowLeft />
              Back to Routes
            </Link>

          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default RouteDetails;