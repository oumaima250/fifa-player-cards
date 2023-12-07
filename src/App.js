import React from 'react';
import PlayersList from './PlayersList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" />*/}
        <h1>FIFA Player Cards</h1>
        {/* The following lines are removed or commented out */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <PlayersList />
      </header>
    </div>
  );
}

export default App;
