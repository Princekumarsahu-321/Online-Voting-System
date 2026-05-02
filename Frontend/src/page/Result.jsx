import React, { useEffect, useState } from 'react';

function Result() {
  const [results, setResults] = useState({
    BJP: 0,
    Congress: 0
  });

  const [winner, setWinner] = useState("");

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("results")) || {
      BJP: 0,
      Congress: 0
    };

    setResults(storedResults);

    if (storedResults.BJP > storedResults.Congress) {
      setWinner("BJP 🏆");
    } else if (storedResults.Congress > storedResults.BJP) {
      setWinner("Congress 🏆");
    } else if (storedResults.BJP === 0 && storedResults.Congress === 0) {
      setWinner("No votes yet 🗳️");
    } else {
      setWinner("Tie 🤝");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-8">Voting Results 📊</h1>

      <div className="flex gap-10">

        {/* BJP */}
        <div className="w-64 p-15 bg-orange-500 text-white rounded-2xl shadow-lg text-center">
          <img
          src="https://c8.alamy.com/comp/2TCXP21/lotus-flower-symbol-political-party-sign-bjp-banner-background-election-symbol-bhartiya-janata-party-2TCXP21.jpg"
            
            // src="https://upload.wikimedia.org/wikipedia/commons/6/63/Indian_National_Congress_hand_logo.png"
            alt="BJP Logo"
            className="w-32 h-32 mx-auto object-contain bg-white p-2 rounded-full"
          />

          <h2 className="text-2xl font-bold mt-5">BJP</h2>
          <p className="text-3xl mt-4">{results.BJP}</p>
        </div>

        {/* Congress */}
        <div className="w-64 p-15 bg-blue-500 text-white rounded-2xl shadow-lg text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Indian_National_Congress_hand_logo.png"
            alt="Congress Logo"
            className="w-32 h-32 mx-auto object-contain bg-white p-2 rounded-full"
          />
          <h2 className="text-2xl font-bold mt-5">Congress</h2>
          <p className="text-3xl mt-4">{results.Congress}</p>
        </div>

      </div>

      {/* Winner */}
      <div className="mt-15 text-2xl font-semibold">
        🏆 Winner: {winner}
      </div>

    </div>
  );
}

export default Result;