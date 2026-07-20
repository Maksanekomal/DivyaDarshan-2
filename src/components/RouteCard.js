
import { Link } from "react-router-dom";

function RouteCard({ route }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={route.image}
        alt={route.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold mb-2 text-black">
          {route.title}
        </h3>

        <p className="text-gray-600 mb-4">
          {route.description}
        </p>

        <Link
          to={`/route/${route.id}`}
          className="inline-block bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Explore Route
        </Link>
      </div>
    </div>
  );
}

export default RouteCard;