import Part from '../../../components/part'
import {Link} from 'react-router-dom'
import React,{useState, useEffect} from 'react'
import { UserLogin } from '../../../Redux/Actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import SplashScreen from '../../../components/SplashScreen';

const Login = () =>{
  const dispatch = useDispatch()
  const [splash, setSplash] = useState(true)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 5000);
  }, []);

  useEffect(()=>{
    const comp = document.getElementById("inputPassword");
    console.log(show);
    if(show){
      comp.type = "text";
    }
  },[show])

  const [loginLoading, setLoginLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '-',
    password: '-'
  })
  const { data,error } = useSelector((state)=> state.UserLogin)

  const processLogin = (e)=>{
    e.preventDefault()
    dispatch(UserLogin(formData, setLoginLoading))
  }
  if(splash){
    return (
      <>
        <SplashScreen/>
      </>
    )
  }else{
    return(
      <div className='bg-light'>
      <section className="container-fluid">
        <div className="row justify-content-center">
        <div className='auth card bg-white p-5 shadow-sm col-md-4'>
          <form onSubmit={(e)=> processLogin(e)}>
            <h4 className="text-center text-purple fw-bold">Login</h4>
            <span className="text-start mt-4 mb-3 fw-bold">Hi, Welcome back!</span>
            <div className="my-1">
              <label htmlFor="inputEmail" className="form-text">Email</label>
              <input type="email" className="form-control input-line" id="inputEmail" name="inputEmail" onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
              }} required />
            </div>
            <div className="my-1">
              <label htmlFor="inputPassword" className="form-text">Password</label>
              <input type="password" className="input-line form-control password" name="inputPassword" id="inputPassword" onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value })
              }}/>
              <div className="btn-lg toogle-btn align-content-md-end" name="toogle">
                {!show ? (
                      <img
                        src={process.env.PUBLIC_URL + '/images/i_eye.svg'}
                        onClick={() => setShow(true)}
                      />
                    ) : (
                      <img
                        src={process.env.PUBLIC_URL + '/images/i_eye.svg'}
                        onClick={() => setShow(false)}
                      />
                  )}
              </div>
            </div>
            <Link to='./forgot_password' className='mb-3 text-purple'>
              <span className='text-float-end'>Forgot Password ?</span>
            </Link>
            {loginLoading ? (
              <Part.buttonPurple text='Loading...' disabled={loginLoading}  onClick={(e)=> processLogin(e)}/>
            ):(
              <Part.buttonPurple text='Login'  onClick={(e)=> processLogin(e)}/>
            )}
            
          </form>
          <span className="text-muted text-center label">Login with</span>
            <Part.buttonWhite text=' Google' image ={process.env.PUBLIC_URL + '/images/i_google.svg'}  />
            <span className="mb-1 text-center">Don't have account ?
            <Link to='./register'  className='text-purple fw-bold'>
              <span>Sign Up</span>
            </Link>
            </span>
        </div>
        </div>
      </section>
      </div>
    )
  }
  
}

export default Login