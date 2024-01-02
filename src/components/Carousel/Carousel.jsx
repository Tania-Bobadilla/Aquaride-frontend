import './carousel.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useContext, useEffect } from 'react';
import ProductContext from '../../context/Products/ProductContext';

const Carousel = () => {
  const { getProductssurf, products } = useContext(ProductContext)

  useEffect(() => {
    const productList = async () => {
      await getProductssurf()
    }
    productList()
  }, [])
  
  // Configuracion carousel (mostrar puntos, mostrar 4 cards, cambiar de a 4 cards)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  return (
    <div>
      <div className='custom-carousel'>
        <Slider {...settings}>
          {products.map((item) => (
            <div key={item.id} className="card">
              <div className="top">
                <img src={item.image} alt="Imagen producto" className='card-img-prod' />
              </div>
              <div className="info">
                <h6>{item.name}</h6>
                <p>$ {item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Carousel