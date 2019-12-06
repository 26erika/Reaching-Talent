import React, { Component } from "react";
import Logo from "../../../Images/astra-logo.png";

class RecruiterLogin extends Component {
constructor(props){
    super(props);
    this.state = {
      user:'prueba',
      password:'123456'
    }
}



handleUser = (e)=> {
  this.setState({user: e.target.value});
}
handlePassword = (e) => {
  this.setState({password: e.target.value});
}

handleLogin = (e) => {
  if(this.state.user === 'prueba') {
    alert("Test already executed")
  }
  else{this.props.history.push('/area')
console.log("cambio de página")}
  // console.log("User: " + this.state.user);
  // console.log("Password: " + this.state.password);
}


  render() {
    return (
      <div className="login-recruiter">
        <img className="logo-astra" src={Logo} alt="logo" />
        <div className="container-login-recruiter">
          <h3>
            To get the applicant's history, Please enter your User name and
            your Password
          </h3>
          <section className="section-login">
            <form className="form-login-recruiter">
              <p>User Name</p>
              {/* value={this.user} */}
              <input value={this.setState.user} onChange={this.handleUser} name="user" placeholder="User Name" />
            </form>
            <form className="form-login-recruiter"> 
              <p>Password</p>
              <input  value={this.setState.password} onChange={this.handlePassword} user="password" placeholder="Password" />
            </form>

            <button className="button-login" onClick={this.handleLogin} type="submit">Submit</button>
            <button className="button-login" onClick={() => this.props.history.push('/area') }  type="submit">Submit</button>
          </section>
        </div>
      </div>
    );
  }
}
export default RecruiterLogin;
