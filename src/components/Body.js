import { useEffect, useState } from "react";
import ZOMATO_API_CALL_RES from "../utils/zomato";
import ResturantCard from "./ResturantCard";

const Body = () => {
  const [data, setData] = useState(
    ZOMATO_API_CALL_RES.sections.SECTION_SEARCH_RESULT
  );

  const [stars, setStar] = useState([]);

  const handleRatingFilter = (e, r) => {
    if (e.target.checked) {
      setStar((p) => {
        return [...p, r];
      });
    } else {
      const new_arr = stars.filter((item) => item !== r);
      setStar([...new_arr]);
    }
  };

  useEffect(() => {
    console.log(stars, stars === []);
    if (stars.length === 0) {
      setData(ZOMATO_API_CALL_RES.sections.SECTION_SEARCH_RESULT);
    } else {
      const filtered_data = [];
      stars.map((e) => {
        const start = e;
        let end;
        if (start == 4.5) {
          end = e + 0.5;
        } else {
          end = e + 0.4;
        }

        ZOMATO_API_CALL_RES.sections.SECTION_SEARCH_RESULT.map((res) => {
          if (
            +res.info.rating.rating_text >= start &&
            +res.info.rating.rating_text <= end
          ) {
            filtered_data.push(res);
          }
        });

        setData([...filtered_data]);
      });
    }
  }, [stars]);

  return (
    <div className="body">
      <div className="search"></div>
      <div>
        <label for="best">4.5 star to 5 star </label>
        <input
          id="best"
          type="checkbox"
          onClick={(e) => handleRatingFilter(e, 4.5)}
        />
      </div>

      <div>
        <label for="best">4 star to 4.5 star </label>
        <input
          id="best"
          type="checkbox"
          onClick={(e) => handleRatingFilter(e, 4)}
        />
      </div>

      <div>
        <label for="best">3.5 star to 4 star </label>
        <input
          id="best"
          type="checkbox"
          onClick={(e) => handleRatingFilter(e, 3.5)}
        />
      </div>

      <div>
        <label for="best">3 star to 3.5 star </label>
        <input
          id="best"
          type="checkbox"
          onClick={(e) => handleRatingFilter(e, 3)}
        />
      </div>

      <div className="resturant-conatiner">
        {data.map((resturant) => {
          return <ResturantCard key={resturant.id} resturant={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
