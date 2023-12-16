import { Button, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo-dark.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { useContext } from "react"
import UserContext from "../../context/Users/UserContext"

const NavBar = () => {
  const { infoUser, authStatus } = useContext(UserContext)
  const { name } = infoUser
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/test">Categoria</Nav.Link>
            <Nav.Link as={NavLink} to="">Categoria</Nav.Link>
            <Nav.Link as={NavLink} to="">Categoria</Nav.Link>
            <Nav.Link as={NavLink} to="">Categoria</Nav.Link>
            <Nav.Link as={NavLink} to="">Categoria</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/checkout" className="auth">{<ShoppingCartIcon />}</Nav.Link>
            {authStatus ? <Nav.Link as={NavLink} to="/profile" className="auth">{<AccountCircleIcon />} {name}</Nav.Link> : 
              <Nav.Link as={NavLink} to="/auth"><Button variant="outline-primary">Iniciar sesión</Button></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </header>
  )
}

export default NavBar