import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/signup";

import Result from "./page/Result";
import Admin from "./page/Admin";
import Help from "./page/Help";
import Voting from "./page/Voting";
import Verify from "./page/Verify";
import Dashboard from "./page/Dashboard";
import AdminLogin from "./page/adminlogin";
// import CastYourVote from './page/CastYourVote'

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/Result" element={<Result />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Voting" element={<Voting />} />
        <Route path="/Verify" element={<Verify />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        {/* <Route path='/CastYourVote' element={<CastYourVote/>} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
