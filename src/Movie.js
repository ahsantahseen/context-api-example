import React from "react";

const Movie = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
    </div>
  );
};
export default Movie;