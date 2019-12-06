import React, { Component } from "react";
import Logo from "../../../Images/astra-logo.png";
import Card from "../Admin-Elements/Card";
import Axios from "axios";

class Area extends Component {
 constructor(props){
     super (props)
        
 
        // Make a request for a user with a given ID
        Axios.get('/user?ID=12345')
          .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
     
 }
    render() {
    
 
    return (
        
        <div className= "results">
            <img className="logo-astra" src={Logo} alt="logo" />
            <div className="container-login-recruiter">
                <button>[-></button>
                <h2 className="title-area">Candidates who passed the test.</h2>
                <div>
                    <Card/>
                </div>
            </div>
        </div>
    )
  }
}
export default Area;
