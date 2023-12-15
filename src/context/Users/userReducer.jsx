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
    
        default:
            return state
    }
}

export default userReducer