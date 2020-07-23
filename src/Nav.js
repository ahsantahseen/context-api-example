import React, { useContext } from "react";
import "./Nav.css";
import { MovieContext } from "./MovieContext";
const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <nav className="navBar">
        <h2>Movies App</h2>
        <h2>No of Movies: {movies.length} </h2>
      </nav>
    </div>
  );
};

export default Nav;
