import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "../styles/footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={styles.footerText}>
        <p>© 2023 f3hint0la. All rights reserved.</p>
        <div className={styles.contactLinks}>
          <a href="https://www.linkedin.com/in/fehintola-a-a44119241">
            <AiFillLinkedin style={{ fontSize: 20 }} />
          </a>
          <a href="https://github.com/f3hint0la">
            <AiOutlineGithub style={{ fontSize: 20 }} />
          </a>
          <a href="mailto:fehintolakhumere@gmail.com">
            <AiOutlineMail style={{ fontSize: 20 }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
