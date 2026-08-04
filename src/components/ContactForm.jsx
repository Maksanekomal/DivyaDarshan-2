
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ContactForm = () => {
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove old message when user starts typing again
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      await axios.post(
  `${import.meta.env.VITE_API_URL}/api/contact`,
  formData
);

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully! We will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span
            className={`inline-block px-5 py-2 rounded-full font-semibold uppercase tracking-[4px] ${
              darkMode
                ? "bg-orange-900/40 text-orange-300"
                : "bg-orange-100 text-orange-600"
            }`}
          >
            Send Message
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Us
          </h2>

          <p
            className={`mt-6 text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
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
          className={`rounded-3xl border shadow-2xl p-10 ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-gray-200"
          }`}
        >

          {/* Success Message */}
          {status.type === "success" && (
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-green-100 border border-green-200 text-green-700 px-5 py-4">
              <FaCheckCircle className="text-xl" />

              <span className="font-medium">
                {status.message}
              </span>
            </div>
          )}

          {/* Error Message */}
          {status.type === "error" && (
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-red-100 border border-red-200 text-red-700 px-5 py-4">
              <FaExclamationCircle className="text-xl" />

              <span className="font-medium">
                {status.message}
              </span>
            </div>
          )}

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full rounded-2xl border px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 ${
                darkMode
                  ? "border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:ring-orange-900/30"
                  : "border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500"
              }`}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full rounded-2xl border px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 ${
                darkMode
                  ? "border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:ring-orange-900/30"
                  : "border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500"
              }`}
            />

          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`w-full mt-6 rounded-2xl border px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 ${
              darkMode
                ? "border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:ring-orange-900/30"
                : "border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500"
            }`}
          />

          {/* Message */}
          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className={`w-full mt-6 rounded-2xl border px-5 py-4 outline-none resize-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 ${
              darkMode
                ? "border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:ring-orange-900/30"
                : "border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500"
            }`}
          />

          {/* Submit */}
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