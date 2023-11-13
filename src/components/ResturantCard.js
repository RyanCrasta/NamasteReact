const ResturantCard = ({ resturant }) => {
  function cuisineText() {
    let text = "";
    resturant.info.cuisine.map((cusi) => {
      text = text + cusi.name + ", ";
    });
    let return_text = text.slice(0, 25);
    if (return_text[return_text.length - 1] == ",") {
      return_text = return_text.slice(0, return_text.length - 1);
    } else if (
      return_text[return_text.length - 1] === " " &&
      return_text[return_text.length - 2] === ","
    ) {
      return_text = return_text.slice(0, return_text.length - 2);
    }
    return return_text;
  }

  return (
    <div className="resturant-outer-card">
      <div className="resturant-card">
        <img className="resturant-img" src={resturant.info.image.url} />
        <div className="description">
          <span>{resturant.info.name}</span>
          <span>{resturant.info.rating.rating_text} star</span>
        </div>
        <div className="more-info">
          <span>{cuisineText()}...</span>
          <span>{resturant.info.cft.text}</span>
        </div>
        <div className="time">
          <span>{resturant.order.deliveryTime}</span>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
