import React,{Component } from 'react';
import '../css/App.css';
import '../css/button.css';
import csa from '../img/csa.jpg';
import csb from '../img/csb.jpg';

class Tim extends Component {
  state = {
    dept: '',
    sem: '',
    showComponent:false
  };
  handleClick = (e) => {
    this.rendertim(this.state.dept,this.state.sem,this.state.sec);
    e.preventDefault();
  }
  renderclass(dept,sem)
  {
      if(dept==="CSE" && (sem==="Sem 1" || sem === "Sem 4"))
      return (<div>
      <label>Choose Batch</label>
      <select className="sel" onChange={(e) => this.setState({sec: e.target.value})}>
      <option></option>
      <option value="A">A</option>
      <option value="B">B</option>
    </select>
    </div>);
  }

  render() {
    return (
      <form className="form">
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
          <br/>
          {this.renderclass(this.state.dept,this.state.sem)}
          <button className="button" onClick={this.handleClick}
          disabled={(!this.state.dept,!this.state.sem)}
            /*{(f)=>this.rendertim(this.state.dept,this.state.sem)}*/>
            <div className="btn">View</div></button>
            {this.state.showComponent ?
              <p style={{fontSize:"1rem"}}>Sorry....Time table not yet uploaded.<br/>Check back later</p> :
              null
           }
      </form>
    );
  }
  rendertim(dept,sem,sec){
    const dp = dept;
    const sp = sem;
    const bh = sec;
    if(dp==="CSE" && sp==="Sem 1" && bh === "A")
      return  window.open("https://5.imimg.com/data5/FA/BB/MY-13366359/office-organisers-500x500.jpg", "_blank");
    else if(dp==="CSE" && sp==="Sem 4" && bh === "A")
      return (window.open(csa),location.reload());
    else if(dp==="CSE" && sp==="Sem 4" && bh === "B")
      return (window.open(csb),location.reload()); 
    else
      return this.setState({
        showComponent: true
      });
}
}
export default Tim;
