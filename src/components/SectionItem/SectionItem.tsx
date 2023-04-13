import styles from "./SectionItem.module.css";
import { VIDEO_URLS } from "../../helpers/variables";
import tvImg from "../../assets/img/tv.png";

const SectionItem: React.FC<{
  title: string;
  text: string;
  imgSrc: string;
  videoSrc?: string;
  alt: string;
}> = (props) => {
  return (
    <div className={styles.sectionItem}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className={styles.imgContainer}>
        <img id={`${props.alt}_img`} src={props.imgSrc} alt={props.alt} />
        {props.videoSrc && (
          <video
            id={`${props.alt}_video`}
            autoPlay
            playsInline
            muted
            src={props.videoSrc}
          />
        )}
      </div>
    </div>
  );
};

export default SectionItem;
