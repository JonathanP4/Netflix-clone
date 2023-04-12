import styles from "./Button.module.css";

const Button = (props: any) => {
  return (
    <button
      type={props.type || "button"}
      className={`${styles.button} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
