import styles from "../styles/SearchBar.module.css";
import { useState } from "react";
import axios from "axios";

export default function SearchBar({setSearchCharacter}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setSearchCharacter(data);
         } else {
            alert('¡Ese personaje ya fue buscado!')
         }
      } catch (error) {
         alert('¡No hay personajes con este ID!')
      }
   };

   return (
      <div className={styles.search}>
           <input className={styles.bar} type='search' placeholder=" Type a number from 1 to 826" onChange={handleChange} value={id} />
         <button className={styles.boton} onClick={() => { onSearch(id); setId('') }}> Search Random!</button>
      </div>
   );
}
