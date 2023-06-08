import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/Project.css";
import PCard from "./PCard";
import weatherApp from "../../assets/projectImages/weather-app.png";
import calculatorApp from "../../assets/projectImages/calculator.png";

function Project() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container className="project-content">
        <h1 className="project-heading">
          My Recent <strong>Works</strong>{" "}
        </h1>
        <p className="">Here are a few projects I've worked on.</p>
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
              imgPath={calculatorApp}
              title="Calculator App"
              description="A simple calculator aaplication."
              githubLink="https://github.com/f3hint0la/javascript-weather-app"
              demoLink="https://f3hint0la.github.io/calculator/"
              techStack="JavaScript, HTML / CSS"
            />
          </Col>
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
              imgPath={calculatorApp}
              title="Calculator App"
              description="A simple calculator aaplication."
              githubLink="https://github.com/f3hint0la/javascript-weather-app"
              demoLink="https://f3hint0la.github.io/calculator/"
              techStack="JavaScript, HTML / CSS"
            />
          </Col>
          <Col md={4} className="project-card">
            <PCard
              imgPath={calculatorApp}
              title="Calculator App"
              description="A simple calculator aaplication."
              githubLink="https://github.com/f3hint0la/javascript-weather-app"
              demoLink="https://f3hint0la.github.io/calculator/"
              techStack="JavaScript, HTML / CSS"
            />
          </Col>
          <Col md={4} className="project-card">
            <PCard
              imgPath={calculatorApp}
              title="Calculator App"
              description="A simple calculator aaplication."
              githubLink="https://github.com/f3hint0la/javascript-weather-app"
              demoLink="https://f3hint0la.github.io/calculator/"
              techStack="JavaScript, HTML / CSS"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
