import React, { useEffect } from 'react';
import $ from 'jquery'; // Make sure you have the jQuery library installed

const Navigation = () => {
  useEffect(() => {
    // DOM ready
    $(function() {
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="#!">Affordable Housing</a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle" href="#!"><span></span></a>
          </div>
          <ul className="nav-list">
            <li><a href="#!">Home</a></li>
            <li><a href="#!">About Us</a></li>
            <li>
              <a href="#!">Available Homes</a>
              <ul className="nav-dropdown">
                <li><a href="#!">Apartments for Rent</a></li>
                <li><a href="#!">Townhomes for Rent</a></li>
                <li><a href="#!">Houses for Rent</a></li>
              </ul>
              </li>
            <li><a href="#!">Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
