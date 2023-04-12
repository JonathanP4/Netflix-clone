import styles from "./Navbar.module.css";
import logo from "/src/assets/img/logo.svg";
import Button from "../Button/Button";
import Select from "../Select/Select";

const languages = [
  { value: "en-US", lang: "English" },
  { value: "pt-BR", lang: "Português" },
];

const Navbar = (props?: any) => {
  return (
    <div className={styles.nav}>
      <div>
        <img className={styles.logo} src={logo} alt="netflix_logo" />
      </div>
      <div className={styles.inputsContainer}>
        <Select options={languages} />
        <Button>Sign in</Button>
      </div>
    </div>
  );
};

export default Navbar;
