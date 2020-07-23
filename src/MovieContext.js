import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieProvider;
