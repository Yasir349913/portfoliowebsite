import Educationbox from "./Educationbox";
import Skills from "./Skills";
import styles from "./Education.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";

const Education = ({ education, skills }) => {
  return (
    <>
      <div className={styles["edu"]}>
        <center>
          <h2 className={styles["text"]}>Education and skills</h2>
        </center>
        <div className={`${styles["container"]} containers`}>
          {education.map((item, index) => (
            <span
              key={`education-${index}`}
              className={`${styles["box"]} education-box`}
            >
              <Educationbox
                date={item.date}
                name={item.name}
                detail={item.detail}
              />
            </span>
          ))}
          {skills.map((skill, index) => (
            <span
              key={`skill-${index}`}
              className={`${styles["box"]} skill-box`}
            >
              <Skills name={skill.name} explain={skill.explain} />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
