import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../../context/Users/UserContext"
import { Button } from "react-bootstrap"


const RegisterLoginForm = () => {
    const navigate = useNavigate()

    //Para trackear si estamos en login o register (false = login // true = register)
    const [signUp, setSignUp] = useState(false)

    // "importar" la funcion de register
    const { registerUser, loginUser } = useContext(UserContext)

    //valores iniciales para los input
    const initialValues = {
        name: "",
        email: "",
        password: ""
    }
    //console.log(`Estado signup = ${signUp}`);

    //Dejar valores iniciales como default
    const [user, setUser] = useState(initialValues)

    //Treackear cambios en los input
    const handleChange = (e) => {
        setUser((prevState) => ({
            //que tome todo lo que se esta escribiendo y no borre lo de antes
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    console.log(user)

    //Para enviar el form
    const handleSubmit = (event) => {
        event.preventDefault()

        //Si esta en el register ejecut la funcion de registrar
        if (signUp) {
            registerUser(user)
        } else {
            loginUser(user)
        }

        setUser(initialValues)
        //Redirecciona al home
        navigate('/')
    }

    //Para cambiar de register a login
    const changeMode = () => {
        setSignUp(!signUp)
        setUser(initialValues)
    }

    return (
        <div>
            <h2>{signUp ? "Registrarse" : "Login"}</h2>
            <form className="form-register" onSubmit={handleSubmit}>
                {signUp && (
                    <div className='mb-3'>
                        <label htmlFor="name">
                            <strong>Nombre</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Name'
                            autoComplete='off'
                            name='name'
                            className='form-control rounded-1'
                            onChange={handleChange}
                            value={user.name}
                            required
                        />
                    </div>
                )}
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                        type="email"
                        placeholder='Email'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-1'
                        onChange={handleChange}
                        value={user.email}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">
                        <strong>Contraseña</strong>
                    </label>
                    <input
                        type="password"
                        placeholder='Contraseña'
                        name='password'
                        className='form-control rounded-1'
                        onChange={handleChange}
                        value={user.password}
                        required
                    />
                </div>
                <Button type='submit'>{signUp ? "Registrarse" : "Login"}</Button>
            </form >
            <p>{signUp ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}</p>
            <Button variant="outline-primary" onClick={changeMode}>{signUp ? "Login" : "Registrate"}</Button>
        </div>
    )
}

export default RegisterLoginForm