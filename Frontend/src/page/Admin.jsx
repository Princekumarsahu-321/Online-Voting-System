import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [name, setName] = useState("");
  const [party, setParty] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:3000/api/auth/candidate";

  // ✅ Fetch candidates
  const fetchCandidates = async () => {
    try {
      const res = await axios.get(API);
      setCandidates(res.data);
    } catch (err) {
      console.error("Error fetching candidates:", err);
    }
  };

  // ✅ Load on page start (IMPORTANT FIX)
  useEffect(() => {
    fetchCandidates();
  }, []);

  // ✅ Add candidate (instant UI update)
  const addCandidate = async () => {
    if (!name || !party) {
      return alert("Please fill all fields");
    }

    setLoading(true);
    try {
      const res = await axios.post(API, { name, party });

      // ⚡ instant update (no wait for refetch)
      setCandidates((prev) => [...prev, res.data]);

      setName("");
      setParty("");

      alert("Candidate Added ✅");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error adding candidate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mt-10">
        Admin Panel ⚙️
      </h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">Add Candidate</h2>

        <input
          type="text"
          placeholder="Candidate Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Party Name"
          value={party}
          onChange={(e) => setParty(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <button
          onClick={addCandidate}
          disabled={loading}
          className={`w-full text-white py-2 rounded ${
            loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Adding..." : "Add Candidate"}
        </button>
      </div>

      {/* Candidate List */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
        <h2 className="text-xl font-semibold mb-6 border-b pb-2">
          Current Candidates
        </h2>

        {candidates.length === 0 ? (
          <p className="text-gray-500 text-center">
            No candidates found.
          </p>
        ) : (
          <div className="space-y-4">
            {candidates.map((c) => (
              <div
                key={c._id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-bold text-lg">{c.name}</p>
                  <p className="text-sm text-gray-600">{c.party}</p>
                </div>

                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Votes: {c.votes || 0}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;