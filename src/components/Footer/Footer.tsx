import SectionCard from "../SectionCard/SectionCard";
import Select from "../Select/Select";
import styles from "./Footer.module.css";
import { languages } from "../Navbar/Navbar";

const Footer = () => {
  return (
    <SectionCard className={styles.last}>
      <div>
        Questions? Call <a href="tel:0800 591 8943">0800 591 8943</a>
      </div>
      <div>
        <ul className={styles.contactList}>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Help Center</a>
          </li>
          <li>
            <a>Account</a>
          </li>
          <li>
            <a>Media Center</a>
          </li>
          <li>
            <a>Investor Relations</a>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Redeem Gift Cards</a>
          </li>
          <li>
            <a>Buy Gift Cards</a>
          </li>
          <li>
            <a>Ways to Watch</a>
          </li>
          <li>
            <a>Terms of Use</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Cookie Preferences</a>
          </li>
          <li>
            <a>Corporate Information</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Speed Test</a>
          </li>
          <li>
            <a>Legal Notices</a>
          </li>
          <li>
            <a>Only on Netflix</a>
          </li>
        </ul>
      </div>
      <div id="footer-select-container">
        <Select options={languages} className={styles.footerSelect} />
      </div>
      <p>Netflix Brazil</p>
    </SectionCard>
  );
};

export default Footer;
