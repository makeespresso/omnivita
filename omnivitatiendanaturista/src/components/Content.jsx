import React from 'react';
import backgroundimage from '../assets/img/probiotics.jpeg';

export default function Content() {
  return (
    <section className="wrapper">
      <div id="sobreNosotros" className="content">

        <div className="image-content">
          <img className="back-image" src={backgroundimage} alt="img" />
        </div>

        <div className="content-text">
          <section className="textwrap">
            <h1>OmniVita Tienda Naturista</h1>
            <p>Dedicada a la venta al por menor de productos de la salud, nutrición y belleza. Incluyendo vitaminas, suplementos minerales, hierbas, nutrición deportiva, dietéticos, productos energéticos y de belleza.</p>
            <p>Nuestros  productos son de alta calidad al alcance de la comunidad. Nos esmeramos por ofrecer productos legítimos al mejor precio para el cuidado de la salud y la belleza.</p>
          </section>
        </div>
        
      </div>
    </section>
  )
}