import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME <span className="purple">TO INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I TOOK A CODING BOOTCAMP TO CHALLENGE MYSELF AND 
              LEARN NEW LANGUAGES I HAD ONLY FIDDLED WITH IN MYSPACE DAYS &
              SINCE FINISHING THE BOOTCAMP I FEEL AS IF I HAVE AT LEAST LEARNED
              SOMETHING, I THINK... 🤷‍♂️
              <br />
              <br />I am fluent in classic language hits such as (but not limited to)
              <i>
                <b className="purple"> Javascript, HTML, CSS, React, Progressive Web Apps, Express.js, Node.js. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Pages and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Dives, Problem Solving, and refactoring code.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing pages
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>YOU CAN FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">reach out </span>to me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pietroxero"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                            This section is not to be used at this time, as this link is for my personal adult content this will be used 
                            in a later project but is left for reference point.
                <a
                  href="https://twitter.com/inkedcub92"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/peter-del-sol/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pietroxerohero"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;