import React, { Component } from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
     <nav>
         <Link to="/" style={{ textDecoration: 'none' }}>
         <h1>Amrita Repo</h1>
         
         </Link>
         <p>One for all</p>
     </nav>
    );
  }
}

export default Nav;
