import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import img from "../../assets/newsletter (2).jpg"

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Card className="bg-dark text-white">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Newsletter</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-sub">
                            Enviar
                        </Button>
                    </InputGroup>
                </Card.ImgOverlay>
            </Card>
        </section>
    )
}

export default Newsletter