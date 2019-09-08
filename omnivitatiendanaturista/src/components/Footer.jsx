import React from 'react';
import FacebookLogo from '../assets/img/facebookLogo.png';
import InstagramLogo from '../assets/img/instagramLogo.png';
import ShoppingCart from '../assets/img/shoppingCartLogo.png';

export default function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li><img src={FacebookLogo} alt="Facebook" /></li>
        <li><img src={InstagramLogo} alt="Instagram" /></li>
        <li><img src={ShoppingCart} alt="Mercado Libre" /></li>
      </ul>
    </div>
  )
}
