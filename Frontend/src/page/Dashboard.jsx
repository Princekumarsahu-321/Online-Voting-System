import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [voted, setVoted] = useState(false);
  const [party, setParty] = useState("");
  //  const [party, setParty] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const hasVoted = localStorage.getItem("voted");
    const savedParty = localStorage.getItem("party");

    if (hasVoted === "true") {
      setVoted(true);
      setParty(savedParty || "");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Dashboard"); // ✅ fixed
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/user/me", {
          withCredentials: true, // 🍪 must travel!
        });

        console.log(res.data);

        setUsername(res.data.username);
        setEmail(res.data.email);
        setIsAdmin(res.data.isAdmin);
        setVoted(res.data.hasVoted);
        setParty(res.data.votedParty || "");
      } catch (err) {
        console.log(err);
        localStorage.clear();
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  // ⏱️ clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {username || "User"}</h1>
          <p className="text-gray-500 text-sm">🕒 {time}</p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Profile */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">👤 Profile</h2>
        {/* <p><b>Name:</b> {username}</p> */}
        <p>
          <b>Name:</b> {username || "Prince_Kumar_2006"}
        </p>
        <p>
          <b>Email:</b> {email || "princestm321@gmail.com"}
        </p>
        {/* <p><b>Email:</b> {email}</p> */}
        <p>
          <b>Role:</b> {isAdmin ? "Admin 🛡️" : "User 👤"}
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Vote */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-3">🗳️ Vote</h2>
          <p className="text-gray-600 mb-4">Cast your vote securely.</p>

          <button
            // onClick={() => navigate("/voting")}
            onClick={() => navigate("/verify")}
            disabled={voted}
            className={`px-4 py-2 rounded-lg text-white ${
              voted
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {voted ? "Already Voted 🚫" : "Go to Vote"}
          </button>
        </div>

        {/* Results */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-3">📊 Results</h2>
          <button
            onClick={() => navigate("/result")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            View Results
          </button>
        </div>

        {/* Help */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-3">🆘 Help</h2>
          <button
            onClick={() => navigate("/help")}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            Get Help
          </button>
        </div>

        {/* Admin */}
        {isAdmin && (
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-3">⚙️ Admin Panel</h2>
            <button
              onClick={() => navigate("/admin")}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Open Admin
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-3">📈 Stats</h2>
          <p>Status: {voted ? "Completed ✅" : "Pending ⏳"}</p>
          {voted && (
            <p>
              Voted for: <b>{party}</b>
            </p>
          )}
        </div>
      </div>

      {/* Voting Status */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-3">🗳️ Voting Status</h2>

        {voted ? (
          <div className="text-green-600 font-medium">
            <p>✅ You have successfully voted.</p>
            {party && (
              <p>
                🧾 Voted for: <b>{party}</b>
              </p>
            )}
          </div>
        ) : (
          <p className="text-red-500 font-medium">❌ You have not voted yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
