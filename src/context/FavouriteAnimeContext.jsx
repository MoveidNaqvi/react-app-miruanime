import { createContext, useReducer, useEffect} from "react";
import favouriteAnimeReducer from "./FavouriteAnimeReducer";

const FavouriteAnimeContext = createContext()

export const FavouriteAnimeProvider = ({children}) => {

  const initialState = {
    favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : []
  }

  const [state, dispatch] = useReducer(favouriteAnimeReducer, initialState)

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(state.favourites))
  }, [state])

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
