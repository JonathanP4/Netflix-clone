import SectionCard from "../SectionCard/SectionCard";
import styles from "./SectionItem.module.css";

const SectionItem = (props: any) => {
  return (
    <SectionCard>
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
        {props.children}
      </div>
    </SectionCard>
  );
};

export default SectionItem;
