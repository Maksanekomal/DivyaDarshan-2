
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes, FaMapMarkerAlt } from "react-icons/fa";
import { getAllTemples } from "../services/templeService";

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [temples, setTemples] = useState([]);

  useEffect(() => {
    const fetchTemples = async () => {
      try {
        const data = await getAllTemples();
        setTemples(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (isOpen) {
      fetchTemples();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredTemples = temples.filter((temple) => {
    const search = query.toLowerCase();

    return (
      temple.name.toLowerCase().includes(search) ||
      temple.state.toLowerCase().includes(search) ||
      temple.deity.toLowerCase().includes(search)
    );
  });

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex justify-center items-start pt-24 px-4">
      <div className="w-full max-w-3xl bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">

        <div className="flex items-center border-b border-slate-700 px-6 py-5">
          <FaSearch className="text-orange-500 mr-4" />

          <input
            autoFocus
            type="text"
            placeholder="Search Temple..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
          />

          <button onClick={onClose}>
            <FaTimes className="text-white text-xl hover:text-orange-500" />
          </button>
        </div>

        <div className="max-h-[450px] overflow-y-auto">
          {query === "" ? (
            <div className="text-center py-16 text-gray-400">
              Start typing...
            </div>
          ) : filteredTemples.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              No results found.
            </div>
          ) : (
            filteredTemples.map((temple) => (
              <Link
                key={temple._id}
                to={`/temple/${temple._id}`}
                onClick={onClose}
                className="flex items-center gap-5 p-5 border-b border-slate-800 hover:bg-slate-800 transition"
              >
                <img
                  src={`/temples/${temple.image}`}
                  alt={temple.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {temple.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-gray-400">
                    <FaMapMarkerAlt className="text-orange-500" />
                    {temple.state}
                  </div>

                  <p className="text-orange-500 mt-1">
                    {temple.deity}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;