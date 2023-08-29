import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, ALL, GET_FAV ,USERS,POST_USER} from "./action-type";
import axios from "axios";

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async(dispatch) => {
     try{
        const {data}= await axios.post(endpoint, character);
        if(!data.length) throw Error ("No hay favoritos")

        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     }catch(error){
        console.log(error.message);
     }
   };
};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}` ;
   return async (dispatch) => {
     try{
       const {data}= await axios.delete(endpoint);
       console.log(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
        });
   }catch(error){
       console.log(error.message)
   };
};
}

export const filterCards = (gender) => {
   return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
   return { type: ORDER, payload: order }
}


export const loadChars = () => {
   return async (dispatch) => {
      const { data } = await axios.get('http://localhost:3001/rickandmorty/chars/')
      return dispatch({ type: ALL, payload: data })
   }
}

export const loadFavs = () => {   
   return async (dispatch) => {
      const { data } = await axios.get('http://localhost:3001/rickandmorty/fav/')
      return dispatch({ type: GET_FAV, payload: data })
   }
}

export const allUsers = () => {
   return async (dispatch) => {
      const { data } = await axios.get('http://localhost:3001/rickandmorty/users');
      return dispatch({ type: USERS, payload: data });
   }
}

export const postUser = (payload) => {
   return async (dispatch) => {
      let info = await axios.post('http://localhost:3001/rickandmorty/users', payload);
      return dispatch({ type: POST_USER, payload: info.data });
   }
}