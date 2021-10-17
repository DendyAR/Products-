const initialState = {
    data : [],
    loading : false
}

export const GetMessage = (state = initialState, action = {}) => {
    switch(action.type){
        case 'GET_MESSAGE_REQUEST':
            return{
                ...state,
                loading: true
            }
        case 'GET_MESSAGE_SUCCESS' :
            return{
                ...state,
                loading: false,
                data: action.payload
            }
        case 'GET_MESSAGE_ERROR' :
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

export const SendMessage = (state = initialState, action = {}) => {
    switch(action.type){
        case 'SEND_MESSAGE_REQUEST':
            return{
                ...state,
                loading: true
            }
        case 'SEND_MESSAGE_SUCCESS' :
            return{
                ...state,
                loading: false,
                data: action.payload
            }
        case 'SEND_MESSAGE_ERROR' :
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