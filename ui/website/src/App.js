import React from 'react';
import logo from './logo.svg';
import './App.css';

axios.defaults.baseURL = 'http://iogapi.iassureit.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
    </div>
  );
}

export default App;

//================
// Git Commit Test
//================