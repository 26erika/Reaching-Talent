import React from 'react';
import './App.css';


import RecruiterLogin from './Components/Recruiter/Admin-Pages/Recruiter-Home';

import Area from './Components/Recruiter/Admin-Pages/Area';
import LoginForm from './Components/Candidate/Pages/Home.js';

function App() {
  return (

  <div>
    < LoginForm />

    <RecruiterLogin/>
    <Area/>
  </div>

  );
}

export default App;
