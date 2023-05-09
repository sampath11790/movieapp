import React, { useState } from "react";
import MovieListItem from "./MovielistItem";

// var obj = [
//   { name: "one", place: "bangalore" },
//   { name: "two", place: "chennai" },
//   { name: "three", place: "hosur" },
// ];
const MovieList = ({ Movies }) => {
  return (
    <div>
      <ul>
        {Movies.map((each) => (
          <MovieListItem
            id={each.id}
            key={each.id}
            moviename={each.moviename}
            rating={each.rating}
            image={each.poster}
          ></MovieListItem>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

//npx create-react-app nameany
