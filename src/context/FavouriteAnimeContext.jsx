import { createContext, useReducer} from "react";
import favouriteAnimeReducer from "./FavouriteAnimeReducer";

const FavouriteAnimeContext = createContext()

export const FavouriteAnimeProvider = ({children}) => {

  const initialState = {
    favourites: []
  }

  const [state, dispatch] = useReducer(favouriteAnimeReducer, initialState)

  const addAnimeToFavourite = anime => {
    dispatch({type: 'ADD_ANIME_TO_FAVOURITE' , payload: anime})
  }

  return <FavouriteAnimeContext.Provider value={{
    favourites: state.favourites,
    addAnimeToFavourite
  }}>
    {children}
  </FavouriteAnimeContext.Provider>
}

export default FavouriteAnimeContext
