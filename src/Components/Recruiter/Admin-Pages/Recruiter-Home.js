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
handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
              <input value={this.user} name="user" placeholder="User Name" />
            </form>
            <form className="form-login-recruiter">
              <p>Password</p>
              <input value={this.password} user="password" placeholder="Password" />
            </form>
            <button className="button-login" onClick={() => this.props.history.push('/area') }  type="submit">Submit</button>
          </section>
        </div>
      </div>
    );
  }
}
export default RecruiterLogin;
