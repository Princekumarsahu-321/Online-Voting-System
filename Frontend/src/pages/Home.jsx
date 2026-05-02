import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 🔷 Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-900">Election System</h1>

        {/* <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Registration</li>
          <li className="hover:text-blue-600 cursor-pointer">Voting</li>
          <li className="hover:text-blue-600 cursor-pointer">Results</li>
          <li className="hover:text-blue-600 cursor-pointer">FAQs</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
        </ul> */}
      </nav>

      {/* 🔷 Hero Section */}
      <div className="bg-blue-800 text-white px-10 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-snug">
            Early Voting is Open to all Registered Voters
          </h1>

          <p className="mt-4 text-gray-200">
            Secure, fast and transparent online voting system. Participate in
            elections from anywhere.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="vote"
            className="w-64"
          />
        </div>
      </div>

      {/* 🔷 Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10 py-16">
        {/* Card */}

        <Link
          to="/signup"
          className="block hover:text-green-400 transition duration-200"
        >
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
              alt=""
              className="w-12 mx-auto"
            />

            <h2 className="mt-4 font-semibold">Register to Vote</h2>
          </div>
        </Link>

        
        <Link
        to="/contact"
          className="block hover:text-green-400 transition duration-200"
        >
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt=""
            className="w-12 mx-auto"
          />
          <h2 className="mt-4 font-semibold">Vote by Mail</h2>
        </div>
        </Link>

        <Link to="/Result" className="block hover:text-green-400 font-medium">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
              alt=""
              className="w-12 mx-auto"
            />

            <h2 className="mt-4 font-semibold">View Results</h2>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
            alt=""
            className="w-12 mx-auto"
          />
          <h2 className="mt-4 font-semibold">What's on Ballot</h2>
        </div>

        <Link to="/Verify">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition cursor-pointer hover:text-green-400">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt=""
              className="w-12 mx-auto"
            />

            <h2 className="mt-4 font-semibold">Where to Vote</h2>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt=""
            className="w-12 mx-auto"
          />
          <h2 className="mt-4 font-semibold">Become Volunteer</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
            alt=""
            className="w-12 mx-auto"
          />
          <h2 className="mt-4 font-semibold">Campaign</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828974.png"
            alt=""
            className="w-12 mx-auto"
          />
          <h2 className="mt-4 font-semibold">News & Press</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
