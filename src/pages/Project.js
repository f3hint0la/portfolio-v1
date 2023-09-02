import styles from "../styles/project.module.scss";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <section className={styles.project}>
      <div className={styles.projectContent}>
        <h1>Projects</h1>
        <p className={styles.body}>
          A small gallery of projects I've worked on. You can see more of these
          projects on my <span>GitHub page</span>. If you have any project in
          mind, feel free to contact me.
        </p>
        <button className="button">
          <a
            href="https://github.com/f3hint0la"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </button>
      </div>
      <ProjectCard />
    </section>
  );
}

export default Project;
