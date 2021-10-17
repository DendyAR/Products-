const Part = {
    buttonPurple : (props)=>{
        return(
            <button className="btn btn-lg btn-purple rounded-pill my-2 py-3" type="submit">{props.text}</button>
        )
    },
    buttonWhite : (props)=>{
        if(props.image != null){
            return(
                <button className="btn btn-lg btn-outline-purple rounded-pill my-2 py-3">
                    <img src={props.image} alt="..." className="img-fluid icon" /> <span className="mb-0">{props.text}</span>
                </button>
            )
        }else{
            return(
                <button className="btn btn-lg btn-outline-purple rounded-pill my-2 py-3">
                    <span className="mb-0">{props.text}</span>
                </button>
            )
        }
    },
    sidebar : (props)=>{
        
    }
}

export default Part