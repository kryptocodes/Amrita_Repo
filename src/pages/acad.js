import React, { Component, Fragment } from 'react';
import '../css/home.css';
import Iframe from 'react-iframe';

class acad extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };
  render(){
    return(
      <div className="cldr">
      {this.state.loading ? (
        <Fragment>
       
        <div className="loader">
          </div>
          <div className="txt"> “Love sustains everything.”</div>
          <div className="txt1">-- Mata Amritanandamayi</div>
          
          </Fragment>
      ) : null}
     
        <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=ZTl0bnZsY2Q5cXI3dXJtZTB2a2dzY2xsaG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23DD5511&amp;color=%231F753C&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1"
         className="myClassname"
         display="initial"
         position="relative"
         width="800" 
         height="600"
         onLoad={this.hideSpinner} 
         frameBorder="0"
         scrolling="no"/>    
      </div>
    )
  }
}

export default acad