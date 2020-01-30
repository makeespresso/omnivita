import React from 'react';
import FacebookLogo from '../assets/img/whitefacebook.svg';
import InstagramLogo from '../assets/img/whiteinstagram.svg';
import ShoppingCart from '../assets/img/whitecart.svg';

export default function Footer() {
  return (
    <div className="footer">
      < a target="_blank" href="https://www.facebook.com/tiendanaturistaomnivita/"><img className="footer-icons" src={FacebookLogo} alt="Facebook" /></a>
      < a target="_blank" href="https://www.instagram.com/tiendanaturistaomnivita/"><img className="footer-icons" src={InstagramLogo} alt="Instagram" /></a>
      < a target="_blank" href="https://tiendanaturista-omnivita.mercadoshops.com.co/"><img className="footer-icons" src={ShoppingCart} alt="Mercado Libre" /></a >
      <p>©2019 Omnivita Tienda Naturista</p>
    </div>
  )
}

