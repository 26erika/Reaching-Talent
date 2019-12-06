import React, { Component } from "react";
import Logo from "../../../Images/astra-logo.png";
import Axios from "axios";
import baseURL from "../../../Constant/Env";

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
      return <p>fetching</p>;
    } else {
      return (
        <div className="results">
          <img className="logo-astra" src={Logo} alt="logo" />
          <div className="container-login-recruiter">
            <button onClick={() => this.props.history.push("/recruiter-login")}>
              [->
            </button>
            <h2 className="title-area">Candidates who passed the test.</h2>
            <div>
              <ul>
                {this.state.results.map(item => {
                  return (
                    <li>
                      <h5>Contact: {item.contact}</h5>
                      <h6>Result: {item.result}</h6>
                      <h6>Time: {item.time}</h6>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Area;
