import React, { useState, Fragment } from 'react';
import '../../css/qp.css';

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
  const [showtwo, setshowtwo] = useState(false);
  return (
    <Fragment>
      <button className="buon" onClick={() => setShowText(!showText)}>
      <article className="box" > 2019 </article>
      </button>
      {showText && <div className="content">
          <ul>Technical English - I</ul>
          <a href="http://www.hariganesh.com/pdf/University%20Question%20Papers/R17/M1/M1_R17_AprilMay_19.pdf" target="_blank" download>
         <ul>Engineering Mathematics - I</ul></a>
         <ul><a href="#">Engineering Physics - I</a></ul>
         <ul><a href="#">Engineering Chemistry - I</a></ul>
         <ul><a href="#">Engineering Graphics</a></ul>
         <ul><a href="#">Problem Solving and Python Programming</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowone(!showone)}>
      <article > 2018 </article>
      </button>
      {showone && <div className="content">
         <ul><a href="#">Technical English - I</a></ul>
         <ul><a href="#">Engineering Mathematics - I</a></ul>
         <ul><a href="#">Engineering Physics - I</a></ul>
         <ul><a href="#">Engineering Chemistry - I</a></ul>
         <ul><a href="#">Engineering Graphics</a></ul>
         <ul><a href="#">Problem Solving and Python Programming</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowtwo(!showtwo)}>
      <article > 2017 </article>
      </button>
      {showtwo && <div className="content">
         <ul><a href="#">Technical English - I</a></ul>
         <ul><a href="#">Engineering Mathematics - I</a></ul>
         <ul><a href="#">Engineering Physics - I</a></ul>
         <ul><a href="#">Engineering Chemistry - I</a></ul>
         <ul><a href="#">Engineering Graphics</a></ul>
         <ul><a href="#">Problem Solving and Python Programming</a></ul>
         </div>
      }
    </Fragment>
  );
}



export default sem1;
