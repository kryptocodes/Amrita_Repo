import React, { useState, Fragment } from 'react';
import '../../css/qp.css';


function sem1() {
  const [showText, setShowText] = useState(false);
  const [showone, setshowone] = useState(false);
  const [showtwo, setshowtwo] = useState(false);
  const [showthree, setshowthree] = useState(false);
  const [showfour, setshowfour] = useState(false);
  const [showfive, setshowfive] = useState(false);
  return (
    <Fragment>
       <div className="bbx">
      <button className="buon" onClick={() => setShowText(!showText)}>
      <article className="box" >Engineering Mathematics - I</article>
      </button>
      {showText && <div className="content">
         <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowone(!showone)}>
      <article >Engineering Physics - I</article>
      </button>
      {showone && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowtwo(!showtwo)}>
      <article>Engineering Chemistry - I</article>
      </button>
      {showtwo && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
        <button className="buon" onClick={() => setshowthree(!showthree)}>
      <article>Engineering Graphics</article>
      </button>
      {showthree && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowfour(!showfour)}>
      <article>Problem Solving and Python Programming</article>
      </button>
      {showfour && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
       <button className="buon" onClick={() => setshowfive(!showfive)}>
      <article>Technical English - I</article>
      </button>
      {showfive && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      
      </div>
    </Fragment>
  );
}



export default sem1;
