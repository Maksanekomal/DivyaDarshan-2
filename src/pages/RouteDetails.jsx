
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaMapMarkedAlt, FaCalendarAlt } from "react-icons/fa";
import { getAllRoutes } from "../services/routeService";

const RouteDetails = () => {
  const { id } = useParams();
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const data = await getAllRoutes();
        const selectedRoute = data.find((r) => r._id === id);
        setRoute(selectedRoute);
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    fetchRoute();
  }, [id]);

  if (!route) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center text-white">
        <p className="text-xl">Loading route details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[70vh]">
        <img
          src={`/routes/${route.image}`}
          alt={route.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/routes/char-dham.jpg";
          }}
        />

        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {route.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              {route.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#111827] p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 text-orange-400 mb-2">
              <FaMapMarkedAlt className="text-2xl" />
              <h3 className="text-xl font-semibold">Temples Covered</h3>
            </div>
            <p className="text-gray-300">{route.temples}</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 text-orange-400 mb-2">
              <FaCalendarAlt className="text-2xl" />
              <h3 className="text-xl font-semibold">Duration</h3>
            </div>
            <p className="text-gray-300">{route.duration}</p>
          </div>
        </div>

        <div className="bg-[#111827] p-8 rounded-2xl border border-slate-700 mb-10">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">
            About This Pilgrimage
          </h2>
          <p className="text-gray-300 leading-8 text-lg">
            {route.description}
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-2xl border border-slate-700">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">
            Pilgrimage Experience
          </h2>
          <p className="text-gray-300 leading-8 text-lg">
            This sacred pilgrimage offers devotees a deeply spiritual journey
            through some of India's most revered religious sites. The route
            combines devotion, culture, history, and breathtaking landscapes,
            making it a once-in-a-lifetime experience for pilgrims.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;