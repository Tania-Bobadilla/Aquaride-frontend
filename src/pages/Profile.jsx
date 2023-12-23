import { Button, Card, Container } from "react-bootstrap"

import { useContext, useEffect, useState } from "react"
import UserContext from "../context/Users/UserContext"

const Profile = () => {
  // "Importar" funciones del userProvider
  const { infoUser, authStatus, verifyToken, signOut, editUser, deleteUser } = useContext(UserContext)

  // Para guardar info del name, email y ID
  const [userName, setUserName] = useState("No Conectado")
  const [userEmail, setUserEmail] = useState("No Conectado")
  const [userID, setUserID] = useState("No Conectado")

  // Info del formulario
  const [userForm, setUserForm] = useState({
    _id: "",
    name: "",
    email: ""
  })

  //Funcion para cuando cambia lo que esta en el formulario
  const handleChange = async (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })
  }

  // Para cargar la info del usuario en las variables 
  useEffect(() => {
    const getInfoUser = async () => {
      await verifyToken()
      setUserID(infoUser._id)
      setUserName(infoUser.name)
      setUserEmail(infoUser.email)

      setUserForm({
        _id: userID,
        name: userName,
        email: userEmail
      })
    }
    getInfoUser()
  }, [authStatus, userName, userEmail])

  // Enviar data para el edit user
  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      editUser(userForm)
    } catch (error) {
      console.log(error)
    }
  }

  // Enviar datos para el delete user
  const handleDelete = () => {
    try {
      deleteUser(userForm._id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="profile">
      <Container>
        <h4>Mi perfil</h4>
        {/* Card con info del usuario */}
        <Card className="mx-auto">
          <Card.Body>
            <Card.Title>{`${userName}`}</Card.Title>
            <Card.Subtitle>{userEmail}</Card.Subtitle>
            <Button>Editar Ususario</Button>
            <br />
            <Button variant="outline-warning" size="sm" onClick={handleDelete}>Borrar Usuario</Button>
          </Card.Body>
        </Card>
        {/* Formulario para editar usuario */}
        <form onSubmit={handleSubmit}>
          <h5>Editar datos</h5>
          <div className='mb-3 input-id'>
            <label htmlFor="id">
              <strong>ID</strong>
            </label>
            <input
              type="text"
              autoComplete='off'
              name='id'
              className='form-control rounded-1'
              onChange={handleChange}
              value={userForm._id}
              required
              disabled
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="name">
              <strong>Nombre</strong>
            </label>
            <input
              type="text"
              autoComplete='off'
              name='name'
              className='form-control rounded-1'
              onChange={handleChange}
              value={userForm.name}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name='email'
              className='form-control rounded-1'
              onChange={handleChange}
              value={userForm.email}
              required
            />
          </div>
          <Button className="btn-save" type="submit">Guardar</Button>
        </form>
        <Button variant="outline-secondary" onClick={signOut}>LogOut</Button>
      </Container>
    </main >
  )
}

export default Profile