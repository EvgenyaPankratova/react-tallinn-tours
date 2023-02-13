import { useState } from "react";
import slide1 from "../img/Rectangle 2.png";
import slide2 from "../img/Rectangle 3.png";
import slide3 from "../img/Rectangle 4.png";
import slide4 from "../img/Rectangle 5.png";
import slide5 from "../img/Rectangle 6.png";

import arrowDefault from "../img/arrow_default.png";
import arrowDisable from "../img/arrow_disable.png";
import arrowHover from "../img/arrow_hover.png";
import SliderItem from "./SliderItem";

function Slider() {
  const img = [
    <img key={slide1} src={slide1} alt={slide1} />,
    <img key={slide2} src={slide2} alt={slide2} />,
    <img key={slide3} src={slide3} alt={slide3} />,
    <img key={slide4} src={slide4} alt={slide4} />,
    <img key={slide5} src={slide5} alt={slide5} />,
  ];

  const sliderLength = window.innerWidth <= 770 ? 1 : 4; //сколько элементов хочу выводить
  const [stateArray, setStateArray] = useState([...Array(sliderLength).keys()]);

  const handleMouseEnter = (e) => {
    //для смены кнопки-переключения при наведении
    e.target.src = arrowHover;
  };
  const handleMouseLeave = (e) => {
    //для смены кнопки-переключения при наведении
    e.target.src = arrowDefault;
  };

  const handleActiveIndexNext = () => {
    setStateArray(() => {
      let arr = [];
      for (let i = 0; i < sliderLength; i++) {
        let ind = stateArray[i] + 1;
        arr.push(ind === img.length ? 0 : ind);
      }
      return arr;
    });
  };

  const handleActiveIndexPrev = () => {
    setStateArray(() => {
      let arr = [];
      for (let i = 0; i < sliderLength; i++) {
        let ind = stateArray[i] - 1;
        arr.push(ind === -1 ? img.length - 1 : ind);
      }
      return arr;
    });
  };

  return (
    <>
      <div className="slider">
        {stateArray.map((item) => {
          return <SliderItem key={img[item].key} image={img[item]} />;
        })}
      </div>

      <div className="slider__buttons">
        <div
          className="slider__buttons__item slider__buttons__item-disable"
          onClick={handleActiveIndexPrev}
        >
          <img src={arrowDisable} alt="arrow-disable" />
        </div>
        <div
          className="slider__buttons__item slider__buttons__item-default"
          onClick={handleActiveIndexNext}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={arrowDefault} alt="arrow-default"></img>
        </div>
      </div>
    </>
  );
}

export default Slider;
