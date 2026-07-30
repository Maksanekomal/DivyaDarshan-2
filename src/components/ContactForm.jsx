
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

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
      await axios.post("http://localhost:5000/api/contact", formData);

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
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="inline-block px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 font-semibold uppercase tracking-[4px]">
            Send Message
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6">
            Contact Us
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Have a question, suggestion, or feedback? Fill out the
            form below and our team will get back to you as soon as
            possible.
          </p>

        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-2xl p-10"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 px-5 py-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/30"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 px-5 py-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/30"
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full mt-6 rounded-2xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 px-5 py-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/30"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-6 rounded-2xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 px-5 py-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none resize-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/30"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 transition-all duration-300 py-4 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>

      </div>
    </section>
  );
};

export default ContactForm;