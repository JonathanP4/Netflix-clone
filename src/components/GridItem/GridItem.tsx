import classes from "./GridItem.module.css";

const GridItem: React.FC<{
  src: string;
  alt: string;
  title: string;
  text: string;
  className: string;
}> = (props) => {
  return (
    <div className={`${classes.gridItem} ${props.className}`}>
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div className={classes.gridItemText}>
        <p>{props.title}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default GridItem;
