const initialState = {
    data : [],
    loading : false
}

export const ChatList = (state = initialState, action = {}) => {
    switch(action.type){
    case 'CHATLIST_REQUEST':
        return{
            ...state,
            loading : true
        }
    case 'CHATLIST_SUCCESS':
        return{
            ...state,
            loading : false,
            data : action.payload
        }
    case 'CHATLIST_ERROR' :
        return{
            ...state,
            loading : false,
            error : action.payload,
            data : []
        }
    default :
        return state
    }
}