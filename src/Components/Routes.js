import React, { Component } from "react";
import {HashRouter, Route} from 'react-router-dom';
import RecruiterLogin from "./Recruiter/Admin-Pages/Recruiter-Home";
import LoginForm from "./Candidate/Pages/Home";
import TalentTest from './Candidate/Pages/Talent-Test.js';

class Routes extends Component{
    render(){
        return(
            <HashRouter>
                <Route exact path='/login-form' component={LoginForm}/>
                <Route exact path='/recruiter-login' component={RecruiterLogin}/>
              
            </HashRouter>
        )
    }
}
export default Routes;
