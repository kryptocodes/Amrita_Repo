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
 
class Tim extends React.Component {
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


export default Tim;
