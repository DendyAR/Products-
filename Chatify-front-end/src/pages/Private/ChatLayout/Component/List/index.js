import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ChatList} from '../../../../../Redux/Actions/chatlist';
import Moment from 'react-moment';

const { REACT_APP_API_IMAGE_URL } = process.env
const List = () =>{
    const dispatch = useDispatch()
    const { data:user } = useSelector((state)=> state.UserLogin)
    React.useEffect(()=>{
        dispatch(ChatList(user.data.token,user.data.id_user))
    },[])
    const { data:chatlist, error, loading } = useSelector((state) => state.ChatList)
    return(
        <div className="list mb-5">
            {
                chatlist.data && 
                chatlist.data.map((element)=>(
            <Link to={`/?id=${element.chatroom}`}  className='no-styling'>
                <div className="d-flex flex-row row my-3 me-0 overflow-hidden">
                    <div className="col-3 col-md-3 col-lg-3">
                        <img src={`${REACT_APP_API_IMAGE_URL}${element.photo}`} className="photo" alt="..." />
                    </div>
                    <div className="col-9 col-md-9 col-lg-9">
                        <div className="row">
                            <div className="col-8 col-lg-8">
                                <div className="d-flex flex-row">
                                    <span className="fw-bold text-lg-start">{element.username} 
                                    </span>
                                </div>
                            </div>
                            <div className="col-4 col-lg-4">
                                <div className="d-flex flex-column bd-highlight">
                                    <small className="text-muted mb-1"><Moment fromNow ago>{element.message_timestamp}</Moment></small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex inline">
                                <div className="col-8 col-lg-8 mt-1">
                                    <div className="d-flex flex-row">
                                        {(element.status_message == 'unread') ? 
                                            <small className="text-purple text-sm-start">
                                                {element.message.substring(0, 7)}...
                                            </small> 
                                        :   <small className="text-muted text-sm-start">
                                                {element.message.substring(0, 7)}...
                                            </small>}
                                    </div>
                                </div>
                                <div className="col-4 col-lg-4">
                                    <div className="d-flex flex-row-reverse ">
                                        <small className="text-white rounded-pill bg-purple float-end p-2">{element.counting}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            )
            )}
      </div>
    )
}

export default List