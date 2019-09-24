import React from 'react'
import Heroimages from '../assets/img/vitamins-2.jpeg';

export default function MainHeader() {
  return (
    <div id="home" className="main-container">
      <div className="hero-image-container">
        <img className="hero-image" src={Heroimages} alt="Omnivita" />
      </div>
      <div className="banner">
        <p>Productos naturales de alta calidad para el cuidado de la salud.</p>
      </div>
    </div>
  )
}