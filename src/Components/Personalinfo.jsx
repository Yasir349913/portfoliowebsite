import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Personalinfo.module.css";
import img1 from "../images/img1.avif";
import linkedin from "../images/linkedin.webp";
import Button from "./Button";
import yasirimg from "../images/yasirimg.jpg";

gsap.registerPlugin(ScrollTrigger);

const Personalinfo = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1100px)", () => {
      // Desktop animations
      let tl = gsap.timeline();
      tl.to(".primaryheading", {
        x: 200,
        duration: 1,
        delay: 1,
        fontWeight: "bold",
      })
        .to(".secondaryheading", {
          x: 200,
          duration: 1,
          color: "blue",
          fontWeight: "bold",
        })
        .to(".info", {
          x: 200,
          duration: 1,
          fontWeight: "bold",
        });
      tl.fromTo(
        ".pic",
        { opacity: 0, x: 800 },
        { opacity: 1, x: 200, duration: 1 }
      );
    });

    mm.add("(min-width: 600px) and (max-width: 933px)", () => {
      // Tablet/mobile animations
      let tl = gsap.timeline();
      tl.to(".primaryheading", {
        x: 50, // Adjust for smaller screens
        duration: 1,
        delay: 0.5,
        fontWeight: "bold",
      })
        .to(".secondaryheading", {
          x: 50,
          duration: 1,
          color: "blue",
          fontWeight: "bold",
        })
        .to(".info", {
          x: 30,
          duration: 1,
          fontWeight: "bold",
        });
      tl.fromTo(
        ".pic",
        { opacity: 0, x: 400 },
        { opacity: 1, x: 100, duration: 1 }
      );
    });
    mm.add("(min-width: 200px) and (max-width: 599px)", () => {
      // Tablet/mobile animations
      let tl = gsap.timeline();
      tl.to(".primaryheading", {
        x: 20, // Adjust for smaller screens
        duration: 1,
        delay: 0.5,
        fontWeight: "bold",
      })
        .to(".secondaryheading", {
          x: 20,
          duration: 1,
          color: "blue",
          fontWeight: "bold",
        })
        .to(".info", {
          x: 20,
          duration: 1,
          fontWeight: "bold",
        });
      tl.fromTo(
        ".pic",
        { opacity: 0, x: 400 },
        { opacity: 1, x: 50, duration: 1 }
      );
    });

    // Clean up GSAP matchMedia listeners on component unmount
    return () => mm.revert();
  }, []);

  return (
    <>
      <div className={`${styles.container} box`}>
        <h2 className={`${styles.heading1} primaryheading`}>
          Hi, I'm Yasir Maqsood
        </h2>
        <h2 className={`${styles.heading2} secondaryheading`}>
          Frontend Web Developer
        </h2>
        <p className={`${styles.para} info`}>
          Crafting seamless web experiences with creativity and code.
          <br />
          Transforming ideas into interactive websites that engage and inspire.
        </p>
      </div>
      <Button />
      <a
        href="https://www.linkedin.com/in/yasir-maqsood?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedin}
          alt="LinkedIn profile"
          className={styles.linkedinlogo}
        />
      </a>
      <img src={img1} alt="Profile" className={`${styles.profileimage} pic`} />
    </>
  );
};

export default Personalinfo;
