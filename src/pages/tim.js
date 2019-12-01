import React,{Component } from 'react';
import '../css/App.css';
import  cse from '../img/timetable.png';
/*const options = [
  { value: 'CSE', label: 'CSE' },
  { value: 'ECE', label: 'ECE' },
  { value: 'MECH', label: 'MECH' },
  { value: 'CIVIL', label: 'CIVIL'},
  { value:  'EEE',  label: 'EEE'}
];

const sem = [
  { value: '1', label: 'Sem 1' },
  { value: '2', label: 'Sem 2' },
  { value: '3', label: 'Sem 3' },
  { value: '4', label: 'Sem 4'},
  { value: '5',  label: 'Sem 5'},
  { value: '6', label:'Sem 6'},
  { value: '7',  label: 'Sem 7'},
  { value: '8', label:'Sem 8'}
];

class Sbox1 extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);

  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

class Sbox2 extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);

  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={sem}
      />
    );
  }
}
*/
class Tim extends Component {
  state = {
    dept: '',
    sem: ''
  };

  render() {
    return (
      <form >
          <select onChange={(e) => this.setState({dept: e.target.value})}>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="CIVIL">CIVIL</option>
            <option value="MECH">MECH</option>
          </select>
          <br/>
          <select onChange={(d) => this.setState({sem: d.target.value})}>
            <option value1="1">Sem 1</option>
            <option value1="2">Sem 2</option>
            <option value1="3">Sem 3</option>
            <option value1="4">Sem 4</option>
            <option value1="5">Sem 5</option>
          </select>
        <div>
          {this.rendertim(this.state.dept,this.state.sem)}
        </div>
      </form>
    );
  }
  rendertim(dept,sem){
    const dp = dept;
    const sp = sem;
    if(dp==="CSE"&& sp === "Sem 1")
      return <img src={cse} width="200px"/>
    else
      return <h1>one</h1>;
  }
}

export default Tim;
