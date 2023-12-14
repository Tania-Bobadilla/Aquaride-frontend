import { Button } from "react-bootstrap"

const FormRegister = () => {
    return (
        <form className="form-register">
            <div className='mb-3'>
                <label htmlFor="name">
                    <strong>Nombre</strong>
                </label>
                <input
                    type="text"
                    placeholder='Nombre'
                    autoComplete='off'
                    name='name'
                    className='form-control rounded-0'
                    // onChange={}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="lastname">
                    <strong>Apellido</strong>
                </label>
                <input
                    type="text"
                    placeholder='Apellido'
                    autoComplete='off'
                    name='lastname'
                    className='form-control rounded-0'
                    // onChange={}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input
                    type="email"
                    placeholder='Email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    // onChange={}
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
                    className='form-control rounded-0'
                    // onChange={}
                />
            </div>
            <Button type='submit'>Registrarse</Button>
        </form >
    )
}

export default FormRegister