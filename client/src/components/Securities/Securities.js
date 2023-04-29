import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecurityCards from "./SecuritiesCards";
// import Particle from "../Particle";






//Projects cards and page, this we can literally rinse and repeat for all pages
function Securities() {

  

  return (
    
    <>
   
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Security: </strong>
        </h1>

      

        <p style={{ color: "white" }}>
          These colorful Blog sites can be yours for a small fee!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          
         
            <SecurityCards 
            
             
              
              
            />
          </Col>

          <div className="project-card">
      
    </div>
          {/* <Col md={4} className="project-card">
            <BlogCards
                         imgPath={kale}
              isBlog={false}
              title="Personal Planner"
              description="For this project, the task was to create a daily schedule for an 8 hour working dat 7am - 3pm where 
              a user can save their entries. More with being able to save user entries the textblocks for each hour
              will be highlighted hen those time blocks are checked against the current time displayed."
              ghLink="https://pietroxero.github.io/Personal_planner/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <BlogCards
            imgPath={lost}
              isBlog={false}
              title="Note Taker"
              description="This project was my first attempt with heroku. I was tasked with creating an app that could be used to write and save notes. This application
              uses express.js  back end and will not only save but retrieve note data from a JSON file."
              ghLink="https://github.com/Pietroxero/Take_notes4me"
              demoLink="https://take-notes-4u.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCards
            imgPath={recipies}
              isBlog={false}
              title="E Commerce"
              description="In this challenge the task was to get comfortable with building the back end for an E-commerce site. Using Express.js API
              and configure it to also use Sequelize to interact with MySQL database."
              ghLink="https://github.com/Pietroxero/eommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCards
            imgPath={travel}
              isBlog={false}
              title="Profile Maker"
              description="For this project, the task was to create a question prompt in the CLI and from there
              based on answers it would generate an HTML page that shows a team's personnel structure, manager, engineer(s), intern(s)."
              ghLink="https://github.com/Pietroxero/Team_Profile_generator"

            /> */}
          {/* </Col> */}
        </Row>
      </Container>
    </Container></>
  );
}




export default Securities;
