import React from 'react'
import Proteins from './proteins.png';
import NaturalProducts from './naturalProducts.png';
import Vitamins from './vitamins.png';
import SkinCare from './skinCare.png';

export default function ProductsInfo() {
  return (
    <div className="products-info">
      <div className="fourth-width">
        <img src={Proteins} alt="Proteinas" />
        <p>Proteínas</p>
      </div>

      <div className="fourth-width">
        <img src={NaturalProducts} alt="Productos Naturales" />
        <p>Productos Naturales</p>
      </div>

      <div className="fourth-width">
        <img src={Vitamins} alt="Vitaminas" />
        <p>Vitaminas</p>
      </div>

      <div className="fourth-width">
        <img src={SkinCare} alt="Cuidado de la Piel" />
        <p>Cuidado de la Piel</p>
      </div>
    </div>
  )
}
