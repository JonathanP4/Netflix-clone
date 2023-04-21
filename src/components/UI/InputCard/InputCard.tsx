import { BaseSyntheticEvent } from "react";
import classes from "./InputCard.module.css";

const InputCard: React.FC<{
  className: string;
  children: any;
  clickHandler: (a: any) => void;
}> = (props) => {
  const clickHandler = (e: BaseSyntheticEvent) => {
    props.clickHandler(e);
  };
  return (
    <div
      onClick={clickHandler}
      className={`${classes.inputContainer} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default InputCard;
