import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import Typing from "./Typing";
import "../styles/Home.css";
// import About from "./About";
import Project from "./Project/Project";

function Home() {
  return (
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              hi there!!{" "}
            </h1>
            <h1 className="heading-name">
              I'm {""}
              <strong className="main-name">Fehintola Akhumere</strong>
            </h1>

            <div style={{ padding: 35, textAlign: "left" }}>
              <Typing />
            </div>
          </Col>
          <Col md={8} className="home-description">
            <p className="home-body">
              I'm a software and website developer with a passion for building
              exceptional, high-quality, result-oriented and functional
              softwares. I have great interest in full-stack development,
              artificial intelligence and love learning new skills.
            </p>
          </Col>
          <Col md={7} className="email">
            <Button
              href="mailto:fehintolakhumere@gmail.com"
              target="_blank"
              className="email-btn"
            >
              <AiOutlineMail className="email-icon" />
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>
      <Project />
      {/* <About /> */}
    </Container>
  );
}

export default Home;
