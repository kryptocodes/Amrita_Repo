import React, { useState, Fragment } from 'react';
import '../../css/qp.css';


function sem2() {
  const [showText, setShowText] = useState(false);
  const [showone, setshowone] = useState(false);
  const [showtwo, setshowtwo] = useState(false);
  const [showthree, setshowthree] = useState(false);
  const [showfour, setshowfour] = useState(false);
  const [showfive, setshowfive] = useState(false);
  const [showsix,setshowsix] = useState(false);
  const [showseven,setshowseven] = useState(false);
  const [showeight,setshoweight] = useState(false);
  const [shownine,setshownine] = useState(false);
  const [showten,setshowten] = useState(false);
  const [showal,setshowal] = useState(false);
  const [showbl,setshowbl] = useState(false);
  const [showcl,setshowcl] = useState(false);
  const [showdl,setshowdl] = useState(false);
  const [showel,setshowel] = useState(false);
  const [showfl,setshowfl] = useState(false);
  const [showgl,setshowgl] = useState(false);
  const [showhl,setshowhl] = useState(false);
  return (
    <Fragment>
       <div className="bbx">
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
       <button className="buon" onClick={() => setshowsix(!showsix)}>
      <article > Basic Electrical and Electronics Engineering</article>
      </button>
      {showsix && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
       <button className="buon" onClick={() => setshowsix(!showsix)}>
      <article > Basic Electrical and Electronics Engineering</article>
      </button>
      {showsix && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
       <button className="buon" onClick={() => setshowseven(!showseven)}>
      <article >Basic Civil and Mechanical Engineering</article>
      </button>
      {showseven && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
       <button className="buon" onClick={() => setshoweight(!showeight)}>
      <article >Basic Civil and Mechanical Engineering</article>
      </button>
      {showeight && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshownine(!shownine)}>
      <article >Basic Electrical, Electronics and Instrumentation Engineering</article>
      </button>
      {shownine && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
       <button className="buon" onClick={() => setshowten(!showten)}>
      <article >Basic Electrical and Instrumentation Engineering</article>
      </button>
      {showten && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowal(!showal)}>
      <article >Basic Electrical, Electronics and Measurement Engineering</article>
      </button>
      {showal && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowbl(!showbl)}>
      <article >Programming in C</article>
      </button>
      {showbl && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowcl(!showcl)}>
      <article >Circuit Analysis</article>
      </button>
      {showcl && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowdl(!showdl)}>
      <article >Electronic Devices</article>
      </button>
      {showdl && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowel(!showel)}>
      <article >Circuit Theory</article>
      </button>
      {showel && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowfl(!showfl)}>
      <article >Environmental Science and Engineering</article>
      </button>
      {showfl && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowgl(!showgl)}>
      <article >Engineering Mathematics</article>
      </button>
      {showgl && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      <button className="buon" onClick={() => setshowhl(!showhl)}>
      <article >Technical English</article>
      </button>
      {showhl && <div className="content">
      <ul><a href="#">2019</a></ul>
         <ul><a href="#">2018</a></ul>
         <ul><a href="#">2017</a></ul>
         </div>
      }
      </div>
    </Fragment>
  );
}



export default sem2;
