
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaPlaceOfWorship,
  FaArrowLeft,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";
import { getFestivalById } from "../services/festivalService";

const FestivalDetails = () => {
  const { id } = useParams();

  const [festival, setFestival] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFestival = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getFestivalById(id);

        setFestival(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load festival.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchFestival();
    }
  }, [id]);


  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 transition-colors">
          <h2 className="text-gray-900 dark:text-white text-2xl font-bold">
            Loading Festival...
          </h2>
        </div>
      </MainLayout>
    );
  }


  if (error) {
    return (
      <MainLayout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-950 gap-6 transition-colors">

          <h1 className="text-4xl font-bold text-red-500">
            {error}
          </h1>

          <Link
            to="/festivals"
            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-xl text-white"
          >
            Back to Festivals
          </Link>

        </div>
      </MainLayout>
    );
  }


  if (!festival) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 transition-colors">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Festival Not Found
          </h1>
        </div>
      </MainLayout>
    );
  }


  return (
    <MainLayout>

      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors">

        {/* Hero */}
        <div className="relative h-[70vh]">

          <img
            src={`/festivals/${festival.image}`}
            alt={festival.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/festivals/default.jpg";
            }}
          />

          <div className="absolute inset-0 bg-black/60"></div>


          <div className="absolute bottom-14 left-10">

            <span className="bg-orange-600 px-5 py-2 rounded-full text-white">
              {festival.month}
            </span>


            <h1 className="text-5xl md:text-6xl font-bold text-white mt-5">
              {festival.name}
            </h1>

          </div>

        </div>



        <div className="max-w-7xl mx-auto px-6 py-16">


          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">


            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg transition-colors">

              <FaCalendarAlt className="text-3xl text-orange-500 mb-5"/>

              <h3 className="text-gray-900 dark:text-white text-2xl font-semibold">
                Month
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-3">
                {festival.month}
              </p>

            </div>



            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg transition-colors">

              <FaPlaceOfWorship className="text-3xl text-orange-500 mb-5"/>

              <h3 className="text-gray-900 dark:text-white text-2xl font-semibold">
                Main Temples
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-3">
                {festival.temple}
              </p>

            </div>


          </div>




          {/* Content */}
          <div className="space-y-10">


            <div>

              <h2 className="text-4xl text-orange-500 font-bold">
                About Festival
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-8 mt-5">
                {festival.description}
              </p>

            </div>




            <div>

              <h2 className="text-4xl text-orange-500 font-bold">
                Religious Significance
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-8 mt-5">
                {festival.significance}
              </p>

            </div>


          </div>




          <Link
            to="/festivals"
            className="inline-flex items-center gap-3 mt-16 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-xl text-white font-semibold"
          >
            <FaArrowLeft/>
            Back to Festivals
          </Link>


        </div>

      </div>


    </MainLayout>
  );
};

export default FestivalDetails;