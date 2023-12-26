import { Col, Row } from 'react-bootstrap'
import logo from '../../assets/logo-dark.png'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () => {
  return (
    <footer>
      <div>
        {/* Logo */}
        <img src={logo} alt="Logo" style={{ width: "100px" }} />

        {/* Contacto */}
        <h6>Contacto</h6>
        <p>{<LocationOnIcon />} Av. Andrés Bello 2425, 7510689 Providencia, Región Metropolitana, Chile</p>
        <p>{<EmailIcon />} aquaride@gmail.com</p>
        <p>{<LocalPhoneIcon />} +56 9 1234 5678</p>
      </div>

      <hr />
      
      <div>
        <Row>
          <Col>
            {/* Columna 1 */}
            <h6>Información</h6>
            <a href="#"><p>Sobre Nosotros</p></a>
            <a href="#"><p>Despachos</p></a>
            <a href="#"><p>Contacto</p></a>
          </Col>
          <Col>
            {/* Columna 2 */}
            <h6>Ayuda</h6>
            <a href="#"><p>Preguntas Frecuentes</p></a>
            <a href="#"><p>Términos y Condiciones</p></a>
            <a href="#"><p>Politica de Privacidad</p></a>
          </Col>
          <Col>
            {/* Columna 3 */}
            <h6>Redes sociales</h6>
            <Row>
              <Col><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{<InstagramIcon />}</a></Col>
              <Col><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{<FacebookIcon />}</a></Col>
              <Col><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">{<YouTubeIcon />}</a></Col>
            </Row>
          </Col>
        </Row>
      </div>
      <p className="copy">&copy; Esta es una página ficticia para fines académicos.</p>
    </footer>
  )
}

export default Footer