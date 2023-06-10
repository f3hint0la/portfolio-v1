import { Container } from "react-bootstrap";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngleUp } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
import "../styles/Footer.css";

function Footer() {
  return (
    <Container fluid className="footer-section">
      <div className="footer-text">
        <p>Built and designed by f3hint0la.</p>
        <p>All rights reserved. ©</p>
        <div className="contact-links">
          <a href="mailto:fehintolakhumere@gmail.com">
            <AiOutlineMail style={{ fontSize: 20 }} />
          </a>
          <a href="https://github.com/f3hint0la">
            <AiOutlineGithub style={{ fontSize: 20 }} />
          </a>
          <a href="https://www.linkedin.com/in/fehintola-a-a44119241">
            <AiFillLinkedin style={{ fontSize: 20 }} />
          </a>
        </div>
      </div>
      <ScrollToTop />
    </Container>
  );
}

export default Footer;
