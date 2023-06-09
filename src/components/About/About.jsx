import { Container, Row, Col } from "react-bootstrap";
import "../../styles/About.css";
import SkillSet from "./SkillSet";
import TechStack from "./TechStack";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container className="about-content">
        <Row>
          <Col md={7} className="about-header">
            <h1 className="heading">
              About Me
            </h1>
          </Col>
          <Col md={8} className="about-decscription">
            <p className="about-body">
              Hello! My name is <span>Eniola Akinwale-Akhumere</span> but I like
              to go by my other name - <span>Fehintola</span>. I am a Sofware
              and Website Developer. I create interactive and seamless
              softwares. I am a self-motivated and self-driven individual who's
              always looking for new opportunities.
              <br />
              <br />
              <p>
                Here are some tools & technologies I have been working with:{" "}
              </p>
            </p>
          </Col>
        </Row>
        <TechStack />
      </Container>
    </Container>
  );
}

export default About;
