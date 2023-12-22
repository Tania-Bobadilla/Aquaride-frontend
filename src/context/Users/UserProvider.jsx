import { Modal } from "react-bootstrap"
import axiosClient from "../../config/axiosClient"

import UserContext from "./UserContext"
import userReducer from "./UserReducer"

import { useReducer } from "react"
import { useNavigate } from "react-router-dom"

const UserProvider = ({ children }) => {
    const navigate = useNavigate()

    //Estado inicial
    const inicialState = {
        infoUser: [],
        authStatus: false
    }

    //useReducer
    const [userState, dispatch] = useReducer(userReducer, inicialState)

    //Funciones
    // LOGIN
    const loginUser = async (user) => {
        try {
            const userLogin = await axiosClient.post("/login", user)

            if (userLogin.data.success) {
                dispatch({
                    type: "REGISTER/LOGIN",
                    payload: userLogin.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    // REGISTER
    const registerUser = async (user) => {
        try {
            const userRegister = await axiosClient.post('/createUser', user)
            const newUser = userRegister.data
            console.log(newUser);
            console.log(newUser.token);

            if (newUser.success) {
                dispatch({
                    type: "REGISTER/LOGIN",
                    payload: newUser.token
                })
            }
            console.log(newUser.message);
        } catch (error) {
            console.log(error);
        }
    }
    // VERIFY USER
    const verifyToken = async () => {
        const token = localStorage.getItem("token")

        // Si encuentra el token le añade el Bearer
        if (token) {
            axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
            console.log(axiosClient.defaults.headers.common["Authorization"]);
        } else {
            // Si no elimina lo que hay en authorizartion??
            delete axiosClient.defaults.headers.common["Authorization"]
        }

        try {
            const infoUserVerify = await axiosClient.get('/verifyUser')
            dispatch({
                type: "INFO_USER",
                payload: infoUserVerify.data.info
            })
        } catch (error) {
            console.log(error);
        }
    }
    // SIGN OUT
    const signOut = async () => {
        try {
            dispatch({ type: "SIGN_OUT" })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    // EDIT USER
    const editUser = async (data) => {
        try {
            const updateUser = await axiosClient.put("/user", data)
            console.log(updateUser.data)
            dispatch({
                type: "EDIT_USER",
                payload: updateUser
            })
        } catch (error) {
            console.log(error)
        }
    }
    // DELETE USER 
    // const deleteUser = async(id) => {
    //     try {
    //         console.log(id)
    //         await axiosClient.delete("/user", id)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <UserContext.Provider value={{
            registerUser,
            loginUser,
            infoUser: userState.infoUser,
            authStatus: userState.authStatus,
            verifyToken,
            signOut,
            editUser
        }}>{children}</UserContext.Provider>
    )
}

export default UserProvider;