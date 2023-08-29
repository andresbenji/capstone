import React, { useState } from "react";
import axios from "axios";
import "./SignUpForm.css";

const SignupPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [token, setToken] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("https://capstone-backend-lncr.onrender.com/register", {
        name,
        email,
        password,
        phonenumber,
      });
      console.log("Registration successful");
      onClose();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://capstone-backend-lncr.onrender.com/login", {
        email: loginEmail,
        password: loginPassword,
      });
      setToken(response.data.token);
      console.log("Login successful");
      onClose();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  if (!isOpen) return null;

  return (
    <div className={`signup-popup ${isOpen ? "open" : ""}`}>
      <div className="signup-popup">
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>
            Close
          </button>

          <h2>Register</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>

          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>

          {token && <p>Token: {token}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
