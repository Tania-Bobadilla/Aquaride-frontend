import './carousel.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const items = [
    {
      id: 1,
      img: "src/assets/test.jpg",
      name: "EJEMPLO 1",
      price: "123"
    },
    {
      id: 2,
      img: "src/assets/test.jpg",
      name: "EJEMPLO 2",
      price: "456"
    },
    {
      id: 3,
      img: "src/assets/test.jpg",
      name: "EJEMPLO 3",
      price: "789"
    }
    , {
      id: 4,
      img: "src/assets/test.jpg",
      name: "EJEMPLO 4",
      price: "456"
    }
    ,
    {
      id: 5,
      img: "src/assets/test.jpg",
      name: "EJEMPLO 5",
      price: "123"
    },
    {
      id: 6,
      img: "src/assets/test.jpg",
      name: "EJEMPLO 6",
      price: "789"
    },
    {
      id: 7,
      img: "src/assets/test.jpg",
      name: "EJEMPLO 7",
      price: "789"
    },
    {
      id: 8,
      img: "src/assets/test.jpg",
      name: "EJEMPLO 8",
      price: "789"
    }
  ]
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
          {items.map((item) => (
            <div key={item.id} className="card">
              <div className="top">
                <img src={item.img} alt="Imagen producto" className='card-img-prod'/>
              </div>
              <div className="info">
                <h6>{item.name}</h6>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Carousel