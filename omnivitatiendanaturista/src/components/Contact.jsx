
import React from 'react';
import Location from '../assets/img/location.png';
import JardinLogo from '../assets/img/jardinLogo.png';
import PhoneIcon from '../assets/img/phone.png';
import Envelope from '../assets/img/envelope.png';

export default function contacto() {
  return (
    <div className="contact">
      <h1>Contacto</h1>
    
    <div className="content-wrapper">
      <div className="third-width">
        <img className="location-map" src={Location} alt="Mapa" />
      </div>

      <div className="third-width">
        <div className="contact-helper">
          <p>Encuéntranos al interior de</p>
          <img src={JardinLogo} alt="Autoserivicios El Jardin" />
          <p>Calle 27 #33 B - 09</p>
          <p>Cali, Colombia</p>
        </div>
        <div className="contact-images">
          <p><img className="contact-icon" src={Envelope} alt="Correo Electronico" /><a href="mailto:omnivita.ventas@gmail.com">omnivita.ventas@gmail.com</a></p>
          <p><img className="contact-icon" src={PhoneIcon} alt="Teléfono" />+57 312 8140509</p>
        </div>
      </div>

      <div className="third-width">
        <div className="contact-helper">
          <h3>Horario de Atención</h3>
          <p>Lunes - Sábado</p>
          <p>9:00 AM - 12:00 PM</p>
          <p>3:00 PM - 8:00 PM</p>
          <p>Domingo</p>
          <p>9:00 AM - 1:00 PM</p>
        </div>
      </div>
      </div>
      </div>
  )
}


