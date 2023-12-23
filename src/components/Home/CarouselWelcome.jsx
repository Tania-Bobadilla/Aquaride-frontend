import { Carousel } from 'react-bootstrap'
import img1 from "../../assets/slide1.jpg"
import img2 from "../../assets/slide2.jpg"
import img3 from "../../assets/slide3.jpg"

const CarouselWelcome = () => {
    const titulo = "Aquaride"
    const msg = "Surfea la Vida, Vive la Ola"

    return (
        <section className='welcome'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img src={img1} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>{titulo}</h1>
                        <h5>{msg}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>{titulo}</h1>
                        <h5>{msg}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>{titulo}</h1>
                        <h5>{msg}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default CarouselWelcome