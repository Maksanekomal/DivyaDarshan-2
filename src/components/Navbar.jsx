
import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import { useTheme } from "../context/ThemeContext";

import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  const [open, setOpen] =useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const isLoggedIn = !!localStorage.getItem("adminToken");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
    window.location.reload();
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Temples", path: "/temples" },
    { name: "Festivals", path: "/festivals" },
    { name: "Routes", path: "/routes" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navbarClass = scrolled
    ? darkMode
      ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-xl"
      : "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-xl"
    : isHome
    ? "bg-transparent"
    : darkMode
    ? "bg-slate-950"
    : "bg-white border-b border-slate-200";

  const textClass =
    isHome && !scrolled
      ? "text-white"
      : darkMode
      ? "text-gray-300"
      : "text-slate-700";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarClass}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}

            <NavLink
              to="/"
              className={`text-2xl font-bold ${
                isHome && !scrolled
                  ? "text-white"
                  : darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
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
                    isActive
                      ? "text-orange-500 font-semibold"
                      : `${textClass} hover:text-orange-500 transition`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </nav>

            {/* Right */}

            <div className="hidden lg:flex items-center gap-5 relative">

              {/* Theme */}

              <button
                onClick={toggleTheme}
                className={`${textClass} hover:text-orange-500 transition`}
              >
                {darkMode ? (
                  <FaSun size={18} />
                ) : (
                  <FaMoon size={18} />
                )}
              </button>

              {/* Search */}

              <button
                onClick={() => setSearchOpen(true)}
                className={`${textClass} hover:text-orange-500 transition`}
              >
                <FaSearch size={18} />
              </button>

              {/* Login */}

              {!isLoggedIn ? (
                <div className="relative">

                  <button
                    onClick={() => setLoginOpen(!loginOpen)}
                    className={`${textClass} flex items-center gap-2 hover:text-orange-500 transition`}
                  >
                    <FaUserCircle size={20} />
                    Login
                  </button>

                  {loginOpen && (
                    <div
                      className={`absolute right-0 mt-3 w-44 rounded-xl overflow-hidden shadow-xl ${
                        darkMode
                          ? "bg-slate-900 border border-slate-700"
                          : "bg-white border border-slate-200"
                      }`}
                    >
                      <Link
                        to="/admin/login"
                        onClick={() => setLoginOpen(false)}
                        className={`block px-5 py-3 ${
                          darkMode
                            ? "text-gray-300 hover:bg-slate-800"
                            : "text-slate-700 hover:bg-slate-100"
                        } hover:text-orange-500`}
                      >
                        Login
                      </Link>

                      <Link
                        to="/admin/register"
                        onClick={() => setLoginOpen(false)}
                        className={`block px-5 py-3 ${
                          darkMode
                            ? "text-gray-300 hover:bg-slate-800"
                            : "text-slate-700 hover:bg-slate-100"
                        } hover:text-orange-500`}
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500 font-semibold"
                        : `${textClass} hover:text-orange-500`
                    }
                  >
                    Admin Panel
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className={`${textClass} hover:text-orange-500`}
                  >
                    Logout
                  </button>
                </>
              )}

            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden ${
                isHome && !scrolled
                  ? "text-white"
                  : darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div
            className={`${
              darkMode
                ? "bg-slate-950 border-t border-slate-800"
                : "bg-white border-t border-slate-200"
            }`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 ${
                    isActive
                      ? "text-orange-500"
                      : darkMode
                      ? "text-gray-300 hover:text-orange-500"
                      : "text-slate-700 hover:text-orange-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Theme */}

            <button
              onClick={toggleTheme}
              className={`w-full text-left px-6 py-4 ${
                darkMode
                  ? "text-gray-300"
                  : "text-slate-700"
              }`}
            >
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </header>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
};

export default Navbar;