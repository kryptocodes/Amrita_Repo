import React from 'react';
import '../css/App.css';
import Select from 'react-select';

const options = [
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
const Tim = () => {
  return (
    <div className="container">
        <label>Choose Branch</label>
          <Sbox1 />
        <label>Choose Semester</label>
          <Sbox2 />
        </div>
  )
}


export default Tim;
