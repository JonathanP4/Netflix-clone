import LanguageSelect from "../UI/LanguageSelect/LanguageSelect";
import classes from "./Footer.module.css";

const Footer = (props: any) => {
  return (
    <div className={classes.footerMaster}>
      <div className={classes.footer}>
        <span>
          Questions? <a href="tel:0800 591 8943">Call 0800 591 8943</a>
        </span>
        <div>
          <ul className={classes.contactList}>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="#">Buy Gift Cards</a>
            </li>
            <li>
              <a href="#">Ways to Watch</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
            <li>
              <a href="#">Only on Netflix</a>
            </li>
          </ul>
        </div>
        <div className={classes.footerLangSelect}>
          <LanguageSelect id="footer_lang_select" className="" />
        </div>
        <span className={classes.copyright}>Netflix Brazil</span>
        <div className={classes.attribution}>
          Coded by:{" "}
          <a href="https://github.com/JonathanP4/">Jonathan Petersen</a>
          <br />
          Original site:{" "}
          <a href="https://www.netflix.com/br-en/">Netflix Brazil</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
