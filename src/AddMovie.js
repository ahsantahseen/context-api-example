import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const updateId = (e) => {
    setId(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: id },
    ]);
  };
  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        placeholder="enter movie name"
        value={name}
        onChange={updateName}
      ></input>

      <input
        type="text"
        name="price"
        placeholder="enter movie price"
        value={price}
        onChange={updatePrice}
      ></input>

      <input
        type="text"
        name="id"
        placeholder="enter movie id"
        value={id}
        onChange={updateId}
      ></input>
      <button>Submit!</button>
    </form>
  );
};
export default AddMovie;
