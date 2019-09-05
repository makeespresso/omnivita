import React from 'react';
import FacebookLogo from './facebookLogo.png';
import InstagramLogo from './instagramLogo.png';
import ShoppingCart from './shoppingCartLogo.png';

export default function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li><img src={FacebookLogo} alt="Facebook" /></li>
        <li><img src={InstagramLogo} alt="Instagram" /></li>
        <li><img src={ShoppingCart} alt="Mercado Libre" /></li>
      </ul>
    </div>
  )
}
