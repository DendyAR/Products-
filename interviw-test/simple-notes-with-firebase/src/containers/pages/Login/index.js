import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUserApi } from "../../../config/redux/action";
import Button from "../../../components/atoms/Button";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  // fungsinya untuk menghandle text yang di inputkan di form
  handleChangeText = (e) => {
    this.setState({
      // Fungsi ini untuk membedakan target mana yg di ubah antara email dan password
      [e.target.id]: e.target.value,
    });
  };

  handleLoginSubmite = async () => {
    // Destructure email dan password dan kirim ke this.state
    const { email , password } = this.state
    const { history } = this.props
    const res = await this.props.loginAPI({email, password}).catch(err => err );
    if(res){
      console.log("Login Succsess", res)
      localStorage.setItem("userData", JSON.stringify(res))
      this.setState({
        email: "",
        password: "",
      })
      history.push('/')
    }else{
      console.log("Login failed")
    }
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Login page{this.props.userName}</p>
          <input
            className="input"
            id="email"
            placeholder="Email"
            type="text"
            onChange={this.handleChangeText}
          />
          <input
            className="input"
            id="password"
            placeholder="Passwoard"
            type="password"
            onChange={this.handleChangeText}
          />
         <Button
            onClick={this.handleLoginSubmite}
            title="Login"
            loading={this.props.isLoading}
          /> 
          {/* <button className="btn" title="login" onClick={this.handleLoginSubmite} loading={this.props.isLoading}> Login</button>
          <button className="btn" >Go to Register</button> */}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  isLoading: state.isLoading
}) 

const reduxDispatch = (dispatch) => ({
   loginAPI:(data) => dispatch(loginUserApi(data))
})

// connect di gunakan untuk penggunaan store yang sudah di buat
export default connect(mapStateToProps, reduxDispatch)(Login);
