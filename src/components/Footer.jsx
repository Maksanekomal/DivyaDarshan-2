
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white text-2xl">
                🛕
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  DivyaDarshan
                </h2>

                <p className="text-sm text-gray-400">
                  Temple Heritage Portal
                </p>
              </div>

            </div>

            <p className="mt-5 leading-7 text-gray-400">
              Explore India's spiritual heritage through authentic temple
              information, festivals, pilgrimage routes, and cultural history.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link to="/" className="block hover:text-orange-500">
                Home
              </Link>

              <Link to="/temples" className="block hover:text-orange-500">
                Temples
              </Link>

              <Link to="/festivals" className="block hover:text-orange-500">
                Festivals
              </Link>

              <Link to="/routes" className="block hover:text-orange-500">
                Pilgrimage Routes
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Resources
            </h3>

            <div className="space-y-3">

              <Link to="/about" className="block hover:text-orange-500">
                About
              </Link>

              <Link to="/contact" className="block hover:text-orange-500">
                Contact
              </Link>

              <a href="#" className="block hover:text-orange-500">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-orange-500">
                Terms & Conditions
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-600 transition">
                <FaFacebookF className="mx-auto mt-3" />
              </button>

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-600 transition">
                <FaInstagram className="mx-auto mt-3" />
              </button>

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-600 transition">
                <FaLinkedinIn className="mx-auto mt-3" />
              </button>

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-600 transition">
                <FaYoutube className="mx-auto mt-3" />
              </button>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 DivyaDarshan. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;