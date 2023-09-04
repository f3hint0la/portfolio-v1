import { projects } from "../data/projects";
import styles from "../styles/projectcard.module.scss";
import { TbBrandGithub } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import image from "../assets/weather-app.png";

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      {projects.map(
        ({
          id,
          img,
          title,
          description,
          language,
          code,
          codeLink,
          viewLink,
          view,
        }) => (
          <div className={styles.content}>
            <div className={styles.cardView} key={id}>
              <LazyLoadImage
                src={img}
                alt={title}
                effect="blur"
                placeholderSrc={img}
                height={350}
                width="100%"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />

              <div className={styles.details}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.language}>{language}</p>

                <div className={styles.actions}>
                  <span>
                    <TbBrandGithub />
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {code}
                    </a>
                  </span>
                  <span>
                    <AiFillEye />
                    <a
                      href={viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {view}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectCard;
