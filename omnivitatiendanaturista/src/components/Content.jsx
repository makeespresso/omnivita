import React from 'react';
import contentImage from './content-image.png';

export default function Content() {
  return (
    <div className="content">
      <div className="content-image">
        <img src={contentImage} alt="Exercising" />
      </div>
      <div className="text-content">
        <p>OmniVita es una tienda naturista dedicada a la venta al por menor de productos de la  salud, nutrición y belleza. Incluyendo vitaminas, suplementos minerales, hierbas, nutrición deportiva, de dieta,  productos energéticos y de belleza.</p>
        <p>Nuestros  productos son de alta calidad al alcance de la comunidad.</p>
        <p>Nos esmeramos por ofrecer productos legítimos al mejor precio para el cuidado de la salud y la belleza.</p>
      </div>
    </div>
  )
}
