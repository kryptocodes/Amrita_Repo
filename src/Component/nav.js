import React, { Component } from 'react';
import "../css/nav.css";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
     <nav>
         <Link to="/" style={{ textDecoration: 'none' }}>
         <h1>Amrita Repo</h1>
         </Link>
         <p><a href="https://youtu.be/s2KWRC342Wc">One for all</a></p>
     </nav>
    );
  }
}

export default Nav;
