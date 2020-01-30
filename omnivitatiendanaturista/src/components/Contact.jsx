
import React from 'react';
import Location from '../assets/img/map-wide.png';
import JardinLogo from '../assets/img/jardinLogo.png';
import PhoneIcon from '../assets/img/phone.png';
import Envelope from '../assets/img/envelope.png';
import Leaf from '../assets/img/leaf.png';

export default function contacto() {
  return (
    <section className="tocenter">

      <div id="contacto" className="contact">
        <h1>Contacto</h1>

        <div className="map-width">
          <a className="map-style" target="_blank" href="https://goo.gl/maps/74sJQPLX74Q2a3Ng8"><img className="location-map" src={Location} alt="Mapa" /></a>
        </div>
        <div className="content-wrapper">

          <div className="third-width">
            <p>Encuéntranos al interior de</p>
            <img src={JardinLogo} alt="Autoserivicios El Jardin" />
            <p>Calle 27 #33 B - 09</p>
            <p>Cali, Colombia</p>
            <p><img className="contact-icon" src={Envelope} alt="Correo Electronico" /><a href="mailto:omnivita.ventas@gmail.com">omnivita.ventas@gmail.com</a></p>
            <p><img className="contact-icon" src={PhoneIcon} alt="Teléfono" />+57 312 8140509</p>
          </div>

          <div className="leaf-width">
            <img className="leaf-style" src={Leaf} alt="Omnivita Leaf"></img>
          </div>


          <div className="third-width">
            <p>Horario de Atención</p>
            <p><b>Lunes - Sábado</b></p>
            <p>9:00 AM - 12:00 PM</p>
            <p>3:00 PM - 8:00 PM</p>
            <p><b>Domingo</b></p>
            <p>9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}




// <section className="tocenter">
//       <div id="contacto" className="contact">
//         <h1>Contacto</h1>
//         <div className="content-wrapper">
//           <div className="third-width1">
//             <a target="_blank" href="https://goo.gl/maps/74sJQPLX74Q2a3Ng8"><img className="location-map" src={Location} alt="Mapa" /></a>
//           </div>
//           <div className="third-width">
//             <div className="contact-helper">
//               <p>Encuéntranos al interior de</p>
//               <img src={JardinLogo} alt="Autoserivicios El Jardin" />
//               <p>Calle 27 #33 B - 09</p>
//               <p>Cali, Colombia</p>
//             </div>
//             <div className="contact-images">
//               <p><img className="contact-icon" src={Envelope} alt="Correo Electronico" /><a href="mailto:omnivita.ventas@gmail.com">omnivita.ventas@gmail.com</a></p>
//               <p><img className="contact-icon" src={PhoneIcon} alt="Teléfono" />+57 312 8140509</p>
//             </div>
//           </div>
//           <div className="third-width">
//             <div className="contact-helper">
//               <h3>Horario de Atención</h3>
//               <p><b>Lunes - Sábado</b></p>
//               <p>9:00 AM - 12:00 PM</p>
//               <p>3:00 PM - 8:00 PM</p>
//               <p><b>Domingo</b></p>
//               <p>9:00 AM - 1:00 PM</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>