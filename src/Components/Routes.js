import React, { Component } from "react";
import {HashRouter, Route, NavLink} from 'react-router-dom';
import RecruiterLogin from "./Recruiter/Admin-Pages/Recruiter-Home";
import LoginForm from "./Candidate/Pages/Home";
import Area from "./Recruiter/Admin-Pages/Area";
import TalentTest from "./Candidate/Pages/Talent-Test";

class Routes extends Component{
    render(){
        return(
            <HashRouter>
                <Route exact path='/login-form' component={LoginForm}/>
                <Route exact path='/recruiter-login' component={RecruiterLogin}/>
                <Route exact path='/area' component={Area}/>
                <Route exact path='/talent-test' component={TalentTest}/>
            </HashRouter>
        )
    }
}
export default Routes;