
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createFestival } from "../../services/festivalService";

const AddFestival = () => {
  const navigate = useNavigate();

  const [festival, setFestival] = useState({
    name: "",
    month: "",
    deity: "",
    temple: "",
    state: "",
    image: "",
    description: "",
    significance: "",
  });

  const handleChange = (e) => {
    setFestival({
      ...festival,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createFestival(festival);

      alert("Festival added successfully!");

      navigate("/admin/manage-festivals");
    } catch (error) {
      console.error(error);
      alert("Failed to add festival.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] p-8">

      <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-700 rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-white mb-8">
          Add Festival
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Festival Name"
            value={festival.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="month"
            placeholder="Month"
            value={festival.month}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="deity"
            placeholder="Deity"
            value={festival.deity}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="temple"
            placeholder="Temple"
            value={festival.temple}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={festival.state}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={festival.image}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <textarea
            rows="4"
            name="description"
            placeholder="Description"
            value={festival.description}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <textarea
            rows="4"
            name="significance"
            placeholder="Significance"
            value={festival.significance}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 py-4 rounded-xl text-white font-bold text-lg"
          >
            Add Festival
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddFestival;