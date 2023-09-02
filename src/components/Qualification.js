import styles from "../styles/qualification.module.scss";
// import { BsBriefcase } from "react-icons/bs";
// import { LuGraduationCap } from "react-icons/lu";
// import { FaRegCalendarAlt } from "react-icons/fa";
import { qualification } from "../data/qualification";
import QCard from "./QCard";
const Qualification = () => {
  return (
    <section className={styles.qualification}>
      <h1>Qualification</h1>

      <div className={styles.qualificationContent}>
        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Experience</h3>
          {qualification.map((item, id) => {
            if (item.category === "experience") {
              return (
                <QCard
                  key={id}
                  icon={item.icon}
                  duration={item.duration}
                  title={item.title}
                  subtitle={item.subtitle}
                  desc={item.desc}
                />
              );
            } else return null;
          })}
        </div>

        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Education</h3>
          {qualification.map((item, index) => {
            if (item.category === "education") {
              return (
                <QCard
                  key={index}
                  icon={item.icon}
                  duration={item.duration}
                  title={item.title}
                  subtitle={item.subtitle}
                  desc={item.desc}
                />
              );
            } else return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
