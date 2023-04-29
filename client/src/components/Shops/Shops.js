import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShopCards from "./ShopCards";

function Shops() {

  

  return (
    
    <>
   
    <Container fluid className="project-section">
   
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Shopping Sites: </strong>
        </h1>

      

        <p style={{ color: "white" }}>
          These colorful Blog sites can be yours for a small fee!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card"> 
            <ShopCards
            />
          </Col>

          <div className="project-card">
      
    </div>
          
        </Row>
      </Container>
    </Container></>
  );
}




export default Shops;
