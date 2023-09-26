import React from "react";
import styles from "../styles/skills.module.scss";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  DiCss3Full,
  DiJavascript1,
  DiBootstrap,
  DiPython,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiNetlify,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaReact, FaSass } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { ImGit, ImNpm } from "react-icons/im";

function Skills() {
  const skills = [
    {
      id: 1,
      icon: <AiFillHtml5 />,
      text: "HTML",
      color: "#e34c26",
    },
    {
      id: 2,
      icon: <DiCss3Full />,
      text: "CSS",
      color: "#2965f1",
    },
    {
      id: 3,
      icon: <FaSass />,
      text: "Sass",
      color: "#c76494",
    },
    {
      id: 4,
      icon: <DiJavascript1 />,
      text: "JavaScript",
      color: "#f7df1e",
    },
    {
      id: 5,
      icon: <DiBootstrap />,
      text: "Bootstrap",
      color: "#563d7c",
    },
    {
      id: 6,
      icon: <SiTailwindcss />,
      text: "Tailwind",
      color: "#07b7d4",
    },
    {
      id: 7,
      icon: <FaReact />,
      text: "React",
      color: "#60dafb",
    },
    {
      id: 8,
      icon: <DiPython />,
      text: "Python",
      color: "#4b8bbe",
    },
    {
      id: 9,
      icon: <TbSql />,
      text: "SQL",
      color: "#f29111",
    },
    {
      id: 10,
      icon: <ImGit />,
      text: "Git",
      color: "#f14e32",
    },
    {
      id: 11,
      icon: <AiFillGithub />,
      text: "GitHub",
      color: "#000",
    },
    {
      id: 12,
      icon: <SiVisualstudiocode />,
      text: "Visual Studio",
      color: "#0078d7",
    },
    {
      id: 13,
      icon: <SiNetlify />,
      text: "Netlify",
      color: "#4d9abf",
    },
    {
      id: 14,
      icon: <SiVercel />,
      text: "Vercel",
      color: "#fff",
    },
    {
      id: 15,
      icon: <ImNpm />,
      text: "NPM",
      color: "#cc3837",
    },
  ];
  return (
    <section className={styles.skills}>
      <div className={styles.skillsContent}>
        <h1>
          Tech <span>Stack</span>
        </h1>
        <h3>Skills/Tools</h3>
        <p>
          Here are some tools and technologies I have worked with for my
          personal, professional and open source projects.
        </p>

        <div className={styles.techStack}>
          <ul>
            {skills.map(({ id, icon, text, color }) => (
              <li key={id} id={id}>
                <div className={styles.stackContent}>
                  <div className={styles.skillsIcon}>
                    {React.cloneElement(icon, { color: color, size: 28 })}
                  </div>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
