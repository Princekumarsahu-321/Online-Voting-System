import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    privatekey: "",
    password: ""
  });

  const navigate = useNavigate();

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/api/auth/login",
        formData,
        {
          withCredentials: true
        }
      );

      alert("Login successful ✅");

      // ✅ redirect to dashboard (not same page)
      navigate("/Admin");

    } catch (error) {
      console.log(error.response?.data || error);
      alert("Login failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Admin Login
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

        {/* Private Key */}
        <div>
          <label className="block mb-1">Private Key:</label>
          <input
            type="password"
            name="privatekey"   // ✅ fixed
            value={formData.privatekey}  // ✅ fixed
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter your Private Key"
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

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;