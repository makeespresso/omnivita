import React from 'react'
// import Heroimage from '../assets/img/hero-img-omnivita.png';
import Heroimages from '../assets/img/vitamins-2.jpeg';

export default function MainHeader() {
  return (
    <div id="home" className="main-container">
      <div className="hero-image-container">
        {/* <img className="hero-image" src={Heroimage} alt="Omnivita" /> */}
        {/* <img className="hero-image" src="https://images.unsplash.com/photo-1548302966-a78e6d439912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" /> */}
        <img className="hero-image" src={Heroimages} alt="Omnivita" />

      </div>
      <div className="banner">
        <p>Productos naturales de alta calidad para el cuidado de la salud.</p>
      </div>
    </div>
  )
}