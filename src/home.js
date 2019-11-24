import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Grid">
        <Link to='/timetable' style={{ textDecoration: 'none' }}>
          <article>Time table</article>
          </Link>
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

export default Home;
