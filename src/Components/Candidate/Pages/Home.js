import React, {Component} from 'react';
import Logo from "../../../Images/astra-logo.png";
import DevWoman from "../../../Images/devWomen.png"
import DevMen from "../../../Images/devMen.png"
import Axios from 'axios';
import baseURL from '../../../Constant/Env';
import {  Grid, Segment, Button} from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      contact:[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
     this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('The test will begin');
    event.preventDefault();

    const contact = {
      contact: this.state.contact
    }
    Axios.post((baseURL + `/recruiter`), {contact})
       .then(res => {
         console.log(res);
         console.log(res.data); 
       })
    }


render() {
  return (
    
    <div className="loginForm">
      <img className="logo-astra" src={Logo} alt="logo" />
      <div>
      <h1 className="title-login">Reaching Talent</h1>
      <Grid columns='equal'>
    <Grid.Column>
      <Segment color="yellow"><img className="img-login" src={DevWoman} alt="imglogin"></img ></Segment>
    </Grid.Column>
    <Grid.Column width={6}>
      <Segment color="yellow" className="form"><h3>Guessing if you can be part of AstraZeneca's family?</h3>
      <h5>Ẃelcome to our app.....</h5>
      <form onSubmit={this.handleSubmit}>
            <h5>
              Email
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </h5>

          <div class="field">
            <div class="checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <p>I agree to the Terms and Conditions</p>
            </div>
          </div>
          <Button color='yellow' onClick={() => this.props.history.push('/talent-test')} className="button" active>START TEST</Button>
        </form>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment color="yellow"><img className="img-login" src={DevMen} alt="imgin"></img></Segment>
    </Grid.Column>
  </Grid>
      
      </div>

    </div>
    )
}
}


export default LoginForm;
