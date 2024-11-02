import styles from "./Educationbox.module.css";
const Educationbox = ({ date, name, detail }) => {
  return (
    <>
      <div className={styles["items"]}>
        <h6 className={styles["year"]}>{date}</h6>
        <h1 className={styles["school"]}>{name}</h1>
        <p className={styles["explain"]}>{detail}</p>
      </div>
    </>
  );
};
export default Educationbox;
