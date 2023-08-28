import React, { useState } from "react";
// import homes from "./images/homes.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contacts.css";
import "./keys.jpeg";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
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
  return (
    <>
      {/* Start of nav */}
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
                <a href="#!" onClick={handleDropdownToggle}>
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
      {/* End of Nav */}
      <section class="middle-section">
        <div class="middle-container">
          <img
            src="./images/givingKeys.jpg"
            class="section-middle-image"
            alt="background"
          />
          <div class="c-middle-info">
            <form class="contact-form" action="">
              <div class="c-title">
                <h1 class="c-title">Please leave us a message!</h1>
              </div>
              <div class="half">
                <div class="c-item">
                  <label for="name">NAME</label>
                  <input type="text" id="name" />
                </div>
                <div class="c-item">
                  <label for="email">EMAIL</label>
                  <input type="text" id="email" />
                </div>
              </div>

              <div class="full">
                <label for="message">MESSAGE</label>
                <textarea name="" id="message"></textarea>
              </div>
              <div class="action">
                <input type="submit" value="SEND MESSAGE" />
                <input type="reset" value="RESET" />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <div className="footer-box">
          <h4>MY ACCOUNT</h4>
          <li>
            <a href="#">My account</a>
          </li>
          <li>
            <a href="#">Checkout</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
        </div>

        <div className="footer-box">
          <h4>INFORMATION</h4>
          <li>
            <a href="#">Privacy Page</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
        </div>

        <div className="footer-box">
          <h4>GET STARTED</h4>
          <li>
            <a href="#">Find Affordable Rentals</a>
          </li>
          <li>
            <a href="#">Find Housing Authorities</a>
          </li>
          <li>
            <a href="#">List Your Property</a>
          </li>
          <li>
            <a href="#">Renters Benefits</a>
          </li>
          <li>
            <a href="#">Owner Benefits</a>
          </li>
        </div>

        <div className="footer-box">
          <h4>HOUSING FOR YOU</h4>
          <h5>Connect with us</h5>
          <div className="socials">
            <a href="https://www.facebook.com">
              <i className="fa-brands fa-snapchat">
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </a>

            <a href="https://www.instagram.com">
              <i className="fa-brands fa-snapchat">
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </a>

            <a href="https://www.snapchat.com">
              <i className="fa-brands fa-snapchat">
                <FontAwesomeIcon icon={faSnapchat} />
              </i>
            </a>

            <a href="https://www.x.com">
              <i className="fa-brands fa-snapchat">
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
