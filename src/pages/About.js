import styles from "../styles/about.module.scss";
import Button from "../components/Button";
import Qualification from "../components/Qualification";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h1>
          About <span>Me</span>
        </h1>
        <h3>Introduction</h3>
        <p className={styles.body}>
          <span>Hello. My name is Eniola Akinwale-Akhumere</span> but I like to
          go by my other name - <span>Fehintola</span>. I'm a passionate and
          goal-driven <span>Front End Developer</span> focused on creating
          interactive digital experiences on the web. My interest in coding
          started back in 2020 when I came across a YouTube video on HTML & CSS.
          So, in 2021, I took a course in Web Development on{" "}
          <span>freeCodeCamp</span>. I am constantly learning and expanding my
          skillset. When I'm not coding, I'm either watching animated movies or
          binging on the latest Korean dramas or escaping reality through books,
          lol. I'm currently working on various
          frontend projects to advance and and improve my skills.
        </p>
        <Button />
      </div>
      <Qualification />
    </section>
  );
}

export default About;
