
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
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <h2 className="text-white text-2xl font-bold">
            Loading Route...
          </h2>
        </div>
      </MainLayout>
    );
  }

  if (!route) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <h2 className="text-white text-4xl font-bold">
            Route Not Found
          </h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] min-h-screen">

        {/* Hero */}
        <div className="relative h-[70vh]">
          <img
            src={`/routes/${route.image}`}
            alt={route.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/routes/char-dham.jpg";
            }}
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute bottom-14 left-10">
            <span className="bg-orange-600 px-5 py-2 rounded-full text-white">
              Pilgrimage Route
            </span>

            <h1 className="text-6xl font-bold text-white mt-5">
              {route.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">

            <div className="bg-slate-900 rounded-3xl p-8">
              <FaMapMarkedAlt className="text-3xl text-orange-500 mb-5" />

              <h3 className="text-white text-2xl font-semibold">
                Temples Covered
              </h3>

              <p className="text-gray-400 mt-3">
                {route.temples}
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8">
              <FaCalendarAlt className="text-3xl text-orange-500 mb-5" />

              <h3 className="text-white text-2xl font-semibold">
                Duration
              </h3>

              <p className="text-gray-400 mt-3">
                {route.duration}
              </p>
            </div>

          </div>

          {/* About */}
          <div className="space-y-10">

            <div>
              <h2 className="text-4xl text-orange-500 font-bold">
                About This Pilgrimage
              </h2>

              <p className="text-gray-300 leading-8 mt-5">
                {route.description}
              </p>
            </div>

            <div>
              <h2 className="text-4xl text-orange-500 font-bold">
                Pilgrimage Experience
              </h2>

              <p className="text-gray-300 leading-8 mt-5">
                Experience a spiritually enriching journey through sacred
                destinations, witnessing ancient temples, cultural traditions,
                breathtaking landscapes, and centuries of devotion. This
                pilgrimage provides peace, inspiration, and unforgettable
                memories for every devotee.
              </p>
            </div>

          </div>

          <Link
            to="/routes"
            className="inline-flex items-center gap-3 mt-16 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-xl text-white font-semibold"
          >
            <FaArrowLeft />
            Back to Routes
          </Link>

        </div>
      </div>
    </MainLayout>
  );
};

export default RouteDetails;