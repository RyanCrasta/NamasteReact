import React from "react";
import ReactDOM from "react-dom/client";
import ZOMATO_API_CALL_RES from "./zomato";

const root = ReactDOM.createRoot(document.getElementById("root"));

const d = ZOMATO_API_CALL_RES.sections.SECTION_SEARCH_RESULT;

const data = [
  {
    id: 471,
    resturant_name: "Aadeshwari Biryani Centre",
    ratings: 4.2,
    cuisine: "Biryani, South Indian, Andhra",
    cost: "250 for one",
    time: 31,
    image_url:
      "https://b.zmtcdn.com/data/pictures/4/20586304/249d982fd2520500ce56ff41a24397bd_o2_featured_v2.jpg",
  },
  {
    id: 123,
    resturant_name: "Starbucks Coffee",
    ratings: 4.3,
    cuisine: "Cafe, coffee, Beverage",
    cost: "300 for one",
    time: 22,
    image_url:
      "https://b.zmtcdn.com/data/pictures/chains/4/43344/163aa2d5720ce597203370afb1357c90_o2_featured_v2.jpg",
  },
  {
    id: 934,
    resturant_name: "La Pino'z Pizza",
    ratings: 3.9,
    cuisine: "Pizza, Pasta, Italian Fast food",
    cost: "250 for one",
    time: 27,
    image_url:
      "https://b.zmtcdn.com/data/pictures/chains/2/18796372/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg",
  },
  {
    id: 134,
    resturant_name: "The Belgian Waffle Co.",
    ratings: 4.1,
    cuisine: "Waffle, Pan cake, icecream",
    cost: "250 for one",
    time: 32,
    image_url:
      "https://b.zmtcdn.com/data/pictures/chains/3/18140523/4f6e3cde9671c2a47fc7d911d0378768_o2_featured_v2.jpg",
  },
  {
    id: 867,
    resturant_name: "Natural Ice Cream",
    ratings: 4.4,
    cuisine: "Ice Cream, Desserts, Shake",
    cost: "250 for one",
    time: 15,
    image_url:
      "https://b.zmtcdn.com/data/pictures/0/35240/adb20cc3d424971e06802e03adcf5a44_o2_featured_v2.jpg",
  },
  {
    id: 961,
    resturant_name: "Ribbons And Balloons",
    ratings: 4.2,
    cuisine: "Bakery, Desserts, Fast food, rolls",
    cost: "50 Rs for one",
    time: 24,
    image_url:
      "https://b.zmtcdn.com/data/pictures/chains/8/44028/43e83ba8030bc5ee7a28aebbd52b44c5_o2_featured_v2.jpg",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          width={150}
          src="https://images-platform.99static.com/CDG3tPS1HqvP7u8kJysYXIf-os4=/500x500/top/smart/99designs-contests-attachments/58/58659/attachment_58659944"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = ({ resturant }) => {
  function cuisineText() {
    let text = "";
    resturant.info.cuisine.map((cusi) => {
      text = text + cusi.name + ", ";
    });
    let return_text = text.slice(0, 25);
    console.log(return_text, return_text.length);
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

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="resturant-conatiner">
        {d.map((resturant) => {
          return <ResturantCard key={resturant.id} resturant={resturant} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
