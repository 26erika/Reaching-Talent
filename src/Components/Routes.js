import React, { Component } from "react";
import {HashRouter, Route} from 'react-router-dom';
import RecruiterLogin from "./Recruiter/Admin-Pages/Recruiter-Home";
import LoginForm from "./Candidate/Pages/Home";

import TalentTest from './Candidate/Pages/Talent-Test.js';

import Area from "./Recruiter/Admin-Pages/Area";

import Feedback from "./Candidate/Pages/Feedback";



class Routes extends Component{
    render(){
        return(
            <HashRouter>
                <Route exact path='/' component={LoginForm}/>
                <Route exact path='/recruiter-login' component={RecruiterLogin}/>

              
                <Route exact path='/feedback' component={Feedback}/>
                <Route exact path='/area' component={Area}/>
                <Route exact path='/talent-test' component={TalentTest}/>

            </HashRouter>
        )
    }
}
export default Routes;
