
import React from 'react';
import Location from '../assets/img/location.png';
import JardinLogo from '../assets/img/jardinLogo.png';
import PhoneIcon from '../assets/img/phone.png';
import Envelope from '../assets/img/envelope.png';

export default function contacto() {
  return (
    <div className="contact-section">
      <div className="third-width">
        <h1>Contacto</h1>
        <img className="location-map"src={Location} alt="Mapa" />
      </div>

      <div className="third-width">
        <p>Encuéntranos al interior de</p>
        <img src={JardinLogo} alt="Autoserivicios El Jardin" />
        <p>Calle 27 #33 B - 09. Cali, Colombia</p>
        <h3>Horario de Atención</h3>
        <p>Lunes a Sábado</p>
        <p>9:00 AM - 12:00 PM y 3:00 PM - 8:00 PM</p>
        <p>Domingo</p>
        <p>9:00 AM - 1:00 PM</p>
      </div>

      <div className="third-width">
        <p><img src={Envelope} alt="Correo Electronico" /><a href="mailto:omnivita.ventas@gmail.com">omnivita.ventas@gmail.com</a></p>
        <p><img src={PhoneIcon} alt="Teléfono" />+57 312 8140509</p>
      </div>
    </div >
  )
}


