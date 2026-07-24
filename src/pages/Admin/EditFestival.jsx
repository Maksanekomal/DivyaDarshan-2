
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getFestivalById,
  updateFestival,
} from "../../services/festivalService";

const EditFestival = () => {
  const { id } = useParams();
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

  useEffect(() => {
    loadFestival();
  }, []);

  const loadFestival = async () => {
    try {
      const data = await getFestivalById(id);
      setFestival(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load festival.");
    }
  };

  const handleChange = (e) => {
    setFestival({
      ...festival,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateFestival(id, festival);

      alert("Festival updated successfully!");

      navigate("/admin/manage-festivals");
    } catch (error) {
      console.error(error);
      alert("Unable to update festival.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] p-8">
      <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-700 rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-white mb-8">
          Edit Festival
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            value={festival.name}
            onChange={handleChange}
            placeholder="Festival Name"
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="month"
            value={festival.month}
            onChange={handleChange}
            placeholder="Month"
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="deity"
            value={festival.deity}
            onChange={handleChange}
            placeholder="Deity"
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="temple"
            value={festival.temple}
            onChange={handleChange}
            placeholder="Temple"
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="state"
            value={festival.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <input
            type="text"
            name="image"
            value={festival.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <textarea
            rows="4"
            name="description"
            value={festival.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <textarea
            rows="4"
            name="significance"
            value={festival.significance}
            onChange={handleChange}
            placeholder="Significance"
            className="w-full bg-slate-800 rounded-xl p-4 text-white"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 py-4 rounded-xl text-white font-bold text-lg"
          >
            Update Festival
          </button>

        </form>

      </div>
    </div>
  );
};

export default EditFestival;