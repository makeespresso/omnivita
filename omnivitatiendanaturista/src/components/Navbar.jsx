import React from 'react';
import logo from '../assets/img/logo.png';
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import cart from '../assets/img/cart.png';

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="first-width">
        <ul>
          <li><a id="about" href="#content">Sobre Nosotros</a></li>
          <li><a id="contact" href="#contact-section">Contacto</a></li>
        </ul>
      </div>

      <div className="helper-wrap">
        <img className="logoicon" src={logo} alt="Logo" />
      </div>

      <div className="second-width">
        <ul>
          <li><img src={facebook} className="social-icons" alt="Facebook Page" /></li>
          <li><img src={instagram} className="social-icons" alt="Instagram Page" /></li>
          <li><img src={cart} className="social-icons" alt="Shopping Cart" /></li>
        </ul>
      </div>

    </div>
  )
}
