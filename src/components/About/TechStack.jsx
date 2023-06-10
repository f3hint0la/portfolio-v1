import { Container, Row, Col } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { DiCss3, DiBootstrap, DiPython, DiGit } from "react-icons/di";

const TechStack = () => {
  return (
    <Container fluid>
      <Row className="skillset">
        <Col md={2} className="tech-icons">
          <AiFillHtml5 />
        </Col>

        <Col md={2} className="tech-icons">
          <DiCss3 />
        </Col>

        <Col md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>

        <Col md={2} className="tech-icons">
          <DiBootstrap />
        </Col>

        <Col md={2} className="tech-icons">
          <SiTailwindcss />
        </Col>

        <Col md={2} className="tech-icons">
          <FaReact />
        </Col>

        <Col md={2} className="tech-icons">
          <DiPython />
        </Col>

        <Col md={2} className="tech-icons">
          <TbSql />
        </Col>

        <Col md={2} className="tech-icons">
          <TbBrandVscode />
        </Col>

        <Col md={2} className="tech-icons">
          <DiGit />
        </Col>
      </Row>
    </Container>
  );
};

export default TechStack;
