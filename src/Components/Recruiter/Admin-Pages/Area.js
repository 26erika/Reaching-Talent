import React, { Component } from "react";
import Logo from "../../../Images/astra-logo.png";

class Area extends Component {
  render() {
 
    return (
        
        <div className= "results">
            <img className="logo-astra" src={Logo} alt="logo" />
            <div className="container-login-recruiter">
                <h2 className="title-area">Candidates who passed the test.</h2>
                <div></div>
            </div>
        </div>
    )
  }
}
export default Area;
