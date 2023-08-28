// import React from "react";
import React, { useState, useEffect } from "react";
import "./rentalPage.css";
import RentalCard from "./RentalCard";
// import axios from "axios";
import Footer from "./footer";
// import Nav from "./";
import house1 from "../components/images/house1.webp";
import house2 from "../components/images/house2.webp";
import house3 from "../components/images/house3.webp";
import house4 from "../components/images/house4.webp";
import house5 from "../components/images/house5.webp";
import house6 from "../components/images/house6.webp";

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

  const rentalsData = [
    {
      id: 1,
      title: "1510 Catherine Simmons Ave 2",
      location: "1510 Catherine Simmons Ave 2, Charlotte, NC 28216",
      price: "$995/month",
      image: "./public/images/home2.webp", // Replace with actual image URL
    },
    {
      id: 2,
      title: "1032 Karendale Ave",
      location: "1032 Karendale Ave, Charlotte, NC 28208",
      price: "$499/month",
      image: "./public/images/house2.webp", // Replace with actual image URL
    },

    {
      id: 3,
      title: "906 Harrill St",
      location: "906 Harrill St, Charlotte, NC 28205",
      price: "$1,095/month",
      image: "house3.webp", // Replace with actual image URL
    },
    {
      id: 4,
      title: "4915 Osage Cir",
      location: "4915 Osage Cir, Charlotte, NC 28269",
      price: "$1,450/month",
      image: "house4.webp", // Replace with actual image URL
    },

    {
      id: 5,
      title: "2634 Druid Hills Way, Unit 2",
      location: "2634 Druid Hills Way, Unit 2, Charlotte, NC 28206",
      price: "$920/month",
      image: "house5.webp", // Replace with actual image URL
    },
    {
      id: 6,
      title: "3100 Cosby Pl",
      location: "3100 Cosby Pl, Charlotte, NC 28205",
      price: "$1,350/month",
      image: "house6.webp", // Replace with actual image URL
    },
    {
      id: 7,
      title: "3100 Cosby Pl",
      location: "3100 Cosby Pl, Charlotte, NC 28205",
      price: "$1,350/month",
      image: "house6.webp", // Replace with actual image URL
    },
    {
      id: 8,
      title: "3100 Cosby Pl",
      location: "3100 Cosby Pl, Charlotte, NC 28205",
      price: "$1,350/month",
      image: "house6.webp", // Replace with actual image URL
    },
  ];

  const filteredRentals = rentalsData.filter((rental) => {
    if (filter === "all" || rental.type === filter) {
      return rental.title.toLowerCase().includes(searchText.toLowerCase());
    }
    return false;
  });

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
                <a href="/home">{selectedLang === "en" ? "Home" : "Inicio"}</a>
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
        {filteredRentals.map((rental) => (
          <RentalCard key={rental.id} rental={rental} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default RentalsPage;
