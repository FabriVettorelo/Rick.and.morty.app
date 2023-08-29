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
import SingUp from './components/SignUp';
import SignUp from './components/SignUp';

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation();
   
   const [access,setAccess]= useState(false);
   const navigate = useNavigate();

   const login = async (userData)=> {
     try
      {const { email, password } = userData;
       const {data} = await axios.post(URL,userData)
       const { access } = data;
         setAccess(data);
         access && navigate('/home');

      }catch(error){
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'> 
      {location.pathname !== "/" && location.pathname !== "/signup" ? <Nav setAccess={setAccess} /> : null}
     
      <Routes>
         <Route path="/" element={<Form login={login}/>}/>
         <Route path="/home" element={<Cards />}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
         <Route path="/favorites" element={<Favorites/>}/>
         <Route path="/signup" element={<SignUp/>}/>

      </Routes>
      </div>
   );
}

export default App;
