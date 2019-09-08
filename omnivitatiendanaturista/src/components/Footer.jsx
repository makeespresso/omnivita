import React from 'react';
import FacebookLogo from '../assets/img/facebookLogo.png';
import InstagramLogo from '../assets/img/instagramLogo.png';
import ShoppingCart from '../assets/img/shoppingCartLogo.png';

export default function Footer() {
  return (
    <div className="Footer">
      <img className="footer-icons" src={FacebookLogo} alt="Facebook" />
      <img className="footer-icons" src={InstagramLogo} alt="Instagram" />
      <img className="footer-icons" src={ShoppingCart} alt="Mercado Libre" />
    </div>
  )
}
