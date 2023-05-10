import styles from "../styles/SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
          <input className={styles.bar} type='search' onChange={handleChange} value={id} />
         <button className={styles.boton} onClick={()=>{onSearch(id);setId("")}}>Agregar!</button>
      </div>
   );
}
