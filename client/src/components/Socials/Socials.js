import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialCards from "./SocialCards";



function Social() { 

  return (
    
    <>
   
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Social Media: </strong>
        </h1>

      

        <p style={{ color: "white" }}>
          These colorful Social Media sites can be yours for a small fee!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          
         
            <SocialCards 
            
             
              
              
            />
          </Col>

          <div className="project-card">
      
    </div>
         
        </Row>
      </Container>
    </Container></>
  );
}

export default Social;
