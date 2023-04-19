import styles from "./Login.module.css";
import Button from "../Button/Button";
import { useState } from "react";

const Login = (props: any) => {
  const [focus, setFocus] = useState(false);

  const setLabelActive = () => setFocus(true);
  const setLabelInactive = () => setFocus(false);

  return (
    <div
      className={`${styles.loginContainer} ${
        props.className ? props.className : ""
      }`}
    >
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form className={styles.form}>
        <div className={styles.emailInputContainer}>
          <label
            className={`${styles.label} ${focus && styles.focusedLabel}`}
            htmlFor="email"
          >
            Email address
          </label>
          <input
            onClick={setLabelActive}
            onBlur={setLabelInactive}
            className={styles.email}
            type="email"
            id="email"
          />
        </div>
        <div>
          <Button className={styles.buttonBig}>
            Get started <i className="fa fa-angle-right"></i>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
