import React, { Component } from "react";

class QuestionsContainer extends Component {
  constructor(props){
    super(props);
      this.question = props.question;
  }

  render() {
    return (
      <div className="questionsContainer">
        <div className="card">
          <p className="question"> ({this.question})</p>

        </div>
      </div>
    );
  }
}
export default QuestionsContainer;
