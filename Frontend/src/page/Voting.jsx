import React, { useState, useEffect } from "react";

function Voting() {
  const [message, setMessage] = useState("");
  const [voted, setVoted] = useState(false);
  const [party, setParty] = useState("");

  // 🔁 Load vote status on page load
  useEffect(() => {
    const hasVoted = localStorage.getItem("voted");
    const savedParty = localStorage.getItem("party");

    if (hasVoted === "true") {
      setVoted(true);
      setParty(savedParty || "");
    }
  }, []);

  const handleVote = (selectedParty) => {
    if (voted) {
      setMessage("You already voted!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    //  Get previous results
    const storedResults = JSON.parse(localStorage.getItem("results")) || {
      BJP: 0,
      Congress: 0,
    };

    //  Add vote
    storedResults[selectedParty] += 1;

    //  Save results
    localStorage.setItem("results", JSON.stringify(storedResults));

    //  Update state FIRST (important)
    setVoted(true);
    setParty(selectedParty);

    //  Save vote
    localStorage.setItem("voted", "true");
    localStorage.setItem("party", selectedParty);

    setMessage(`Voting for ${selectedParty} successful! `);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      {/* Toast */}
      {message && (
        <div className="fixed top-5 left-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {message}
        </div>
      )}

      {/* Heading */}
      <h1 className="text-center text-5xl mt-25 font-bold">
        Voting Area For Users
      </h1>

      {/* Cards */}
      <div className="flex justify-center gap-10 mt-25">
        {/* BJP */}

        {/* import bjpLogo from "../assets/bjp.png"; // adjust path as needed */}
        <div className="w-72 bg-orange-500 text-white p-7 rounded-2xl shadow-xl text-center">
          <img
            src="https://c8.alamy.com/comp/2TCXP21/lotus-flower-symbol-political-party-sign-bjp-banner-background-election-symbol-bhartiya-janata-party-2TCXP21.jpg"
            // src="https://upload.wikimedia.org/wikipedia/commons/6/63/Indian_National_Congress_hand_logo.png"
            alt="BJP Logo"
            className="w-32 h-32 mx-auto object-contain bg-white p-2 rounded-full"
          />

          <h1 className="text-2xl font-bold mt-3">BJP</h1>

          <button
            onClick={() => handleVote("BJP")}
            disabled={voted}
            className={`mt-15 px-5 py-2 rounded-lg font-semibold ${
              voted
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white text-orange-500 hover:bg-gray-200"
            }`}
          >
            {voted ? "Voted" : "Vote"}
          </button>
        </div>
        {/* Congress */}
        <div className="w-72 bg-blue-500 text-white p-7 rounded-2xl shadow-xl text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Indian_National_Congress_hand_logo.png"
            alt="Congress Logo"
            className="w-32 h-32 mx-auto object-contain bg-white p-2 rounded-full"
          />
          <h1 className="text-2xl font-bold mt-3">Congress</h1>
          <button
            onClick={() => handleVote("Congress")}
            disabled={voted}
            className={`mt-15 px-5 py-2 rounded-lg font-semibold ${
              voted
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white text-blue-500 hover:bg-gray-200"
            }`}
          >
            {voted ? "Voted" : "Vote"}
          </button>
        </div>
      </div>

      {/* Thank You */}
      {voted && (
        <h1 className="text-3xl text-center mt-30">Thanks For Voting!</h1>
      )}

      {/* Footer */}
      <h1 className="text-center text-2xl mt-32">
        YOUR VOTING IS IMPORTANT ❤️
      </h1>
    </div>
  );
}

export default Voting;
