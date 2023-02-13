import peterburg from "../img/Photo 1.png";
import tbilisi from "../img/Photo 2.png";
import argentina from "../img/Photo 3.png";
import ToursCard from "./ToursCard";

function OtherTours() {
  const tours = [
    {
      img: peterburg,
      title: "St. Isaac's Cathedral in St. Petersburg",
      description: "One of the highest domed structures in the world.",
    },
    {
      img: tbilisi,
      title: "The Bridge of Peace, Tbilisi",
      description: "Arc-shaped pedestrian bridge made of glass and steel",
    },
    {
      img: argentina,
      title: "El Caminito del Rey, Argentina",
      description: "Tango, Open-air Museum, Painting, Art and History",
    },
  ];

  return (
    <div className="other-tours">
      <div className="title other-tours__title">
        <h2>Other tours</h2>
      </div>
      <div className="cards other-tours__cards">
        {tours.map((item) => (
          <ToursCard key={Date.now()} {...item} />
        ))}
      </div>
    </div>
  );
}

export default OtherTours;
