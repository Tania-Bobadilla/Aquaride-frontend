const userReducer = (state, action) => {
    const {type, payload} = action
    
    switch (type) {
        case "GET_USERS":
            return {
                ...state, 
                users: payload,
                user: [{
                    id: "",
                    name: "",
                    email: "",
                    age: 0,
                    password: ""
                }]
            }

        case "REGISTER/LOGIN":
            localStorage.setItem("token", payload.token)
            return {
                ...state,
                authStatus: true
            }
        case "INFO_USER":
            return {
                ...state,
                infoUser: payload,
                authStatus: true
            }
        case "SIGN_OUT":
            localStorage.removeItem("token")
            return {
                ...state,
                infoUser: [],
                authStatus: false
            }
    
        default:
            return state
    }
}

export default userReducer