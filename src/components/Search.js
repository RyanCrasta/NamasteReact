import React from "react";

export default function Search({ setSearch, search }) {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={searchHandler} value={search} />
    </div>
  );
}
