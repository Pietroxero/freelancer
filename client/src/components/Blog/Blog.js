import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards";



function Blog() { 

  return (
    
    <>
   
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Blogs: </strong>
        </h1>

      

        <p style={{ color: "white" }}>
          These colorful Blog sites can be yours for a small fee!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          
         
            <BlogCards/>
         
          </Col>

          <div className="project-card">
      
    </div>
         
        </Row>
      </Container>
    </Container></>
  );
}

export default Blog;
