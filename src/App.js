import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import MoviesProvider from "./MovieContext";
import AddMovie from "./AddMovie";

function App() {
  return (
    <div className="App">
      <MoviesProvider>
        <Nav></Nav>
        <AddMovie></AddMovie>
        <MovieList></MovieList>
      </MoviesProvider>
    </div>
  );
}

export default App;
