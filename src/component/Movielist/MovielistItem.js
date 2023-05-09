import React from "react";

const MovieListItem = ({ moviename, rating, image, id }) => {
  return (
    <div>
      <li key={id} style={{ background: "yellow", margin: 10 }}>
        <p>{moviename}</p>
        <p>{rating}</p>
        <div>
          <img style={{ width: 100, height: 100 }} src={image}></img>
        </div>
      </li>
    </div>
  );
};

export default MovieListItem;
