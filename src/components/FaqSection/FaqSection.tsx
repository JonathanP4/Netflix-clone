import { BaseSyntheticEvent } from "react";
import classes from "./FaqSection.module.css";
import CreateAccount from "../UI/CreateAccount/CreateAccount";

const FaqSection = (props: any) => {
  const toggleAnswer = (e: BaseSyntheticEvent) => {
    const el = e.target.closest("div");
    const parent = el.parentNode;

    if (el.classList.contains(classes.questionContainer)) {
      parent.classList.toggle(classes.active);
    }
  };
  return (
    <div className={classes.faqSectionMaster}>
      <div className={classes.faqItemsContainer} onClick={toggleAnswer}>
        <h2>Frequently Asked Questions</h2>
        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>What is Netflix?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want – all for one
              low monthly price. There's always something new to discover and
              new TV shows and movies are added every week!
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>How much does Netflix cost?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              BRL18.90 to BRL55.90 a month. No extra costs, no contracts.
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>Where can I watch?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
              <br />
              <br />
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>How do I cancel?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>What can I watch on Neflix?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </span>
          </div>
        </div>

        <div className={classes.faqItemContainer}>
          <div className={classes.questionContainer}>
            <span>Is Neflix good for kids?</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-1tgeghn e1tuurd64"
              data-name="Add"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={classes.answerContainer}>
            <span>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space.
              <br />
              <br />
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don't want kids to see.
            </span>
          </div>
        </div>
        <CreateAccount
          labelId="footer_email_label"
          id="footer_create_account"
          className={classes.faqCreateAccount}
        />
      </div>
    </div>
  );
};

export default FaqSection;
