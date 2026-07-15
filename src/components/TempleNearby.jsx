
import { FaMapMarkerAlt } from "react-icons/fa";

const TempleNearby = ({ temple }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      <h2 className="text-4xl font-bold text-white mb-10">
        Nearby Attractions
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {temple.nearbyPlaces.map((place, index) => (

          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-orange-500 transition duration-300"
          >

            <FaMapMarkerAlt className="text-orange-500 text-3xl mb-4" />

            <h3 className="text-xl font-semibold text-white">
              {place}
            </h3>

            <p className="text-gray-400 mt-3">
              Popular attraction located near {temple.name}.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TempleNearby;