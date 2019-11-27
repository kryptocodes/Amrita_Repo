import React, { Component } from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Grid">
        <Link to='/timetable' style={{ textDecoration: 'none' }}>
          <article>Time table</article>
          </Link>
          <Link to='/notes' style={{ textDecoration: 'none' }}>
          <article>Notes</article>
          </Link>
          <Link to='/404' style={{ textDecoration: 'none' }}>
          <article>Question bank</article>
          </Link>
          <Link to='/404' style={{ textDecoration: 'none' }}>
         <article>Academic Calender</article>
         </Link>
         <Link to='/404' style={{ textDecoration: 'none' }}>
         <article>Bus Timings</article>
         </Link>
         <Link to='/404' style={{ textDecoration: 'none' }}>
          <article>Exam Schedule</article>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
