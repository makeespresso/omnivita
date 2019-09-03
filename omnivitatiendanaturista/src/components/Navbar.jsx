import React from 'react';
import logo from './logo.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import cart from './cart.png';

export default function Navbar() {
  return (
    <div className="Nav-Container">
      <div className="first-width">
        <ul>
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="second-width">
        <ul>
          <li><img src={facebook} alt="Facebook Page" /></li>
          <li><img src={instagram} alt="Instagram Page" /></li>
          <li><img src={cart} alt="Shopping Cart" /></li>
        </ul>
      </div>
    </div>
  )
}
