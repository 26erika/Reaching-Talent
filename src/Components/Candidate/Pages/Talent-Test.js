import React, {Component} from 'react';
import Axios from 'axios';
import Logo from '../../../Images/astra-logo.png';
import Data from '../Elements/dataFalse.js';
import QuestionsContainer from '../Elements/QuestionsContainer.js';
import baseURL from '../../../Constant/Env';


class TalentTest extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      results: []
    }
  };

  componentDidMount() {
     Axios.get(baseURL + `/candidate`)
       .then(res => {
         const questions = JSON.parse(res.data);
         this.setState({ questions });
       })
       .then(console.log())
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



        <div className="container">

        <div>
            {this.state.questions.map((item) => (
                  <div>
                    <h2>{item.content}</h2>
                    <input type="radio" name="radio"  /> {item.answerOne}
                    <input type="radio" name="radio" /> {item.answerTwo}
                    <input type="radio"  name="radio" /> {item.answerThree}
                    </div>  
              ))}
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
