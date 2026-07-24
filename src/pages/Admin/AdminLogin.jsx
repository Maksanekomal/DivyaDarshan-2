
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        { email, password }
      );

      localStorage.setItem("adminToken", response.data.token);

      alert("Login successful!");

      // Redirect to Home Page after login
      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Invalid email or password"
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
            Admin Login
          </h1>

          <p className="text-gray-400 mt-3">
            Sign in to manage DivyaDarshan content
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
              placeholder="admin@divyadarshan.com"
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>

        {/* Register Link */}
        <p className="text-gray-400 text-center mt-6">
          Don't have an account? {" "}
          <Link
            to="/admin/register"
            className="text-orange-500 hover:text-orange-400 font-semibold"
          >
            Register here
          </Link>
        </p>

        <div className="mt-8 p-4 bg-slate-800 rounded-xl border border-slate-700">
          <p className="text-gray-300 text-sm text-center">
            <span className="font-semibold">Demo Credentials:</span>
            <br />
            admin@divyadarshan.com
            <br />
            admin123
          </p>
        </div>

      </div>

    </div>
  );
};

export default AdminLogin;