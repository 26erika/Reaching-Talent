import React, { Component } from "react";
import Logo from "../../../Images/astra-logo.png";
import Axios from "axios";
import baseURL from "../../../Constant/Env";
import { Button, Icon} from 'semantic-ui-react'

class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    };
  }
  componentDidMount() {
    Axios.get(baseURL + `/recruiter`)
      .then(res => {
        const results = JSON.parse(res.data);
        this.setState({ results });
      })
      .catch(e => {
        console.log(e);
      });
  }
  handleClick() {
    console.log(this.state.results);
  }

  render() {
    if (this.state.results === null) {
      return <p>Loading</p>;
    } else {
      return (
        <div className="results">
          <img className="logo-astra" src={Logo} alt="logo" />
          <div className="container-login-recruiter">
            <Button icon onClick={() => this.props.history.push("/recruiter-login")}>
            <Icon name='sign-out' />
            </Button>
            <h2 className="title-area">Candidates who passed the test.</h2>
            <div>
              <div className="all-results">
                {this.state.results.map(item => {
                  return (
                    <div div className="card">
                      <h4>Contact: {item.contact}</h4>
                      <h5>Result: {item.result}</h5>
                      <h5>Time: {item.time}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Area;
