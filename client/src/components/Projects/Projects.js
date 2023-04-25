import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
 import planner from "../../Assets/Projects/planner.png";
 import notes from "../../Assets/Projects/notes.png";
 import ecommerce from "../../Assets/Projects/ecommerce.png";
 import weather from "../../Assets/Projects/weather.png";
import profile from "../../Assets/Projects/profile.png";


//Projects cards and page, this we can literally rinse and repeat for all pages
function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={weather}
              isBlog={false}
              title="Weather"
              description="This project was meant to create a weather API service and use what I learned in class
              regarding fetch data requests. The idea for the page was for a user to input a city name (EX: Los Angeles) and the current
              temperature, wind speed, humidity populate to the page in cards. The page also presents with preset city names as well."
              ghLink="https://github.com/Pietroxero/What_Weather"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                         imgPath={planner}
              isBlog={false}
              title="Personal Planner"
              description="For this project, the task was to create a daily schedule for an 8 hour working dat 7am - 3pm where 
              a user can save their entries. More with being able to save user entries the textblocks for each hour
              will be highlighted hen those time blocks are checked against the current time displayed."
              ghLink="https://pietroxero.github.io/Personal_planner/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={notes}
              isBlog={false}
              title="Note Taker"
              description="This project was my first attempt with heroku. I was tasked with creating an app that could be used to write and save notes. This application
              uses express.js  back end and will not only save but retrieve note data from a JSON file."
              ghLink="https://github.com/Pietroxero/Take_notes4me"
              demoLink="https://take-notes-4u.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={ecommerce}
              isBlog={false}
              title="E Commerce"
              description="In this challenge the task was to get comfortable with building the back end for an E-commerce site. Using Express.js API
              and configure it to also use Sequelize to interact with MySQL database."
              ghLink="https://github.com/Pietroxero/eommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={profile}
              isBlog={false}
              title="Profile Maker"
              description="For this project, the task was to create a question prompt in the CLI and from there
              based on answers it would generate an HTML page that shows a team's personnel structure, manager, engineer(s), intern(s)."
              ghLink="https://github.com/Pietroxero/Team_Profile_generator"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
