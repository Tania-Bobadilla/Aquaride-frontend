import UserContext from "./UserContext"
import axios from "axios"
import { useReducer } from "react"
import userReducer from "./UserReducer"

const UserProvider = ({ children }) => {
    const inicialState = {
        users: [],
        user: [{
            id: "",
            name: "",
            email: "",
            age: 0,
            password: ""
        }]
    }

    const [userState, dispatch] = useReducer(userReducer, inicialState)

    const getUsers = async () => {
        // Se le pasa la ruta del back y la ruta donde se hace el get users
        const response = await axios.get("http://localhost:8080/createUser")
        const users = response.data.info
        
        dispatch({
            type: "GET_USERS",
            payload: users
        })
    }

    return (
        <UserContext.Provider value={{getUsers, usuarios: userState.users}}>{children}</UserContext.Provider>
    )
}

export default UserProvider;