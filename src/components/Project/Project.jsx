import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/Project.css";
import PCard from "./PCard";
import weatherApp from "../../assets/projectImages/weather-app.png";
import calculatorApp from "../../assets/projectImages/calculator.png";
import FadeIn from "../FadeIn";

function Project() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container className="project-content">
        <h1 className="project-heading">
          My Recent <strong>Works</strong>{" "}
        </h1>
        <p className="">Here are a few projects I've worked on.</p>
        <FadeIn>
          <Row style={{ justifyContent: "center" }}>
            <Col md={4} className="project-card">
              <PCard
                imgPath={weatherApp}
                title="Weather App"
                description="A simple weather app that allows you get current waether information based on the city you search for. Built with OpenWeatherMap API."
                githubLink="https://github.com/f3hint0la/javascript-weather-app"
                demoLink="https://elementicon.netlify.app/"
                techStack="JavaScript, HTML / CSS"
              />
            </Col>
            <Col md={4} className="project-card">
              <PCard
                title="To-Do List App"
                description="An app for to-do lists. It allows users to add new to-do lists, mark to-do's as complete, and delete to-do's."
                githubLink="https://github.com/f3hint0la/to-do-app"
                demoLink=""
                techStack="JavaScript, HTML / CSS"
              />
            </Col>
            <Col md={4} className="project-card">
              <PCard
                title="Tic Tac Toe Game"
                description="A tic tac toe game."
                githubLink="https://github.com/f3hint0la/tic-tac-toe"
                demoLink=""
                techStack="ReactJS"
              />
            </Col>
            <Col md={4} className="project-card">
              <PCard
                title="Xplora"
                description="A wenbsite for a travel agency that provides travel and tourism-related services."
                githubLink="https://github.com/f3hint0la/Xplora"
                demoLink=""
                techStack="HTML / CSS, JavaScript"
              />
            </Col>
            <Col md={4} className="project-card">
              <PCard
                title="Calculator App"
                description="A simple calculator aaplication."
                githubLink="https://github.com/f3hint0la/javascript-weather-app"
                demoLink="https://f3hint0la.github.io/calculator/"
                techStack="JavaScript, HTML / CSS"
              />
            </Col>
            <Col md={4} className="project-card">
              <PCard
                title="E-commerce website"
                description="An E-commerce website."
                githubLink=""
                demoLink=""
                techStack="JavaScript, HTML / CSS"
              />
            </Col>
          </Row>
        </FadeIn>
      </Container>
    </Container>
  );
}

export default Project;
