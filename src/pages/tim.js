import React,{Component } from 'react';
import '../css/App.css';
import '../css/button.css';
import csa from '../img/csa.jpg';
import csb from '../img/csb.jpg';
import cse6 from '../img/cse_6.jpg';
import cse8 from '../img/cse_8.jpg';
import S2CE from '../img/S2CE.jpg';
import S2CSA from '../img/S2CS-A.jpg';
import S2CSB from '../img/S2CS-B.jpg';
import S2EC from '../img/S2EC.jpg';
import S2ME from '../img/S2ME.jpg';
import S2EE from '../img/S2EE.jpg';
import S4CE from '../img/S4CE.jpg';
import S4EE from '../img/S4CE.jpg';
import S4EC from '../img/S2CE.jpg';
import S4ME from '../img/S2ME.jpg';

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
      if(dept==="CSE" && (sem==="Sem 2" || sem === "Sem 4"))
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
            <option value="CE">CE</option>
            <option value="ME">ME</option>
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
    if(dp==="CSE" && sp==="Sem 2" && bh === "A")
      return  window.open(S2CSA);
    if(dp==="CSE" && sp==="Sem 2" && bh === "B")
      return  window.open(S2CSA);
   
    else if(dp==="ECE" && sp==="Sem 2")
      return window.open(S2EC);
    else if(dp==="EEE" && sp==="Sem 2")
      return window.open(S2EE);
    else if(dp==="CE" && sp==="Sem 2")
      return window.open(S2CE);
    else if(dp==="ME" && sp==="Sem 2")
      return window.open(S2ME);
    else if(dp==="ECE" && sp==="Sem 4")
      return window.open(S4EC);
    else if(dp==="EEE" && sp==="Sem 4")
      return window.open(S4EE);
    else if(dp==="CE" && sp==="Sem 4")
      return window.open(S4CE);
    else if(dp==="ME" && sp==="Sem 4")
      return window.open(S4ME);
    else if(dp==="CSE" && sp==="Sem 4" && bh === "A")
      return window.open(csa);
    else if(dp==="CSE" && sp==="Sem 4" && bh === "A")
      return window.open(csa);
    else if(dp==="CSE" && sp==="Sem 4" && bh === "B")
      return window.open(csb);
    else if(dp==="CSE" && sp==="Sem 6")
      return window.open(cse6);
    else if(dp==="CSE" && sp==="Sem 8")
      return window.open(cse8);   
    else
      return (this.setState({
        showComponent: true
        
      }),setTimeout(() => this.setState({
        showComponent: false}
        ),2000));
}
}
export default Tim;
