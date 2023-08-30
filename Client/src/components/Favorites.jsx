import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Cards.module.css";
import Card from "./Card";

const Favorites = () => {
  const favs = useSelector((state) => state.myFavorites);
  const [filteredFavorites, setFilteredFavorites] = useState([...favs]);
  const [filterValue, setFilterValue] = useState("All");
  const [orderValue, setOrderValue] = useState("A");

  const handleOrder = (event) => {
    setOrderValue(event.target.value);
    const sortedFavorites = [...filteredFavorites];
    if (event.target.value === "A") {
      sortedFavorites.sort((a, b) => a.id - b.id);
    } else {
      sortedFavorites.sort((a, b) => b.id - a.id);
    }
    setFilteredFavorites(sortedFavorites);
  };

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
    if (event.target.value === "All") {
      setFilteredFavorites([...favs]);
    } else {
      const filtered = favs.filter((char) => char.gender === event.target.value);
      setFilteredFavorites(filtered);
    }
  };

  const onClose = (id) => {
    const charactersFiltered = filteredFavorites.filter(
      (character) => character.id !== id
    );
    setFilteredFavorites(charactersFiltered);
  };

  return (
    <div>
      <select
        style={{
          backgroundColor: "purple",
          fontSize: "2vh",
          fontWeight: "bold",
        }}
        value={orderValue}
        onChange={handleOrder}
      >
        <option value="A">ID Low-High</option>
        <option value="D">ID High-Low</option>
      </select>
      <select
        style={{
          backgroundColor: "purple",
          fontSize: "2vh",
          fontWeight: "bold",
        }}
        value={filterValue}
        onChange={handleFilter}
      >
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={styles.favcontainer}>
        {filteredFavorites.map((fav) => (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            onClose={() => onClose(fav.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;