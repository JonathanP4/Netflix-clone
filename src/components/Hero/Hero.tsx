import Login from "../Login/Login";
import styles from "./Hero.module.css";

const Hero = (props: any) => {
  return (
    <div className={styles.hero}>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <Login />
    </div>
  );
};

export default Hero;
