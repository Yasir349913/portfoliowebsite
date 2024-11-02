import styles from "./Skills.module.css";
const Skills = ({ name, explain }) => {
  return (
    <>
      <div className={styles["skillset"]}>
        <h1 className={styles["skillname"]}>{name}</h1>
        <p className={styles["skillexplain"]}>{explain}</p>
      </div>
    </>
  );
};
export default Skills;
