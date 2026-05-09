import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false); // 🔥 NEW

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData,
        { withCredentials: true }
      );

      console.log("LOGIN RESPONSE:", res.data);

      // 🔐 store token
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // 🔥 OPTIONAL: store user data (faster UI)
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      alert("Login successful 🎉");

      navigate("/Dashboard");

    } catch (error) {
      console.log("LOGIN ERROR:", error.response?.data || error);

      alert(
        error.response?.data?.message || "Login failed ❌"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Login 🔐
        </h2>

        {/* Email */}
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded w-full text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;