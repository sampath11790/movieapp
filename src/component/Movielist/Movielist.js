import React, { useState } from "react";
import MovieListItem from "./MovielistItem";

// var obj = [
//   { name: "one", place: "bangalore" },
//   { name: "two", place: "chennai" },
//   { name: "three", place: "hosur" },
// ];
const MovieList = ({ user }) => {
  const newlist = [...user];
  const [data, setdata] = useState(newlist);
  const [name, setname] = useState("");
  const [place, setplace] = useState("");

  function adduser(e) {
    e.preventDefault();
    const newobj = {
      name: name,
      place: place,
    };
    var temparr = [...data, newobj];
    setdata(temparr);
    setname(" ");
    setplace(" ");
    // console.log("add data function");
    // console.log(name, place);
  }

  function nameadd(e) {
    setname(e.target.value);
  }
  return (
    <div>
      <form>
        <input type="text" name="name" onChange={nameadd} value={name}></input>
        <br></br>
        <input
          type="text"
          name="place"
          value={place}
          onChange={(e) => {
            setplace(e.target.value);
          }}
        ></input>
        <br></br>
        <button onClick={adduser}>submit</button>
        <br></br>
      </form>
      <ul>
        {data.map((each) => (
          <MovieListItem name={each.name} place={each.place}></MovieListItem>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

//npx create-react-app nameany
