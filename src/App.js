import './App.css';
import Favorites from "./components/Favorites"
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx"
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

//const URL_BASE = "https://be-a-rym.up.railway.app/api";
//const API_KEY = ""
const EMAIL = "fabri_501@hotmail.com"
const PASSWORD = "1234abcd"

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access,setAccess]= useState(false);
   const navigate = useNavigate();

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character=>
         character.id !== Number(id))
         setCharacters(charactersFiltered)
   }
   return (
      <div className='App'> 
      {location.pathname !== "/" ? <Nav onSearch={onSearch} setAccess={setAccess} /> : null}
     
      <Routes>
         <Route path="/" element={<Form login={login}/>}/>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
         <Route path="/favorites" element={<Favorites/>}/>

      </Routes>
      </div>
   );
}

export default App;
