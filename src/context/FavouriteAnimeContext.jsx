import { createContext, useReducer} from "react";
import { auth, db } from "../firebase/config";
import {setDoc, deleteDoc, doc, arrayUnion} from 'firebase/firestore'
import favouriteAnimeReducer from "./FavouriteAnimeReducer";

const FavouriteAnimeContext = createContext()

export const FavouriteAnimeProvider = ({children}) => {

  const initialState = {
    favourites: null
  }

  const [state, dispatch] = useReducer(favouriteAnimeReducer, initialState)

  const addAnimeToFavourite = async anime => {
    const animeCopy = {...anime, uid: auth.currentUser.uid}
    try {
      const ref = doc(db, 'users', auth.currentUser.uid)
      const addedAnime = await setDoc(ref, {
        favourites: arrayUnion(animeCopy)
      })
      dispatch({type: 'ADD_ANIME_TO_FAVOURITE' , payload: addedAnime})
    } catch (error) {
      console.log(error.message)
    }
  }

  const removeAnimeFromFavourite = async (id) => {
    await deleteDoc(doc(db, 'anime', id))
    dispatch({type: 'REMOVE_ANIME_FROM_FAVOURITE'})
  }

  return <FavouriteAnimeContext.Provider value={{
    favourites: state.favourites,
    addAnimeToFavourite,
    removeAnimeFromFavourite
  }}>
    {children}
  </FavouriteAnimeContext.Provider>
}

export default FavouriteAnimeContext
