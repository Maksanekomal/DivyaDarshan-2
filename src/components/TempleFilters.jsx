
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
  // Get unique states and remove empty/undefined values
  const states = [
    ...new Set(
      temples
        .map((t) => t.state)
        .filter((state) => state && state.trim() !== "")
    ),
  ];

  // Get unique categories and remove empty/undefined values
  const categories = [
    ...new Set(
      temples
        .map((t) => t.category)
        .filter((category) => category && category.trim() !== "")
    ),
  ];

  const resetFilters = () => {
    setSearch("");
    setSelectedState("");
    setSelectedCategory("");
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Search */}
        <div className="flex items-center border border-gray-300 rounded-xl px-4 bg-white">
          <HiOutlineMagnifyingGlass className="text-orange-600 text-xl" />

          <input
            type="text"
            placeholder="Search temple, city, deity or state..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 py-4 px-3 outline-none bg-transparent text-gray-700"
          />
        </div>

        {/* State */}
        <div className="flex items-center border border-gray-300 rounded-xl px-4 bg-white">
          <HiOutlineMapPin className="text-orange-600 text-xl mr-2" />

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full py-4 outline-none bg-white text-gray-700"
          >
            <option value="">All States</option>

            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div className="flex items-center border border-gray-300 rounded-xl px-4 bg-white">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full py-4 outline-none bg-white text-gray-700"
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Reset */}
        <button
          onClick={resetFilters}
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold px-6 py-4 transition-all duration-300"
        >
          Reset Filters
        </button>

      </div>
    </div>
  );
};

export default TempleFilters;