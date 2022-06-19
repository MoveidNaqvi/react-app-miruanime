import { useContext } from 'react'
import FavouriteAnimeContext from '../context/FavouriteAnimeContext'
import AnimeList from "../components/animelist/AnimeList"
import './FavouriteAnime.css'

function FavouriteAnime() {

  const {favourites} = useContext(FavouriteAnimeContext)
  const [favouriteAnimeArray] = [{data: favourites}]

  return (
    <div className='fav-anime'>
      {favouriteAnimeArray.data.length > 0 ? <h1>Your favourite anime!</h1> : ''}
      {favouriteAnimeArray.data.length > 0 ? <AnimeList animelist={favouriteAnimeArray} type='favourite'/> : <h1>No favourite anime</h1>}
    </div>
  )
}

export default FavouriteAnime