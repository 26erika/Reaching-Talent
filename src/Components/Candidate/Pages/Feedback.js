import React, {Component} from 'react';
import Logo from '../../../Images/astra-logo.png';
import Check from '../../../Images/checked.png';




class Feedback extends Component{
    constructor(props) {
        super(props);
        this.state = {
          results: null
        };
      }
    //   componentDidMount() {
    //     Axios.get(baseURL + `/recruiter`)
    //       .then(res => {
    //         const results = JSON.parse(res.data);
    //         this.setState({ results });
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   }
    //   handleClick() {
    //     console.log(this.state.results);
    //   }
    
      render() {
        
          return (
             
            <div >
                 <div className="headeR"> 
        </div>
                
                
              <div class="divFeed1">
                        <div className="imgAZ">
                          <img className="logo-astra"  src={Logo} alt="logo" />
                       </div>
                  
                  <h2 className="textNormal">You have completed all tests! </h2>
                  <div>
                  <h3 className="textNormal" >You have passed the tests. 
                  <img   src={Check} alt="logo" /></h3>
                   <p className="textNormal" > Congratulations!
                   </p>
                   <p className="textNormal" >
                   We will contact you as soon as possible for a personal interview</p>
              <textarea placeholder="Write your feedback" className="texArea1"></textarea>
              <button className="butt" onClick = { () => this.props.history.push('/')}>Send and finalize</button>
              </div>
              </div>
            </div>
          );
        }
      }
    

  export default Feedback;