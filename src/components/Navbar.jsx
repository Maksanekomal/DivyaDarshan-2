
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("adminToken");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <>
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
                    isActive
                      ? "text-orange-500 transition"
                      : "text-gray-300 hover:text-orange-500 transition"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-5 relative">

              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-300 hover:text-orange-500 transition"
              >
                <FaSearch size={18} />
              </button>

              {/* Dark Mode */}
              <button className="text-gray-300 hover:text-orange-500 transition">
                <FaMoon size={18} />
              </button>

              {!isLoggedIn ? (
                <div className="relative">

                  <button
                    onClick={() => setLoginOpen(!loginOpen)}
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition"
                  >
                    <FaUserCircle size={20} />
                    Login
                  </button>

                  {loginOpen && (
                    <div className="absolute right-0 mt-3 w-44 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden">

                      <Link
                        to="/admin/login"
                        onClick={() => setLoginOpen(false)}
                        className="block px-5 py-3 text-gray-300 hover:bg-slate-800 hover:text-orange-500"
                      >
                        Login
                      </Link>

                      <Link
                        to="/admin/register"
                        onClick={() => setLoginOpen(false)}
                        className="block px-5 py-3 text-gray-300 hover:bg-slate-800 hover:text-orange-500"
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
                        : "text-gray-300 hover:text-orange-500 transition"
                    }
                  >
                    Admin Panel
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-orange-500 transition"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
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
            open ? "max-h-[500px]" : "max-h-0"
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
                      : "text-gray-300 hover:text-orange-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/admin/login"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-gray-300 hover:text-orange-500"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/admin/register"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-gray-300 hover:text-orange-500"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/admin"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-gray-300 hover:text-orange-500"
                >
                  Admin Panel
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-6 py-4 text-gray-300 hover:text-orange-500"
                >
                  Logout
                </button>
              </>
            )}

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