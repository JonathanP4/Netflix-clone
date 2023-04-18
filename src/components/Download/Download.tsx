import download from "../../assets/img/download-icon.gif";
import styles from "./Download.module.css";
import boxshot from "../../assets/img/boxshot.png";

const Download = (props: any) => {
  return (
    <div className={styles.downloadContainer}>
      <div>
        <div>
          <img id={styles.boxshot} src={boxshot} alt="stranger_things_image" />
        </div>
        <div className={styles.downloadText}>
          <p>Stranger Things</p>
          <p>Downloading</p>
        </div>
      </div>
      <div>
        <img
          className={styles.downloadIcon}
          src={download}
          alt="download_gif"
        />
      </div>
    </div>
  );
};

export default Download;
