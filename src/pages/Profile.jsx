import { Button, Col, Container, Row, Card } from "react-bootstrap"
import img from "../assets/image-12x.jpg"

import { useContext, useEffect, useState } from "react"
import UserContext from "../context/Users/UserContext"

const Profile = () => {
  const { infoUser, userEdit, signOut } = useContext(UserContext)
  const { name, email } = infoUser
  const [open, setOpen] = useState(false)
  const [userForm, setUserForm] = useState({
    name: "",
    email
  })

  const handleChenage = async(e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })
  }

  const sendData = () => {
    userEdit(userForm)
  }

  useEffect(() => {
    const updateData = () => {
      return setUserForm({
        ...userForm,
        name,
        email
      })
    }
    updateData()
  }, [])

  const handleOpen = () => {
    setOpen(!open)
  }

  console.log(name, email)

  return (
    <main className="profile">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{`${name}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
          <Button onClick={handleOpen}>Edit User</Button>
        </Card.Body>
      </Card>
      <form onSubmit={(e) => sendData(e)} style={ !open ? {display: "none"} : {display:"flex"}}>
        <label htmlFor="name">Nombre</label>
        <input 
          type="text"
          name="name"
          id="name"
          value={userForm.name}  
          onChange={handleChenage}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          name="email"
          id="email"
          value={userForm.email}  
          onChange={handleChenage}
        />
        <button type="submit">Guardar</button>
      </form>
      {/* <Container>
        <h2>{`${name}`}</h2>
        <Row>
          <Col sm={3}>
            <img src={img} alt="" />
          </Col>
          <Col sm={9} className="info">
            <h4>Datos</h4>
            <form>
              <Row>
                <Col className='mb-3'>
                  <label htmlFor="name">
                    <strong>Nombre</strong>
                  </label>
                  <input
                    type="text"
                    placeholder='Nombre'
                    autoComplete='off'
                    name='name'
                    className='form-control rounded-1'
                    disabled={true}
                  // value={}  
                  // onChange={}
                  />
                </Col>
                <Col className='mb-3'>
                  <label htmlFor="lastname">
                    <strong>Apellido</strong>
                  </label>
                  <input
                    type="text"
                    placeholder='Apellido'
                    autoComplete='off'
                    name='lastname'
                    className='form-control rounded-1'
                    disabled={true}
                  //  value={}
                  // onChange={}
                  />
                </Col>
              </Row>
              <Col className='mb-3'>
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder='Email'
                  autoComplete='off'
                  name='email'
                  className='form-control rounded-1'
                  disabled={true}
                //  value={}
                // onChange={}
                />
              </Col>
            </form>
            <Button className="btn-edit">Editar datos</Button>
            <Button className="btn-save">Guardar cambios</Button><hr />
            <div className="wrapper">
              <Button variant="outline-secondary" size="sm" onClick={signOut}>Cerrar sesión</Button>
            </div>
          </Col>
        </Row>
    </Container> */}
    </main >
  )
}

export default Profile