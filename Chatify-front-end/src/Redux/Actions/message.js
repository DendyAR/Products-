import axios from 'axios'

const GetMessageRequest = () => {return {type: 'GET_MESSAGE_REQUEST'}}
const GetMessageSuccess = (data) => {return {type : 'GET_MESSAGE_SUCCESS', payload : data}}
const GetMessageError = (err) => {return{type : 'GET_MESSAGE_ERROR',payload : err}}

export const GetMessage = (userToken, id, id_user)=>{
    return (dispatch) => {
        dispatch(GetMessageRequest())
        return axios.get(`${process.env.REACT_APP_API_URL}message/?id_chatroom=${id}&id_user=${id_user}`,{
            headers: {
                'user-token': userToken
            }
        }).then((res) => {
            dispatch(GetMessageSuccess(res.data.data))
        }).catch((err) => {
            dispatch(GetMessageError(err.message))
        })   
    }
}

const SendMessageRequest = () => {return {type: 'SEND_MESSAGE_REQUEST'}}
const SendMessageSuccess = (data) => {return {type : 'SEND_MESSAGE_SUCCESS', payload : data}}
const SendMessageError = (err) => {return{type : 'SEND_MESSAGE_ERROR',payload : err}}

export const SendMessage = (userToken, id_chatroom,id_participiant,formData)=>{
    return (dispatch)=>{
        console.log('ini dari redux', formData)
        dispatch(SendMessageRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}message/:${id_participiant}?id_chatroom=${id_chatroom}&id_sender=${id_participiant}`,
            headers : {
                'user-token': userToken
            },
            data : formData
        }).then((res)=>{
            console.log(formData)
            dispatch(SendMessageSuccess(res.data))
        }).catch((err)=>{
            console.log(err.response)
            SendMessageError(err)
        })
    }
}