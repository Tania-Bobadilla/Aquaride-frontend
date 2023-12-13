import { Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../../assets/Default.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const NavBar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" style={{width: "50px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="">Features</Nav.Link>
            <Nav.Link as={NavLink} to="">Features</Nav.Link>
            <Nav.Link as={NavLink} to="">Features</Nav.Link>
            <Nav.Link as={NavLink} to="">Features</Nav.Link>
            <Nav.Link as={NavLink} to="">Features</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="">{<ShoppingCartIcon />}</Nav.Link>
            <Nav.Link as={NavLink} to="">{<AccountCircleIcon />}</Nav.Link>
            {/* <Nav.Link as={NavLink} to=""><Button>Iniciar sesión</Button></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </header>
  )
}

export default NavBar