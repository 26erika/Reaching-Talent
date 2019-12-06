import React, from 'react';
import Axios from 'axios';
import Logo from "../../../Images/astra-logo.png";


class TalentTest extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questions = []
    }
  }
}


axios = () => {
    axios.get('/')
      .then(function (response) {
        return
      })
      .catch(function (error) {

      })
      .finally(function () {

      });
}

  export default TalentTest;
