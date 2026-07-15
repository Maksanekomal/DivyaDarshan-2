
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Temples", path: "/temples" },
    { name: "Festivals", path: "/festivals" },
    { name: "Routes", path: "/routes" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <NavLink
            to="/"
            className="text-2xl font-bold text-white"
          >
            🛕 <span className="text-orange-500">Divya</span>Darshan
          </NavLink>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-orange-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          {/* Right Icons */}

          <div className="hidden lg:flex items-center gap-5">

            <button className="text-gray-300 hover:text-orange-500 transition">
              <FaSearch size={18} />
            </button>

            <button className="text-gray-300 hover:text-orange-500 transition">
              <FaMoon size={18} />
            </button>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-xl border-t border-slate-800">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </div>
      </div>

    </header>
  );
};

export default Navbar;