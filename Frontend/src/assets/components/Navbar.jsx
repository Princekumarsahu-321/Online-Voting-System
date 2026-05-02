import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-2 flex justify-evenly items-center shadow-md ">
      <ul className="flex gap-40  justify-between font-medium">
        <Link
          // to="/login"
          to="/Dashboard"
          className="hover:text-green-400 font-medium"
        >
          Dashboard
        </Link>

        <Link to="/AdminLogin" className="hover:text-green-400 font-medium">
          Admin
        </Link>

        <Link to="/Result" className="hover:text-green-400 font-medium">
          {" "}
          Results
        </Link>

        <Link
          to="/Verify"
          //  to="/Voting"
          className="hover:text-green-400 font-medium"
        >
          Voting
        </Link>

        <Link to="/Help" className="hover:text-green-400 font-medium">
          Help
        </Link>

        <Link to="/Verify" className="hover:text-green-400 font-medium hidden">
          Verify
        </Link>

        <Link to="/AdminLogin" className="hover:text-green-400 ">
          AdminLogin
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
