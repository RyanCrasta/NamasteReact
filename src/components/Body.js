import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Search from "./Search";

const Body = () => {
  const shimmer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [realData, setRealData] = useState(null);

  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  const initializeData = async () => {
    try {
      const res = await fetch(
        "https://static.uengage.in/feed/v2/feed_6989.json"
      );
      const data = await res.json();
      setData(data.rows.menu);
      setRealData(data.rows.menu);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initializeData();
  }, []);

  useEffect(() => {
    if (search.trim().length > 0) {
      const filteredData = realData.filter((ele) => {
        if (
          ele.sectionName.toLowerCase().includes(search.trim().toLowerCase())
        ) {
          return true;
        }
      });

      setData(filteredData);
    } else {
      setData(realData);
    }
  }, [search]);

  return (
    <div className="body">
      <div className="search"></div>

      <Search setSearch={setSearch} search={search} />

      <div className="resturant-conatiner">
        {data
          ? data.map((resturant) => {
              return (
                <ResturantCard
                  key={resturant.sectionId}
                  resturant={resturant}
                />
              );
            })
          : shimmer.map(() => {
              return (
                <div className="resturant-outer-card">
                  <div className="resturant-card">
                    <article className="article">
                      <div class="line"></div>
                      <div class="line"></div>
                      <div class="line"></div>
                      <div class="shimmer"></div>
                    </article>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Body;
