import styles from "./Button.module.css";
const Button = () => {
  return (
    <>
      <button type="button" className={`${styles["btn1"]} btn btn-primary`}>
        Hire me
      </button>
      <button type="button" className={`${styles["btn2"]} btn btn-primary`}>
        let's talk
      </button>
    </>
  );
};
export default Button;
