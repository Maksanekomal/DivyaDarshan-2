
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong."
      );
    }

    setLoading(false);
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Send Message
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Contact Us
          </h2>

          <p className="text-gray-400 mt-6">
            Have a question or suggestion? Fill out the form below and we'll
            get back to you.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full mt-6 bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-6 bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 transition py-4 rounded-xl text-white font-semibold text-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>

      </div>
    </section>
  );
};

export default ContactForm;