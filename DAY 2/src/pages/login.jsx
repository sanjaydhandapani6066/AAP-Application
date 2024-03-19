import React, { useState } from "react";
import "../assets/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert("Email is required");
    } else if (!regex.test(email)) {
      alert("Please enter a valid email");
    }
  };

  const validatePassword = () => {
    if (!password) {
      alert("Password is required");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
  
    const adminEmail = "sanjay@gmail.com";
    const adminPassword = "sanjay123";
    
    if (email === adminEmail && password === adminPassword) {
      window.location.href = '/admin';
    } else {
      window.location.href = '/home';
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>LOGIN</h2>
        <p>login to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="login-input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
          </div>
          <div className="form-group">
            <input
              className="login-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
          </div>

          <button className="login-button" type="submit">
            Login
          </button>
          <br />
          <p className="login-p2">Or</p>
          <Link to="/signup">
            <button className="signup-button" type="button">
              Signup
            </button>
          </Link>
          <br/>
          <br/> 

          <a className="login-p3">
            Forgot Password
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
