import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import Typing from "./Typing";
import "../styles/Home.css";
import FadeIn from "./FadeIn";

function Home() {
  return (
    <Container fluid className="home-section" id="home">
      <FadeIn>
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
            <Col md={7} className="home-btn">
              <Button
                href="mailto:fehintolakhumere@gmail.com"
                target="_blank"
                className="btn"
              >
                <AiOutlineMail className="btn-icon" />
                Get in Touch
              </Button>

              <Button
                href="src/assets/resume.pdf"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn"
              >
                <AiOutlineDownload className="btn-icon" />
                Download Resume
              </Button>
            </Col>
          </Row>
        </Container>
      </FadeIn>
    </Container>
  );
}

export default Home;
