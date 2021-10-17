import axios from 'axios'


const ChatListRequest = () => {return {type: 'CHATLIST_REQUEST'}}

const ChatListSuccess = (data) => {return {type: 'CHATLIST_SUCCESS',payload: data}}

const ChatListError = (err) => {return {type: 'CHATLIST_ERROR',payload: err}}

export const ChatList = (userToken, id)=>{
    return (dispatch) => {
        dispatch(ChatListRequest())
        return axios.get(`${process.env.REACT_APP_API_URL}chats/${id}`,{
            headers: {
                'user-token': userToken
            }
        }).then((res) => {
            dispatch(ChatListSuccess(res.data))
        }).catch((err) => {
            dispatch(ChatListError(err))
        }) 
        
    }
}