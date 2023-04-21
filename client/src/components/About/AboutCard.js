import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello One and All, I am <span className="purple">Peter Del Sol </span>
            from <span className="purple"> Los Angeles, CA</span>
            <br />I am a currently working as a Program Manager in digital finance for a
              well established tech company, and looking for free-lance work to fill my spare time.
            <br />
            <br />
            Some other activities that I love to do in when spare time allows:          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming.
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music and creating various playlists for myself or friends.
            </li>
            <li className="about-activity">
              <ImPointRight /> Content creation.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stars don't struggle to shine, its Automatic"{" "}
          </p>
          <footer className="blockquote-footer">Peter</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
