
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`mt-20 transition-all duration-500 ${
        darkMode
          ? "bg-slate-950 border-t border-slate-800"
          : "bg-white border-t border-slate-200 shadow-inner"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center text-3xl text-white shadow-lg">
                🛕
              </div>

              <div>
                <h2
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  DivyaDarshan
                </h2>

                <p
                  className={`text-sm mt-1 ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  Temple Heritage Portal
                </p>
              </div>

            </div>

            <p
              className={`mt-6 leading-8 ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              Discover India's timeless spiritual heritage through sacred
              temples, festivals, pilgrimage routes, and rich cultural
              traditions.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3
              className={`text-xl font-semibold mb-6 ${
                darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              Quick Links
            </h3>

            <div className="space-y-4">

              {[
                ["Home", "/"],
                ["Temples", "/temples"],
                ["Festivals", "/festivals"],
                ["Pilgrimage Routes", "/routes"],
              ].map(([title, link]) => (
                <Link
                  key={title}
                  to={link}
                  className={`block transition duration-300 hover:text-orange-500 hover:translate-x-1 ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-600"
                  }`}
                >
                  {title}
                </Link>
              ))}

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3
              className={`text-xl font-semibold mb-6 ${
                darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              Resources
            </h3>

            <div className="space-y-4">

              {[
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([title, link]) => (
                <Link
                  key={title}
                  to={link}
                  className={`block transition duration-300 hover:text-orange-500 hover:translate-x-1 ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-600"
                  }`}
                >
                  {title}
                </Link>
              ))}

              <a
                href="#"
                className={`block transition duration-300 hover:text-orange-500 hover:translate-x-1 ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className={`block transition duration-300 hover:text-orange-500 hover:translate-x-1 ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                Terms & Conditions
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3
              className={`text-xl font-semibold mb-6 ${
                darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              Follow Us
            </h3>

            <p
              className={`mb-6 ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              Stay connected for temple updates, festivals, and spiritual
              journeys.
            </p>

            <div className="flex gap-4">

              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "bg-slate-900 border border-slate-700 hover:bg-orange-600 hover:border-orange-600 text-white"
                        : "bg-slate-100 border border-slate-200 hover:bg-orange-600 hover:border-orange-600 hover:text-white text-slate-700"
                    }`}
                  >
                    <Icon />
                  </button>
                )
              )}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className={`mt-14 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
            darkMode
              ? "border-slate-800 text-slate-500"
              : "border-slate-200 text-slate-500"
          }`}
        >
          <p>
            © 2026 <span className="font-semibold text-orange-500">DivyaDarshan</span>.
            All Rights Reserved.
          </p>

          <p className="text-sm">
            Made with ❤️ to preserve India's spiritual heritage.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;