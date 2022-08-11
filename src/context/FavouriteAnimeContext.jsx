import { createContext, useReducer} from "react";
import { auth, db } from "../firebase/config";
import {arrayRemove, doc, getDoc, updateDoc} from 'firebase/firestore'
import favouriteAnimeReducer from "./FavouriteAnimeReducer";
import { useState } from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import { toast } from 'react-toastify'

const FavouriteAnimeContext = createContext()

export const FavouriteAnimeProvider = ({children}) => {

  const initialState = {
    favourites: null
  }

  const [state, dispatch] = useReducer(favouriteAnimeReducer, initialState)
  const [fav, setFav] = useState([])
  const {loggedIn} = useAuthStatus()


  const getFavRef = async () => {
    if(loggedIn){
    const docRef = doc(db, 'users', auth.currentUser.uid)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
      setFav(docSnap.data())
    }
    else{
      console.log('error')
    }
  }
}


  const addAnimeToFavourite = async anime => {
    const animeCopy = {...anime, uid: auth.currentUser.uid}
    try {
      const ref = doc(db, 'users', auth.currentUser.uid)
      const addedAnime = await updateDoc(ref, {
        favourites: [...fav.favourites, animeCopy],
        animeID: [...fav.animeID, anime.mal_id]
      })
      dispatch({type: 'ADD_ANIME_TO_FAVOURITE' , payload: addedAnime})
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  const removeAnimeFromFavourite = async (mal_id) => {
    try {
      const docRef = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(docRef, {
        favourites: fav.favourites.filter(f => f.mal_id !== mal_id),
        animeID: arrayRemove(mal_id)
      })
    } catch (error) {
      toast.error('Unable to remove anime')
    }
    // const docSnap = await getDoc(docRef)
    // if(docSnap.exists()){
    //   await updateDoc(docRef)
    // }
    // else{
    //   console.log('error')
    // }
    // await deleteDoc(doc(db, 'anime', id))
    // dispatch({type: 'REMOVE_ANIME_FROM_FAVOURITE'})
  }

  return <FavouriteAnimeContext.Provider value={{
    favourites: state.favourites,
    addAnimeToFavourite,
    removeAnimeFromFavourite,
    getFavRef
  }}>
    {children}
  </FavouriteAnimeContext.Provider>
}

export default FavouriteAnimeContext
