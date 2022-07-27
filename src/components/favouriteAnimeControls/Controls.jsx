import FavouriteAnimeContext from '../../context/FavouriteAnimeContext'
import { useContext } from 'react'
import { TiTimes } from 'react-icons/ti'
import './Controls.css'
function Controls({type, anime}) {

  const {removeAnimeFromFavourite} = useContext(FavouriteAnimeContext)

  return (
    <>
    {type === 'favourite' && (
      <div className="remove">
        <button className="remove-btn" onClick={() => removeAnimeFromFavourite(anime.id)}><TiTimes className='x-icon'/></button>
      </div>
    )}
    </>
  )
}

export default Controls