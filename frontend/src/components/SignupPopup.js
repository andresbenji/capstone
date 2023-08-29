// import React, { useState } from 'react';

// const SignupPopup = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState();

//   const handleEmailChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     ///
//   }
//   if (!isOpen) return null;

//   return (
//     <div className="signup-popup">
//       <div className="popup-content">
//       <h2>Login or Sign Up</h2>
//         <form onSubmit={handleSubmit}>

//           <input
//           type="firstName"
//           placeholder="First Name"
//           required
//           />

//           <input
//           type="lastName"
//           placeholder="Last Name"
//           required
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             // value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             // value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//           <button type="submit">Submit</button>
//         </form>

//       </div>
//     </div>
//   );
// };

// export default SignupPopup;

import React, { useState } from "react";
import axios from "axios";
import "./SignUpForm.css";

const SignupPopup = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className={`signup-popup ${isOpen ? "open" : ""}`}>
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
             {/* onClick={onClose} */}
            <button  type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
