import React, { Component } from 'react';
import '../../css/home.css';
import { Link } from 'react-router-dom';
class qp extends Component {
  render() {
    return (
      <div>
        <div className="Grid">
        <Link to='/sem1' style={{ textDecoration: 'none' }}>
          <article>Sem 1</article>
          </Link>
          <Link to='sem2' style={{ textDecoration: 'none' }}>
          <article>Sem 2</article>
          </Link>
          <Link to='/404' style={{ textDecoration: 'none' }}>
          <article>Sem 3</article>
          </Link>
          <Link to='/404' style={{ textDecoration: 'none' }}>
          <article>Sem 4</article>
          </Link>
          <Link to='/404' style={{ textDecoration: 'none' }}>
          <article>Sem 5</article>
          </Link>
          <Link to='/404' style={{ textDecoration: 'none' }}>
          <article>Sem 6</article>
          </Link>
          <Link to='/404' style={{ textDecoration: 'none' }}>
          <article>Sem 7</article>
          </Link>
          <Link to='/404' style={{ textDecoration: 'none' }}>
          <article>Sem 8</article>
          </Link>
        </div>
    </div>
    )
    }
}


export default qp