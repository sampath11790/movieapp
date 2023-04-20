import "./App.css";
import MovieList from "./component/Movielist/Movielist";
var obj = [
  { name: "one", place: "bangalore" },
  { name: "two", place: "chennai" },
  { name: "three", place: "hosur" },
];
function App() {
  return (
    <div className="App">
      <h1>welcome</h1>
      <MovieList user={obj}></MovieList>
    </div>
  );
}

export default App;
