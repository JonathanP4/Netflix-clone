import PopcornIcon from "../PopcornIcon/IconPopcorn";
import styles from "./AdsPlan.module.css";
import icon from "/src/assets/img/popcorn.svg";

const AdsPlan = () => {
  return (
    <div className={styles.adContainer}>
      <div className={styles.iconContainer}>
        <PopcornIcon />
      </div>
      <div className={styles.adText}>
        <p>The netflix you love for just BRL 19.90</p>
        <p>Get the Basic with ads plan</p>
        <a className={styles.learnMore} href="#">
          <span>Learn More</span> <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};
export default AdsPlan;
