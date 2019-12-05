import React, { useState, Fragment } from 'react';
import '../../css/home.css';


/*class sem1 extends Component {
  state={};
  handleClick =() =>{
    this.renderbox(this.state.r1)
  }
  renderbox(r1)
  {
    return <h1>HEllo world</h1>
  }
  render() {
    return (
      <div>
        <div className="Grid">
          <article >2019</article>
         
         
          <article>2018</article>
         
          <article>2017</article>
          <article>2016</article>
        </div>
      </div>
    );
  }
}
*/
function sem1() {
  const [showText, setShowText] = useState(false);
  const [showone, setshowone] = useState(false);
  return (
    <Fragment>
        <div className="Grid">
      <button style={{ textDecoration: 'none',background:'none',border:'none' }}onClick={() => setShowText(!showText)}>
      <article > 2019 </article>
      </button>
      {showText && <div style={{position:'relative'}}>This text will show!</div>}
      <button onClick={() => setshowone(!showone)}>
        Click to Show/Hide Stuff
      </button>
      {showone && <div>This text will show!</div>}
      </div>
    </Fragment>
  );
}



export default sem1;
