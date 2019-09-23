import React from 'react';
import FacebookLogo from '../assets/img/facebookLogo.png';
import InstagramLogo from '../assets/img/instagramLogo.png';
import ShoppingCart from '../assets/img/shoppingCartLogo.png';

export default function Footer() {
  return (
    <div className="footer">
      < a target="_blank" href="https://www.facebook.com/tiendanaturistaomnivita/"><img className="footer-icons" src={FacebookLogo} alt="Facebook" /></a>
      < a target="_blank" href="https://www.instagram.com/tiendanaturistaomnivita/"><img className="footer-icons" src={InstagramLogo} alt="Instagram" /></a>
      <a target="_blank" href="https://tiendanaturista-omnivita.mercadoshops.com.co/"><img className="footer-icons" src={ShoppingCart} alt="Mercado Libre" /></a >
    </div >
  )
}
