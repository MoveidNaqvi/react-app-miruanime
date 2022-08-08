import { createContext, useReducer} from "react";
import { auth, db } from "../firebase/config";
import {deleteDoc, doc, getDoc, updateDoc} from 'firebase/firestore'
import favouriteAnimeReducer from "./FavouriteAnimeReducer";
import { useState } from "react";

const FavouriteAnimeContext = createContext()

export const FavouriteAnimeProvider = ({children}) => {

  const initialState = {
    favourites: null
  }

  const [state, dispatch] = useReducer(favouriteAnimeReducer, initialState)
  const [fav, setFav] = useState([])


  const getFavRef = async () => {
    const docRef = doc(db, 'users', auth.currentUser.uid)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
      setFav(docSnap.data())
    }
    else{
      console.log('error')
    }
  }


  const addAnimeToFavourite = async anime => {
    getFavRef()
    const animeCopy = {...anime, uid: auth.currentUser.uid}
    try {
      const ref = doc(db, 'users', auth.currentUser.uid)
      const addedAnime = await updateDoc(ref, {
        favourites: [...fav.favourites, animeCopy],
        animeID: [...fav.animeID, anime.mal_id]
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
