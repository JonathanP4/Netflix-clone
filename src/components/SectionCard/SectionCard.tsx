import styles from "./SectionCard.module.css";

const SectionCard = (props: any) => {
  return (
    <div
      className={`${styles.sectionCard} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default SectionCard;
