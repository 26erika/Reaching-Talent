import React, { Component } from "react";
import Logo from "../../../Images/astra-logo.png";
import { Button, Icon } from 'semantic-ui-react'

class RecruiterLogin extends Component {
constructor(props){
    super(props);
    this.state = {
      user:'astra',
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
  if(this.state.user === 'astra') {
    this.props.history.push('/area')
  }
  else{alert("This user isn't registered")}
  
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
              <input type="password" value={this.setState.password} onChange={this.handlePassword} user="password" placeholder="Password" />
            </form>
            <Button icon className="button-login" onClick={this.handleLogin}  type="submit">
                <Icon name='sign-in'/>
            </Button>
          </section>
        </div>
      </div>
    );
  }
}
export default RecruiterLogin;
