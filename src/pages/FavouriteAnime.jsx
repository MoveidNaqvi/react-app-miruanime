import { useContext } from 'react'
import FavouriteAnimeContext from '../context/FavouriteAnimeContext'
import AnimeList from "../components/animelist/AnimeList"
import './FavouriteAnime.css'
import { auth } from '../firebase/config'

function FavouriteAnime() {

  const {favourites} = useContext(FavouriteAnimeContext)
  const [favouriteAnimeArray] = [{data: favourites}]

  const handleLogout = () => {
    auth.signOut()
  }

  return (
    <div className='fav-anime'>
      <h1>Welcome {auth.currentUser.displayName}</h1>
      {favouriteAnimeArray.data.length > 0 ? <h1>Your favourite anime!</h1> : ''}
      {favouriteAnimeArray.data.length > 0 ? <AnimeList animelist={favouriteAnimeArray} type='favourite'/> : <h1>No favourite anime!</h1>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default FavouriteAnime