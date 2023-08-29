// import React from "react";
import React, { useState, useEffect } from "react";
import "./rentalPage.css";
import RentalCard from "./RentalCard";
// import axios from "axios";
import Footer from "./footer";
// import Nav from "./";
const RentalsPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const [selectedLang, setSelectedLang] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLangChange = (event) => {
    const lang = event.target.value;
    setSelectedLang(lang);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  
  
  const [properties, setProperties] = useState([]); // Initialize as an empty array

  const fetchZillowData = async () => {
    const url =
      "https://zillow56.p.rapidapi.com/search?location=lancaster%2C%20sc";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a44e0c850amsh89f3d89e240b970p1ddcf6jsn12f84a1a5f5f",
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse JSON response
      setProperties(result.results);
      
    } catch (error) {
      console.error("Error fetching data:", error);
     
    }
  };

  useEffect(() => {
    fetchZillowData();
  }, []);


  return (
    // header start
    <div className="rentals-page">
      <select id="lang-switch" onChange={handleLangChange}>
        <option value="en">English</option>
        <option value="es">Espanol</option>
      </select>

      <h1>
        <span
          lang="en"
          style={{ display: selectedLang === "en" ? "block" : "none" }}
        ></span>
        <span
          lang="es"
          style={{ display: selectedLang === "es" ? "block" : "none" }}
        ></span>
      </h1>

      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#!">
              {selectedLang === "en"
                ? "Affordable Housing"
                : "Vivienda Asequible"}
            </a>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!" onClick={handleDropdownToggle}>
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <a href="/">{selectedLang === "en" ? "Home" : "Inicio"}</a>
              </li>
              <li>
                <a href="/about">
                  {selectedLang === "en" ? "About Us" : "Sobre Nosotros"}
                </a>
              </li>
              <li>
                <a href="/product" onClick={handleDropdownToggle}>
                  {selectedLang === "en"
                    ? "Available Homes"
                    : "Casas Disponibles"}
                </a>
                {isDropdownOpen && (
                  <ul className="nav-dropdown">
                    <li>
                      <a href="#!">
                        {selectedLang === "en"
                          ? "Apartments for Rent"
                          : "Apartamentos en Renta"}
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        {selectedLang === "en"
                          ? "Townhomes for Rent"
                          : "Casas en Renta"}
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        {selectedLang === "en"
                          ? "Houses for Rent"
                          : "Casas en Renta"}
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="/contact">
                  {selectedLang === "en" ? "Contact" : "Contacto"}
                </a>
              </li>
              {/* <SignupPopup isOpen={isPopupOpen} onClose={closePopup} /> */}
              {/* <button onClick={openPopup}></button> */}
              {/* <li><a href="#!" onClick={openPopup} isOpen={isPopupOpen} onClose={closePopup}>
    <FontAwesomeIcon icon={faPerson} style={{color: "#ffffff,"}} />
  </a></li> */}
            </ul>
          </nav>
        </div>
      </section>

      {/* header end */}

      <h1>Available Rentals in Charlotte, NC</h1>
      <div className="filters">
        <label htmlFor="filter">Filter by Type:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
        <input
          type="text"
          placeholder="Search by Title"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      <div className="rentals-list">
        {properties.map((property) => (
          <RentalCard key={property.zpid} rental={property} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default RentalsPage;
