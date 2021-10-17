import React from 'react'
import { useHistory } from 'react-router-dom'
import Part from '../../../components/part'

const ForgotPassword = ()=>{
    const history = useHistory()
    const goBack = () =>{
        history.goBack()
    }
    return(
        <section className="container-fluid">
            <div className="row justify-content-center">
                <form className="auth card bg-white p-5 shadow-sm col-md-4">
                    <div className="d-flex align-items-center my-1">
                        <button onClick={goBack} className="ps-0 float-md-start btn-lg back-btn" title="login page" type="button" name="back">
                            <img src={process.env.PUBLIC_URL + '/images/i_back.svg'} alt="..." />
                        </button>
                        <h4 className="flex-grow-1 text-center text-purple">Forgot Password</h4>
                    </div>
                    <span className="my-4 fw-bold text-sm-start">You’ll get messages soon on your e-mail</span>
                    <div className="mb-5">
                        <label htmlFor="exampleInputEmail1" className="form-text">Email</label>
                        <input type="email" className="form-control input-line" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                    </div>
                    <div className="d-grid gap-2">
                    <button onClick={goBack} className="btn btn-lg btn-purple mb-1 rounded-pill my-3 py-3" type="button" name="send">
                        Send
                    </button>
                        <Part.buttonPurple text='Send'/>
                    </div>
                </form>
            </div>
        </section>
    )
}



export default ForgotPassword