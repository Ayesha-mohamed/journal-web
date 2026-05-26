import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:9000/login/admin", {
        email,
        password
      });

      // store token (optional)
      localStorage.setItem("adminToken", res.data.token);

      alert("Login successful");
      navigate("/admin/dashboard");
      // navigate("/admin/dashboard");

    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2 text-sm sm:text-base">
          Only admins can access dashboard
        </p>

        {/* ERROR */}
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mt-4 text-sm">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleLogin} className="mt-6 space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>

    </div>
  );
}

export default AdminLogin;