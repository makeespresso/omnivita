import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PicCarousel() {
  return (

    <div className="tester">
      < Carousel >
        <Carousel.Item>
          <img className="carouselImg" src="https://images.unsplash.com/photo-1566346289754-2286d8d29fdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" />
          <Carousel.Caption>
            <section className="backtext">
              <h4>Omnivita Tienda Naturista</h4>
              <p>Productos Naturales</p>
            </section>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src="https://images.unsplash.com/photo-1564594326930-17381130fd2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
      <div className="banner">
        <p>Productos naturales de alta calidad para el cuidado de la salud.</p>
      </div>
    </div>
  )
}

export default PicCarousel;