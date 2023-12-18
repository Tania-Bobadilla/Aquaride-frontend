import UserContext from "./UserContext"
import userReducer from "./UserReducer"
import { useReducer } from "react"

import { useNavigate } from "react-router-dom"

import axiosClient from "../../config/axiosClient"


const UserProvider = ({ children }) => {
    const navigate = useNavigate()

    //Estado inicial
    const inicialState = {
        infoUser: [],
        users: [],
        authStatus: false
    }

    //useReducer
    const [userState, dispatch] = useReducer(userReducer, {
        users: [],
        infoUser: [],
        authStatus: false
    })

    //Funciones
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

    const loginUser = async (user) => {
        try {
            const userLogin = await axiosClient.post("/login", user)
            console.log(userLogin.data)
            console.log(userLogin.data.token);
            console.log(axiosClient.defaults)

            if (userLogin.data.success)  {
                dispatch({
                    type: "REGISTER/LOGIN",
                    payload: userLogin.data
                })
            }
            console.log(userLogin.data.msg)
        } catch (error) {
            console.log(error)
        }
    }

    const verifyToken = async() => {
        const token = localStorage.getItem("token")
        
        if(token) {
            axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
            // Authorization = Bearer askjdhaskjdhasjky789216
        } else {
            delete axiosClient.defaults.headers.common["Authorization"]
        }

        try {
            const infoUserVerify = await axiosClient.get("/user/verifyUser")

            dispatch({type: "INFO_USER", payload: infoUserVerify.data.info})

        } catch (error) {
            console.log(error)
        }

    }

    const signOut = () => {
        try {
            dispatch({type: "SIGN_OUT"})
            navigate("/")
            console.log(userState)
        } catch (error) {
            console.log(error)
        }
    }

    const userEdit = async(data) => {
        const updateUser = await axiosClient.put("/user", data)
        console.log(updateUser);
    }

    const getUsers = async () => {
        const response = await axiosClient.get("/createUser")
        const users = response.data.info

        dispatch({
            type: "GET_USERS",
            payload: users
        })
    }

    return (
        <UserContext.Provider value={{ registerUser, loginUser, signOut, infoUser: userState.infoUser, authStatus: userState.authStatus, getUsers, usuarios: userState.users, userEdit }}>{children}</UserContext.Provider>
    )
}

export default UserProvider;