
import { useParams, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import festivals from "../data/festivals";
import { FaCalendarAlt, FaPlaceOfWorship, FaArrowLeft } from "react-icons/fa";

const FestivalDetails = () => {
  const { id } = useParams();

  const festival = festivals.find((item) => item.id === Number(id));

  if (!festival) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">
            Festival Not Found
          </h1>
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
            src={festival.image}
            alt={festival.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute bottom-14 left-10">

            <span className="bg-orange-600 px-5 py-2 rounded-full text-white">
              {festival.month}
            </span>

            <h1 className="text-6xl font-bold text-white mt-5">
              {festival.name}
            </h1>

          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-2 gap-8 mb-14">

            <div className="bg-slate-900 rounded-3xl p-8">

              <FaCalendarAlt className="text-3xl text-orange-500 mb-5" />

              <h3 className="text-white text-2xl font-semibold">
                Month
              </h3>

              <p className="text-gray-400 mt-3">
                {festival.month}
              </p>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8">

              <FaPlaceOfWorship className="text-3xl text-orange-500 mb-5" />

              <h3 className="text-white text-2xl font-semibold">
                Main Temples
              </h3>

              <p className="text-gray-400 mt-3">
                {festival.temple}
              </p>

            </div>

          </div>

          <div className="space-y-10">

            <div>

              <h2 className="text-4xl text-orange-500 font-bold">
                About Festival
              </h2>

              <p className="text-gray-300 leading-8 mt-5">
                {festival.description}
              </p>

            </div>

            <div>

              <h2 className="text-4xl text-orange-500 font-bold">
                Religious Significance
              </h2>

              <p className="text-gray-300 leading-8 mt-5">
                {festival.significance}
              </p>

            </div>

          </div>

          <Link
            to="/festivals"
            className="inline-flex items-center gap-3 mt-16 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-xl text-white font-semibold"
          >
            <FaArrowLeft />
            Back to Festivals
          </Link>

        </div>

      </div>
    </MainLayout>
  );
};

export default FestivalDetails;