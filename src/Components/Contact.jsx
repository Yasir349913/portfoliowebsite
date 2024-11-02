import React, { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Contact.module.css";

const Contact = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    // Define animations for larger screens (desktop and tablet)
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline();
      tl.from(".heading", {
        opacity: 0,
        y: -50,
        duration: 1,
      })
        .from(
          ".inputContainer",
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".btn3",
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
          },
          "-=0.5"
        );
    });

    // Define animations for smaller screens (mobile)
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline();
      tl.from(".heading", {
        opacity: 0,
        y: -30, // Smaller y-offset for mobile
        duration: 0.8,
      })
        .from(
          ".inputContainer",
          {
            opacity: 0,
            y: 30, // Smaller y-offset for mobile
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".btn3",
          {
            opacity: 0,
            scale: 0.9, // Less scaling on mobile
            duration: 0.8,
          },
          "-=0.4"
        );
    });

    // Cleanup function to remove GSAP listeners when component unmounts
    return () => mm.revert();
  }, []);

  return (
    <div className={`${styles.contactpage} contacts`}>
      <center>
        <h1 className={`${styles.heading} heading`}>Contact Me</h1>
      </center>

      <div className={`${styles.inputContainer} inputContainer`}>
        <input
          className={`${styles.naam} name`}
          type="text"
          placeholder="Full name"
        />
        <input
          className={`${styles.mail} email`}
          type="email"
          placeholder="Email address"
        />
        <input
          className={`${styles.num} number`}
          type="number"
          placeholder="Mobile number"
        />
        <input
          className={`${styles.add} address`}
          type="text"
          placeholder="Email Subject"
        />
        <textarea
          className={`${styles.message} msg`}
          rows="5"
          placeholder="Your message"
        />
      </div>
      <button type="button" className={`${styles.btn3} btn3 btn btn-primary`}>
        Submit
      </button>
    </div>
  );
};

export default Contact;
