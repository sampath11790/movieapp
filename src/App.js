import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./component/Movielist/Movielist";
import UseEffetctHook from "./component/useEffectHook/UseEfferctHook";
var url = "https://jsonplaceholder.typicode.com/todos/1";
var obj = [
  { name: "one", place: "bangalore" },
  { name: "two", place: "chennai" },
  { name: "three", place: "hosur" },
];
function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://64569bb65f9a4f236148588f.mockapi.io/movies")
      .then((response) => {
        return response.json();
      })
      .then((json) => setdata(json))
      .catch((err) => console.log(err));
    // async function x(){
    //   // const response=await fetch(url)
    //     // console.log(response)
    //     // const data=await response.json()
    //     // console.log(data)
    // }
  }, []);

  console.log("fetch data", data);
  return (
    <div className="App">
      <h1>welcome</h1>
      <MovieList></MovieList>
      <UseEffetctHook Movies={data}></UseEffetctHook>
    </div>
  );
}

export default App;
