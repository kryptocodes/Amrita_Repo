import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><a href="https://notesatamrita.me">Amrita Repo</a></h2>
        </div>
        <p className="App-intro">
          Site Under Construction until then use <a href="https://notesatamrita.me">Notes@Amrita</a>.
        </p>
      </div>
    );
  }
}

export default App;
