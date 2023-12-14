import { Button, Col, Container, NavLink, Row } from "react-bootstrap"
import img from "../assets/image-12x.jpg"
import FormRegister from "../components/FormRegister.jsx"

const Register = () => {
  return (
    <main className="register">
      <Container fluid>
        <Row>
          <Col sm={6} className="register-img">
            <img src={img} alt="" />
          </Col>
          <Col sm={6} className="info">
            <h2>Registro</h2>
            <FormRegister />
            <hr />
            <p>¿Ya tienes una cuenta? Ingresa aquí.</p>
            <NavLink to="/"><Button variant="outline-secondary">Login</Button></NavLink>
          </Col>
        </Row>
      </Container>
      {/*  */}
    </main>
  )
}

export default Register