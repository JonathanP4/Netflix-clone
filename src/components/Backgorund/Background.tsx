import styles from "./Backgorund.module.css";
const Background = (props: any) => {
  return (
    <div>
      <div className={styles.bg}></div>
      <div className={styles.overlay}>
         <div className={styles.inner}></div>
      </div>
      {props.children}
    </div>
  );
};
export default Background;
