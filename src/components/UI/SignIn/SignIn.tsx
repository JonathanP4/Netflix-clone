import classes from "./SignIn.module.css";

const SignInBtn: React.FC<{
  classes: string;
  type: "submit" | "button" | "reset";
}> = (props) => {
  return (
    <button className={classes.btnSignIn} type={props.type}>
      <a href="#"> Sign In</a>
    </button>
  );
};

export default SignInBtn;
