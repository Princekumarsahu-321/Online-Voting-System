import React from 'react'

function Footer() {
  return (
    <>
    
     <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1 */}
        <div>
          <h2 className="font-bold mb-3">Get to Know Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press Releases</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="font-bold mb-3">Connect with Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="font-bold mb-3">Make Money with Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Sell on Platform</li>
            <li className="hover:underline cursor-pointer">Affiliate</li>
            <li className="hover:underline cursor-pointer">Advertise</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="font-bold mb-3">Let Us Help You</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Returns</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2026 Online Voting System
      </div>
    </footer>
    
    </>
  )
}

export default Footer