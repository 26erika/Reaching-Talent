import React, {Component} from 'react';
import Axios from 'axios';
import Logo from '../../../Images/astra-logo.png';
import Data from '../Elements/dataFalse.js';
import QuestionsContainer from '../Elements/QuestionsContainer.js'


class TalentTest extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      randomQuestions: []
    }
  };

  componentDidMount() {
     Axios.get(`https://jsonplaceholder.typicode.com/users`)
       .then(res => {
         const questions = res.data;
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

handleClickAnswer(answer, idQuestion){
  this.setState({
    results: {...this.state.results, [idQuestion]: idQuestion}
  })
}


render(){
  return (
    <div className= "questions">
        <img className="logo-astra" src={Logo} alt="logo" />
        <div className="container">

          <button onClick = { () => this.handleClick(this.state.questions)}>Start test
          </button>

          <ul>
              {this.state.questions.map((question) => (
                 <li  className="table">
                    <tbody>
                      <h2>{question.name}</h2>
                      <input type="radio"  name="" onClick={()=>{
                        this.handleClickAnswer(question.options[0].ok, question.id)
                      }}/> {question.username}
                      <input type="radio" onClick={()=>{
                        this.handleClickAnswer(question.options[1].ok, question.id)
                      }}/> {question.email}
                      <input type="radio" onClick={()=>{
                        this.handleClickAnswer(question.options[2].ok, question.id)
                      }}/> {question.phone}


                      </tbody>
                  </li>
                  ))}
          </ul>
        </div>

    </div>

  )
}
}
  export default TalentTest;
