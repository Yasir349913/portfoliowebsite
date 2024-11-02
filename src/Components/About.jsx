import img1 from "../images/img1.avif";
import styles from "./About.module.css";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.images}`,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.images}`,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      `.${styles.paragraph}`,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: `.${styles.paragraph}`,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className={styles.abouts}>
      <h1 className={styles.aboutheading}>About Me!</h1>
      <img
        className={styles.images}
        src={img1}
        alt="A description of the image"
      />
      <h2 className={styles.secondheading}>Frontend Web Developer!</h2>
      <p className={styles.paragraph}>
        Hello! I’m a passionate frontend developer with a love for creating
        intuitive and dynamic user experiences...
      </p>
      <button type="button" className={styles.btn4}>
        Read more
      </button>
    </div>
  );
};

export default About;
