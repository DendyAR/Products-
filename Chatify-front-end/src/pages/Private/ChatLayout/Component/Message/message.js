import axios from 'axios'
import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { ChatList,NewMessage } from '../../../../../Redux/Actions/chatlist';
import { GetMessage, SendMessage } from '../../../../../Redux/Actions/message'
import { GetInfoUser } from '../../../../../Redux/Actions/user'
const {REACT_APP_API_URL, REACT_APP_API_IMAGE_URL} = process.env

const Message = (props) =>{
    let formData = new FormData();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        message : '',
        images : []
    })
    const [updated, setUpdated] = useState(false)
    const { data:user } = useSelector((state)=> state.UserLogin)
    const { data:chat } = useSelector((state) => state.GetMessage)
    const { data:contact } = useSelector((state) => state.GetInfoUser)
    
    React.useEffect(()=>{
        dispatch(GetMessage(user.data.token,props.chatroom,user.data.id_user))
    },[props,updated])

    React.useEffect(()=>{
        dispatch(GetInfoUser(user.data.token,props.chatroom,user.data.id_user))
    },[props,updated])

    const newFormData = () =>{
        formData.append('message',data.message);
        for(let i=0; i < data.images.length; i++){
            formData.append('images',data.images[i])
        }
    }
    const onDragOver = (e)=>{
        e.preventDefault()
        alert('kamu drag ini')
    }
    const handler = (event) => {
        event.preventDefault()
        if(data.message != null || data.images.length > 0){
            newFormData()
            dispatch(SendMessage(user.data.token,props.chatroom,user.data.id_user,formData))
            setUpdated(!updated)
            setData({message : '',images : []})
        }else{
            return false
        }
    };
    return(
        <div className="head-list bg-white">
            <div className="head-list bg-white">
                {contact&&
                    contact.map((item)=>(
                    <div className="row m-0">
                    <div className="col-3 col-sm-3 col-md-2 col-lg-1 col-xl-1 mt-2 ms-2">
                        <img src={`${REACT_APP_API_IMAGE_URL}${item.photo}`} className="photo" alt="..." />
                    </div>
                    <div className="col-7 col-sm-7 col-md-8 col-lg-9 col-xl-10 mt-3">
                        <span className="fw-bold">{item.username}</span><br />
                        {(item.isonline == true)?<small className="text-purple">Online</small>:<small className="text-muted">Offline</small>}
                    </div>
                    <div className="col-auto col-sm-auto col-md-auto col-lg-auto col-xl-auto mt-4">
                        <img src={process.env.PUBLIC_URL + '/images/i_profile_menu.svg'}  alt="..." />
                    </div>
                </div>
                ))}
            </div>
            <div className="list-message bg-light d-block">
                <div className="list-group p-3">
                    {chat &&
                        chat.map((element)=>(
                        (element.user1 == user.data.id_user)?
                            (element.name_file != null)?
                                (element.message == null || element.message == '')?
                                    <div>
                                        <div className="bg-light d-flex flex-row flex-row-reverse">
                                            <img src={`${REACT_APP_API_IMAGE_URL}${element.photo}`} className="photo-message"/>
                                            <img src={`${REACT_APP_API_IMAGE_URL}${element.name_file}`} className="d-flex align-items-end message-left ms-2"/>
                                        </div>
                                    </div> 
                                :
                                    <div>
                                        <div className="bg-light d-flex flex-row flex-row-reverse" id={element.id} onDrag={(e)=>onDragOver(e)} draggable>
                                            <img src={`${REACT_APP_API_IMAGE_URL}${element.photo}`} className="d-flex align-items-end photo-message ms-2"/>
                                            <img src={`${REACT_APP_API_IMAGE_URL}${element.name_file}`} className="d-flex align-items-end message-right ms-2"/>
                                        </div>
                                        <div className="bg-light d-flex flex-row flex-row-reverse" id={element.id_detail}>
                                            <p className='p-3 mx-5 float-end bg-white message-right text-purple'>{element.message}</p>
                                        </div>
                                    </div>   
                            : 
                            <div className="bg-light d-flex flex-row flex-row-reverse">
                                <img src={`${REACT_APP_API_IMAGE_URL}${element.photo}`} className="d-flex align-items-end photo-message ms-2"/>
                                <p className='p-3 float-end bg-white message-right text-purple'>{element.message}</p>
                            </div>
                        : 
                            (element.name_file != null)?
                                (element.message != null)?
                                    <div>
                                        <div className="bg-light d-flex flex-row">
                                            <img src={`${REACT_APP_API_IMAGE_URL}${element.photo}`} className="photo-message"/>
                                            <img src={`${REACT_APP_API_IMAGE_URL}${element.name_file}`} className="d-flex align-items-end message-left ms-2"/>
                                        </div>
                                        <div className="bg-light bg-light d-flex flex-row">
                                            <p className='p-3 mx-5 float-start bg-purple message-left text-white'>{element.message}</p>
                                        </div>
                                    </div>
                                :   
                                    <div>
                                        <div className="bg-light d-flex flex-row">
                                            <img src={`${REACT_APP_API_IMAGE_URL}${element.photo}`} className="photo-message"/>
                                            <img src={`${REACT_APP_API_IMAGE_URL}${element.name_file}`} className="d-flex align-items-end message-left ms-2"/>
                                        </div>
                                    </div>
                            :
                            <div className="bg-light bg-light d-flex flex-row">
                                <img src={`${REACT_APP_API_IMAGE_URL}${element.photo}`} className="photo-message me-2"/>
                                <p className='p-3 float-start bg-purple message-left text-white'>{element.message}</p>
                            </div>
                    ))}
                </div>
            </div>
            <div className="footer-list bg-white d-block">
                <div className="position-relative input-group px-3">
                <form encType="multipart/form-data" className="form-control search-box " onSubmit={(e)=>handler(e)}>
                <div className="input-group">
                <input type="text" className="form-control search-box icon bg-light " placeholder="Type your message..." aria-label="chat" aria-describedby="basic-addon1" value={data.message} onChange={(e) => setData({...data, message:e.target.value})}/>
                    <label className="search-box input-group-text bg-light">
                        <input type="file" name="picture" accept="image" multiple onChange={(e) => setData({...data, images:e.target.files})}/>
                        <img src={process.env.PUBLIC_URL + '/images/i_plus.svg'}  className="img-fluid" alt="..." />
                    </label>
                    <div className="d-none d-sm-none d-md-block position-absolute col-lg-2 col-md-3 col-sm-4 col-8 g-2 bottom-0 end-0 pb-0 m-5 pe-5">
                        <div className="d-none shadow-sm p-3 bg-purple menu-panel-right align-middle mt-5 me-5">
                            <div className="list-group">
                                <div className="d-flex justify-content-start mb-1">
                                    <img src={process.env.PUBLIC_URL + '/images/i_image.svg'}  alt="..." width="13px" />
                                    <smal className="text-white ms-2">Image</smal>
                                </div>
                                <div className="d-flex justify-content-start mb-1">
                                    <img src={process.env.PUBLIC_URL + '/images/i_document.svg'}  alt="..." width="13px" />
                                    <smal className="text-white ms-2">Document</smal>
                                </div>
                                <div className="d-flex justify-content-start mb-1">
                                    <img src={process.env.PUBLIC_URL + '/images/i_contact.svg'}  alt="..." width="13px" />
                                    <smal className="text-white ms-2">Contact</smal>
                                </div>
                                <div className="d-flex justify-content-start mb-1">
                                    <img src={process.env.PUBLIC_URL + '/images/i_location.svg'}  alt="..." width="13px" />
                                    <smal className="text-white ms-2">Location</smal>
                                </div>
                            </div>
                        </div>
                    </div>
                   {/*  <button className="search-box input-group-text bg-light" type="button"><img src={process.env.PUBLIC_URL + '/images/i_plus.svg'}  className="img-fluid" alt="..." /></button> */}
                    <button className="input-group-text search-box bg-light " type="button"><img src={process.env.PUBLIC_URL + '/images/i_emoticon.svg'}  className="img-fluid" alt="..." /></button>
                    <button className="input-group-text search-box field bg-light " type="button"><img src={process.env.PUBLIC_URL + '/images/i_camera.svg'}  className="img-fluid" alt="..." /></button>
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}
 export default Message