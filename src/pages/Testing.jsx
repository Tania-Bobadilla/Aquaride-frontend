import { useContext, useEffect } from "react"
import UserContext from "../context/Users/UserContext"
import RegisterLoginForm from "../components/Auth/RegisterLoginForm"

const Testing = () => {
    const { getUsers, usuarios } = useContext(UserContext)

    useEffect(() => {
        const axiosUsers = async () => {
            await getUsers()
        }
        axiosUsers()
    }, [])
    return (
        <div>
            <h1>Lista de usuraios</h1>
            {usuarios.map((user) => (
                <div key={user.id}>
                    <h6>{user.email}</h6>
                </div>
            ))}
            <RegisterLoginForm />
        </div>
    )
}

export default Testing