import React, {Component} from 'react';

class LoginForm extends React.Component {
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
    <div>
      <h1>Reaching Talent</h1>

      <form onSubmit={this.handleSubmit}>
          <label>
            Email

          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    </div>
    )
}
}


export default LoginForm;
