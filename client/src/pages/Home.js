import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="home-container text-center">
      <h1 className="fw-bold text-pink mb-4">🌸 Welcome to MyStock 🌸</h1>
      <div className="form-container">
        <h3>{showLogin ? "Login" : "Sign Up"}</h3>
        <input className="form-control mb-2" placeholder="Email" />
        <input className="form-control mb-3" placeholder="Password" type="password" />
        {!showLogin && <input className="form-control mb-3" placeholder="Confirm Password" type="password" />}
        <button className="btn btn-danger w-100 mb-2">{showLogin ? "Login" : "Sign Up"}</button>
        <button
          className="btn btn-outline-light w-100"
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "Create new account" : "Already have an account?"}
        </button>
      </div>
    </div>
  );
}
