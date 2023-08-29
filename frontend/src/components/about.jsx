import React, { useState } from "react";
import SignupPopup from "./SignupPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
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
<<<<<<< HEAD
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
=======
              <li><a href="/">{selectedLang === 'en' ? 'Home' : 'Inicio'}</a></li>
              <li><a href="/about">{selectedLang === 'en' ? 'About Us' : 'Sobre Nosotros'}</a></li>
              <li>
                
                <a href="/product" onClick={handleDropdownToggle}>{selectedLang === 'en' ? 'Available Homes' : 'Casas Disponibles'}</a>
>>>>>>> main
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
<<<<<<< HEAD

              <li>
                <a href="/contact">
                  {selectedLang === "en" ? "Contact" : "Contacto"}
                </a>
              </li>
=======
              <li><a href="/contact">{selectedLang === 'en' ? 'Contact' : 'Contacto'}</a></li>
>>>>>>> main
              {/* <SignupPopup isOpen={isPopupOpen} onClose={closePopup} /> */}
              {/* <button onClick={openPopup}></button> */}
              {/* <li><a href="#!" onClick={openPopup} isOpen={isPopupOpen} onClose={closePopup}>
    <FontAwesomeIcon icon={faPerson} style={{color: "#ffffff,"}} />
  </a></li> */}
            </ul>
          </nav>
        </div>
      </section>

      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h3>{selectedLang === "en" ? "About Us" : "Acera de Nosotros"}</h3>
          <h4>
            {selectedLang === "en" ? (
              <>
                Empowering lives and communities, our mission at Affordable
                Housing is to ensure access to affordable housing for all. By
                fostering collaboration, advocating for change, and
                strategically investing in innovative solutions, we work to
                alleviate housing insecurity and create lasting positive impact.
                Our goal is to enable individuals and families to thrive in
                stable and vibrant communities, where housing is a cornerstone
                of well-being and opportunity. At Affordable Housing, we believe
                that affordable housing is not just a basic necessity, but a
                fundamental right. Our philanthropic efforts are driven by the
                conviction that everyone deserves a safe and dignified place to
                call home. Through partnerships, research, and grassroots
                initiatives, we strive to break down barriers, challenge
                inequalities, and pave the way for a future where affordable
                housing is accessible to all, enhancing the fabric of society
                and fostering a brighter tomorrow.
              </>
            ) : (
              <>
                Empoderando vidas y comunidades, nuestra misión en Affordable
                Housing es garantizar el acceso a viviendas asequibles para
                todos. Fomentamos la colaboración, abogamos por el cambio e
                invertimos estratégicamente en soluciones innovadoras para
                aliviar la inseguridad en la vivienda y crear un impacto
                positivo duradero. Nuestro objetivo es permitir que individuos y
                familias prosperen en comunidades estables y vibrantes, donde la
                vivienda sea un pilar del bienestar y la oportunidad. En
                Affordable Housing, creemos que la vivienda asequible no es solo
                una necesidad básica, sino un derecho fundamental. Nuestros
                esfuerzos filantrópicos están impulsados por la convicción de
                que todos merecen un lugar seguro y digno al que llamar hogar. A
                través de alianzas, investigación e iniciativas comunitarias,
                nos esforzamos por derribar barreras, desafiar desigualdades y
                allanar el camino para un futuro en el que la vivienda asequible
                sea accesible para todos, mejorando el tejido de la sociedad y
                fomentando un futuro más brillante.
              </>
            )}
          </h4>
          <hr className="custom-hr" />
          <h3>
            {selectedLang === "en" ? "Meet the Team" : "Conoce al Equipo"}
          </h3>
        </div>

        <div className="aboutSection"></div>

        <div className="image-container">
          <div className="image">
            <img
              src="https://lightroom.adobe.com/v2c/spaces/97b7f5a835ef426e89a9836ed6ad8676/assets/6695a828ea204a5c93bd529243c2ea55/revisions/a55af6569d2f41d2968c1365da53c918/renditions/469f9aa70a07dda6f6404c2b98cf61fb"
              alt="Image 1"
            />
            <h1>Jynel Kealon</h1>
            <h2>
              {selectedLang === "en"
                ? "Chief Executive Officer"
                : "Directora Ejecutiva"}
            </h2>
          </div>
          <div className="image">
            <img
              src="https://lightroom.adobe.com/v2c/spaces/97b7f5a835ef426e89a9836ed6ad8676/assets/9ed0f9690a12453f8467e0029c83943d/revisions/d71d0d1808554cd3bf9c606be99daa8b/renditions/c3c2cce3dd2c3551406a73fa6f1a5ff5"
              alt="Image 2"
            />
            <h1>Andres Cuellar</h1>
            <h2>
              {selectedLang === "en"
                ? "Chief Financial Officer"
                : "Director Financiero"}
            </h2>
          </div>
          <div className="image">
            <img
              src="https://lightroom.adobe.com/v2c/spaces/97b7f5a835ef426e89a9836ed6ad8676/assets/a9a38ed9e0984b6897a67b99a0732d05/revisions/d1647a843b1e453f9beebe9a10cb338b/renditions/b6e06445762e464782346a2343598fa6"
              alt="Image 3"
            />
            <h1>Wangel Yohannes</h1>
            <h2>
              {selectedLang === "en"
                ? "Chief Strategy Officer"
                : "Directora de Estrategia"}
            </h2>
          </div>
          <div className="image">
            <img
              src="https://lightroom.adobe.com/v2c/spaces/97b7f5a835ef426e89a9836ed6ad8676/assets/4117af3195314c669eb9087195a381a9/revisions/c93dc2ee561f4481aba024fa4df186a8/renditions/cefad4099eab67f6cbe9d851945c3d18"
              alt="Image 4"
            />
            <h1>Johnson Doe</h1>
            <h2>
              {selectedLang === "en"
                ? "Director of Operations"
                : "Director de Operaciones"}
            </h2>
          </div>
          <div className="image">
            <img
              src="https://lightroom.adobe.com/v2c/spaces/97b7f5a835ef426e89a9836ed6ad8676/assets/aa88fa672e6f469fb3a886c8fd389a9a/revisions/5cdcd4d7510c489fb2d2900488861bca/renditions/7406ce8c0b51632284c9de8bc91aed30"
              alt="Image 4"
            />
            <h1>Natalie Aguilar Hernandez</h1>
            <h2>
              {selectedLang === "en"
                ? "Director of Operations"
                : "Directora de Operaciones"}
            </h2>
          </div>
        </div>
      </div>

      <section className="footer">
        <div
          className="footer-box"
          style={{ display: selectedLang === "en" ? "block" : "none" }}
        >
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
        <div
          className="footer-box"
          style={{ display: selectedLang === "es" ? "block" : "none" }}
        >
          <h4>MI CUENTA</h4>
          <li>
            <a href="#">Mi cuenta</a>
          </li>
          <li>
            <a href="#">Pago</a>
          </li>
          <li>
            <a href="#">Contáctenos</a>
          </li>
          <li>
            <a href="#">Favoritos</a>
          </li>
        </div>

        <div
          className="footer-box"
          style={{ display: selectedLang === "en" ? "block" : "none" }}
        >
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
        <div
          className="footer-box"
          style={{ display: selectedLang === "es" ? "block" : "none" }}
        >
          <h4>EMPEZAR</h4>
          <li>
            <a href="#">Buscar alquileres asequibles</a>
          </li>
          <li>
            <a href="#">Encontrar autoridades de vivienda</a>
          </li>
          <li>
            <a href="#">Listar tu propiedad</a>
          </li>
          <li>
            <a href="#">Beneficios para inquilinos</a>
          </li>
          <li>
            <a href="#">Beneficios para propietarios</a>
          </li>
        </div>

        <div
          className="footer-box"
          style={{ display: selectedLang === "en" ? "block" : "none" }}
        >
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
        <div
          className="footer-box"
          style={{ display: selectedLang === "es" ? "block" : "none" }}
        >
          <h4>INFORMACIÓN</h4>
          <li>
            <a href="#">Página de privacidad</a>
          </li>
          <li>
            <a href="#">Acerca de nosotros</a>
          </li>
          <li>
            <a href="#">Carreras</a>
          </li>
          <li>
            <a href="#">Términos y condiciones</a>
          </li>
        </div>

        <div className="footer-box">
          <h4 style={{ display: selectedLang === "en" ? "block" : "none" }}>
            HOUSING FOR YOU
          </h4>
          <h4 style={{ display: selectedLang === "es" ? "block" : "none" }}>
            VIVIENDA PARA TI
          </h4>
          <h5>
            {selectedLang === "en"
              ? "Connect with us"
              : "Conéctate con nosotros"}
          </h5>
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

export default About;
