import { useEffect } from "react"
const Menu = (props) =>{
    useEffect(()=>{
        let menu = document.getElementById('sidebar');
        if(props.states){
            menu.classList.add('d-block');
        }else{
            menu.classList.add('d-none')
        }
    },[props.states])
    return(<div className="flex-grow-1 me-5 position-absolute w-100" id='sidebar'>
                <div className="d-flex justify-content-between mb-2 p-3 message-right bg-purple">
                    <a href="#news"><img src="style/images/add.svg" className="img-fluid" alt="..." /></a>
                    <a href="#news"><img src="style/images/Lock.svg" className="img-fluid" alt="..." /></a>
                    <a href="#news"><img src="style/images/channel.svg" className="img-fluid" alt="..." /></a>
                </div>
            </div> 
    )
}

export default Menu