import { BaseSyntheticEvent } from "react";
import InputCard from "../InputCard/InputCard";
import classes from "./EmailInput.module.css";

const EmailInput: React.FC<{ id: string; labelId: string }> = (props: any) => {
  const activateInput = (e: BaseSyntheticEvent) => {
    const el = document.querySelector(
      `.${classes.emailInputContainer} #${props.id}`
    )! as HTMLInputElement;

    const label = document.querySelector(
      `.${classes.emailInputContainer} #${props.labelId}`
    )! as HTMLLabelElement;

    el.focus();
    label.classList.add(classes.activeLabel);
  };

  const inputBlur = (e: BaseSyntheticEvent) => {
    const label = document.querySelector(
      `.${classes.emailInputContainer} #${props.labelId}`
    )! as HTMLLabelElement;

    if (e.target.value.trim().length === 0) {
      label.classList.remove(classes.activeLabel);
    }
  };

  return (
    <InputCard
      clickHandler={activateInput}
      key={"hero_email_input"}
      className={classes.emailInputContainer}
    >
      <label id={props.labelId} htmlFor={props.id}>
        Email address
      </label>
      <input
        onBlur={inputBlur}
        type="text"
        id={props.id}
        autoComplete="email"
      />
    </InputCard>
  );
};

export default EmailInput;
