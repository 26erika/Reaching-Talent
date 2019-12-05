import React, { Component } from "react";
import Logo from "../../../Images/astra-logo.png";

class RecruiterLogin extends Component {
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
              <input placeholder="First Name" />
            </form>
            <form className="form-login-recruiter">
              <p>Password</p>
              <input placeholder="Last Name" />
            </form>
            <button className="button-login" type="submit">Submit</button>
          </section>
        </div>
      </div>
    );
  }
}
export default RecruiterLogin;
