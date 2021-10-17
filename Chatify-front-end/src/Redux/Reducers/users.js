const initialState = {
    data : [],
    loading : false
}

export const UserLogin = (state = initialState, action = {}) => {
    switch(action.type){
        case 'USER_LOGIN_SUCCESS':
            return{
                ...state,
                loading : false,
                isLogin : true,
                data : action.payload
            }
        case 'USER_LOGIN_ERROR' :
            return{
                ...state,
                loading : false,
                isLogin : false,
                error : action.payload,
                data : []
            }
        case 'USER_LOGOUT' :
            return{
                ...state,
                data : [],
                loading : false,
                isLogin : false
            }
        default :
            return state
    }
}

export const UserLogout = (state = initialState, action = {})=>{
    switch(action.type){
        case "LOGOUT":
            return {
                ...state,
                isLogin: false,
                loading: false,
                data: []
            }
        default :
            return state
    }
}

export const UserRegister = (state = initialState, action = {}) => {
    switch(action.type){
        case 'USER_REGISTER_SUCCESS':
            return{
                ...state,
                loading : false,
                isLogin : true,
                data : action.payload
            }
        case 'USER_REGISTER_ERROR' :
            return{
                ...state,
                loading : false,
                isLogin : false,
                error : action.payload,
                data : []
            }
        default :
            return state
    }
}

export const GetInfoUser = (state = initialState, action = {}) => {
    switch(action.type){
        case 'GET_INFO_USER_REQUEST':
            return{
                ...state,
                loading: true
            }
        case 'GET_INFO_USER_SUCCESS' :
            return{
                ...state,
                loading: false,
                data: action.payload
            }
        case 'GET_INFO_USER_ERROR' :
            return{
                ...state,
                loading: false,
                error: action.payload,
                data: [],
            }
        default :
            return state
    }
}