import React, { useState } from 'react';

function Help() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  // ✅ FAQ Data
  const faqs = [
    {
      q: "Can I vote again?",
      a: "No, only one vote per user is allowed."
    },
    {
      q: "What if I refresh the page?",
      a: "Your vote is saved and cannot be changed."
    },
    {
      q: "I can't vote?",
      a: "Make sure you are logged in."
    }
  ];

  // ✅ Toggle FAQ
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full space-y-6">

        <h1 className="text-3xl font-bold text-center">Help & Guide </h1>

        <p className="text-gray-600 text-center">
          Welcome to the Online Voting System. Follow the steps below to vote easily.
        </p>

        {/* Steps */}
        <div className="space-y-4 text-gray-700">

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold">1. Login / Signup 🔐</h2>
            <p>You must create an account or login before voting.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold">2. Choose Your Candidate 🗳️</h2>
            <p>Select your preferred candidate and click the vote button.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold">3. One Vote Only 🚫</h2>
            <p>You can vote only once. After voting, the button will be disabled.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold">4. View Results 📊</h2>
            <p>Go to the Results page to see voting outcomes.</p>
          </div>

          {/* ✅ FIXED (duplicate step removed & corrected) */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold">5. Verify User ✅</h2>
            <p>Ensure you are logged in before voting.</p>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="border-t pt-4">
          <h2 className="text-xl font-semibold mb-3">FAQs ❓</h2>

          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-2">
              
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer flex justify-between"
              >
                <span>{faq.q}</span>
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </div>

              {activeFAQ === index && (
                <p className="text-gray-600 mt-2">{faq.a}</p>
              )}

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Help;