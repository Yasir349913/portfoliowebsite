import img2 from "../images/img2.png";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.png";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.png";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles["projects"]}>
        <h1>Latest Projects</h1>
        <div className={styles["projectimages"]}>
          <img className={styles["imgs"]} src={img2} alt="image error" />
          <img className={styles["imgs"]} src={img3} alt="image error" />
          <img className={styles["imgs"]} src={img4} alt="image error" />
          <img className={styles["imgs"]} src={img5} alt="image error" />
          <img className={styles["imgs"]} src={img6} alt="image error" />
          <img className={styles["imgs"]} src={img7} alt="image error" />
          <img className={styles["imgs"]} src={img8} alt="image error" />
          <img className={styles["imgs"]} src={img9} alt="image error" />
        </div>
      </div>
    </>
  );
};
export default Projects;
