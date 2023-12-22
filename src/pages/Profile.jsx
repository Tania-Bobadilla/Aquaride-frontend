import { Button, Card } from "react-bootstrap"
// import img from "../assets/image-12x.jpg"

import { useContext, useEffect, useState } from "react"
import UserContext from "../context/Users/UserContext"

const Profile = () => {
  // "Importar" funciones del userProvider
  const { infoUser, authStatus, verifyToken, signOut, editUser } = useContext(UserContext)
  // Para guardar info del name y email
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
  console.log(userForm)
  // Enviar data para el edit user
  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      editUser(userForm)
    } catch (error) {
      console.log(error)
    }
  }
  // const handleDelete = () => {
  //   try {
  //     deleteUser(userForm._id)
  //     console.log(userForm._id)
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  return (
    <main className="profile">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{`${userName}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{userEmail}</Card.Subtitle>
          <Button>Edit User</Button>
          <Button variant="outline-secondary">Delete User</Button>
        </Card.Body>
      </Card>
      <form onSubmit={handleSubmit}>
        <h5>Editar datos</h5>
        <div className='mb-3'>
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
        <Button type="submit">Guardar</Button>
      </form>
      <Button variant="outline-secondary" onClick={signOut}>LogOut</Button>
    </main >
  )
}

export default Profile