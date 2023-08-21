import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-box">
          <h4>MY ACCOUNT</h4>
          <li><a href="#">My account</a></li>
          <li><a href="#">Checkout</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Favorites</a></li>
         
        </div>

        <div className="footer-box">
          <h4>INFORMATION</h4>
          <li><a href="#">Privacy Page</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
        </div>

        <div className="footer-box">
          <h4>GET STARTED</h4>
          <li><a href="#">Find Affordable Rentals</a></li>
          <li><a href="#">Find Housing Authorities</a></li>
          <li><a href="#">List Your Property</a></li>
          <li><a href="#">Renters Benefits</a></li>
          <li><a href="#">Owner Benefits</a></li>
        </div>

        <div className="footer-box">
          <h4>HOUSING FOR YOU</h4>
          <h5>Connect with us</h5>
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

export default Footer;