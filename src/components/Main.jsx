import Feedback from "./Feedback";
import { useState } from "react";

function Main() {
  const [feedbackOpen, setfeedbackOpen] = useState(false);

  return (
    <div className="container">
      <Feedback active={feedbackOpen} setActive={setfeedbackOpen} />
      <div className="main">
        <div className="title main__title">
          <h1 className="tallinn main__title__tallinn">
            Walking in Old Tallinn
          </h1>
        </div>

        <div className="feedback main__feedback">
          <button
            className="button main__feedback__button"
            onClick={() => {
              setfeedbackOpen((feedbackOpen) => {
                return !feedbackOpen;
              });
            }}
          >
            Feedback
          </button>
        </div>

        <div className="text main__text">
          <p className="paragraph main__text__paragraph">
            Welcome to Old Tallinn, the heart of the Estonian capital! The
            history of the settlement once began from here, and today it is one
            of the best preserved medieval cities in Europe.
          </p>
          <p className="paragraph main__text__paragraph">
            I will take you through the streets and doorways and show you where
            they traded, what they ate, what they sued about and what our
            Estonian ancestors aspired to.
          </p>
          <p className="paragraph main__text__paragraph">
            You will visit the oldest pharmacy, get acquainted with the royal
            privileges, see firsthand a real "gingerbread" house, look into an
            old tavern, walk along the widest and longest streets of the city
            and even find out that Tallinn is a lame city!
          </p>
          <p className="paragraph main__text__paragraph">
            And you will also find beautiful and interesting souvenirs, of
            course!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
