import React, { Component } from "react";
import Logo from "../../../Images/astra-logo.png";
import Card from "../Admin-Elements/Card";
import Axios from "axios";
import baseURL from '../../../Constant/Env'
import Data from '../../Candidate/Elements/dataFalse'

class Area extends Component {
    constructor(props){
        super(props);
        this.state={
            results:[]
        }
    }

  componentDidMount(){
    Axios.get(baseURL +'/recruiter')
    .then(res => {
        const results = res.data;
        let filterResults = [];
        for (let i=0; i< results.length; i++){
            filterResults.push(results[i])
        }
        this.setState({results});
        
    })
    .catch(e => {
        console.log(e);
        
    })
  }
  handleClick(){
    console.log(this.state.results);
  }

 /*componentDidMount=()=>{
    Axios({
        method: 'GET',
        url: `https://api.github.com/users/`,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization': ''
        }
        console.log();
        
      })
      
    }*/
    render() {
    
 
    return (
        
        <div className= "results">
            <img className="logo-astra" src={Logo} alt="logo" />
            <div className="container-login-recruiter">
                <button onClick={() => this.handleClick(this.state.results)} >[-></button>
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
