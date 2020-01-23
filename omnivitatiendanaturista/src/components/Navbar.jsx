import React from 'react';
import logo from '../assets/img/logo.png';
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import cart from '../assets/img/cart.svg';

export default function Navbar() {
  return (
    <div id="Navbar-1">
      <ul>
        <section className="left">
          <li>< a href="#sobreNosotros">Sobre Nosotros</a></li>
          <li>< a href="#contacto">Contacto</a></li>
        </section>
        <section className="center">
          <li>< a href="#home"><img className="logoicon" src={logo} alt="Logo" /></a></li>
        </section>
        <section className={"right"}>
          <li>< a target="_blank" href="https://www.facebook.com/tiendanaturistaomnivita/"><img src={facebook} className="social-icons" alt="Facebook Page" /></a></li>
          <li>< a target="_blank" href="https://www.instagram.com/tiendanaturistaomnivita/"><img src={instagram} className="social-icons" alt="Instagram Page" /></a></li>
          <li>< a target="_blank" href="https://tiendanaturista-omnivita.mercadoshops.com.co/"><img src={cart} className="social-icons" alt="Shopping Cart" /></a></li>
        </section>
      </ul>
    </div>
  )
}


