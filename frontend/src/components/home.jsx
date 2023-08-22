import React, { useState } from 'react';
import f9 from './gp.jpeg';
import f10 from './family.jpeg';
import f11 from './keys.jpeg';
import Slideshow from './slideshow';



const Home = () => {
    const [selectedLang, setSelectedLang] = useState('en');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const handleLangChange = (event) => {
      const lang = event.target.value;
      setSelectedLang(lang);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
              <a id="nav-toggle" href="#!" onClick={handleDropdownToggle}><span></span></a>
            </div>
            <ul className="nav-list">
              <li><a href="/home">{selectedLang === 'en' ? 'Home' : 'Inicio'}</a></li>
              <li><a href="/about">{selectedLang === 'en' ? 'About Us' : 'Sobre Nosotros'}</a></li>
              <li>
                
                <a href="#!" onClick={handleDropdownToggle}>{selectedLang === 'en' ? 'Available Homes' : 'Casas Disponibles'}</a>
                {isDropdownOpen && (
                  <ul className="nav-dropdown">
                    <li><a href="#!">{selectedLang === 'en' ? 'Apartments for Rent' : 'Apartamentos en Renta'}</a></li>
                    <li><a href="#!">{selectedLang === 'en' ? 'Townhomes for Rent' : 'Casas en Renta'}</a></li>
                    <li><a href="#!">{selectedLang === 'en' ? 'Houses for Rent' : 'Casas en Renta'}</a></li>
                  </ul>
                )}
              </li>
              <li><a href="#!">{selectedLang === 'en' ? 'Contact' : 'Contacto'}</a></li>
            </ul>
          </nav>
        </div>
      </section>


          <Slideshow/>



         {/* Testimonials */}
          <figure className="snip1533">
        <figcaption>
          <blockquote>
            {selectedLang === 'en' && (
              <p>My favorite part of living in Affordable Housing is the beauty of these gorgeously refurbished apartments..</p>
            )}
            {selectedLang === 'es' && (
              <p>Mi parte favorita de vivir en viviendas asequibles es la belleza de estos apartamentos hermosamente renovados.</p>
            )}
          </blockquote>
          <h3>Wisteria Ravenclaw</h3>
              <h4>Google Inc.</h4>
        </figcaption>
      </figure>

      <figure className="snip1533">
        <figcaption>
          <blockquote>
            {selectedLang === 'en' && (
              <p>Affordable housing has changed my life because of the reasonable rent. It makes life much more comfortable on a low income.</p>
            )}
            {selectedLang === 'es' && (
              <p>La vivienda asequible ha cambiado mi vida debido al alquiler razonable. Hace la vida mucho más cómoda con bajos ingresos.</p>
            )}
          </blockquote>
          <h3>Ursula Gurnmeister</h3>
          <h4>Facebook</h4>
        </figcaption>
      </figure>

      <figure className="snip1533">
        <figcaption>
          <blockquote>
            {selectedLang === 'en' && (
              <p>My favorite part of living in Affordable Housing is the beauty of these gorgeously refurbished apartments.</p>
            )}
            {selectedLang === 'es' && (
              <p>Mi parte favorita de vivir en viviendas asequibles es la belleza de estos apartamentos hermosamente renovados.</p>
            )}
          </blockquote>
          <h3>Ingredia Nutrisha</h3>
          <h4>Twitter</h4>
        </figcaption>
      </figure>
      {/* End of Testimonials */}



          <section className="benefits">
        <h2 lang="en" style={{ display: selectedLang === 'en' ? 'block' : 'none' }}>How we can help you?</h2>
        <h2 lang="es" style={{ display: selectedLang === 'es' ? 'block' : 'none' }}>¿Cómo podemos ayudarte?</h2>
        <div className="benefits-icons">
          <a href="/loss-gain">
            {selectedLang === 'en' && (
              <div className="benefits-icon">
                {/* English content */}
                <h4>Rental Assistance</h4>
                <p>Find out how we can assist in helping you pay rent.</p>
                <img src={f11} alt="Rental Assistance" />
              </div>
            )}
            {selectedLang === 'es' && (
              <div className="benefits-icon">
                {/* Spanish content */}
                <h4>Asistencia de alquiler</h4>
                <p>Descubra cómo podemos ayudarlo a pagar el alquiler.</p>
                <img src={f11} alt="Asistencia de alquiler" />
              </div>
            )}
          </a>
          <a href="/air">
            {selectedLang === 'en' && (
              <div className="benefits-icon">
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <img src={f10} alt="Renter Benefits" />
                <h4>Renter Benefits</h4>
                <p>Look into the many benefits renters have!</p>
              </div>
            )}
            {selectedLang === 'es' && (
              <div className="benefits-icon">
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <img src={f10} alt="Beneficios para inquilinos" />
                <h4>Beneficios para inquilinos</h4>
                <p>Beneficios para inquilinos</p>
              </div>
            )}
          </a>
          <a href="/map">
            {selectedLang === 'en' && (
              <div className="benefits-icon">
                <i className="fa-solid fa-sink"></i>
                <h4>Government Partners</h4>
                <p>Innovative solutions to challenges in affordable housing.</p>
                <img src={f9} alt="Government Partners" />
              </div>
            )}
            {selectedLang === 'es' && (
              <div className="benefits-icon">
                <i className="fa-solid fa-sink"></i>
                <h4>Socios gubernamentales</h4>
                <p>Soluciones innovadoras a los desafíos de la vivienda asequible.</p>
                <img src={f9} alt="Socios gubernamentales" />
              </div>
            )}
          </a>
        </div>
      </section>

      <section className="newsletter-section">
        {selectedLang === 'en' && (
          <div className="newsletter-content">
            <h2>Get in Touch</h2>
            <p>Stay up to date with the latest rentals, assistance, and tips!</p>
            <form className="newsletter-form">
              <input type="email" id="email" name="email" placeholder="Email address" required />
              <input type="Full Name" id="email" name="Full Name" placeholder="Full name"></input>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        )}
        {selectedLang === 'es' && (
          <div className="newsletter-content">
            <h2>Ponerse en contacto</h2>
            <p>Manténgase actualizado con los últimos alquileres, asistencia y consejos.</p>
            <form className="newsletter-form">
          <input
            type="email"
            id="email"
            name="email"
            placeholder={selectedLang === 'en' ? 'Email address' : 'Dirección de correo electrónico'}
            required
          />
          <input
            type="email"
            id="email"
            name="full-name"
            placeholder={selectedLang === 'en' ? 'Full name' : 'Nombre completo'}
          />
          <button type="submit">{selectedLang === 'en' ? 'Subscribe' : 'Suscribir'}</button>
        </form>
          </div>
        )}
      </section>

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
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
        </div>
        <div className="footer-box" style={{ display: selectedLang === 'es' ? 'block' : 'none' }}>
          <h4>INFORMACIÓN</h4>
          <li><a href="#">Página de privacidad</a></li>
          <li><a href="#">Acerca de nosotros</a></li>
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
  );
}

export default Home;







   