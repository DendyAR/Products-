import { combineReducers } from 'redux'
import { UserLogin,GetInfoUser,UserRegister, UserLogout } from './users'
import { ChatList } from './chatlist'
import { GetMessage, SendMessage } from './message'

const reducers = combineReducers({
    UserLogin, ChatList, GetMessage, SendMessage,GetInfoUser,UserRegister
})

export default reducers