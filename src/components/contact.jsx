import React, { useState } from "react";
import homes from "./images/homes.jpeg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending the data to a server or displaying a success message
    console.log("Form data submitted:", formData);
    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const pageStyles = {
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const containerStyles = {
    backgroundColor: "white",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const headerStyles = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "blue",
    marginBottom: "10px",
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "2px solid red",
    borderRadius: "4px",
  };

  const submitButtonStyles = {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <h1 style={headerStyles}>Contact Us</h1>
        <form style={formStyles} onSubmit={handleSubmit}>
          <input
            style={inputStyles}
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            style={inputStyles}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            style={inputStyles}
            rows="4"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button style={submitButtonStyles} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
