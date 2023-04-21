import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiGit,
  DiNodejs,
  DiReact
  
} from "react-icons/di";


function Stacktech() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      
      
    </Row>
  );
}

export default Stacktech;
