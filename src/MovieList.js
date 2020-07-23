import React, { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Baby's Day Out",
      price: "$5",
      id: 14341,
    },
    {
      name: "Madagasscar",
      price: "$3",
      id: 142,
    },
    {
      name: "Jurassic Park",
      price: "$12",
      id: 134,
    },
  ]);
  return (
    <div>
      {movies.map((movie) => (
        <li>{movie.name}</li>
      ))}
    </div>
  );
};
export default MovieList;
