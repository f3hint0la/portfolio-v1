import { Container, Row, Col } from "react-bootstrap";
import "../../styles/About.css";
import TechStack from "./TechStack";
import FadeIn from "../FadeIn";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <FadeIn>
        <Container className="about-content">
          <Row>
            <Col md={7} className="about-header">
              <h1 className="heading">About Me</h1>
            </Col>
            <Col md={8} className="about-decscription">
              <p className="about-body">
                Hello! My name is <span>Eniola Akinwale-Akhumere</span> but I
                like to go by my other name - <span>Fehintola</span>. I am a
                Sofware and Website Developer. I create interactive and seamless
                softwares. I am a self-motivated and self-driven individual
                who's always looking for new opportunities.
                <br />
                <br />
                Here are some tools & technologies I have been working with:
              </p>
            </Col>
          </Row>
          <TechStack />
        </Container>
      </FadeIn>
    </Container>
  );
}

export default About;
