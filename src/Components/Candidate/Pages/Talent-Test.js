import React, {Component} from 'react';
import Axios from 'axios';
import Logo from '../../../Images/astra-logo.png';
import Timer from '../Elements/Timer.js';
import baseURL from '../../../Constant/Env';
import { Card } from 'semantic-ui-react';


class TalentTest extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      results: []
    }
  };

  allResults=()=>{}

  componentDidMount() {
     Axios.get(baseURL + `/candidate`)
       .then(res => {
         const questions = res.data;
         this.setState({ questions });
       })
       .then(console.log());  

       
    }
    

handleClick(){
  const randomItems = Math.floor(Math.random() * 7) + 1;
  const randomQuestions = this.state.questions[randomItems];
  console.log(this.state.questions);
  console.log(randomQuestions);
}

//handleClickAnswer(answer, idQuestion){
//  this.setState({
//    results: {...this.state.results, [idQuestion]: idQuestion}
//  })
//}


render(){

    if(this.state.questions === null) {
      return (
        <p>fetching</p>
      )
    } else {
      return (


    <div className= "questions">
        <img className="logo-astra" src={Logo} alt="logo" />

        <div className="testInstructions">Choose one of </div>

        <div className="container black">

          <div>
            {this.state.questions.map((item) => (
              <div className="questionCard">
                <div className="header">{item.question}</div>

                  <div className="radioForm">

                    <div className="radio">
                      <input type="radio" name="radio"  /> {item.answerOne}
                    </div>
                    <div className="radio">
                      <input type="radio" name="radio" /> {item.answerTwo}
                    </div>
                    <div className="radio">
                      <input type="radio"  name="radio" /> {item.answerThree}
                    </div>

                  </div>

                </div>

              ))}
          </div>

          <div className="timer">
            <Timer />
          </div>
        </div>

      <button onClick = { () => this.handleClick(this.state.questions)}>Finish test
      </button>

    </div>

  )

}
}
}

  export default TalentTest;
