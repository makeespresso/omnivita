import React from 'react'
import Heroimage from './hero-img-omnivita.png';

export default function MainHeader() {
  return (
    <div className="main-container">
      <div className="hero-image-container">
        {/* <img className="hero-image" src={Heroimage} alt="Omnivita" /> */}
      </div>
      <div className="banner">
        <p>Productos naturales de alta calidad para el cuidado de la salud.</p>
      </div>
    </div>
  )
}