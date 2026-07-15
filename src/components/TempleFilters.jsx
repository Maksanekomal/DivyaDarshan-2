
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
} from "react-icons/hi2";

const TempleFilters = ({
  search,
  setSearch,
  selectedState,
  setSelectedState,
  selectedCategory,
  setSelectedCategory,
  temples,
}) => {

  const states = [...new Set(temples.map((t) => t.state))];

  const categories = [...new Set(temples.map((t) => t.category))];

  const resetFilters = () => {
    setSearch("");
    setSelectedState("");
    setSelectedCategory("");
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-6 mb-12">

      <div className="grid lg:grid-cols-4 gap-5">

        {/* Search */}

        <div className="flex items-center border rounded-xl px-4">

          <HiOutlineMagnifyingGlass className="text-orange-600 text-xl" />

          <input
            type="text"
            placeholder="Search Temple..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 py-4 px-3 outline-none bg-transparent"
          />

        </div>

        {/* State */}

        <div className="flex items-center border rounded-xl px-4">

          <HiOutlineMapPin className="text-orange-600 text-xl" />

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="flex-1 py-4 px-3 outline-none bg-transparent"
          >
            <option value="">All States</option>

            {states.map((state) => (
              <option key={state}>
                {state}
              </option>
            ))}

          </select>

        </div>

        {/* Category */}

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-xl px-4 py-4 outline-none"
        >

          <option value="">All Categories</option>

          {categories.map((category) => (
            <option key={category}>
              {category}
            </option>
          ))}

        </select>

        {/* Reset */}

        <button
          onClick={resetFilters}
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition"
        >
          Reset Filters
        </button>

      </div>

    </div>
  );
};

export default TempleFilters;