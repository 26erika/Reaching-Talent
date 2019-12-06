import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="all-results">
        <div className="card">
          <h5>Contact:example@example.com</h5>
          <h6>Duration:30 min</h6>
          <h6>Result:10/20</h6>
        </div>
        <div className="card">
          <h5>Contact:example@example.com</h5>
          <h6>Duration:30 min</h6>
          <h6>Result:10/20</h6>
        </div>
      </div>
    );
  }
}
export default Card;
