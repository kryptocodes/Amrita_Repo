import React,{Component } from 'react';
import '../css/App.css';
import '../css/button.css';

class Tim extends Component {
  state = {
    dept: '',
    sem: ''
  };
  handleClick = () => {
    this.rendertim(this.state.dept,this.state.sem)
  }
  render() {
    return (
      <form >
          <label>Choose Branch</label>
          <select className="sel" onChange={(e) => this.setState({dept: e.target.value})}>
            <option></option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="CIVIL">CIVIL</option>
            <option value="MECH">MECH</option>
          </select>
          <br/>
          <label>Choose Sem</label>
          <br/>
          <select className="sel" onChange={(d) => this.setState({sem: d.target.value})}>
            <option></option>
            <option value1="1">Sem 1</option>
            <option value1="2">Sem 2</option>
            <option value1="3">Sem 3</option>
            <option value1="4">Sem 4</option>
            <option value1="5">Sem 5</option>
            <option value1="6">Sem 6</option>
            <option value1="7">Sem 7</option>
            <option value1="8">Sem 8</option>
          </select>
        <div className="button">
          <button className="button" onClick={this.handleClick}/*{(f)=>this.rendertim(this.state.dept,this.state.sem)}*/>View</button>
        </div>
      </form>
    );
  }
  rendertim(dept,sem){
    const dp = dept;
    const sp = sem;
    if(dp==="CSE"&& sp === "Sem 1")
      return  window.open("https://5.imimg.com/data5/FA/BB/MY-13366359/office-organisers-500x500.jpg", "_blank");
    else if(dp==="CSE" && sp==="Sem 2")
      return window.open("https://image.shutterstock.com/image-vector/template-school-timetable-illustration-includes-260nw-704106805.jpg");
      else
      return window.open("/404");
  }
}

export default Tim;
