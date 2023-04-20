import React from "react";

const MovieListItem = ({ name, place }) => {
  return (
    <div>
      <li style={{ background: "yellow", margin: 10 }}>
        <p>{name}</p>
        <p>{place}</p>
      </li>
    </div>
  );
};

export default MovieListItem;
