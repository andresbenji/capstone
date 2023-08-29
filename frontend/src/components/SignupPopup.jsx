import React, { useState, useEffect } from 'react';
import './SignUpForm.css';

const SignupPopup = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [ setEmail] = useState('');
  // const [ setPassword] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  // const handleEmailChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    // setEmail('');
    // setPassword('');

    onClose();

  }

  useEffect(() => {
    if (isOpen !== isPopupOpen){
      setIsPopupOpen(isOpen)
    }
  }, [isOpen]);


  if (!isOpen) return null;



  return (
    <div className={`signup-popup ${isOpen ? 'open' : ''}`}>
    <div className="signup-popup">
      <div className="popup-content">
      <h2>Login or Sign Up</h2>
        <form onSubmit={handleSubmit}>

          <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          required
          />

          <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          required
          />

          <input
            type="email"
            placeholder="Email"
            
            // onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            
            // onChange={handlePasswordChange}
            required
          />
          <button onClick={onClose} type="submit">Submit</button>
          
        </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup
