import styles from "./FaqComponent.module.css";
import { faqs } from "../../data/faqs";
import SectionCard from "../SectionCard/SectionCard";

type faqContent = {
  question: string;
  answer: any;
};

const FaqComponent = (props: any) => {
  return (
    <SectionCard>
      <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
      <div className={styles.faqItemsContainer}>
        {faqs.map((faq: faqContent) => (
          <div key={faq.question} className={styles.faqContainer}>
            <div className={styles.questionContainer}>
              <span>{faq.question}</span>
              <i className={`${styles.plusIcon} ${"fa fa-plus"}`}></i>
            </div>
            <div className={styles.answerContainer}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
export default FaqComponent;
