import { Container } from "react-bootstrap";
import "../styles/Footer.css";

function Footer() {
  return (
    <Container fluid className="footer-section" id="/footer">
      <div className="footer-text">
        <p>Built and designed by f3hint0la.</p>
        <p>All rights reserved. ©</p>
      </div>
    </Container>
  );
}

export default Footer;
