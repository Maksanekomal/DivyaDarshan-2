
import {
  FaPlane,
  FaTrain,
  FaBus,
  FaMapMarkedAlt,
} from "react-icons/fa";

const TempleTravel = ({ temple }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      <h2 className="text-4xl font-bold text-white mb-10">
        Travel Information
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

          <FaPlane className="text-4xl text-orange-500 mb-5" />

          <h3 className="text-xl text-white font-semibold">
            By Air
          </h3>

          <p className="text-gray-400 mt-4">
            {temple.howToReach.air}
          </p>

        </div>

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

          <FaTrain className="text-4xl text-orange-500 mb-5" />

          <h3 className="text-xl text-white font-semibold">
            By Rail
          </h3>

          <p className="text-gray-400 mt-4">
            {temple.howToReach.rail}
          </p>

        </div>

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

          <FaBus className="text-4xl text-orange-500 mb-5" />

          <h3 className="text-xl text-white font-semibold">
            By Road
          </h3>

          <p className="text-gray-400 mt-4">
            {temple.howToReach.road}
          </p>

        </div>

        <a
          href={temple.mapLink}
          target="_blank"
          rel="noreferrer"
          className="bg-orange-600 hover:bg-orange-700 rounded-3xl p-6 flex flex-col justify-center items-center transition"
        >

          <FaMapMarkedAlt className="text-5xl text-white mb-5" />

          <h3 className="text-white font-bold text-xl">
            Open in Maps
          </h3>

        </a>

      </div>

    </section>
  );
};

export default TempleTravel;