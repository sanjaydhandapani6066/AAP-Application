import React, { useState } from "react";
import "../assets/login.css"; // Assuming you have a signup.css file for styling
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateUsername = () => {
    if (!username) {
      alert("Username is required");
    }
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert("Email is required");
    } else if (!regex.test(email)) {
      alert("Please enter a valid email");
    }
  };

  const validateMobile = () => {
    if (!mobile) {
      alert("Mobile number is required");
    }
  };

  const validatePassword = () => {
    if (!password) {
      alert("Password is required");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long");
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      alert("Please confirm your password");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUsername();
    validateEmail();
    validateMobile();
    validatePassword();
    validateConfirmPassword();
    
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <p>Create your account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="signup-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={validateUsername}
            />
          </div>
          <div className="form-group">
            <input
              className="signup-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
          </div>
          <div className="form-group">
            <input
              className="signup-input"
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              onBlur={validateMobile}
            />
          </div>
          <div className="form-group">
            <input
              className="signup-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
          </div>
          <div className="form-group">
            <input
              className="signup-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateConfirmPassword}
            />
          </div>

          <button className="signup-button" type="submit">
            Sign Up
          </button>
          <br />
          <p className="signup-p2">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
