import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'

const ButtonExampleButton = () => <Button>Click Here</Button>




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button class="ui button">Click Here</button>
    </div>
  );
}

export default App;
