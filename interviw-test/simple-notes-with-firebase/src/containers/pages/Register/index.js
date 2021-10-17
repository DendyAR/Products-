import React, { Component } from "react";
import "./Register.scss";
import Button from "../../../components/atoms/Button";
import { connect } from "react-redux";
import { registerUserAPI } from "../../../config/redux/action";


class Register extends Component {
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

  handleRegisterSubmite = async () => {
    // Destructure email dan password dan kirim ke this.state
    const { email , password } = this.state
    const res = await this.props.registerAPI({email, password}).catch(err => err);
    if(res){
      this.setState({
        email: "",
        password: "",
      })
      alert("Anda Berhasil Login")
    this.props.history.push('/login')
    }
  };

  goTologin =  () => {
    const { history } = this.props
    this.setState({
      email: "",
      password: "",
    })
    history.push('/login')
  }


  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register page</p>
          <input
            className="input"
            id="email"
            placeholder="Email"
            type="text"
            onChange={this.handleChangeText}
            value={this.state.email}
          />
          <input
            className="input"
            id="password"
            placeholder="Passwoard"
            type="password"
            onChange={this.handleChangeText}
            value={this.state.password}
          />
          <Button
            onClick={this.handleRegisterSubmite}
            title="Register"
            loading={this.props.isLoading}
          />
        <button className="btn" onClick={this.goTologin}>Login</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading
}) 

const reduxDispatch = (dispatch) => ({
   registerAPI:(data) => dispatch(registerUserAPI(data))
})

export default connect(mapStateToProps, reduxDispatch) (Register);
