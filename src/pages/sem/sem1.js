import React, { Component } from 'react';
import '../../css/home.css';
import '../../css/button.css';
import Collapsible from '../../Component/Collapsible';

class sem1 extends Component {
  render() {
    return (
        <div className="Grid">
        <article> <Collapsible trigger="Engineering Mathematics">
       Sem 1</Collapsible></article>
          <article>Sem 2</article>
          <article>Sem 3</article>
         <article>Sem 4</article>
         <article>Sem 5</article>
          <article>Sem 6</article>
        </div>

      


    );
  }
}

export default sem1;
