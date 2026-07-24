
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllFestivals,
  deleteFestival,
} from "../../services/festivalService";

const ManageFestivals = () => {
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFestivals = async () => {
    try {
      const data = await getAllFestivals();
      setFestivals(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFestivals();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this festival?"
    );

    if (!confirmDelete) return;

    try {
      await deleteFestival(id);

      alert("Festival deleted successfully.");

      fetchFestivals();
    } catch (error) {
      console.error(error);
      alert("Unable to delete festival.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">

          <div>
            <h1 className="text-5xl font-bold text-white">
              Festival Management
            </h1>

            <p className="text-gray-400 mt-2">
              Manage all festivals
            </p>
          </div>

          <Link
            to="/admin/add-festival"
            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-xl text-white font-semibold transition"
          >
            + Add Festival
          </Link>

        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 mb-8">

          <h2 className="text-gray-400">
            Total Festivals
          </h2>

          <h1 className="text-5xl font-bold text-orange-500 mt-2">
            {festivals.length}
          </h1>

        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="text-left px-6 py-4 text-gray-300">
                  Festival
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  Temple
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  State
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  Month
                </th>

                <th className="text-center px-6 py-4 text-gray-300">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {festivals.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-400"
                  >
                    No festivals found.
                  </td>

                </tr>

              ) : (

                festivals.map((festival) => (

                  <tr
                    key={festival._id}
                    className="border-t border-slate-700 hover:bg-slate-800"
                  >

                    <td className="px-6 py-5 text-white">
                      {festival.name}
                    </td>

                    <td className="px-6 py-5 text-gray-300">
                      {festival.temple}
                    </td>

                    <td className="px-6 py-5 text-gray-300">
                      {festival.state}
                    </td>

                    <td className="px-6 py-5 text-gray-300">
                      {festival.month}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex justify-center gap-3">

                        <Link
                          to={`/admin/edit-festival/${festival._id}`}
                          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(festival._id)
                          }
                          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ManageFestivals;