import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../../context/Users/UserContext"

import { Button, Card } from "react-bootstrap"

const RegisterLoginForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    // Para redirigir
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

    //Para enviar el form
    const handleSubmit = async (event) => {
        // event.preventDefault()

        // //Si esta en el register ejecut la funcion de registrar
        // if (signUp) {
        //     registerUser(user)
        //     navigate("/")
        // } else {
        //     loginUser(user)
        //     navigate("/")
        // }
        event.preventDefault();

        try {
            if (signUp) {
                await registerUser(user);
                console.log("Registro exitoso")
                setSuccessMessage("Registro exitoso");
            } else {
                await loginUser(user);
                console.log("Inicio de sesión exitoso")
                setSuccessMessage("Inicio de sesión exitoso");
            }
            setErrorMessage(""); // Limpiar cualquier mensaje de error existente
            navigate("/");
        } catch (error) {
            console.log("Error")
            setErrorMessage("Error en el inicio de sesión o registro");
            setSuccessMessage("");
        }
    }

    //Para cambiar de register a login
    const changeMode = () => {
        setSignUp(!signUp)
        setUser(initialValues)
        setErrorMessage("");
        setSuccessMessage("");
    }

    return (
        <div className="auth-side">
            <h2>
                {/* Cambiar el titulo */}
                {signUp ? "Registrate" : "Login"}
            </h2>
            <Card>
                <Card.Body>
                    <form className="form-register" onSubmit={handleSubmit}>
                        {/* Mostrar input nombre si esta en register */}
                        {signUp && (
                            <div className='mb-3'>
                                <label htmlFor="name">
                                    <strong>Nombre</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Nombre'
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
                    {successMessage && (
                        <div className="alert alert-success mt-3">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="alert alert-danger mt-3">
                            {errorMessage}
                        </div>
                    )}
                </Card.Body>
            </Card>
            <p>{signUp ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}</p>
            <Button variant="outline-secondary" onClick={changeMode}>{signUp ? "Login" : "Registrate"}</Button>
        </div>
    )
}

export default RegisterLoginForm