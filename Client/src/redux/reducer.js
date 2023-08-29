import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, ALL, GET_FAV,USERS,POST_USER } from "./action-type"


const initialState = {
  myFavorites: [],
  allCharacters: [],
  users: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL:
      return { ...state, allCharacters: payload }

    case GET_FAV:
      return { ...state, myFavorites: payload }

    case ADD_FAV:
      return { ...state, myFavorites: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER:
      let filtered;

      if (payload === "All") {
        filtered = [...state.myFavorites];
      } else {
        filtered = state.myFavorites.filter(char => char.gender === payload);
      }
      return {
        ...state,
        myFavorites: filtered
      };

    case ORDER:
      const allCharactersCopy = [...state.myFavorites]
      return {
        ...state,
        myFavorites: payload === "A" ? allCharactersCopy.sort((a, b) => a.id - b.id)
          : allCharactersCopy.sort((a, b) => b.id - a.id)

      }
    case USERS:
      return {
        ...state,
        users: payload
      }

    case POST_USER:
      return { ...state }

    default:
      return { ...state };
  }
}
export default reducer;