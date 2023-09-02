import styles from "../styles/hero.module.scss";
import Button from "./Button";

function Hero() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.header}>
              <span className={styles.greeting}>Hello, I'm</span>
              <span className={styles.name}>Fehintola Akhumere</span>
              <h3>FrontEnd Developer</h3>
            </div>

            <div className={styles.body}>
              <p>
                I am a frontend developer developer with a passion for building
                exceptional, result-oriented and visually appealing
                user-friendly web experiences. I have great interest in
                full-stack development, artificial intelligence and love
                learning new skills.
              </p>
              <Button />
            </div>
          </div>

          <div className={styles.right}></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
