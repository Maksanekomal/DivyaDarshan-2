
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTemple } from "../../services/templeService";

const AddTemple = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    state: "",
    city: "",
    deity: "",
    category: "",
    image: "",
    shortDescription: "",
    history: "",
    significance: "",
    architecture: "",
    darshanTiming: "",
    bestTimeToVisit: "",
    dressCode: "",
    entryFee: "Free",
    location: "",
    mapLink: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTemple(formData);
      alert("Temple added successfully!");
      navigate("/temples");
    } catch (error) {
      console.error(error);
      alert("Error adding temple");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Add New Temple
        </h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="text-white block mb-2">Temple Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Deity</label>
            <input
              type="text"
              name="deity"
              value={formData.deity}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="/temples/kedarnath.jpg"
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-white block mb-2">Short Description</label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="text-white block mb-2">History</label>
            <textarea
              name="history"
              value={formData.history}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="text-white block mb-2">Significance</label>
            <textarea
              name="significance"
              value={formData.significance}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="text-white block mb-2">Architecture</label>
            <textarea
              name="architecture"
              value={formData.architecture}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            ></textarea>
          </div>

          <div>
            <label className="text-white block mb-2">Darshan Timing</label>
            <input
              type="text"
              name="darshanTiming"
              value={formData.darshanTiming}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Best Time To Visit</label>
            <input
              type="text"
              name="bestTimeToVisit"
              value={formData.bestTimeToVisit}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Dress Code</label>
            <input
              type="text"
              name="dressCode"
              value={formData.dressCode}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Entry Fee</label>
            <input
              type="text"
              name="entryFee"
              value={formData.entryFee}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Google Map Link</label>
            <input
              type="text"
              name="mapLink"
              value={formData.mapLink}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all duration-300"
            >
              Add Temple
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTemple;