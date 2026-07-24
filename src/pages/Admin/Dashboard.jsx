
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllTemples,
  deleteTemple,
} from "../../services/templeService";

const Dashboard = () => {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTemples = async () => {
    try {
      const data = await getAllTemples();
      setTemples(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemples();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this temple?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTemple(id);

      alert("Temple deleted successfully.");

      fetchTemples();
    } catch (error) {
      console.error(error);
      alert("Unable to delete temple.");
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

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">

          <div>
            <h1 className="text-5xl font-bold text-white">
              Admin Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Manage DivyaDarshan Application
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">

            <Link
              to="/admin/add-temple"
              className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-xl text-white font-semibold transition"
            >
              + Add Temple
            </Link>

            <Link
              to="/admin/messages"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold transition"
            >
              View Messages
            </Link>

            <Link
  to="/admin/manage-festivals"
  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold transition"
>
  Manage Festivals
</Link>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg">

            <h2 className="text-gray-400">
              Total Temples
            </h2>

            <h1 className="text-5xl font-bold text-orange-500 mt-2">
              {temples.length}
            </h1>

          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg">

            <h2 className="text-gray-400">
              States Covered
            </h2>

            <h1 className="text-5xl font-bold text-orange-500 mt-2">
              {new Set(temples.map((t) => t.state)).size}
            </h1>

          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg">

            <h2 className="text-gray-400">
              Categories
            </h2>

            <h1 className="text-5xl font-bold text-orange-500 mt-2">
              {new Set(temples.map((t) => t.category)).size}
            </h1>

          </div>

        </div>

        {/* Temple Table */}

        <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-lg">

          <div className="px-6 py-5 border-b border-slate-700">

            <h2 className="text-2xl font-bold text-white">
              Temple Management
            </h2>

            <p className="text-gray-400 mt-1">
              Edit or delete temples from the database.
            </p>

          </div>

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="text-left px-6 py-4 text-gray-300">
                  Temple
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  State
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  Category
                </th>

                <th className="text-center px-6 py-4 text-gray-300">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {temples.length === 0 ? (

                <tr>

                  <td
                    colSpan="4"
                    className="text-center py-10 text-gray-400"
                  >
                    No temples found.
                  </td>

                </tr>

              ) : (

                temples.map((temple) => (

                  <tr
                    key={temple._id}
                    className="border-t border-slate-700 hover:bg-slate-800 transition"
                  >

                    <td className="px-6 py-5 text-white font-medium">
                      {temple.name}
                    </td>

                    <td className="px-6 py-5 text-gray-300">
                      {temple.state}
                    </td>

                    <td className="px-6 py-5 text-gray-300">
                      {temple.category}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex justify-center gap-3">

                        <Link
                          to={`/admin/edit-temple/${temple._id}`}
                          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(temple._id)}
                          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition"
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

export default Dashboard;