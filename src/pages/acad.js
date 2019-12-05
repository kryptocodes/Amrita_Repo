import React, { Component } from 'react';
import '../css/home.css';
import Iframe from 'react-iframe';

class acad extends Component{
  render(){
    return(
      <div>
        <Iframe url=" "
         className="myClassname"
         display="initial"
         position="relative"
         width="300px" 
         height="500px" 
         frameBorder="0"/>    
      </div>
    )
  }
}

export default acad

