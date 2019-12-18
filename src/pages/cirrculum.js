import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
 
function cirrculum() {
    return (
      <Container fluid style={{ marginTop:'50px',lineHeight: '32px',backgroundColor:'white' }}>
      <Row debug >
        <Col debug>Semester 1 </Col>
        <Col debug>Semester 2</Col>
      </Row>
      <Row debug>
        <Col debug>Semester 3 </Col>
        <Col debug>Semester 4</Col>
      </Row>
      <Row debug>
        <Col debug>Semester 5 </Col>
        <Col debug>Semester 6</Col>
      </Row>
      <Row debug>
        <Col debug>Semester 7 </Col>
        <Col debug>Semester 8</Col>
      </Row>
    
    
    </Container>
    )
}

export default cirrculum;