import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../css/home.css';

class curriculum extends Component{
  state={
    dept:'CSE',
  };
  rendersub(dept)
  {
    if(dept==="CSE")
      return <div> {this.cse()} </div>;
    if(dept==="ECE")
      return <div> {this.ece()} </div>;
    if(dept==="EEE")
      return <div> {this.eee()} </div>;
    if(dept==="CIVIL")
      return <div> {this.civil()} </div>;
  }
  render(){
  return(
    <div style={{marginTop:'20px'}}>
    <select className="sel" onChange={(e) => this.setState({dept: e.target.value})}>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="CIVIL">CIVIL</option>
            <option value="MECH">MECH</option>
          </select>
    {this.rendersub(this.state.dept)}
   </div>
  )
}

cse() {
    return (
      <div>
        <h1 style={{color:'white'}}>Computer Science and Engineering</h1>
      <div className="pc">
      <Container fluid style={{ marginTop:'30px',lineHeight: '32px',backgroundColor:'black',color:'white' }}>
      <Row debug >
        <Col debug  >Semester 1 </Col>
        <Col debug>Semester 2</Col>
      </Row>
      </Container>
      <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
      <Row debug >
        <Col debug >Engineering Mathematics - I </Col>
        <Col debug >Engineering Mathematics II</Col>
      </Row>
      <Row debug>
      <Col debug>Engineering Physics - I</Col>
      <Col debug>Physics for Information Science</Col>
      </Row>
      <Row debug>
        <Col debug>Engineering Chemistry - I</Col>
        <Col debug>Environmental Science and Engineering </Col>
      </Row>
      <Row debug>
        <Col debug>Engineering Graphics</Col>
        <Col debug>Basic Electrical, Electronics and Measurement Engineering</Col>
      </Row>
      <Row debug>
        <Col debug>Problem Solving and Python Programming</Col>
        <Col debug>Programming in C</Col>
      </Row>
      <Row debug>
        <Col debug>Communicative English</Col>
        <Col debug>Technical English</Col>
      </Row>
      <Row debug>
        <Col debug>Problem Solving and Python Programming Laboratory</Col>
        <Col debug>Engineering Practices Laboratory</Col>
      </Row>
      <Row debug>
        <Col debug>Physics and Chemistry Laboratory</Col>
        <Col debug>C Programming Laboratory</Col>
      </Row>
      </Container>
      <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
      <Row debug >
        <Col debug  >Semester 3 </Col>
        <Col debug>Semester 4</Col>
      </Row>
      </Container>
      <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
      <Row debug >
        <Col debug >Discrete Mathematics</Col>
        <Col debug >Probability and Queueing Theory</Col>
      </Row>
      <Row debug>
      <Col debug>Digital Principles and Design</Col>
      <Col debug>Computer Architecture</Col>
      </Row>
      <Row debug>
        <Col debug>Data Structures</Col>
        <Col debug>Database Management Systems</Col>
      </Row>
      <Row debug>
        <Col debug>Object Oriented Programming</Col>
        <Col debug>Design and Analysis of Algorithms</Col>
      </Row>
      <Row debug>
        <Col debug>Communication Engineering</Col>
        <Col debug>Operating Systems</Col>
      </Row>
      <Row debug>
        <Col debug>Data Structures Laboratory</Col>
        <Col debug>Software Engineering</Col>
      </Row>
      <Row debug>
        <Col debug>Object Oriented Programming Laboratory</Col>
        <Col debug>Database Management Systems Laboratory</Col>
      </Row>
      <Row debug>
        <Col debug>Digital Systems Laboratory</Col>
        <Col debug>Operating Systems Laboratory</Col>
      </Row>
      <Row debug>
        <Col debug>Interpersonal Skills/Listening and Speaking</Col>
        <Col debug>Advanced Reading and Writing</Col>
      </Row>
      </Container>
      <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
      <Row debug >
        <Col debug  >Semester 5 </Col>
        <Col debug>Semester 6</Col>
      </Row>
      </Container>
      <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
      <Row debug>
        <Col debug >Algebra and Number Theory</Col>
        <Col debug >Internet Programming</Col>
      </Row>
      <Row debug>
      <Col debug>Computer Networks</Col>
      <Col debug>Artificial Intelligence</Col>
      </Row>
      <Row debug>
        <Col debug>Microprocessors and Microcontrollers</Col>
        <Col debug>Mobile Computing</Col>
      </Row>
      <Row debug>
        <Col debug>Theory of Computation</Col>
        <Col debug>Compiler Design</Col>
      </Row>
      <Row debug>
        <Col debug>Object Oriented Analysis and Design</Col>
        <Col debug>Distributed Systems</Col>
      </Row>
      <Row debug>
        <Col debug>Open Elective I</Col>
        <Col debug>Professional Elective I</Col>
      </Row>
      <Row debug>
        <Col debug>Microprocessors and Microcontrollers Laboratory</Col>
        <Col debug>Internet Programming Laboratory</Col>
      </Row>
      <Row debug>
        <Col debug>Object Oriented Analysis and Design Laboratory</Col>
        <Col debug>Mobile Application Development Laboratory</Col>
      </Row>
      <Row debug>
        <Col debug>Networks Laboratory</Col>
        <Col debug>Mini Project</Col>
      </Row>
      <Row debug>
        <Col debug></Col>
        <Col debug>Professional Communication</Col>
      </Row>
      </Container>
      <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
      <Row debug >
        <Col debug  >Semester 7 </Col>
        <Col debug>Semester 8</Col>
      </Row>
      </Container>
      <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
      <Row debug >
        <Col debug >Principles of Management</Col>
        <Col debug >Professional Elective IV</Col>
      </Row>
      <Row debug>
      <Col debug>Cryptography and Network Security</Col>
      <Col debug>Professional Elective V</Col>
      </Row>
      <Row debug>
        <Col debug>Cloud Computing</Col>
        <Col debug>Project Work</Col>
      </Row>
      <Row debug>
        <Col debug>Open Elective II</Col>
        <Col debug></Col>
      </Row>
      <Row debug>
        <Col debug>Professional Elective II</Col>
        <Col debug></Col>
      </Row>
      <Row debug>
        <Col debug>Professional Elective III</Col>
        <Col debug></Col>
      </Row>
      <Row debug>
        <Col debug>Cloud Computing Laboratory</Col>
        <Col debug></Col>
      </Row>
      <Row debug>
        <Col debug>Security Laboratory</Col>
        <Col debug></Col>
      </Row>
      </Container>
      </div>
    </div>
    )
}
ece() {
  return (
    <div>
      <h1 style={{color:'white'}}>Electronics and Communication Engineering</h1>
    <div className="pc">
    <Container fluid style={{ marginTop:'30px',lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 1 </Col>
      <Col debug>Semester 2</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug >
      <Col debug >Engineering Mathematics - I </Col>
      <Col debug >Engineering Mathematics II</Col>
    </Row>
    <Row debug>
    <Col debug>Engineering Physics - I</Col>
    <Col debug>Physics for Electronics Engineering</Col>
    </Row>
    <Row debug>
      <Col debug>Engineering Chemistry - I</Col>
      <Col debug>Basic Electrical and Instrumentation Engineering </Col>
    </Row>
    <Row debug>
      <Col debug>Engineering Graphics</Col>
      <Col debug>Circuit Analysis</Col>
    </Row>
    <Row debug>
      <Col debug>Problem Solving and Python Programming</Col>
      <Col debug>Electronic Devices</Col>
    </Row>
    <Row debug>
      <Col debug>Communicative English</Col>
      <Col debug>Technical English</Col>
    </Row>
    <Row debug>
      <Col debug>Problem Solving and Python Programming Laboratory</Col>
      <Col debug>Circuits and Devices Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug>Physics and Chemistry Laboratory</Col>
      <Col debug>Engineering Practices Laboratory</Col>
    </Row>
    </Container>
    <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 3 </Col>
      <Col debug>Semester 4</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug >
      <Col debug >Linear Algebra and Partial Differential Equations</Col>
      <Col debug >Probability and Random Processes </Col>
    </Row>
    <Row debug>
    <Col debug>Fundamentals of Data Structures In C</Col>
    <Col debug>Electronic Circuits II </Col>
    </Row>
    <Row debug>
      <Col debug>Electronic Circuits- I</Col>
      <Col debug>Communication Theory</Col>
    </Row>
    <Row debug>
      <Col debug>Signals and Systems </Col>
      <Col debug>Electromagnetic Fields</Col>
    </Row>
    <Row debug>
      <Col debug>Digital Electronics</Col>
      <Col debug>Linear Integrated Circuits</Col>
    </Row>
    <Row debug>
      <Col debug>Control System Engineering </Col>
      <Col debug>Environmental Science and Engineering</Col>
    </Row>
    <Row debug>
      <Col debug>Fundamentals of Data Structures in C Laboratory </Col>
      <Col debug>Circuits Design and Simulation Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug>Analog and Digital Circuits Laboratory</Col>
      <Col debug>Linear Integrated Circuits Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug>Interpersonal Skills/Listening and Speaking</Col>
      <Col debug></Col>
    </Row>
    </Container>
    <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 5 </Col>
      <Col debug>Semester 6</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug>
      <Col debug >Digital Communication</Col>
      <Col debug >Microprocessors and Microcontrollers</Col>
    </Row>
    <Row debug>
    <Col debug>Discrete-Time Signal Processing</Col>
    <Col debug>VLSI Design</Col>
    </Row>
    <Row debug>
      <Col debug>Computer Architecture and Organization</Col>
      <Col debug>Wireless Communication</Col>
    </Row>
    <Row debug>
      <Col debug>Communication Networks</Col>
      <Col debug>Principles of Management</Col>
    </Row>
    <Row debug>
      <Col debug>Professional Elective I</Col>
      <Col debug>Transmission Lines and RF Systems</Col>
    </Row>
    <Row debug>
      <Col debug>Open Elective I</Col>
      <Col debug>Professional Elective II</Col>
    </Row>
    <Row debug>
      <Col debug>Digital Signal Processing Laboratory </Col>
      <Col debug>Microprocessors and Microcontrollers Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug>Communication Systems Laboratory </Col>
      <Col debug>VLSI Design Laboratory </Col>
    </Row>
    <Row debug>
      <Col debug>Networks Laboratory</Col>
      <Col debug>Technical Seminar</Col>
    </Row>
    </Container>
    <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 7 </Col>
      <Col debug>Semester 8</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug >
      <Col debug >Antennas and Microwave Engineering</Col>
      <Col debug >Professional Elective - IV</Col>
    </Row>
    <Row debug>
    <Col debug>Optical Communication </Col>
    <Col debug>Professional Elective - V</Col>
    </Row>
    <Row debug>
      <Col debug>Embedded and Real Time Systems</Col>
      <Col debug>Project Work</Col>
    </Row>
    <Row debug>
      <Col debug>Ad hoc and Wireless Sensor Networks</Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Professional Elective -III </Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Open Elective - II </Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Embedded Laboratory</Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Advanced Communication Laboratory</Col>
      <Col debug></Col>
    </Row>
    </Container>
    </div>
  </div>
  )
}
eee() {
  return (
    <div>
      <h1 style={{color:'white'}}>Electrical and Electronics Engineering</h1>
    <div className="pc">
    <Container fluid style={{ marginTop:'30px',lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 1 </Col>
      <Col debug>Semester 2</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug >
      <Col debug >Engineering Mathematics - I </Col>
      <Col debug >Engineering Mathematics II</Col>
    </Row>
    <Row debug>
    <Col debug>Engineering Physics - I</Col>
    <Col debug>Physics for Electronics Engineering</Col>
    </Row>
    <Row debug>
      <Col debug>Engineering Chemistry - I</Col>
      <Col debug>Basic Civil and Mechanical Engineering </Col>
    </Row>
    <Row debug>
      <Col debug>Engineering Graphics</Col>
      <Col debug>Circuit Analysis</Col>
    </Row>
    <Row debug>
      <Col debug>Problem Solving and Python Programming</Col>
      <Col debug>Environmental Science and Engineering</Col>
    </Row>
    <Row debug>
      <Col debug>Communicative English</Col>
      <Col debug>Technical English</Col>
    </Row>
    <Row debug>
      <Col debug>Problem Solving and Python Programming Laboratory</Col>
      <Col debug>Electric Circuits Lab</Col>
    </Row>
    <Row debug>
      <Col debug>Physics and Chemistry Laboratory</Col>
      <Col debug>Engineering Practices Laboratory</Col>
    </Row>
    </Container>
    <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 3 </Col>
      <Col debug>Semester 4</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug >
      <Col debug >Transforms and Partial Differential Equations </Col>
      <Col debug >Numerical Methods  </Col>
    </Row>
    <Row debug>
    <Col debug>Digital Logic Circuits </Col>
    <Col debug>Electrical Machines – II  </Col>
    </Row>
    <Row debug>
      <Col debug>Electromagnetic Theory </Col>
      <Col debug>Transmission and Distribution </Col>
    </Row>
    <Row debug>
      <Col debug>Electrical Machines – I  </Col>
      <Col debug>Measurements and Instrumentation </Col>
    </Row>
    <Row debug>
      <Col debug>Electron Devices and Circuits </Col>
      <Col debug>Linear Integrated Circuits and Applications</Col>
    </Row>
    <Row debug>
      <Col debug>Power Plant Engineering </Col>
      <Col debug>Control Systems </Col>
    </Row>
    <Row debug>
      <Col debug>Electronics Laboratory  </Col>
      <Col debug>Electrical Machines Lab II </Col>
    </Row>
    <Row debug>
      <Col debug>Electrical Machines Laboratory - I </Col>
      <Col debug>Linear and Digital Integrated Circuits Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug></Col>
      <Col debug>Technical Seminar </Col>
    </Row>
    </Container>
    <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 5 </Col>
      <Col debug>Semester 6</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug>
      <Col debug >Power System Analysis </Col>
      <Col debug >Solid State Drives </Col>
    </Row>
    <Row debug>
    <Col debug>Microprocessors and Microcontrollers </Col>
    <Col debug>Protection and Switchgear </Col>
    </Row>
    <Row debug>
      <Col debug>Power Electronics </Col>
      <Col debug>Embedded Systems </Col>
    </Row>
    <Row debug>
      <Col debug>Digital Signal Processing </Col>
      <Col debug>Professional Elective I </Col>
    </Row>
    <Row debug>
      <Col debug>Object Oriented Programming </Col>
      <Col debug>Professional Elective II</Col>
    </Row>
    <Row debug>
      <Col debug>Open Elective I</Col>
      <Col debug>Power Electronics and Drives Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug>Control and Instrumentation Laboratory</Col>
      <Col debug>Microprocessors and Microcontrollers Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug>Professional Communication </Col>
      <Col debug>Mini Project </Col>
    </Row>
    <Row debug>
      <Col debug>Object Oriented Programming Laboratory</Col>
      <Col debug></Col>
    </Row>
    </Container>
    <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 7 </Col>
      <Col debug>Semester 8</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug >
      <Col debug >High Voltage Engineering</Col>
      <Col debug >Professional Elective V </Col>
    </Row>
    <Row debug>
    <Col debug>Power System Operation and Control </Col>
    <Col debug>Professional Elective VI </Col>
    </Row>
    <Row debug>
      <Col debug>Renewable Energy Systems </Col>
      <Col debug>Project Work</Col>
    </Row>
    <Row debug>
      <Col debug>Open Elective II </Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Professional Elective III  </Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Professional Elective IV </Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Power System Simulation Laboratory </Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Renewable Energy Systems Laboratory</Col>
      <Col debug></Col>
    </Row>
    </Container>
    </div>
  </div>
  )
}
civil() {
  return (
    <div>
      <h1 style={{color:'white'}}>Civil Engineering</h1>
    <div className="pc">
    <Container fluid style={{ marginTop:'30px',lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 1 </Col>
      <Col debug>Semester 2</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug >
      <Col debug >Engineering Mathematics - I </Col>
      <Col debug >Engineering Mathematics II</Col>
    </Row>
    <Row debug>
    <Col debug>Engineering Physics - I</Col>
    <Col debug>Physics for Civil Engineering</Col>
    </Row>
    <Row debug>
      <Col debug>Engineering Chemistry - I</Col>
      <Col debug>Basic Electrical and Electronics Engineering </Col>
    </Row>
    <Row debug>
      <Col debug>Engineering Graphics</Col>
      <Col debug>Environmental Science and Engineering</Col>
    </Row>
    <Row debug>
      <Col debug>Problem Solving and Python Programming</Col>
      <Col debug>Engineering Mechanics</Col>
    </Row>
    <Row debug>
      <Col debug>Communicative English</Col>
      <Col debug>Technical English</Col>
    </Row>
    <Row debug>
      <Col debug>Problem Solving and Python Programming Laboratory</Col>
      <Col debug>Engineering Practices Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug>Physics and Chemistry Laboratory</Col>
      <Col debug>Computer Aided Building Drawing</Col>
    </Row>
    </Container>
    <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 3 </Col>
      <Col debug>Semester 4</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug >
      <Col debug >Transforms and Partial Differential Equations </Col>
      <Col debug >Numerical Methods  </Col>
    </Row>
    <Row debug>
    <Col debug>Engineering Geology</Col>
    <Col debug>Construction Techniques and Practices</Col>
    </Row>
    <Row debug>
      <Col debug>Construction Materials</Col>
      <Col debug>Strength of Materials II </Col>
    </Row>
    <Row debug>
      <Col debug>Strength of Materials – I  </Col>
      <Col debug>Applied Hydraulic Engineering </Col>
    </Row>
    <Row debug>
      <Col debug>Fluid Mechanics </Col>
      <Col debug>Concrete Technology</Col>
    </Row>
    <Row debug>
      <Col debug>Surveying </Col>
      <Col debug>Soil Mechanics </Col>
    </Row>
    <Row debug>
      <Col debug>Surveying Laboratory  </Col>
      <Col debug>Strength of Materials Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug>Electrical Machines Laboratory - I </Col>
      <Col debug>Hydraulic Engineering Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug></Col>
      <Col debug>Advanced Reading and Writing </Col>
    </Row>
    </Container>
    <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 5 </Col>
      <Col debug>Semester 6</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug>
      <Col debug >Design of Reinforced Cement Concrete Elements</Col>
      <Col debug >Design of Steel Structural Elements </Col>
    </Row>
    <Row debug>
    <Col debug>Foundation Engineering </Col>
    <Col debug>Structural Analysis II </Col>
    </Row>
    <Row debug>
      <Col debug>Structural Analysis I </Col>
      <Col debug>Irrigation Engineering</Col>
    </Row>
    <Row debug>
      <Col debug>Water Supply Engineering </Col>
      <Col debug>Wastewater Engineering </Col>
    </Row>
    <Row debug>
      <Col debug>Open Elective- I </Col>
      <Col debug>Highway Engineering</Col>
    </Row>
    <Row debug>
      <Col debug>Professional Elective I</Col>
      <Col debug>Professional Elective II</Col>
    </Row>
    <Row debug>
      <Col debug>Water and Waste Water Analysis Laboratory</Col>
      <Col debug>Highway Engineering Laboratory</Col>
    </Row>
    <Row debug>
      <Col debug>Soil Mechanics Laboratory </Col>
      <Col debug>Irrigation and Environmental Engineering Drawing </Col>
    </Row>
    <Row debug>
      <Col debug>Survey Camp </Col>
      <Col debug></Col>
    </Row>
    </Container>
    <Container fluid style={{ lineHeight: '32px',backgroundColor:'black',color:'white' }}>
    <Row debug >
      <Col debug  >Semester 7 </Col>
      <Col debug>Semester 8</Col>
    </Row>
    </Container>
    <Container fluid style={{lineHeight: '32px',backgroundColor:'white'}}>
    <Row debug >
      <Col debug >Estimation, Costing and Valuation Engineering</Col>
      <Col debug >Professional Elective IV </Col>
    </Row>
    <Row debug>
    <Col debug>Railways, Airports, Docks and Harbour Engineering</Col>
    <Col debug>Professional Elective V </Col>
    </Row>
    <Row debug>
      <Col debug>Structural Design and Drawing</Col>
      <Col debug>Project Work</Col>
    </Row>
    <Row debug>
      <Col debug>Professional Elective III</Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Open Elective II  </Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Creative and Innovative Project </Col>
      <Col debug></Col>
    </Row>
    <Row debug>
      <Col debug>Industrial Training </Col>
      <Col debug></Col>
    </Row>
    </Container>
    </div>
  </div>
  )
}
}

export default curriculum;