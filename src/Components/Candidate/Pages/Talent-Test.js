import React, {Component} from 'react';
import Axios from 'axios';
import Logo from '../../../Images/astra-logo.png';
import Data from '../Elements/dataFalse.js';


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
  const randomItems = Math.floor(Math.random() * 10) + 1;
  const randomQuestions = this.state.questions[randomItems];
  console.log(this.state.questions);
  console.log(randomQuestions);
}


render(){
  return (
    <div className= "questions">
        <img className="logo-astra" src={Logo} alt="logo" />
        <div className="container">

          <button onClick = { () => this.handleClick(this.state.questions)}>Start test
          </button>
        </div>

    </div>

  )
}
}
  export default TalentTest;
