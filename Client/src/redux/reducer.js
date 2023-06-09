import { ADD_FAV,FILTER,ORDER,REMOVE_FAV } from "./action-type"


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state= initialState , {type,payload}) =>{
    switch(type){
      case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

      case REMOVE_FAV:
      return { ...state, myFavorites: payload };   

      case FILTER:
        const filtered = state.allCharacters.filter(char=>char.gender === payload)
        return{...state,
              myFavorites: 
              payload==="All"
              ?[...state.allCharacters]
              :filtered};

      case ORDER:
        const allCharactersCopy = [...state.allCharacters]
        return{...state,
              myFavorites: payload==="A" ? allCharactersCopy.sort((a,b)=>a.id-b.id) 
              :allCharactersCopy.sort((a,b)=> b.id-a.id)

        }        
        default:
            return {...state};
    }
}
export default reducer;