import styles from "../styles/sociallink.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  return (
    <div className={styles.links}>
      <a
        href="https://www.linkedin.com/in/fehintola-a-a44119241"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/f3hint0la"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a href="mailto:fehintolakhumere@gmail.com">
        <MdEmail />
      </a>
    </div>
  );
};

export default Socials;
