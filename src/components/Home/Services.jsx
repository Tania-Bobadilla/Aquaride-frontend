import { Col, Row } from "react-bootstrap"
import img1 from "../../assets/fast-delivery.png"
import img2 from "../../assets/card.png"

const Services = () => {
    return (
        <section className="services">
            <Row>
                <Col><img src={img1} alt="Icono delivery" /></Col>
                <Col>
                    <h5>Despachos</h5>
                    <p>Despacho gratuito en compras por sobre $30.000.</p>
                </Col>
                <Col><img src={img2} alt="Icono compra segura" /></Col>
                <Col>
                    <h5>Compra segura</h5>
                    <p>Efectúa tus compras de forma segura.</p>
                </Col>
            </Row>
        </section>
    )
}

export default Services