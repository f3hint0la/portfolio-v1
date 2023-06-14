import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navigation() {
  //   const { pathName } = useLocation();
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathName]
  //   );

  const [expand, updateExpanded] = useState(false);
  const [navPosition, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      expand="md"
      fixed="top"
      className={navPosition ? "sticky" : "navbar"}
    >
      {/* <Container> */}
      <Navbar.Brand href="/" className="d-flex">
        {"<fehintola />"}
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Item>
            <a href="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> home
            </a>
          </Nav.Item>

          <Nav.Item>
            <a href="#about" onClick={() => updateExpanded(false)}>
              <AiOutlineUser style={{ marginBottom: "2px" }} /> about
            </a>
          </Nav.Item>

          <Nav.Item>
            <a href="#projects" onClick={() => updateExpanded(false)}>
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
              projects
            </a>
          </Nav.Item>

          <Nav.Item>
            <a
              href="src/assets/resume.pdf"
              target="_blank"
              onClick={() => updateExpanded(false)}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} /> resume
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default Navigation;
