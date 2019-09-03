import React from 'react'
import Heroimage from './hero-img-omnivita.png';

export default function MainHeader() {
  return (
    <div className="main-container">
      <img src={Heroimage} alt="Omnivita" />
      <div className="banner">
        <p>Productos naturales de alta calidad para el cuidado de la salud.</p>
      </div>
    </div>
  )
}
