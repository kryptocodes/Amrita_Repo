import React, { useState, Fragment } from 'react';
import '../../css/qp.css';


function sem2() {
  const [showText, setShowText] = useState(false);
  const [showone, setshowone] = useState(false);
  const [showtwo, setshowtwo] = useState(false);
  const [showthree, setshowthree] = useState(false);
  const [showfour, setshowfour] = useState(false);
  const [showfive, setshowfive] = useState(false);
  return (
    <Fragment>
      <button className="buon" onClick={() => setShowText(!showText)}>
      <article className="box" > Engineering Mathematics - II </article>
      </button>
      {showText && <div className="content">
         <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowone(!showone)}>
      <article > Physics for Civil Engineering </article>
      </button>
      {showone && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowtwo(!showtwo)}>
      <article > Materials Science </article>
      </button>
      {showtwo && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
        <button className="buon" onClick={() => setshowthree(!showthree)}>
      <article > Engineering Physics - I </article>
      </button>
      {showthree && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowfour(!showfour)}>
      <article > Physics for Information Science </article>
      </button>
      {showfour && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
       <button className="buon" onClick={() => setshowfive(!showfive)}>
      <article > Physics for Electronics Engineering </article>
      </button>
      {showfive && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      
      
    </Fragment>
  );
}



export default sem2;
