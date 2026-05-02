import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({  
    email: "",
    password: ""
  });

  

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  }; 

  // handle login
  

const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/login",
      formData,{
        withCredentials: true
      }
       
    );

    alert("Login successful");
    navigate("/Dashboard");

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
  
      // 🚀 redirect
      
    }

  } catch (error) {
    console.log(error.response?.data || error);
    alert("Login failed");
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

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
          className="bg-green-400 text-white px-4 py-2 rounded w-full hover:bg-green-500 transition"
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;
