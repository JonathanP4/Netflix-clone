import classes from "./LanguageSelect.module.css";

const LanguageSelect: React.FC<{id: string; classes: string}> = (props: any) => {
  return (
    <div className={`${classes.selectContainer} ${props.classes}`}>
      <i className={`fa-solid fa-globe ${classes.globe}`}></i>
      <label className={classes.label} htmlFor={props.id}>Select Language</label>
      <select className={`${classes.select} ${props.classes}`} id={props.id}>
        <option value="en-US">English</option>
        <option value="pt-BR">Português</option>
      </select>
      <i className={`fa fa-caret-down ${classes.downCaret}`}></i>
    </div>
  );
};

export default LanguageSelect;
