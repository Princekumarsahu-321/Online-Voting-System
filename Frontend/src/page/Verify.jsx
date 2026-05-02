import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Verify() {
  const [formData, setFormData] = useState({
    email: "",
    voterKey: "", // ✅ FIXED (same as backend)
    password: "",
  });

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [image, setImage] = useState(null);

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🎥 start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
    } catch (err) {
      console.error(err);
      alert("Camera access denied");
    }
  };

  // ❌ stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      streamRef.current = null;
    }
  };

  // 📸 capture image
  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const imgData = canvas.toDataURL("image/png");
    setImage(imgData);

    stopCamera();
  };

  // 🔐 verify login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!image) {
      return alert("Please capture your face 📸");
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/verify", {
        ...formData,
        faceImage: image, // ✅ send captured image
      });

      alert("Verify successful ✅");

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      console.log(error.response?.data || error);
      alert(error.response?.data?.message || "Verify failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mt-5">
          Secure Voter Login
        </h2>

        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Enter Email ID"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full rounded mt-5"
          required
        />

        {/* Voting Key */}
        <input
          type="text"
          name="voterKey"
          placeholder="Enter Voting Key"
          value={formData.voterKey}
          onChange={handleChange}
          pattern="\d{9,}" // ✅ only digits, minimum 9
          title="Enter at least 9 digits"
          className="border p-2 w-full rounded"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        {/* Camera */}
        <div className="text-center space-y-2">
          <video ref={videoRef} autoPlay className="w-full rounded"></video>

          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={startCamera}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Start Camera
            </button>

            <button
              type="button"
              onClick={captureImage}
              className="bg-purple-500 text-white px-3 py-1 rounded"
            >
              Capture Face
            </button>

            <button
              type="button"
              onClick={stopCamera}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Stop
            </button>
          </div>
        </div>

        <canvas ref={canvasRef} className="hidden"></canvas>

        {image && (
          <img src={image} alt="Captured" className="w-full rounded border" />
        )}

        <Link to="/voting">
        
          <button  onClick={() => alert("Verification successful ✅")} className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600">
            Login & Verify
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Verify;
