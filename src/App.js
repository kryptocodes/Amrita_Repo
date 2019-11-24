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
        <div className="Grid">
          <article>TimeTable</article>
          <article>Notes</article>
          <article>Question bank</article>
         <article>4</article>
         <article>5</article>
          <article>6</article>
        </div>
      </div>
    );
  }
}

export default App;
