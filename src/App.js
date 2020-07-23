import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import MoviesProvider from "./MovieContext";

function App() {
  return (
    <div className="App">
      <MoviesProvider>
        <Nav></Nav>
        <MovieList></MovieList>
      </MoviesProvider>
    </div>
  );
}

export default App;
