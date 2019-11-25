import React, { Component } from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';

class Note extends Component {
  render() {
    return (
      <div className="Grid">
          <Link to='/sem1' style={{ textDecoration: 'none' }}>
        <article>Sem 1</article>
          </Link>
          <article>Sem 2</article>
          <article>Sem 3</article>
         <article>Sem 4</article>
         <article>Sem 5</article>
          <article>Sem 6</article>
        </div>
    );
  }
}

export default Note;
