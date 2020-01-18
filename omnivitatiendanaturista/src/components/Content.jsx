import React from 'react';

import backgroundimage from '../assets/img/greenPils.png';
// import backgroundimage from '../assets/img/backgroundImage.jpeg';

export default function Content() {
  return (
    <div id="sobreNosotros" className="content">
      <div>
        <img className="back-image" src={backgroundimage} alt="img" />
      </div>
      <div className="content-text">
        <h1>OmniVita Tienda Naturista</h1>
        <p>Dedicada a la venta al por menor de productos de la salud, nutrición y belleza. Incluyendo vitaminas, suplementos minerales, hierbas, nutrición deportiva, dietéticos, productos energéticos y de belleza.</p>
        <p>Nuestros  productos son de alta calidad al alcance de la comunidad. Nos esmeramos por ofrecer productos legítimos al mejor precio para el cuidado de la salud y la belleza.</p>
      </div>
    </div>
  )
}






























    // <div id="sobreNosotros" className="content">
    //   <div class="cell cell-1">
    //     <p><span>OmniVita Tienda Naturista</span> <br></br><br></br>Dedicada a la venta al por menor de productos de la salud, nutrición y belleza. Incluyendo vitaminas, suplementos minerales, hierbas, nutrición deportiva, dietéticos, productos energéticos y de belleza.</p>
    //   </div>
    //   <div class="cell cell-2">
    //     <div className="content-image">
    //       <img className="content-image" src={productImage2} alt="Products" />
    //     </div>
    //   </div>
    //   <div class="cell cell-3">
    //     <img className="content-image" src={productsImage} alt="Products" />
    //   </div>
    //   <div class="cell cell-4">
    //     <div className="content-image">
    //       <p>Nuestros  productos son de alta calidad al alcance de la comunidad.<br /><br />
    //         Nos esmeramos por ofrecer productos legítimos al mejor precio para el cuidado de la salud y la belleza.</p>
    //     </div>
    //   </div>

    // </div >
