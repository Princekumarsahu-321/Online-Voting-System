import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Email validation
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields ⚠️");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus("Enter a valid email 📧");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      const res = await axios.post(
        "http://localhost:3000/api/contact",
        formData
      );

      setStatus("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });

      // Auto remove message after 3 sec
      setTimeout(() => setStatus(""), 3000);

    } catch (error) {
      console.error(error);

      // Show backend error if exists
      const msg =
        error.response?.data?.message || "Failed to send message ❌";

      setStatus(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6">

        <h1 className="text-3xl font-bold text-center">Contact Me</h1>

        <p className="text-center text-gray-600">
          Got an idea, question, or just want to say hi? Drop a message 
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {/* Status Message */}
        {status && (
          <p className="text-center text-sm text-gray-700">{status}</p>
        )}

        {/* Contact Info */}
        <div className="text-center text-gray-600 text-sm space-y-1 pt-4 border-t">
          <p>Email: your@email.com</p>
          <p>GitHub: github.com/yourprofile</p>
        </div>

      </div>
    </div>
  );
}

export default Contact;