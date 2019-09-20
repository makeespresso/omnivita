import React from 'react';
import contentImage from '../assets/img/content-image.png';
import exercisingImage from '../assets/img/yoga.jpeg';
import productsImage from '../assets/img/productsImage.jpeg';
import vitaminPills from '../assets/img/vitamin-pills.jpeg'

export default function Content() {
  return (
    <div className="content">
      {/* <div className="content-image">
        <img className="exercising-picture" src={exercisingImage} alt="Exercising" />
      </div>
      <div className="content-text">
        <p>OmniVita es una tienda naturista dedicada a la venta al por menor de productos de la  salud, nutrición y belleza. Incluyendo vitaminas, suplementos minerales, hierbas, nutrición deportiva, de dieta,  productos energéticos y de belleza.</p>
        <p>Nuestros  productos son de alta calidad al alcance de la comunidad.</p>
        <p>Nos esmeramos por ofrecer productos legítimos al mejor precio para el cuidado de la salud y la belleza.</p>
      </div> */}
      <div class="cell cell-1">
        <div className="content-image">
          <img className="content-image" src={vitaminPills} alt="Products" />
        </div>
      </div>

      <div class="cell cell-2">
        <p>OmniVita es una tienda naturista dedicada a la venta al por menor de productos de la  salud, nutrición y belleza. Incluyendo vitaminas, suplementos minerales, hierbas, nutrición deportiva, de dieta,  productos energéticos y de belleza.</p>
      </div>

      <div class="cell cell-3">
        <p>Nuestros  productos son de alta calidad al alcance de la comunidad.<br /><br />
          Nos esmeramos por ofrecer productos legítimos al mejor precio para el cuidado de la salud y la belleza.</p>
      </div>

      <div class="cell cell-4">
        <div className="content-image">

          <img className="content-image" src={productsImage} alt="Products" />
        </div>
      </div>

    </div >
  )
}
