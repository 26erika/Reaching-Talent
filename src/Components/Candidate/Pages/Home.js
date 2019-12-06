import React, {Component} from 'react';
import Logo from "../../../Images/astra-logo.png";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
     this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('The test will begin');
    event.preventDefault();
  }

render() {
  return (
    <div className="loginForm">
      <img className="logo-astra" src={Logo} alt="logo" />
      <h1>Reaching Talent</h1>

      <p>Guessing if you can be part of AstraZeneca's family?</p>
      <p>Ẃelcome to our app.....</p>

    <div>
        <form onSubmit={this.handleSubmit}>
            <label>
              Email
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button type="submit" class="button">Submit</button>
        </form>
      </div>

    </div>
    )
}
}


export default LoginForm;
