import React, { useState, Fragment } from 'react';
import '../../css/qp.css';


function sem2() {
  const [showText, setShowText] = useState(false);
  const [showone, setshowone] = useState(false);
  const [showtwo, setshowtwo] = useState(false);
  return (
    <Fragment>
      <button className="buon" onClick={() => setShowText(!showText)}>
      <article className="box" > 2019 </article>
      </button>
      {showText && <div className="content">
         <ul><a href="#">Technical English - I</a></ul>
         <ul><a href="#">Engineering Mathematics - I</a></ul>
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



export default sem2;
