import Card from './Card';
import styles from "../styles/Cards.module.css"
import { useEffect, useState } from 'react';
import { loadChars } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import SearchBar from "./SearchBar.jsx";
import { loadFavs } from '../redux/actions';

export default function Cards() {
  const chars = useSelector(state => state.allCharacters);
  const [selected, setSelected] = useState(); 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadChars());
    dispatch(loadFavs());
  }, [dispatch]);

  const charactersPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = chars.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleSelectCharacter = (character) => {
    setSelected(character);
  };
  
  const setSearchCharacter = (character) => {
    setSelected(character);
  };
  
  return (
    <div >
      <SearchBar setSearchCharacter={setSearchCharacter} />
      <div className={styles.total}>
      <div className={styles.cardscontainer}>
        {chars.length !== 0 ? (
          currentCharacters.map(({ id, name, status, species, gender, origin, image }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                image={image}
                origin={origin.name}
                onClick={() => handleSelectCharacter({ id, name, status, species, gender, origin, image })}
              />
            );
          })
        ) : (
          <p>No characters....yet</p>
        )}
        <div className={styles.pag}>  
          <Pagination
            charactersPerPage={charactersPerPage}
            totalCharacters={chars.length}
            paginate={paginate}
            currentPage={currentPage} 
          />
        </div>
      </div>
      <div className={styles.detalles}>
        <div className={styles.title}>
          {selected ? (
            <div>
              <h1 style={{color:"cyan", textTransform:"uppercase"}}>{selected.name}</h1>
              <h2>Status: {selected.status}</h2>
              <h2>Species: {selected.species}</h2>
              <h2>Gender: {selected.gender}</h2>
              <h2>From: {selected.origin.name}</h2>
              <img src={selected.image} alt="" style={{borderRadius:"8vh"}} />
            </div>
          ) : (
            <p>No character selected</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}