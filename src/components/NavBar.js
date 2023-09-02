import styles from "../styles/navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav>
      <div>
        <Link to="/" className={styles.brand}>
          {"<f3hint0la />"}
        </Link>
      </div>
      <div>
        <ul className={!nav ? styles.ul : styles.active} onClick={handleClick}>
          <li>
            <NavLink
              to="/"
              smooth={true}
              style={({ isActive }) => {
                return { color: isActive ? "#64ffda" : "" };
              }}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              spy={true}
              smooth={true}
              style={({ isActive }) => {
                return { color: isActive ? "#64ffda" : "" };
              }}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="project"
              spy={true}
              smooth={true}
              style={({ isActive }) => {
                return { color: isActive ? "#64ffda" : "" };
              }}
            >
              projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              spy={true}
              smooth={true}
              style={({ isActive }) => {
                return { color: isActive ? "#64ffda" : "" };
              }}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.toggle} onClick={handleClick}>
        {!nav ? <HiOutlineMenuAlt3 /> : <AiOutlineClose />}
      </div>
    </nav>
  );
};
export default NavBar;
