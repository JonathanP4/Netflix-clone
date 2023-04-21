import CreateAccount from "../UI/CreateAccount/CreateAccount";
import classes from "./Hero.module.css";

const Hero = (props: any) => {
  return (
    <div className={classes.hero}>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <CreateAccount
        labelId={"hero_label"}
        id={"hero_create_account"}
        className=""
      />
    </div>
  );
};

export default Hero;
