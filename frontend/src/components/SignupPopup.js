import React, { useState } from 'react';

const SignupPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const handleEmailChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    ///
  }
  if (!isOpen) return null;

  return (
    <div className="signup-popup">
      <div className="popup-content">
      <h2>Login or Sign Up</h2>
        <form onSubmit={handleSubmit}>

          <input
          type="firstName"
          placeholder="First Name"
          required
          />

          <input
          type="lastName"
          placeholder="Last Name"
          required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default SignupPopup;
