import axios from 'axios'


const UserLoginSuccess = (data) => {return {type : 'USER_LOGIN_SUCCESS', payload : data}}
const UserLoginError = (err) => {return {type : 'USER_LOGIN_ERROR',payload : err}}
export const UserLogout = () =>{return{type : 'USER_LOGOUT'}}

export const UserLogin = (formData, cb)=>{
    return (dispatch)=>{
        cb(true)
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}users/login`,
            data: formData
        }).then((res)=>{
            dispatch(UserLoginSuccess(res.data))
            cb(false)
        }).catch((err)=>{
            alert(err.response.data.message)
            dispatch(UserLoginError(err))
            cb(false)
        })
    }
}
const UserRegisterSuccess = (data)=> {return{type : 'USER_REGISTER_SUCCESS', payload : data}}
const UserRegisterError = (err) => {return {type : 'USER_REGISTER_ERROR', payload : err}}

export const UserRegister = (formData, cb)=>{
    return(dispatch)=>{
        cb(true)
        return axios({
            method : 'POST',
            url: `${process.env.REACT_APP_API_URL}users/register`,
            data : formData
        }).then((res)=>{
            alert('User Success Registered')
            dispatch(UserRegisterSuccess(res.data))
            cb(false)
        }).catch((err)=>{
            alert(err.response.data.message)
            dispatch(UserRegisterError(err))
            cb(false)
        })
    }
}