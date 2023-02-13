import likeDefault from "../img/like_default.png";
import likeActive from "../img/like_active.png";
import likeHover from "../img/like_hover.png";
import { useState } from "react";

function ToursCard(props) {
  const { img, title, description } = props;
  const [activeLike, setActiveLike] = useState(false);

  const handleMouseEnter = (e) => {
    //для появления лайка при наведении
    e.target.style = "display: block";
    e.target.src = activeLike ? likeActive : likeHover;
  };
  const handleMouseLeave = (e) => {
    e.target.src = activeLike ? likeActive : likeDefault;
  };

  return (
    <div className="card-item other-tours__cards__card-item">
      <div className="img other-tours__cards__card-item__img">
        <img
          className="other-tours__cards__card-item__image"
          src={img}
          alt={title}
        ></img>
        <img
          style={{ display: "block" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="other-tours__cards__card-item__like"
          onClick={() => {
            setActiveLike((active) => {
              return !active;
            });
          }}
          src={activeLike ? likeActive : likeDefault}
          alt="like"
        ></img>
      </div>

      <div className="title other-tours__cards__card-item__title">
        <h2>{title}</h2>
      </div>

      <div className="description other-tours__cards__card-item__description">
        {description}
      </div>
    </div>
  );
}

export default ToursCard;
