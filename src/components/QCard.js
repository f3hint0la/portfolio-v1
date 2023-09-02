import React from "react";
import styles from "../styles/qualification.module.scss";

const QCard = (props) => {
  return (
    <div className={styles.categoryItem}>
        <div className={styles.categoryIcon}>{props.icon}</div>
        <span className={styles.timelineDate}>{props.duration}</span>
        <h3>{props.title}</h3>
        <span className={styles.subtitle}>{props.subtitle}</span>
        <p>{props.desc}</p>
    </div>
  );
}

export default QCard;
