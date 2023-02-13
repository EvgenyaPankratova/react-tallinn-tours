import closeDisable from "../img/close_disable.png";
import closeHover from "../img/close_hover.png";
import { useState } from "react";

function Feedback({ active, setActive }) {
  const [selectButton, setselectButton] = useState(false);
  let resButton = "";

  const handleMouseEnter = (e) => {
    //для смены кнопки-закрытия при наведении
    e.target.src = closeHover;
  };
  const handleMouseLeave = (e) => {
    //для смены кнопки-закрытия при наведении
    e.target.src = closeDisable;
  };

  const clickSetselectButton = (e) => {
    //для изменения состояния кнопок перед textarea
    resButton = e.target.value;
    setselectButton((selectButton) => {
      return !selectButton;
    });
  };

  return (
    <div
      className={active ? "feedback-block-active" : "feedback-block-non-active"}
    >
      <div className="feedback-content">
        <h2 className="title feedback-content__title">Feedback</h2>
        <div
          className="close-btn feedback-content__close-btn"
          onClick={() => {
            setActive((active) => {
              return !active;
            });
          }}
        >
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src={closeDisable}
            alt="closeDisable"
          ></img>
        </div>

        <form action="#" method="post" target="_blank">
          <div className="feedback-content__form__inputs">
            <div className="feedback-content__form__inputs__item">
              <label for="name">Your name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                id="name"
                required
              />
            </div>

            <div className="feedback-content__form__inputs__item">
              <label for="email">E-mail adress</label>
              <input
                type="email"
                name="mail"
                placeholder="ivanov@gmail.com"
                id="email"
                required
              ></input>
            </div>

            <div className="feedback-content__form__inputs__item">
              <label for="number">Your phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+7 000 000-00-00"
                id="number"
                maxlength="21"
                required
              ></input>
            </div>

            <div className="feedback-content__form__inputs__item">
              <label for="seltrip">Сhoose a trip</label>
              <select
                className="feedback-content__form__select"
                id="seltrip"
                required
              >
                <option
                  className="feedback-content__form__select__selected"
                  disabled
                  selected
                  hidden
                >
                  Сhoose
                </option>
                <option value="Walking in Old Tallinn">
                  Walking in Old Tallinn
                </option>
                <option value="St. Isaac's Cathedral">
                  St. Isaac's Cathedral
                </option>
                <option value="The Bridge of Peace">The Bridge of Peace</option>
                <option value="El Caminito del Rey">El Caminito del Rey</option>
              </select>
            </div>
          </div>

          <div className="feedback-content__form__buttons">
            <button
              onClick={clickSetselectButton}
              value="reviews"
              className={
                selectButton && resButton === "reviews"
                  ? "button feedback-content__form__buttons-item-active"
                  : "button feedback-content__form__buttons-item"
              }
            >
              Reviews and suggestions
            </button>
            <button
              onClick={clickSetselectButton}
              value="question"
              className={
                selectButton && resButton === "question"
                  ? "button feedback-content__form__buttons-item-active"
                  : "button feedback-content__form__buttons-item"
              }
            >
              Question about content
            </button>
            <button
              onClick={clickSetselectButton}
              value="complaints"
              className={
                selectButton && resButton === "complaints"
                  ? "button feedback-content__form__buttons-item-active"
                  : "button feedback-content__form__buttons-item"
              }
            >
              Complaints
            </button>
            <button
              onClick={clickSetselectButton}
              value="other"
              className={
                selectButton && resButton === "other"
                  ? "button feedback-content__form__buttons-item-active"
                  : "button feedback-content__form__buttons-item"
              }
            >
              Other
            </button>
          </div>

          <div className="feedback-content__form__textarea-block">
            <label for="feedback">Describe your question</label>
            <textarea
              className="feedback-content__form__textarea"
              id="feedback"
              name="feedback"
              placeholder="your question here"
            ></textarea>
          </div>

          <div className="feedback-content__form__send-block">
            <input
              className="feedback-content__form__send-block__checkbox"
              type="checkbox"
              name="check"
              value="check"
              id="check"
            />
            <label for="check">Даю согласие на обработку</label>
            <button className="feedback-content__form__send-block__button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
