import { useState } from "react";
import { IMG_1441 } from "../utils/constants";

const ResturantCard = ({ resturant }) => {
  const [imgData, setImgData] = useState(`${IMG_1441}${resturant.image}`);

  function handleError(e) {
    console.log("monkey");
    e.stopPropagation();
    setImgData(
      "https://www.uengage.in/images/addo/logos/logo-6945-1662640464.png"
    );
  }

  return (
    <div className="resturant-outer-card">
      <div className="resturant-card">
        <img className="resturant-img" onError={handleError} src={imgData} />
        <div className="description">
          <span>{resturant.sectionName}</span>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
