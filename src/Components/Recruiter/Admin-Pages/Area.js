import React, { Component } from "react";
import Logo from "../../../Images/astra-logo.png";
import Card from "../Admin-Elements/Card";
import Axios from "axios";

class Area extends Component {
 constructor(props){
     super (props)
        
 componentDidMount=()=>{
    Axios({
        method: 'GET',
        url: baseURL + `/orders`,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization': ''
        }
      })
 }
     
 }
    render() {
    
 
    return (
        
        <div className= "results">
            <img className="logo-astra" src={Logo} alt="logo" />
            <div className="container-login-recruiter">
                <button onClick={() => this.props.history.push('/recruiter-login')}>[-></button>
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
