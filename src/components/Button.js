import "../styles/global.scss";
import resume from "../data/resume.pdf";

function Button() {
  return (
    <button className="button">
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        download={"resume"}
      >
        View Resume
      </a>
    </button>
  );
}

export default Button;
