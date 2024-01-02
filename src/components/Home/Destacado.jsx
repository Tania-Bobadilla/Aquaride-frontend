import { Button } from "react-bootstrap"
import Carousel from "../Carousel/Carousel"
import { NavLink } from "react-router-dom"

const Destacado = () => {
    return (
        <section className="destacados">
            <h2>Destacados</h2>
            <Carousel />
            <NavLink to="/surf">
                <Button variant="outline-primary">Ver más</Button>
            </NavLink>
        </section>
    )
}

export default Destacado