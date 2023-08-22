import React, { useState } from 'react';

const About = () => {
    const [selectedLang, setSelectedLang] = useState('en');
  
    const handleLangChange = (event) => {
      const lang = event.target.value;
      setSelectedLang(lang);
    };
  
    return (
        <>
    
          <select id="lang-switch" onChange={handleLangChange}>
            <option value="en">English</option>
            <option value="es">Espanol</option>
          </select>
    
          <h1>
            <span lang="en" style={{ display: selectedLang === 'en' ? 'block' : 'none' }}></span>
            <span lang="es" style={{ display: selectedLang === 'es' ? 'block' : 'none' }}></span>
          </h1>

          <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#!">{selectedLang === 'en' ? 'Affordable Housing' : 'Vivienda Asequible'}</a>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!"><span></span></a>
            </div>
            <ul className="nav-list">
              <li><a href="/home">{selectedLang === 'en' ? 'Home' : 'Inicio'}</a></li>
              <li><a href="/about">{selectedLang === 'en' ? 'About Us' : 'Sobre Nosotros'}</a></li>
              <li>
                <a href="#!">{selectedLang === 'en' ? 'Available Homes' : 'Casas Disponibles'}</a>
                <ul className="nav-dropdown">
                  <li><a href="#!">{selectedLang === 'en' ? 'Apartments for Rent' : 'Apartamentos en Renta'}</a></li>
                  <li><a href="#!">{selectedLang === 'en' ? 'Townhomes for Rent' : 'Casas en Renta'}</a></li>
                  <li><a href="#!">{selectedLang === 'en' ? 'Houses for Rent' : 'Casas en Renta'}</a></li>
                </ul>
              </li>
              <li><a href="#!">{selectedLang === 'en' ? 'Contact' : 'Contacto'}</a></li>
            </ul>
          </nav>
        </div>
      </section>


      <div id="column1">
      <div id="portrait1"></div>
      <h1 class="photohead">Andres Cuellar</h1>
      <p class="photodescription"> Full Stack Coding Apprentice</p>
    </div>  
    
    <div id="column2">
      <div id="portrait2"></div>
      <h1 class="photohead">Natalie Aguilar-Hernandez</h1>
      <p class="photodescription">Full Stack Coding Apprentice</p>
    </div>

    <div id="column3">
      <div id="portrait3"></div>
      <h1 class="photohead">Johnson Doe</h1>
      <p class="photodescription">Full Stack Coding Apprentice</p>
    </div>  

    <div id="column4">
      <div id="portrait4"></div>
      <h1 class="photohead">Jynel Kealon</h1>
      <p class="photodescription">Full Stack Coding Apprentice</p>
    </div>

    <div id="column5">
      <div id="portrait5"></div>
      <h1 class="photohead">Wayne Yohannes</h1>
      <p class="photodescription">Full Stack Coding Apprentice</p>
    </div>
    

      <section className="footer">
        <div className="footer-box" style={{ display: selectedLang === 'en' ? 'block' : 'none' }}>
          <h4>MY ACCOUNT</h4>
          <li><a href="#">My account</a></li>
          <li><a href="#">Checkout</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Favorites</a></li>
        </div>
        <div className="footer-box" style={{ display: selectedLang === 'es' ? 'block' : 'none' }}>
          <h4>MI CUENTA</h4>
          <li><a href="#">Mi cuenta</a></li>
          <li><a href="#">Pago</a></li>
          <li><a href="#">Contáctenos</a></li>
          <li><a href="#">Favoritos</a></li>
        </div>

        <div className="footer-box" style={{ display: selectedLang === 'en' ? 'block' : 'none' }}>
          <h4>GET STARTED</h4>
          <li><a href="#">Find Affordable Rentals</a></li>
          <li><a href="#">Find Housing Authorities</a></li>
          <li><a href="#">List Your Property</a></li>
          <li><a href="#">Renters Benefits</a></li>
          <li><a href="#">Owner Benefits</a></li>
        </div>
        <div className="footer-box" style={{ display: selectedLang === 'es' ? 'block' : 'none' }}>
          <h4>EMPEZAR</h4>
          <li><a href="#">Buscar alquileres asequibles</a></li>
          <li><a href="#">Encontrar autoridades de vivienda</a></li>
          <li><a href="#">Listar tu propiedad</a></li>
          <li><a href="#">Beneficios para inquilinos</a></li>
          <li><a href="#">Beneficios para propietarios</a></li>
        </div>

        <div className="footer-box" style={{ display: selectedLang === 'en' ? 'block' : 'none' }}>
          <h4>INFORMATION</h4>
          <li><a href="#">Privacy Page</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
        </div>
        <div className="footer-box" style={{ display: selectedLang === 'es' ? 'block' : 'none' }}>
          <h4>INFORMACIÓN</h4>
          <li><a href="#">Página de privacidad</a></li>
          <li><a href="/about">Acerca de nosotros</a></li>
          <li><a href="#">Carreras</a></li>
          <li><a href="#">Términos y condiciones</a></li>
        </div>

        <div className="footer-box">
          <h4 style={{ display: selectedLang === 'en' ? 'block' : 'none' }}>HOUSING FOR YOU</h4>
          <h4 style={{ display: selectedLang === 'es' ? 'block' : 'none' }}>VIVIENDA PARA TI</h4>
          <h5>{selectedLang === 'en' ? 'Connect with us' : 'Conéctate con nosotros'}</h5>
          <div className="socials">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-snapchat"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </section>

      </>
    )
}
export default About