import React from 'react';
import '../css/App.css';


const Tim = () => {
  return (
    <div className="container">
        <label>Choose Branch</label>

        <select id="sem">
            <option disabled selected value="0">-- Choose Branch --</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="civil">CIVIL</option>
            <option value="mech">MECH</option>
        </select>
        <br/>
        <label>Choose Semester</label>
        <select id="sem">
            <option disabled selected value="0">-- Choose Sem --</option>
            <option value="1">Sem 1</option>
            <option value="2">Sem 2</option>
            <option value="3">Sem 3</option>
            <option value="4">Sem 4</option>
            <option value="5">Sem 5</option>
            <option value="6">Sem 6</option>
            <option value="7">Sem 7</option>
            <option value="8">Sem 8</option>
        </select>
          
        <button onClick="view()" >View</button>
       </div>
  )
}


export default Tim;
