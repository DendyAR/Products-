import {
    useLocation
} from "react-router-dom";
// import { i_camera, i_contact, i_document, i_emoticon, i_image, i_location, i_plus, i_profileMenu } from "../../../../images";
// import React from "react";
import Startmessage from './startmessage'
import Message from './message'
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Messagelayout = () =>{
    let query = useQuery()
    if(query.get("id")==null){
        return(
            <Startmessage/>
        )
    }else{
        return(
            <Message chatroom={query.get("id")}/>
        )
    }
}

export default Messagelayout