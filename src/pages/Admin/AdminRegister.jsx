
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:5000/api/admin/register",
        { email, password }
      );

      alert("Registration successful! Please login with your new account.");

      // Redirect to Login Page after registration
      navigate("/admin/login");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] px-6">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Admin Register
          </h1>

          <p className="text-gray-400 mt-3">
            Create a new admin account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="text-white font-medium block mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="text-white font-medium block mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="text-white font-medium block mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-orange-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account? {" "}
          <Link
            to="/admin/login"
            className="text-orange-500 hover:text-orange-400 font-semibold"
          >
            Login here
          </Link>
        </p>

      </div>

    </div>
  );
};

export default AdminRegister;