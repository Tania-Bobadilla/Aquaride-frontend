import { useContext, useEffect } from "react"
import UserContext from "../context/Users/UserContext"

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
                    <h6>{user.name}</h6>
                    <p>{user.email}</p>
                    <p>{user._id}</p>
                </div>
            ))}
        </div>
    )
}

export default Testing