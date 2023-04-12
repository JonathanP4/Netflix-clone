import { BaseSyntheticEvent, useState } from "react";
import styles from "./Select.module.css";

type option = { value: string; lang: string };

const Select = (props: any) => {
  const [display, setDisplay] = useState(false);
  const [language, setLanguage] = useState(props.options[0].lang);

  const displaySelector = () => {
    setDisplay((ps) => !ps);
  };

  const selectLanguage = (e: BaseSyntheticEvent) => {
    setLanguage(e.target.textContent);
  };

  return (
    <div onClick={displaySelector} className={styles.selectContainer}>
      <div
        className={`${styles.select} ${props.className ? props.className : ""}`}
        aria-label="select-language"
        aria-hidden="true"
      >
        <i className="fa-solid fa-globe"></i>
        {language}
        <i className="fa fa-caret-down"></i>
      </div>
      {display && (
        <div
          className={`${styles.options} ${
            props.className ? props.className : ""
          }`}
        >
          {props.options.map((opt: option) => (
            <div
              onClick={selectLanguage}
              className={`${styles.option} ${
                props.className ? props.className : ""
              }`}
              key={opt.value}
            >
              {opt.lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
