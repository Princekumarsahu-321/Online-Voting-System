import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="flex justify-between items-center  bg-gray-800 text-white shadow-md text-center   text-lg font-bold">
      
      {/* <h2 className="text-xl font-bold">Prince Kumar</h2> */}

        <div className="ml-2 w-20 h-15 border-4 flex items-center justify-center bg-white shadow-lg">
  <img 
    src="https://i.fbcd.co/products/resized/resized-750-500/4b935f547c95574ad356c4469dcc8c4e9ccbe79a6e3af24ba1e7b4017fe13aec.jpg" 
    alt="Party Logo"
    className="w-16 h-16 object-contain" 
  />
</div>

      <div className="flex gap-6">
        <Link 
          to="/" 
          className="hover:text-yellow-400 transition duration-200 font-medium"
        >
          Home
        </Link>

        <Link 
          to="/about" 
          className="hover:text-yellow-400 transition duration-200 font-medium"
        >
          About
        </Link>

        <Link 
          to="/contact" 
          className="hover:text-yellow-400 transition duration-200 font-medium"
        >
          Contact
        </Link>
        <Link 
          to="/login" 
          className="hover:text-yellow-400 transition duration-200 font-medium"
        >
          Login
        </Link>

        <Link 
          to="/signup" 
          className="hover:text-yellow-400 transition duration-200 font-medium"
        >
          Signup
        </Link>
        
      </div>

    </div>
  )
}

export default Header