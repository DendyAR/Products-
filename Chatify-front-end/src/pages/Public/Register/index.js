import React,{useState} from 'react'
import Part from '../../../components/part'
import { Link} from 'react-router-dom'
import { UserRegister } from '../../../Redux/Actions/auth'
import { useDispatch} from 'react-redux'

const Register = () =>{
    const formsData = new FormData()
    const dispatch = useDispatch()
    const [registerLoading, setRegisterLoading] = useState(false)
    const [formData, setFormData] = useState({
        username: '-',
        email: '-',
        password: '-'
    })

    const processRegister = (e)=>{
        e.preventDefault()
        dispatch(UserRegister(formData, setRegisterLoading))
    }

    return(
        <div className='bg-light'>
        <section className="container-fluid">
            <div className="row justify-content-center">
                <form className="auth card bg-white p-5 shadow-sm col-md-4" onSubmit={(e)=>processRegister(e)}>
                    <div className="d-flex align-items-center my-1">
                    <Link to="./Login">
                        <button className="ps-0 float-md-start btn-lg back-btn"><img src={process.env.PUBLIC_URL + '/images/i_back.svg'}  alt="..." /></button>
                    </Link>
                        <h4 className="flex-grow-1 text-center text-purple my-1 fw-bold">Register</h4>
                    </div>
                    <span span className="text-start my-4 fw-bold">Let’s create your account!</span>
                    <div className="my-1">
                        <label htmlFor="exampleInputName" className="form-text">Name</label>
                        <input type="text" className="form-control input-line" id="exampleInputName" name="inputName" aria-describedby="Name" 
                        onChange={(e) => {setFormData({ ...formData, username: e.target.value })}}
                        />
                    </div>
                    <div className="my-1">
                        <label htmlFor="exampleInputEmail" className="form-text">Email</label>
                        <input type="email" className="form-control input-line" id="exampleInputEmail" name="inputEmail" aria-describedby="Email"
                        onChange={(e) => {setFormData({ ...formData, email: e.target.value })}}
                        />
                    </div>
                    <div className="my-1">
                        <label htmlFor="exampleInputPassword1" className="form-text">Password</label>
                        <input type="password" className="form-control input-line password" id="exampleInputPassword1" name="inputPassword" 
                        onChange={(e) => {setFormData({ ...formData, password: e.target.value })}}/>
                        <button className="btn-lg toogle-btn align-content-md-end" name="toogle"><img src={process.env.PUBLIC_URL + '/images/i_eye.svg'}  alt="..." /></button>
                    </div>
                    <div className="d-grid gap-2">
                        {registerLoading ? (
                            <Part.buttonPurple text='Loading...' disabled={registerLoading} />
                        ):(
                            <Part.buttonPurple text='Register' onClick={(e)=> processRegister(e)}/>
                        )}
                    
                        <div className="row my-3">
                           
                            <div className="col-4 text-center">
                                <span className="text-muted text-sm">Register with</span>
                            </div>
                            
                        </div>
                       
                        <button className="btn btn-lg btn-outline-purple rounded-pill my-3 py-3 fw-bold" type="button" name="btn-google"><img src={process.env.PUBLIC_URL + '/images/i_google.svg'}  alt="..." /> Google</button>
                     
                    </div>
                </form>
            </div>
        </section>
        </div>
    )
}

export default Register

