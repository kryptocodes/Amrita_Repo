import React, { Component, Fragment } from 'react';
import '../css/home.css';
import Iframe from 'react-iframe';

const quotes = [
  {author: "Mata Amritanandamayi ",
  content: "Love sustains everything."},
  {author: "Casey Neistat",
  content: "Free time is the enemy of progress."},
  {author: "Mark Twain",
  content: "The secret of getting ahead is getting started."},
  {author: "Robert H. Schuller",
  content: "Tough times don’t last. Tough people do."},
  {author: "Coleman Young",
  content: "Courage is one step ahead of fear."},
  {author: "Duke Ellington",
  content: "A problem is a chance for you to do your best."},
  {author: "Jillian Michaels",
  content: "It’s not about perfect. It’s about effort."},
  {author: "Theodore Roosevelt",
  content: "Believe you can and you’re halfway there."},
  {author: "Bob Ross",
  content: "There’s nothing wrong \nwith having a tree as a friend."},
  {author: "Bob Ross",
  content: "Alizarin Crimson"},
  {author: "Bob Ross",
  content: "Cadmium Yellow"},
  {author: "Bob Ross",
  content: "Phthalo Blue"},
  {author: "Bob Ross",
  content: "Van Dyke Brown"},
  {author: "Bob Ross",
  content: "Yellow Ochre"}
];

class acad extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      content: '',
      author: ''
    };
  }

  newQuote() {
    let number = (Math.floor(Math.random() * 14));
    
    let quote = quotes[number].content;
    
    this.setState({content: quote})
    
    let author = quotes[number].author;
    this.setState({author: author})
  }
  componentDidMount(){
    this.newQuote();
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
          <div className="txt"> {this.state.content}</div>
          <div className="txt1"> --{this.state.author} </div>
          
          </Fragment>
      ) : null}
     
        <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%234285F4&amp;ctz=Asia%2FKolkata&amp;src=ZTl0bnZsY2Q5cXI3dXJtZTB2a2dzY2xsaG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23DD5511&amp;color=%231F753C&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1"
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

export default acad;